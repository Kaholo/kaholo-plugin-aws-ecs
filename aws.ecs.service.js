const parsers = require("./parsers");
const AWS = require("aws-sdk");

module.exports = class AwsEcsService{
    constructor({accessKeyId, secretAccessKey, region}){
        if (!accessKeyId || !secretAccessKey || !region) throw "Didn't provide access key or region!";
        const creds = {accessKeyId, secretAccessKey, region};
        this.creds = creds;
        this.ecs = new AWS.ECS(creds);
        this.lightsail = new AWS.Lightsail(creds);
    }

    static from(params, settings){
        return new AwsEcsService({
            accessKeyId: parsers.string(params.accessKeyId || settings.accessKeyId),
            secretAccessKey: params.accessKeySecret || settings.accessKeySecret,
            region: parsers.autocomplete(params.region || settings.region)
        });
    }

    async registerTaskJson({taskDefenitionJson}){
        if (!taskDefenitionJson) throw "Didn't provide JSON to register task definition from."
        return this.ecs.registerTaskDefinition(taskDefenitionJson).promise();
    }

    async createServiceJson({serviceJson}){
        if (!serviceJson) throw "Didn't provide JSON to register task definition from."
        return this.ecs.createService(serviceJson).promise();
    }

    async updateServiceJson({serviceJson}){
        if (!serviceJson) throw "Didn't provide JSON to register task definition from."
        return this.ecs.updateService(serviceJson).promise();
    }

    async createClusterJson({clusterJson}){
        if (!clusterJson) throw "Didn't provide JSON to register task definition from."
        return this.ecs.createCluster(clusterJson).promise();
    }

    async createBasicCluster({name}){
        if (!name) throw "Didn't provide a name for the new cluster."
        return this.ecs.createCluster({clusterName: name}).promise();
    }

    async putClusterCapacityProviders({clusterCPJson}){
        if (!clusterCPJson) throw "Didn't provide JSON for the cluster capacity providers."
        return this.ecs.putClusterCapacityProviders(clusterCPJson).promise();
    }

    async runTask({cluster, taskFamily, taskDef}){
        taskDef = taskDef || taskFamily;
        if (!cluster || !taskDef){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.runTask({
            taskDefinition: taskDef,
            cluster
        }).promise();
    }

    async startTask({cluster, taskFamily, taskDef, containers}){
        taskDef = taskDef || taskFamily;
        if (!cluster || !taskDef || !containers || !containers.length){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.startTask({
            taskDefinition: taskDef,
            containerInstances: containers,
            cluster
        }).promise();
    }

    async stopTask({cluster, task, reason}){
        if (!cluster || !task){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.stopTask({task, cluster, reason}).promise();
    }

    async describeTaskDefinitions({taskFamily, taskDefs}){
        if (!((taskDefs && taskDefs.length) || taskFamily)){
            throw "Didn't provide one of the required params.";
        }
        if (!taskDefs || !taskDefs.length) taskDefs = [taskFamily];
        return Promise.all(taskDefs.map(taskDefinition => this.ecs.describeTaskDefinition({taskDefinition}).promise()));
    }

    async describeTasks({cluster, tasks}){
        if (!cluster || !tasks || !tasks.length){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.describeTasks({
            cluster, tasks
        }).promise();
    }

    async describeServices({cluster, services}){
        if (!cluster || !services || !services.length){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.describeServices({cluster, services}).promise();
    }

    async describeContainers({cluster, containers}){
        if (!cluster || !containers || !containers.length){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.describeContainerInstances({
            cluster,
            containerInstances: containers
        }).promise();
    }

    async describeClusters({clusters}){
        if (!clusters || !clusters.length) throw "Didn't provide clusters to describe.";
        return this.ecs.describeClusters({clusters}).promise();
    }

    async deleteTaskDefinition({taskFamily, taskDef}){
        if (!taskDef) taskDef = taskFamily;
        if (!taskDef){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.deregisterTaskDefinition({
            taskDefinition: taskDef
        }).promise();
    }

    async deleteService({cluster, service}){
        if (!cluster || !service){
            throw "Didn't provide one of the required params.";
        }
        return this.ecs.deleteService({cluster, service}).promise();
    }

    async deleteCluster({cluster}){
        if (!cluster) throw "Must provide cluster to delete.";
        return this.ecs.deleteCluster({cluster}).promise();
    }

    async listRegions(){
        if (this.creds.region) this.creds.region = "us-east-1"
        const ec2 = new AWS.EC2(this.creds);
        return ec2.describeRegions({}).promise();
    }

    async listServices({cluster, nextToken, maxResults}){
        if (!cluster) throw "Must provide cluster to list his services.";
        return this.ecs.listServices({cluster, nextToken, maxResults}).promise();
    }

    async listClusters({nextToken, maxResults}){
        return this.ecs.listClusters({nextToken, maxResults}).promise();
    }

    async listTaskDefs({nextToken, maxResults}){
        return this.ecs.listTaskDefinitions({nextToken, maxResults}).promise();
    }

    async listTasks({cluster, nextToken, maxResults}){
        return this.ecs.listTasks({cluster, nextToken, maxResults}).promise();
    }

    async listTaskFamilies({nextToken, maxResults}){
        return this.ecs.listTaskDefinitionFamilies({nextToken, maxResults}).promise();
    }

    async listContainers({cluster, nextToken, maxResults}){
        return this.ecs.listContainerInstances({cluster, nextToken, maxResults}).promise();
    }
}
