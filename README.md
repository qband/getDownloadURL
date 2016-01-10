# getDownloadURL

a cli tool that can get real download urls step by step

## real world example

## reference
- how to get useful data
  - query language
  - dom element
    - selector/querySelectorAll - [1](https://stackoverflow.com/questions/190253/jquery-selector-regular-expressions) - [2](https://stackoverflow.com/questions/9309763/jquery-selector-contains-use-regular-expressions)
    - xpath - [1](https://stackoverflow.com/questions/10596417/is-there-a-way-to-get-element-by-xpath-using-javascript-in-selenium-webdriver) - [2](https://stackoverflow.com/questions/2994198/xpath-to-return-only-elements-containing-the-text-and-not-its-parents)
  - text processing

- impl in mind
  - headless browser
  - http client + html parser
  - browser remote debug
  - browser plugin

- impl in real world
  - Scrapy
  - zombie
  - phantomjs
    - scraperjs
    - CasperJS
  - YQL

- tools to make cli
  - nodejs - [1](http://node-modules.com/search?q=command+line) - [2](https://github.com/search?l=JavaScript&o=desc&q=command&s=stars&type=Repositories&utf8=%E2%9C%93) - [3](http://nipstr.com/#command)

- command exectution - cross platform
  - nodejs spawn
  - cross-spawn

- pass the value not the reference
  - closure [1](https://stackoverflow.com/questions/2568966/how-do-i-pass-the-value-not-the-reference-of-a-js-variable-to-a-function)
  - create function - [1](https://stackoverflow.com/questions/7650071/is-there-a-way-to-create-a-function-from-a-string-with-javascript)
    - eval
    - Function
    -  sjsClass
