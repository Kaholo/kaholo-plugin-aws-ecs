const parsers = require("./parsers");

const EcsService = require('./aws.ecs.service');
async function registerTaskJson(action, settings){
    const { taskDefenitionJson } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.registerTaskJson({
        taskDefenitionJson: parsers.objectOrFromPath(taskDefenitionJson)
    });
}

async function createServiceJson(action, settings){
    const { serviceJson } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.createServiceJson({
        serviceJson: parsers.objectOrFromPath(serviceJson)
    });
}

async function updateServiceJson(action, settings){
    const { serviceJson } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.updateServiceJson({
        serviceJson: parsers.objectOrFromPath(serviceJson)
    });
}

async function createBasicCluster(action, settings){
    const { name } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.createBasicCluster({
        name: parsers.string(name)
    });
}

async function createClusterJson(action, settings){
    const { clusterJson } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.createClusterJson({
        clusterJson: parsers.objectOrFromPath(clusterJson)
    });
}

async function putClusterCapacityProviders(action, settings){
    const { clusterCPJson } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.putClusterCapacityProviders({
        clusterCPJson: parsers.objectOrFromPath(clusterCPJson)
    });
}

async function runTask(action, settings){
    const { cluster, taskFamily, taskDef } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.runTask({
        cluster: parsers.autocomplete(cluster),
        taskFamily: parsers.autocomplete(taskFamily),
        taskDef: parsers.autocomplete(taskDef)
    });
}

async function startTask(action, settings){
    const { cluster, taskFamily, taskDef, containers } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.startTask({
        cluster: parsers.autocomplete(cluster),
        taskFamily: parsers.autocomplete(taskFamily),
        taskDef: parsers.autocomplete(taskDef),
        containers: parsers.autocompleteOrArray(containers)
    });
}

async function stopTask(action, settings){
    const { cluster, task, reason } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.stopTask({
        cluster: parsers.autocomplete(cluster),
        task: parsers.autocomplete(task),
        reason: parsers.string(reason)
    });
}

async function describeTaskDefinitions(action, settings){
    const { taskFamily, taskDefs } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.describeTaskDefinitions({
        taskFamily: parsers.autocomplete(taskFamily),
        taskDefs: parsers.autocompleteOrArray(taskDefs)
    });
}

async function describeTasks(action, settings){
    const { cluster, tasks } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.describeTasks({
        cluster: parsers.autocomplete(cluster),
        tasks: parsers.autocompleteOrArray(tasks)
    });
}

async function describeServices(action, settings){
    const { cluster, services } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.describeServices({
        cluster: parsers.autocomplete(cluster),
        services: parsers.autocompleteOrArray(services)
    });
}

async function describeContainers(action, settings){
    const { cluster, containers } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.describeContainers({
        cluster: parsers.autocomplete(cluster),
        containers: parsers.autocompleteOrArray(containers)
    });
}

async function describeClusters(action, settings){
    const { clusters } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.describeClusters({
        clusters: parsers.autocompleteOrArray(clusters)
    });
}

async function deleteTaskDefinition(action, settings){
    const { taskFamily, taskDef } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.deleteTaskDefinition({
        taskFamily: parsers.autocomplete(taskFamily),
        taskDef: parsers.autocomplete(taskDef)
    });
}

async function deleteService(action, settings){
    const { cluster, service } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.deleteService({
        cluster: parsers.autocomplete(cluster),
        service: parsers.autocomplete(service)
    });
}

async function deleteCluster(action, settings){
    const { cluster } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.deleteCluster({
        cluster: parsers.autocomplete(cluster)
    });
}

async function listServices(action, settings){
    const {cluster, nextToken, maxResults} = action.params;
    const client = EcsService.from(action.params, settings);
    return client.listServices({
        cluster: parsers.autocomplete(cluster),
        nextToken: parsers.string(nextToken),
        maxResults: parsers.number(maxResults)
    });
}

async function listContainers(action, settings){
    const {cluster, nextToken, maxResults} = action.params;
    const client = EcsService.from(action.params, settings);
    return client.listContainers({
        cluster: parsers.autocomplete(cluster),
        nextToken: parsers.string(nextToken),
        maxResults: parsers.number(maxResults)
    });
}

async function listClusters(action, settings){
    const {nextToken, maxResults} = action.params;
    const client = EcsService.from(action.params, settings);
    return client.listClusters({
        nextToken: parsers.string(nextToken),
        maxResults: parsers.number(maxResults)
    });
}

async function listTaskDefs(action, settings){
    const {nextToken, maxResults} = action.params;
    const client = EcsService.from(action.params, settings);
    return client.listTaskDefs({
        nextToken: parsers.string(nextToken),
        maxResults: parsers.number(maxResults)
    });
}

async function listTasks(action, settings){
    const { cluster, nextToken, maxResults } = action.params;
    const client = EcsService.from(action.params, settings);
    return client.listTasks({
        nextToken: parsers.string(nextToken),
        maxResults: parsers.number(maxResults),
        cluster: parsers.autocomplete(cluster)
    });
} 

module.exports = {
    registerTaskJson,
	createServiceJson,
	updateServiceJson,
    putClusterCapacityProviders,
	createClusterJson,
    createBasicCluster,
	runTask,
	startTask,
	stopTask,
	describeTaskDefinitions,
	describeTasks,
	describeServices,
    describeContainers,
	describeClusters,
	deleteTaskDefinition,
	deleteService,
	deleteCluster,
	listServices,
    listContainers,
	listClusters,
	listTaskDefs,
	listTasks,
    // Autocomplete Functions
    ...require("./autocomplete")
}