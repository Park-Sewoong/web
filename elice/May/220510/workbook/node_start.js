// http 모듈을 불러오세요.
const http = require('http')

// "Hello Elice!"를 출력하는 서버 객체를 만드세요.
// 8080포트로 서버를 시작하세요.

function onRequest(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    
    res.write("Hello Elice!");
    
    res.end();
}

http.createServer(onRequest).listen(8080);