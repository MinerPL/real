"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("446825").Buffer;

function r(e) {
  try {
    return i.from(JSON.stringify(e)).toString("base64")
  } catch (e) {
    return null
  }
}