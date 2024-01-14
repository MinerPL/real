"use strict";
A.r(t), A.d(t, {
  createCloudUploader: function() {
    return l
  }
});
var a = A("681736");

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST";
  return new a.default(e, t, {
    raiseEndpointErrors: !0
  })
}