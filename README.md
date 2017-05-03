# Crawling Tutorial

- 본 내용은 아래의 포스팅을 참고하였습니다.

    [Node.js를 이용한 웹 데이터 수집하기](https://ansuchan.com/nodejs-web-crawling-with-cheerio/)

## 데이터(Data) 수집하기
- Crawling : 웹 사이트의 데이터를 수집하는 일련의 과정을 Crawling이라고 부른다.
- Scraping
- Parsing

1. Scraping : 데이터 가져오기
    - Authentication : 만약, 인증된 사용자만 정보를 볼 수 있다면 어떻게 정보를 가져올 수 있을까?
    - Pagination : 만약, 여러 페이지에 걸쳐서 데이터가 있다면 이를 어떻게 가져올 수 있을까?

2. Parsing : 데이터 추출하기

## 크롤링(Crawling)에 사용되는 모듈
- Node.js 에서 사용될 수 있는 모듈

1. Scraping : http, https, request
2. Parsing : JSDOM, cheerio

> 해당 내용에서는 request와 cheerio를 사용합니다.

    npm install request
    npm install cheerio

## Scraping

> request를 통하여 내용을 가져오는 과정. request에 관한 자세한 내용은 아래 링크 참고.

- [npm - request](https://www.npmjs.com/package/request)
>
    var request = require('request');
    var url = "https://dobest.io/";

    request(url, function(error, response, body){
        if(error) throw error;
        console.log(body);
    });

## Parsing
> 가져온 데이터(Data)로 부터 정보(Infomation)을 추출하는 과정.

- HTML 구조 파악 → 우리가 원하는 데이터가 정확히 어디에 있는지 파악