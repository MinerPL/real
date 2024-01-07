            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("773336"),
                i = s("50885"),
                d = s("782340");

            function r(e, t) {
                return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, a.jsx)(n.MenuItem, {
                    id: "copy",
                    label: d.default.Messages.COPY,
                    hint: (0, l.isMac)() ? "⌘C" : "Ctrl+C",
                    action: () => {
                        i.default.copy(e), null == t || t.focus()
                    }
                }) : null
            }