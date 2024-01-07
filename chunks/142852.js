            "use strict";
            n.r(t), n.d(t, {
                UploadTargets: function() {
                    return a
                },
                getUploadTarget: function() {
                    return c
                }
            });
            var i, a, l = n("572679"),
                s = n("42203"),
                r = n("254490"),
                u = n("980134"),
                o = n("49111");
            class d {
                getCreateAttachmentURL(e) {
                    return o.Endpoints.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
                }
                getDeleteUploadURL(e) {
                    return o.Endpoints.MESSAGE_DELETE_UPLOAD(e)
                }
                getMaxFileSize(e) {
                    let t = s.default.getBasicChannel(e);
                    return r.maxFileSize(null == t ? void 0 : t.guild_id)
                }
                getMaxAttachmentsCount() {
                    return o.MAX_UPLOAD_COUNT
                }
                getMaxTotalAttachmentSize() {
                    return u.MAX_TOTAL_ATTACHMENT_SIZE
                }
                get shouldReactNativeCompressUploads() {
                    return !0
                }
            }

            function c(e) {
                if (1 === e) return new l.default;
                return new d
            }(i = a || (a = {}))[i.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT", i[i.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT"