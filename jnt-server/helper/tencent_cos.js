var COS = require('cos-nodejs-sdk-v5');
var fs=require('fs')
var cos = new COS({
    SecretId: 'AKID1sX1IsDKJ3bw40myyldO0RFqfIjwwlOh',
    SecretKey: '83mHYbQ1OWTFsHSREoKhtsgGd5QYWheO', 
});

var Bucket = 'jnt-1319253324';
var Region = 'ap-beijing';

// 分片上传
cos.putObject({
    Bucket:Bucket,
    Region: Region,    
    Key: 'user_headpic',      
    StorageClass: 'STANDARD',  
    Body: fs.createReadStream('../static/headpic'), 
    onProgress: function(progressData) {
        console.log(JSON.stringify(progressData));  
    }
 }, function(err, data) {
    console.log(err || data); 
 });
 module.exports=cos