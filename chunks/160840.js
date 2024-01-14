"use strict";

function n() {
  var t;
  return document.documentElement && (t = document.documentElement.clientWidth), !t && document.body && (t = document.body.clientWidth), t || 0
}

function i() {
  var t;
  return document.documentElement && (t = document.documentElement.clientHeight), !t && document.body && (t = document.body.clientHeight), t || 0
}

function o() {
  return {
    width: window.innerWidth || n(),
    height: window.innerHeight || i()
  }
}
o.withoutScrollbars = function() {
  return {
    width: n(),
    height: i()
  }
}, t.exports = o