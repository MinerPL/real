"use strict";
var e = n("522552");
t.exports = e(function() {
  if ("function" == typeof ArrayBuffer) {
    var t = new ArrayBuffer(8);
    Object.isExtensible(t) && Object.defineProperty(t, "a", {
      value: 8
    })
  }
})