
//主要用来解析url格式的字符串

var url = require('url');
var obj = url.parse('http://127.0.0.1:3000/pinglun?name=cccccc&message=dfdfdfdfdfd',true);
console.log(obj);

//得到的结果:

// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: '127.0.0.1:3000',
//   port: '3000',
//   hostname: '127.0.0.1',
//   hash: null,
//   search: '?name=cccccc&message=dfdfdfdfdfd',
//   query: { name: 'cccccc', message: 'dfdfdfdfdfd' },
//   pathname: '/pinglun',
//   path: '/pinglun?name=cccccc&message=dfdfdfdfdfd',
//   href:
//    'http://127.0.0.1:3000/pinglun?name=cccccc&message=dfdfdfdfdfd' 
//   }