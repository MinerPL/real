            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, a = n("307785"),
                l = n("49111");
            i = class {
                getCreateAttachmentURL(e) {
                    return l.Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
                }
                getDeleteUploadURL(e) {
                    return l.Endpoints.MESSAGE_DELETE_UPLOAD(e)
                }
                getMaxFileSize(e) {
                    return a.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES
                }
                getMaxAttachmentsCount() {
                    return a.MAX_ATTACHMENT_UPLOAD_COUNT
                }
                getMaxTotalAttachmentSize() {
                    return a.MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES
                }
                get shouldReactNativeCompressUploads() {
                    return !1
                }
            }