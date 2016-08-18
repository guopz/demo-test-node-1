var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

	if(req.url == '/'){

		fs.readFile('./titles.json',function(err,data){
			if(err){
				console.log(err);
				res.end('Server error');
			}else{
				var titles = JSON.parse(data.toString());

				fs.readFile('./template.html',function(err,data){
					if(err){

						console.log(err);
						res.end('Server error');

					}else{

						var temp = data.toString();
						var html = temp.replace('%',titles.join('</li><li>'));
						res.writeHead(200,{'Content-Type':'text/html'});
						res.end(html);
					}
				});
				// fs end
			}
		})
		// fs end
	}
	// if end
})

server.listen(1234,'127.0.0.1',function(){
	console.log('127.0.0.1:1234');
});