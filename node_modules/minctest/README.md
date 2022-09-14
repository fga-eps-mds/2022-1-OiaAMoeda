# Minctest

This is a Node.js port of [Minctest](https://codeplea.com/minctest), a very
minimal unit-testing "framework" originally written in ANSI C. It's handy when
you want some real simple unit tests for a small project.

Basically, it implements assertion and equal functions. It'll track and time
how many tests pass and fail. Failed tests will also display which line the
failing test code was on.

## Features

- Contained in a single file.
- Reports file and line number for failed assertions.
- Reports run time for each test.
- Tests continue even after an assertion fails.
- Has assertion for checking float equality.
- Released under the zlib license - free for nearly any use.

## Installation

You can either copy `minctest.js` into your project, or install using npm with
`npm install minctest`.

## Example

```lua
var l = require("minctest");

l.run("test1", function(){
   l.ok('a' == 'a');          //assert true
});

l.run("test2", function(){
   l.equal(5, 5);             //compare integers
   l.fequal(5.5, 5.5);        //compare floats
});

process.exit(l.results()); //show results
```

That produces the following output:

            test1         pass: 1   fail: 0      0ms
            test2         pass: 2   fail: 0      1ms
    ALL TESTS PASSED (3/3)



## Users

If you're using Minctest in your project, let me know. I could add a link back.
