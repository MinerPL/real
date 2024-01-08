            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return a
                }
            }), n("70102");
            var i = n("281071"),
                l = n("773336"),
                u = n("50885");
            let o = (() => {
                if (l.isPlatformEmbedded) return null != u.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function a(e) {
                return !!o && (l.isPlatformEmbedded ? (u.default.copy(e), !0) : i.copy(e))
            }