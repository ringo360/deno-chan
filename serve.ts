// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

console.log("Created by ringoXD.");
console.log("About me: https://ringoxd.pages.dev/");


function handler(req: Request): Response {
    const now = new Date();
    console.log(req)
    const clientIP = req.ip; // クライアントのIPを取得
    const requestInfo = `${req.method} ${decodeURIComponent(req.originalUrl)}`; // リクエストのメソッドとURL
	const userAgent = req.headers['user-agent'];
	console.log(userAgent)
    console.log(`[${now.toLocaleString()}] - Client IP: ${clientIP}, Request: ${requestInfo}`);
    new Response("Hello world"); //*Hello World!
    return new Response("Hello, World");
}

serve(handler);