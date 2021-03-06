var http = require('http');
var fs = require('fs');
var qs = require('querystring');
//get 请求外网


function write(filename, data, page) {
  filename = '../data/'+filename+'.json';

  var fileData = data.map((e, i) => {
    delete e['_id'];

    return JSON.stringify(e);
  });
  console.log('length: '+fileData.length);
  var formatData = fileData.join('\n')+'\n';

  if (page === 1) {
    fs.writeFileSync(filename, formatData);
    console.log('save page ' + page + ' succeed!');
  } else {
    fs.appendFile(filename, formatData);
    console.log('save page ' + page + ' succeed!');
  }



  // fs.readFile('../data/test.json', function(err, data) {
  //   if (err) throw err;
  //   var jsonData = JSON.parse(data);
  //   console.log(jsonData);
  // })

}

// console.log('http://hearthstone.services.zam.com/v1/cards?'+content)

// var options = {
//   hostname: 'hearthstone.services.zam.com',
//   // port: 10086,
//   path: '/card?' + content,
//   method: 'GET',
//   headers: {
//     'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
//     // 'Connection': 'keep-alive',
//     // 'Content-Encoding': 'gzip',
//     // 'Content-Length': 2277,
//     // 'Content-Type': 'application/json; charset=utf-8'
//   }
// }
function getENData(curPage, maxPage) {
  var data = {
    sort: 'cost,name',
    page: curPage,
    pageSize: 20,
    cost: '0,1,2,3,4,5,6,7',
    type: 'MINION,SPELL,WEAPON',
    collectible: true,
    showCollection: true
  }

  var content = qs.stringify(data);

  http.get('http://hearthstone.services.zam.com/v1/card?' + content, (res) => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error(`请求失败。\n` +
        `状态码: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error(`无效的 content-type.\n` +
        `期望 application/json 但获取的是 ${contentType}`);
    }
    if (error) {
      console.log(error.message);
      // 消耗响应数据以释放内存
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      try {
        let parsedData = JSON.parse(rawData);

        // 数据为空
        if (parsedData.length === 0 || (maxPage && curPage >= maxPage)) {
          write('ENDATA0', parsedData, curPage);
        } else {
          write('ENDATA0', parsedData, curPage);
          getENData(curPage + 1, maxPage)
        }
        // console.log(parsedData);

      } catch (e) {
        console.log(e.message);
      }
    });
  }).on('error', (e) => {
    console.log(`错误: ${e.message}`);
  });
}

function getCNData(curPage, maxPage) {
  var postData = qs.stringify({
    'page': curPage
  });

  var options = {
    hostname: 'cha.17173.com',
    port: 80,
    path: '/hs/list/async?_n='+new Date().getTime(),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'Connection': 'keep-alive'
    }
  };

  var req = http.request(options, (res) => {
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
      // console.log(rawData)
    });
    res.on('end', () => {
      // fs.writeFile('../data/page_1.json', rawData, function(err) {
      //   if (err) {
      //     throw err;
      //   }
      //   console.log('succeed!');
      // });
      try {
        let parsedData = JSON.parse(rawData);
        if (parsedData.status === 'success') {
          parsedData = parsedData.data;
        } else {
          parsedData = [];
          console.log(parsedData.status);
        }
        // 数据为空
        if (parsedData.length === 0 || (maxPage && curPage >= maxPage)) {
          write('CNDATA0', parsedData, curPage);
        } else {
          write('CNDATA0', parsedData, curPage);
          getCNData(curPage + 1, maxPage)
        }
        // console.log(parsedData);

      } catch (e) {
        console.log(e.message);
      }
    });
  });

  req.on('error', (e) => {
    console.log(`请求遇到问题: ${e.message}`);
  });

  // 写入数据到请求主体
  req.write(postData);
  req.end();
}

getENData(1);

// getCNData(1);
