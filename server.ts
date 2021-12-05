import {json, serve, serveRemote} from "https://deno.land/x/verse/mod.ts";

serve(8000, {
    // you can serve plain text
    "/hello": () => new Response("Hello from api.billykirk.dev"),

    // json
    "/json": () => json({message: "Hello from api.billykirk.dev"}),

    // or a remote resource
    "/todos/:id": serveRemote("https://jsonplaceholder.typicode.com/todos/:id"),
});