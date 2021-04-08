const express = require('express');
const app = express();

const config = require('./server/config/config');

//const resourcesExport = require('./server/router/resourcesExport');

const pathHtml = __dirname + '/dist/html';
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//Использование функции промежуточной обработки для всех типов запросов в указанном пути
//Необходимо прописывать до основного обработчика, если у него нет метода Next()
app.use('/', function (req, res, next) {
    console.log('MAIN PAGE');
    console.log('Time:', Date.now());
    console.log('Request Type:', req.method);
    console.log('Request URL:', req.originalUrl);
    console.log();
    next();
});


//Обеспечивает публичный доступ к папке dist
//Посредством этого подключены css, js, fonts, images
app.use(express.static(__dirname + '/dist'));


app.get('/', (req, res) => {
    res.sendFile(pathHtml + '/index.html');
});

app.get('/index2', (req, res) => {
    res.sendFile(pathHtml + '/index2.html');

});

/*
app.use('/js', resourcesExport);
app.use('/css', resourcesExport);
app.use('/images', resourcesExport);
app.use('/fonts', resourcesExport);
*/
app.listen(config.PORT, () => {
    console.log(`server start, listen port ${config.PORT}`);
})