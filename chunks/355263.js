            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return s
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
                a = n("943161"),
                r = n("317041");
            let s = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? a.default : l.default;

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
                let a = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return a.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, a.pop()), t = a.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: a,
                    hasSpaceTerminator: i
                }
            }