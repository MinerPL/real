            "use strict";
            l.r(t), l.d(t, {
                RESTRICTIONS: function() {
                    return i
                }
            });
            var n = l("551006"),
                a = l("49111"),
                s = l("782340");
            let i = [{
                check(e, t, l) {
                    if (!l || null == t.getGuildId()) return !1;
                    let a = n.default.extractEveryoneRole(e, t);
                    if (null == a || !n.default.shouldShowEveryoneGuard(a, t)) return !1;
                    let i = n.default.everyoneMemberCount(a, t),
                        r = Math.pow(10, Math.floor(Math.log10(i))),
                        o = s.default.Messages.EVERYONE_POPOUT_BODY;
                    return t.isForumPost() ? o = s.default.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (o = s.default.Messages.EVERYONE_POPOUT_BODY_THREAD), {
                        body: o.format({
                            role: a,
                            count: (Math.trunc(i / r) * r).toLocaleString()
                        }),
                        footer: s.default.Messages.EVERYONE_POPOUT_FOOTER
                    }
                },
                analyticsType: "@Everyone Warning",
                animation: {
                    dark: () => l.el("878809").then(l.t.bind(l, "878809", 19)),
                    light: () => l.el("390594").then(l.t.bind(l, "390594", 19))
                }
            }, {
                check: e => !!a.TOKEN_REGEX.test(e) && {
                    body: s.default.Messages.TOKEN_POPOUT_BODY
                },
                analyticsType: "API Token Warning"
            }]