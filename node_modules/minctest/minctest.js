// MINCTEST - Minimal Node.js Test Library
// This is based on minctest.h (https://codeplea.com/minctest)
//
// Copyright (c) 2014-2017 Lewis Van Winkle
//
// http://CodePlea.com
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//    claim that you wrote the original software. If you use this software
//    in a product, an acknowledgement in the product documentation would be
//    appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//    misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.


// MINCTEST - Minimal testing library for Node.js
//
//
// Example:
//
// var l = require("./minctest");
//
// l.run("test1", function(){
//   l.ok('a' == 'a');          //assert true
// });
//
// l.run("test2", function(){
//   l.equal(5, 6);             //compare integers
//   l.fequal(5.5, 5.6);        //compare floats
// });
//
// return l.results();           //show results
//


var LTEST_FLOAT_TOLERANCE = 0.001;


var ltests = 0;
var lfails = 0;

var clock = function(x) {
  if (x) {
    var elapsed = process.hrtime(x);
    return Math.floor(elapsed[0] * 1000 + elapsed[1] * 1e-6);
  } else {
    return process.hrtime();
  }
};


var lpad = function(n, width) {
  n = n + '';
  if (n.length >= width) return n;
  return new Array(width - n.length + 1).join(' ') + n;
};


var rpad = function(n, width) {
  n = n + '';
  if (n.length >= width) return n;
  return n + new Array(width - n.length + 1).join(' ');
};


var caller = function() {
  var st = new Error().stack;
  st = st.split(/\r?\n/)[3];
  st = st.substr(st.indexOf("at ") + 3);
  return st;
};


var lresults = function() {
    if (lfails === 0) {
        console.log("ALL TESTS PASSED (" + ltests + "/" + ltests + ")");
    } else {
        console.log("SOME TESTS FAILED (" + (ltests-lfails) + "/" + ltests + ")");
    }
    return lfails !== 0;
};


var lrun = function(name, testfunc) {
    var ts = ltests;
    var fs = lfails;
    var start = clock();
    process.stdout.write("\t" + rpad(name, 16));
    testfunc();
    //"pass:%2d   fail:%2d   %4dms\n",
    process.stdout.write("pass:" + lpad((ltests-ts)-(lfails-fs),2) + "   fail:" +
                         lpad(lfails-fs,2) + "   " + lpad(clock(start),4) + "ms\n");
};

var lok = function(test) {
    ltests += 1;
    if (!test) {
        lfails += 1;
        process.stdout.write(caller() + " error \n");
    }
};

var lequal = function(a, b) {
    ltests += 1;
    if (a != b) {
        lfails += 1;
        process.stdout.write(caller() + " (" + a + " != " + b + ")\n");
    }
};

var lfequal = function(a, b) {
    ltests += 1;
    if (Math.abs(a - b) > LTEST_FLOAT_TOLERANCE) {
        lfails += 1;
        process.stdout.write(caller() + " (" + a + " != " + b + ")\n");
    }
};


exports.results = lresults;
exports.run = lrun;
exports.ok = lok;
exports.equal = lequal;
exports.fequal = lfequal;

