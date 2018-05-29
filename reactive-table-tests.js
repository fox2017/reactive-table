// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by reactive-table.js.
import { name as packageName } from "meteor/huayi:reactive-table";

// Write your tests here!
// Here is an example.
Tinytest.add('reactive-table - example', function (test) {
  test.equal(packageName, "reactive-table");
});
