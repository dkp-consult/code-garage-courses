var http = require("http");

const routes = {
    '/hello': {
        GET: function(request, response){
            const name = request.query.name || 'World';
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hello ' + name);
        }
    },
    '/data': {
        POST: function(request, response){
            const body = request.body;
            body.sucess = true;
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(request.body, null, 2));
        }
    },
    '/goodbye': {
        GET: function(request, response){
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Goodbye World\n');
        }
    }
}

function parseQuery(request, response) {
    // Query
    const queryString = request.url.split('?')[1];
    let query = {};
    if(queryString) {
        query = queryString
        .split('&')
        .reduce((obj, param) => {
            const p = param.split('=');
            const key = p[0];
            const val = p[1];
            obj[key] = val;
            return obj;
        }, {});
    }
    request.query = query;
}

function parseBody(request, response){
    return new Promise((resolve, reject) => {
        // Body
        let bodyStr = '';
        request.on('data', function(chunk) {
            bodyStr += chunk;
        });
        request.on('end', function() {
            if(request.headers['content-type'] === 'application/json'){
                try {
                    request.body = JSON.parse(bodyStr);
                } catch(e){
                    reject(e);
                }
            }
            resolve();
        });
    });
}

async function middleware(request, response){
    parseQuery(request, response);
    await parseBody(request, response);
}

http.createServer(async function (request, response) {

    const path = request.url.split('?')[0];
    const handler = routes[path] ? routes[path][request.method] : null;;
    if(handler){
        const handler = routes[path][request.method];
        await middleware(request, response);
        handler(request, response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Not Found');
    }
}).listen(3000);

// Console print the message ; 

console.log('Server is running at http://localhost:3000/');