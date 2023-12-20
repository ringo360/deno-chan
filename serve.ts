// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";

console.log("Created by ringoXD.");
console.log("About me: https://ringoxd.pages.dev/");

const app = express();


app.get("/", (req, res) => {
    const now = new Date();
    console.log(req)
    const clientIP = req.ip; // クライアントのIPを取得
    const requestInfo = `${req.method} ${decodeURIComponent(req.originalUrl)}`; // リクエストのメソッドとURL
	const userAgent = req.headers['user-agent'];
	console.log(userAgent)
    console.log(`[${now.toLocaleString()}] - Client IP: ${clientIP}, Request: ${requestInfo}`);
    res.send("Hello World!");
});

app.listen(8000);