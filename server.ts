import {json, serve, serveStatic, serveRemote} from "https://deno.land/x/verse/mod.ts";


serve(8000, {
    // you can serve plain text
    "/hello": () => new Response("Hello World!"),

    // json
    "/json": () => json({message: "hello world"}),

    // a single file
    "/": serveStatic("./public/index.html"),

    // a directory of files (browsing to /public will present a directory listing page)
    // note: must include :filename? at end of the path as below
    "/public/:filename?": serveStatic("./public"),

    // or a remote resource
    "/todos/:id": serveRemote("https://jsonplaceholder.typicode.com/todos/:id"),
});