            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return a
                },
                pxToRem: function() {
                    return o
                },
                getCommandQuery: function() {
                    return u
                }
            });
            var i = n("524768"),
                l = n("991630"),
                r = n("943161"),
                s = n("317041");
            let a = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? r.default : l.default;

            function o(e) {
                return "".concat(e / 16, "rem")
            }

            function u(e, t) {
                let n = t,
                    i = !1,
                    l = t.indexOf(":");
                if (l >= 0) {
                    let e = t.lastIndexOf(" ", l);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, l)
                } else t = t.substring(0, t.length);
                let r = t.split(" ", s.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > s.MAX_SUBCOMMAND_LEVEL && (i = !0, r.pop()), t = r.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: r,
                    hasSpaceTerminator: i
                }
            }