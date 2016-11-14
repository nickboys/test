
/*
 * GET home page.
 */
http.createServer(function s() {
	
});
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};