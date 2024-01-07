            "use strict";
            n.r(t), n.d(t, {
                getAttachmentFile: function() {
                    return r
                },
                cancelGetAttachmentFile: function() {
                    return u
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("966724"),
                s = n("980134");

            function r(e, t) {
                var n;
                a(e.item.platform === l.UploadPlatform.WEB, "Upload must be in the Web format");
                let i = (0, s.getAttachmentPayload)(e, t);
                return Promise.resolve({
                    file: e.item.file,
                    name: null !== (n = i.filename) && void 0 !== n ? n : ""
                })
            }
            async function u(e) {}