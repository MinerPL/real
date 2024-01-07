            "use strict";

            function n(e) {
                return e.map((e, t) => {
                    var a, n;
                    return {
                        file: e.file,
                        name: null !== (n = e.id) && void 0 !== n ? n : "attachment_".concat(t),
                        filename: null === (a = e.file) || void 0 === a ? void 0 : a.name
                    }
                })
            }
            a.r(t), a.d(t, {
                getAttachments: function() {
                    return n
                }
            })