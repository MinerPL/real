"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var s, i = n("307785"),
  r = n("49111");
s = class {
  getCreateAttachmentURL(e) {
    return r.Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
  }
  getDeleteUploadURL(e) {
    return r.Endpoints.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    return i.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES
  }
  getMaxAttachmentsCount() {
    return i.MAX_ATTACHMENT_UPLOAD_COUNT
  }
  getMaxTotalAttachmentSize() {
    return i.MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES
  }
  get shouldReactNativeCompressUploads() {
    return !1
  }
}