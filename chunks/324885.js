"use strict";
var r = s("537778");
t.exports = function(t) {
  return r(t, "[[StartIndex]]") && r(t, "[[EndIndex]]") && t["[[StartIndex]]"] >= 0 && t["[[EndIndex]]"] >= t["[[StartIndex]]"] && String(parseInt(t["[[StartIndex]]"], 10)) === String(t["[[StartIndex]]"]) && String(parseInt(t["[[EndIndex]]"], 10)) === String(t["[[EndIndex]]"])
}