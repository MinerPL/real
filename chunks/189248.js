"use strict";
var r = {
  current: function(t) {
    return t
  },
  inject: function(t) {
    r.current = t
  }
};
t.exports = r