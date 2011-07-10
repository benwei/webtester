# Introduction

  This is a PoC for web testing by polling the page within a specific interval.
  And you can dump statics from ServerPort with curl.

# First step
  - For running app.js, please modify the host info from config.js

## configurations at config.js

   - CheckInterval is used to hit host every (N) micro seconds

   globalKeyArray["CheckInterval"] = 3000;

   - ServerCheckInterval is used to dump statistics of tester every (N) micro seconds.

   globalKeyArray["ServerCheckInterval"] = 1000;

   - Fill you testing host and uri path here

   host: 'yoursite.yoursite', <br\n>
   path: '/testuri',


   - ServerPort is used for client connect to view statistics of webtester

   globalKeyArray["ServerPort"] = 8000;

# View Statistics
  - Use the following to view the statistics of connections.

    $ curl localhost:8000

# Notes

  - get a page from host:url and provide a web connection to show count for connections of success and failure.

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
