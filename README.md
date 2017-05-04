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
- 위 Scraping Sample Code를 통해 가져온 html 내용의 기본 구조
>
    ...
    <section class="posts postindex wrapper">  
        <article class="post">
        <h1>제목</h1>
        <article>
        <article class="post">...<article>
        <article class="post">...<article>
    </section>  
    ...
    /*
     위 코드는 posts라는 class를 가지는 section 태그와 그 안쪽에 post라는 클래스를 가지는 article 태그로 이루어져 있다.
    */

- cheerio 를 이용하면, 기존 jQuery Selector의 방식을 그대로 사용할 수 있다.
- cheerio / jQuert Selectors 관련 링크<br>
[cheerio](https://www.npmjs.com/package/cheerio)<br>
[jQuery Selectors](https://api.jquery.com/category/selectors/)

- Parsing 과정이 포함된 Sample Code
>
    var request = require('request');
    var cheerio = require('cheerio');

    var url = 'https://dobest.io/';

    request(url, function(error, response, body){
        if(error) throw error;

        var $ = cheerio.load(body);

        var postElements = $('section.posts article.post');
        postElements.each(function(){
            var postTitle = $(this).find('h1').text();
            var postUrl = $(this).find('h1 a').attr('href');

            console.log(postTitle + " : " + postUrl);
        });
    });
    /*
     위 코드를 통해 정상적으로 포스트의 제목과 하이퍼링크를 가져옴을 확인할 수 있습니다.
    */

- 2017.05.04 기준 Crawling 된 내용

    > 내가 개발을 포기하지 않을 수 있었던 이유 : /never-give-up/<br>
워드프레스 서버 이전 작업에 대한 기록 : /moving-wordpress-to-new-server/<br>
python matplotlib 에서 한글 텍스트 표시하기 : /matplotlib-with-korean/<br>
Pandas 에서 주가 데이터 가져오기 - 코스피 지수 : /pandas-with-kospi/<br>
postgresql 에서 한글 정렬 문제 해결하기 : /postgresql-korean-order/<br>
[강의 소개] Node.js 로 시작하는 웹 프로그래밍 : /lecture-nodejs-web-programming/<br>
[강의 소개] 업무 자동화를 위한 파이썬 : /lecture-automate-with-python/<br>