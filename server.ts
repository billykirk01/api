import {json, serve, serveRemote} from "https://deno.land/x/verse/mod.ts";

serve(8000, {
    // you can serve plain text
    "/hello": () => new Response("Hello from api.billykirk.dev"),

    // json
    "/json": () => json({message: "Hello from api.billykirk.dev"}),

    // or a remote resource
    "/posts": serveRemote("https://jsonplaceholder.typicode.com/posts"),
    "/posts/:id": serveRemote("https://jsonplaceholder.typicode.com/posts/:id"),

    "/comments": serveRemote("https://jsonplaceholder.typicode.com/comments"),
    "/comments/:id": serveRemote("https://jsonplaceholder.typicode.com/comments/:id"),

    "/albums": serveRemote("https://jsonplaceholder.typicode.com/albums"),
    "/albumn/:id": serveRemote("https://jsonplaceholder.typicode.com/albums/:id"),

    "/photos": serveRemote("https://jsonplaceholder.typicode.com/photos"),
    "/photos/:id": serveRemote("https://jsonplaceholder.typicode.com/photos/:id"),

    "/todos": serveRemote("https://jsonplaceholder.typicode.com/todos"),
    "/todos/:id": serveRemote("https://jsonplaceholder.typicode.com/todos/:id"),

    "/users": serveRemote("https://jsonplaceholder.typicode.com/users"),
    "/users/:id": serveRemote("https://jsonplaceholder.typicode.com/users/:id"),
});
