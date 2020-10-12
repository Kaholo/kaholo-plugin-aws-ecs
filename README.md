# kaholo-plugin-aws-ecs
AWS ECR plugin for Kaholo
This plugin is based on [aws-sdk API](https://www.npmjs.com/package/aws-sdk) and you can view all resources on [github](https://github.com/aws/aws-sdk-js)

## Method: Run Task

**Description**

This method calls ECS [runTask](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#runTask-property)

**Parameters**
1. **Access Key** - This is a parameter taken from the vault to access AWS
2. **Secret Key** - This is a paramer taken from the vault to access AWS
3. **Region** - Select a region from the appeard list.
4. **Cluster** - The short name or full Amazon Resource Name (ARN) of the cluster on which to run your task. If you do not specify a cluster, the default cluster is assumed.
5. **Task Definition** - The family and revision (family:revision) or full ARN of the task definition to run. If a revision is not specified, the latest ACTIVE revision is used.
6. **Launch Type** - The launch type on which to run your task. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide. If a launchType is specified, the capacityProviderStrategy parameter must be omitted.
7. **Subnets (String | Array\<String\>)** - The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.  All specified subnets must be from the same VPC.
8. **Security Groups (String | Array\<String\>)** - The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.  All specified security groups must be from the same VPC.
9. **Assign Public IP** - Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.


## Method: Describe Tasks

**Description**

This method calls ECS [describeTasks](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#describeTasks-property)

**Parameters**
1. **Access Key** - This is a parameter taken from the vault to access AWS
2. **Secret Key** - This is a paramer taken from the vault to access AWS
3. **Region** - Select a region from the appeard list.
4. **Cluster** - The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the task or tasks you are describing were launched in any cluster other than the default cluster.
5. **Tasks IDs (String | Array\<String\>)** - A specific ID or a list of up to 100 task IDs or full ARN entries.

## Method: List Tasks

**Description**

This method calls ECS [listTasks](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#listTasks-property).

**Parameters**
1. **Access Key** - This is a parameter taken from the vault to access AWS
2. **Secret Key** - This is a paramer taken from the vault to access AWS
3. **Region** - Select a region from the appeard list.
4. **Cluster** - The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the task or tasks you are describing were launched in any cluster other than the default cluster.
