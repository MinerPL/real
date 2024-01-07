            "use strict";

            function l(e) {
                var t, a;
                if (null == e) return null;
                if ((null === (t = e.content) || void 0 === t ? void 0 : t.length) > 0) return e.content;
                if ((null === (a = e.embeds) || void 0 === a ? void 0 : a.length) > 0) {
                    for (let t of e.embeds)
                        if (null != t.rawDescription && t.rawDescription.length > 0) return t.rawDescription
                }
                return null
            }
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            }), a("222007")