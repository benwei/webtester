# Web Tester
  Using the http to implement the test web tool.

# Running Guide
  - first steps, please run npm to install lib dependencies.
     $ npm install -d

  - run the application
     $ node app.js

  - client side testing
     $ curl localhost:8000
## use npm start and test
### run start

```sh
$ node app.js
ben@c3:/ci/github/webtester/helloweb$ npm run start

> helloweb@0.0.1 start
> node app.js
```

### run test

```sh
$ npm run test

> helloweb@0.0.1 test /ci/github/webtester/helloweb
> curl http://localhost:8000

Hello world!
```

# License

(The MIT License)

Copyright (c) 2011 Boslab

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
