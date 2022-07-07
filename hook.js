const exec = require('child_process').exec
console.log("Hook executed")

exec("curl -k -X POST https://api.cluster.heritage.africa:6443/apis/build.openshift.io/v1/namespaces/investigate/buildconfigs/pyth/webhooks/bb29bc38082e4961/generic", (...rest) => {
	console.log(rest);
});


