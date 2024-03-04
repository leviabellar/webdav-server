const webdav = require('webdav-server').v2;
const express = require('express');
 
const server = new webdav.WebDAVServer();
const app = express();
 
// Mount the WebDAVServer instance
app.use(webdav.extensions.express('/my/sub/path', server));
app.listen(443); // Start the Express server