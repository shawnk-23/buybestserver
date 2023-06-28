//import required libs
let http = require('http');
let fs = require('fs');
let path = require('path');
let staticRoot = path.join(__dirname, 'public');
let url = require('url');


//create server
let server = http.createServer((req, res) => {
    let filepath = path.join(staticRoot, req.url);
    let path1 = url.parse(req.url).pathname;
    console.log(path1,filepath)
    switch(path1){
        case '/':
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.write("Hello you reached the root")
            res.end();
        case '/index.html':
            fs.readFile(filepath, function(error, data){
                if(error){
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                }else{
                    console.log(getContentType(filepath))

                    res.writeHead(200, {'Content-type': getContentType(filepath)})
                    res.write(data);
                    res.end();
                }
            })
        case '/about.html':
            fs.readFile(filepath, function(error, data){
                if(error){
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                }else{
                    console.log(getContentType(filepath))

                    res.writeHead(200,{'Content-type': getContentType(filepath)})
                    res.write(data)
                    res.end();
                }
            })
        case '/contact.html':
            fs.readFile(filepath, function(error,data){
                if(error){
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                }else{
                    console.log(getContentType(filepath))
                    res.writeHead(200,{'Content-type': getContentType(filepath)})
                    res.write(data);
                    res.end();
                }
            }) 
        case '/home.html':
            fs.readFile(filepath, function(error, data){
                if(error){
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                }else{
                    console.log(getContentType(filepath))

                    res.writeHead(200, {'Content-type': getContentType(filepath)})
                    res.write(data);
                    res.end();
                }
            })  
        case '/products.html':
            fs.readFile(filepath, function(error, data){
                if(error){
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                }else{
                    console.log(getContentType(filepath))

                    res.writeHead(200, {'Content-type':getContentType(filepath)})
                    // res.writeHead(200, { 'Content-Type': 'text/css,text/html,image/jpg' });

                    res.write(data);
                    res.end();
                }
            }) 
        break;
        default:
            res.writeHead(404)
            res.write(" sorry we couldn't find what you were looking for")
            res.end();
    }
});

function getContentType(filePath) {
    const extname = path.extname(filePath);
switch (extname) {
    case '.html':
    return 'text/html';
    case '.css':
    return 'text/css';
    case '.js':
    return 'text/javascript';
    case '.jpg':
    case '.jpeg':
    return 'image/jpeg';
    case '.png':
    return 'image/png';
    default:
    return 'application/octet-stream';
}
}
  
const port = 3000;
server.listen(port,'127.0.0.1',()=>{console.log(` Server is listening on port ${port}`)})