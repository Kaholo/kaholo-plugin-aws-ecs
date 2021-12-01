const parsers = require("./parsers");

const ecsService = require('./aws.ecs.service');
const MAX_RESULTS = 10;

// auto complete helper methods

function mapAutoParams(autoParams){
  const params = {};
  autoParams.forEach(param => {
    params[param.name] = parsers.autocomplete(param.value);
  });
  return params;
}

/***
 * @returns {[{id, value}]} filtered result items
 ***/
function handleResult(result, query, keyField, valField){
  if (!result || result.length == 0) return [];
  const items = result.map(item => 
    getAutoResult(keyField ? item[keyField] : item, keyField ? item[valField] : item));
  return filterItems(items, query);
}

/***
 * @returns {{id, value}} formatted autocomplete item
 ***/
function getAutoResult(id, value) {
  return {
    id: id || value,
    value: value || id
  };
}

function filterItems(items, query){
  if (query){
    const qWords = query.split(/[. ]/g).map(word => word.toLowerCase()); // split by '.' or ' ' and make lower case
    items = items.filter(item => qWords.every(word => item.value.toLowerCase().includes(word)));
    items = items.sort((word1, word2) => word1.value.toLowerCase().indexOf(qWords[0]) - word2.value.toLowerCase().indexOf(qWords[0]));
  }
  return items.splice(0, MAX_RESULTS);
}

function listAuto(listFuncName, outputName, {fields = [], parseFunc}) {
  return async (query, pluginSettings, triggerParameters) => {
    const settings = mapAutoParams(pluginSettings), params = mapAutoParams(triggerParameters);
    const client = ecsService.from(params, settings);
    var nextToken, items = [];
    do {
      var result = await client[listFuncName]({
        ...params,
        nextToken
      });
      if (parseFunc){
        items.push(...filterItems(result[outputName].map(parseFunc), query));
      }
      else {
        items.push(...handleResult(result[outputName], query, ...fields));
      }
      nextToken = result.nextToken || result.NextToken || result.Marker;
    } while (nextToken && items.length < MAX_RESULTS);
    return items;
  }
}

function getParseArn(typeName){
  const regex = new RegExp(`:${typeName}\/(.+)$`);
  return (arn) => {
    const matches = [...(arn.matchAll(regex))];
    return getAutoResult(arn, matches[1] || arn)
  }
}

module.exports = {
  listRegionsAuto: listAuto("listRegions", "Regions", {fields: ["RegionName"]}),
  listClustersAuto: listAuto("listClusters", "clusterArns", {parseFunc: getParseArn("cluster")}),
  listTaskFamiliesAuto: listAuto("listTaskFamilies", "families", {}),
  listTasksAuto: listAuto("listTasks", "taskArns", {parseFunc: getParseArn("task")}),
  listServicesAuto: listAuto("listTaskDefs", "serviceArns", {parseFunc: getParseArn("service")}),
  listTaskDefsAuto: listAuto("listServices", "taskDefinitionArns", {parseFunc: getParseArn("task-definition")}),
  listContainersAuto: listAuto("listContainers", "containerInstanceArns", {parseFunc: getParseArn("container-instance")})
}