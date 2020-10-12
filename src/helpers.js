const aws = require("aws-sdk");
const child_process = require("child_process")

module.exports.getEcs = function(settings, action) {
    return new aws.ECS({
        region: action.params.region,
        accessKeyId: action.params.accessKeyId || settings.accessKeyId,
        secretAccessKey: action.params.secretAccessKey || settings.secretAccessKey
    });
}

module.exports.operationCallback = function (resolve,reject) {
    return function(err,result){
        if (err) reject(err);
        else resolve(result);
    }
}

module.exports.handleArrayParam = function (param) {
	if(typeof param == "string")
		return [param];
	
	return param;
}
