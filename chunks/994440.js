"use strict";
n.r(t), n.d(t, {
  getAttachmentFile: function() {
    return o
  },
  cancelGetAttachmentFile: function() {
    return d
  }
});
var s = n("627445"),
  i = n.n(s),
  r = n("966724"),
  a = n("980134");

function o(e, t) {
  var n;
  i(e.item.platform === r.UploadPlatform.WEB, "Upload must be in the Web format");
  let s = (0, a.getAttachmentPayload)(e, t);
  return Promise.resolve({
    file: e.item.file,
    name: null !== (n = s.filename) && void 0 !== n ? n : ""
  })
}
async function d(e) {}