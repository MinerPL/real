"use strict";
var n = r("646601").OrderedMap;
t.exports = {
  createFromArray: function(t) {
    return n(t.map(function(t) {
      return [t.getKey(), t]
    }))
  }
}