"use strict";
A.r(t), A.d(t, {
  default: function() {
    return r
  }
});
var a = A("336522"),
  l = A("254490"),
  n = A("782340");

function r(e) {
  (0, a.openUploadError)({
    title: n.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: n.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, l.sizeString)(e)
    })
  })
}