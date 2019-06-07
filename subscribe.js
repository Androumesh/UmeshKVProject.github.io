 
 var http = require('http');
 var fs = require('fs');
 var querystring = require('querystring');
 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/Candidate";

 http.createServer(function(req, res){

    if(req.url == "/subscribe")
    {
        res.writeHead(200,{"Content-Type": "text/html"});
        fs.createReadStream("./public/subscribe.html","UTF-8").pipe(res);
    }
    
    if(req.method == "POST"){
         
          var data = "";
         req.on("data", function(chunk){
          data += chunk;
         });

         req.on("end", function(chunk){
          //console.log(data);
        //   console.log(q); 
            MongoClient.connect(url, function(err, db){
                if(err) throw err;
                var q = querystring.parse(data);
                db.collection('Subscribe').insertOne(q, function(req, res){
                    if(err) throw err;
                    console.log("Successfully Subscribed !");
                    db.close;
                });
            })
         });
     }

 }).listen(3000);