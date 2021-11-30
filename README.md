# kaholo-plugin-AWS-ECS
Kaholo plugin for integration with AWS ECS API.

## Settings
1. Access Key ID (Vault) **Required if not it action** - The default AWS Access Key ID to use for authentication.
2. Access Key Secret (Vault) **Required if not it action** - The default AWS Access Key secret to use for authentication.
3. Region (String) **Required if not it action** - The ID of the default region to make requests on.

## Method: Register Task Definition From JSON
Register Task Definition From JSON

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Task Definition JSON (Text) **Required** - Create the task according to the parameters in the specified JSON. Can be provided either as a local path of a file on the agent, or pass as JS object from code.

## Method: Create Service From JSON
Create Service From JSON

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Service JSON (Text) **Required** - Create the service according to the parameters in the specified JSON. Can be provided either as a local path of a file on the agent, or pass as JS object from code.

## Method: Update Service From JSON
Update Service From JSON

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Service JSON (Text) **Required** - Update the service according to the parameters in the specified JSON. Can be provided either as a local path of a file on the agent, or pass as JS object from code.

## Method: Create Cluster From JSON
Create Cluster From JSON

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster JSON (Text) **Required** - Create the cluster according to the parameters in the specified JSON. Can be provided either as a local path of a file on the agent, or pass as JS object from code.

## Method: Create Basic Cluster
Create Basic Cluster

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Name (String) **Required** - The name to give to the new cluster.

## Method: Put Cluster Capacity Providers From JSON
Put Cluster Capacity Providers From JSON

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster Capacity Providers JSON (Text) **Required** - Update the capacity provider of the cluster according to the specified parameters. Can be provided either as a local path of a file on the agent, or pass as JS object from code.

## Method: Run Task
Run Task

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - The cluster to run the task on. Choose from dropdown or provide by name from code.
5. Task Family (Autocomplete) **Optional** - The task family of the task defintion to use.
6. Task Definition (Autocomplete) **Required** - The specific version of the task defintion to to run. Choose from dropdown or provide in the format of taskFamily:taskVersion. Will use the latest revision of the task family if not specified.

## Method: Start Task
Start Task

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - The cluster to start the task on. Choose from dropdown or provide by name from code.
5. Container Instances (Autocomplete) **Required** - The container instance(s) to place the task on. Choose from dropdown or provide by ID or full ARN from code. Can enter multiple results by providing an array from code.
6. Task Family (Autocomplete) **Optional** - The task family of the task defintion to use.
7. Task Definition (Autocomplete) **Required** - The specific version of the task defintion to start. Choose from dropdown or provide in the format of taskFamily:taskVersion. Will use the latest revision of the task family if not specified.

## Method: Stop Task
Stop Task

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - The cluster to stop one of the tasks running on it. Choose from dropdown or provide by name from code.
5. Task ID (Autocomplete) **Required** - Stop the task running on the specified cluster with this ID.
6. Reason (Text) **Optional** - The reason for stopping the task.

## Method: Describe Task Defintions
Describe Task Defintions

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Task Family (Autocomplete) **Required** - The task family of the task defintion to describe.
5. Task Definitions (Autocomplete) **Optional** - The specific version of the task defintion(s) to return information about. Choose from dropdown or provide in the format of taskFamily:taskVersion. Will use the latest revision of the task family if not specified. Can enter multile values be passing as an array from code.

## Method: Describe Tasks
Describe Tasks

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - The cluster to describe one of the tasks running on it. Choose from dropdown or provide by name from code.
5. Tasks IDs (Autocomplete) **Required** - Return information on the task(s) with the specified IDs. Can enter multiple values by providing as an array from code.

## Method: Describe Services
Describe Services

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - The cluster the services belong to.
5. Services (Autocomplete) **Required** - The service(s) to describe. Choose from dropdown or provide by name from code. Can enter multiple values by passing as an array from code.

## Method: Describe Container Instances
Describe Container Instances

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Optional** - The cluster the services belong to.
5. Container Instances (Autocomplete) **Required** - The container Instance(s) to describe. Choose from dropdown or provide by ID or ARN from code. Can enter multiple values by passing as an array from code.

## Method: Describe Clusters
Describe Clusters

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Clusters (Autocomplete) **Required** - The cluster(s) to describe. Choose from dropdown or provide by name from code. Can enter multiple values by passing as an array from code.

## Method: Delete Task Defintion
Delete Task Defintion

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Task Family (Autocomplete) **Optional** - The task family of the task defintion to delete.
5. Task Definition (Autocomplete) **Required** - The specific version of the task defintion(s) to delete. Choose from dropdown or provide in the format of taskFamily:taskVersion. Will use the latest revision of the task family if not specified.

## Method: Delete Service
Delete Service

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - The cluster the service belong to.
5. Service (Autocomplete) **Required** - The service to delete. Choose from dropdown or provide by name from code.

## Method: Delete Cluster
Delete Cluster

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - The cluster to delete. Choose from dropdown or provide by name from code.

## Method: List Services
List Services

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - List services of the specified cluster.
5. Max Results (String) **Optional** - Maximum number of results to return. Default is 10. Possible values are 1-100.
6. Next Token (String) **Optional** - In case of pagination, AWS will return nextToken that can be used to retrieve the next page of results.

## Method: List Container Instances
List Container Instances

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - List container instances of the specified cluster.
5. Max Results (String) **Optional** - Maximum number of results to return. Default is 100. Possible values are 1-100.
6. Next Token (String) **Optional** - In case of pagination, AWS will return nextToken that can be used to retrieve the next page of results.

## Method: List Clusters
List Clusters

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Max Results (String) **Optional** - Maximum number of results to return. Default is 100. Possible values are 1-100.
5. Next Token (String) **Optional** - In case of pagination, AWS will return nextToken that can be used to retrieve the next page of results.

## Method: List Task Defenitions
List Task Defenitions

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Max Results (String) **Optional** - Maximum number of results to return. Default is 100. Possible values are 1-100.
5. Next Token (String) **Optional** - In case of pagination, AWS will return nextToken that can be used to retrieve the next page of results.

## Method: List Tasks
List Tasks

### Parameters
1. Access Key ID (Vault) **Required if not it settings** - The ID of the access key to use for authentication.
2. Access Key Secret (Vault) **Required if not it settings** - The secret of the access key to use for authentication.
3. Region (Autocomplete) **Required if not it settings** - Make the request in the specified region.
4. Cluster (Autocomplete) **Required** - List tasks of the specified cluster.
5. Max Results (String) **Optional** - Maximum number of results to return. Default is 100. Possible values are 1-100.
6. Next Token (String) **Optional** - In case of pagination, AWS will return nextToken that can be used to retrieve the next page of results.
