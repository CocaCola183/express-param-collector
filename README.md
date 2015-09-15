# req-param-collector
Collector of params for express, you can also use it as restify plugins  

## Install
```
npm install req-param-collector
```

## Usage
**Note**please use it before all your touters  
restify:  
```js
var req_param_collector = require('req-param-collector');
server.use(req_param_collector(['params', 'body', 'query', 'context']));
```
express:  
```js
var params_collector = require('req-param-collector');
app.use(params_collector());
```

## Default config
```js
['body', 'params', 'query']
```
