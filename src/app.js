const helpers = require('./helpers');

async function runTask(settings, action){
    const {taskDefinition, cluster, launchType, assignPublicIp} = action.params;
    const securityGroups = helpers.handleArrayParam(action.params.securityGroups);
    const subnets = helpers.handleArrayParam(action.params.subnets);

    const ecs = helpers.getEcs(settings, action);
    
    const res = await new Promise((resolve,reject)=>{
        ecs.runTask({
            taskDefinition,
            cluster,
            launchType,
            networkConfiguration: {
                awsvpcConfiguration : {
                    subnets,
                    assignPublicIp: assignPublicIp || "DISABLED",
                    securityGroups
                }
            }
        }, helpers.operationCallback(resolve,reject));
    });

    return res;
}

async function describeTasks(settings,action){
    const ecs = helpers.getEcs(settings, action);
    const cluster = action.params.cluster;

    const tasks = helpers.handleArrayParam(action.params.tasks);
    
    const res = await new Promise((resolve,reject)=>{
        ecs.describeTasks({
            tasks,
            cluster
        },helpers.operationCallback(resolve,reject))
    });

    return res;
}

async function listTasks(settings,action){
    const ecs = helpers.getEcs(settings, action);
    const cluster = action.params.cluster;
    
    const res = await new Promise((resolve,reject)=>{
        ecs.listTasks({
            cluster
        },helpers.operationCallback(resolve,reject))
    });

    return res;
}

module.exports = {
    runTask,
    describeTasks,
    listTasks
};
