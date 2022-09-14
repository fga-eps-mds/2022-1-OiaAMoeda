
var l = require("./minctest");

l.run("test1", function(){
   l.ok('a' == 'a');          //assert true
});

l.run("test2", function(){
   l.equal(5, 6);             //compare integers
   l.fequal(5.5, 5.6);        //compare floats
});

process.exit(l.results()); //show results
