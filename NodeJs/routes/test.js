/**
 * http://usejsdoc.org/
 */
console.log("start---");
var fs=require("fs");
var http=require("http");
 /*fs.readFile('D:/test.txt','utf-8',function(err,data){
	 if(err){
		console.log(data); 
	 }else{
		console.log(data); 
	 } 
 })*/
 console.log("end");
http.createServer(function(req,resp){
	fs.readFile('D:/test.txt','utf-8',function(err,data){
		 if(err){
			console.log(data); 
		 }else{
			//console.log(data); 
			 resp.write(data);
			 resp.render("/index");
			 resp.end();
		 } 
	 })
}).listen(8888,"localhost",function(){
	console.log("server");
});