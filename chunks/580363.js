            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                s = n("577776"),
                r = n("841811"),
                u = n("338835"),
                o = n("83900"),
                d = n("45029"),
                c = n("71216"),
                _ = n("148337"),
                E = n("568734"),
                f = n("299039"),
                h = n("955145"),
                p = n("29479"),
                T = n("49111"),
                C = n("843455"),
                m = n("782340"),
                S = n("413973");

            function I(e) {
                var t;
                let n, {
                        application: a,
                        scopes: l,
                        redirectUri: s,
                        approximateGuildCount: I,
                        isEmbeddedFlow: A,
                        embeddedActivityConfig: N
                    } = e,
                    O = new Date(f.default.extractTimestamp(a.id)),
                    R = (0, p.getSecurityMessage)(l),
                    y = (0, E.hasFlag)(null !== (t = a.flags) && void 0 !== t ? t : 0, T.ApplicationFlags.EMBEDDED);
                if (null != s && !y && !A) {
                    let e = new URL(s);
                    n = null != e.host && e.host.length > 0 ? e.origin : e.href
                }
                return (0, i.jsxs)("div", {
                    className: S.applicationDetails,
                    children: [null != n ? (0, i.jsx)(g, {
                        className: S.redirectWarning,
                        icon: o.default,
                        text: m.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                            origin: n
                        })
                    }) : null, (0, i.jsx)(g, {
                        icon: d.default,
                        text: (0, h.getApplicationDetailsText)(a)
                    }), (0, i.jsx)(g, {
                        icon: r.default,
                        text: m.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                            date: O
                        })
                    }), l.includes(C.OAuth2Scopes.BOT) && null != I ? (0, i.jsx)(g, {
                        icon: c.default,
                        text: m.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                            guildCount: I
                        })
                    }) : null, (0, i.jsx)(g, {
                        icon: _.default,
                        text: R
                    }), (null == N ? void 0 : N.has_csp_exception) ? (0, i.jsx)(g, {
                        icon: u.default,
                        text: m.default.Messages.OAUTH2_SCOPES_IP_LOCATION_SCOPE
                    }) : null]
                })
            }

            function g(e) {
                let {
                    icon: t,
                    text: n,
                    className: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(S.entry, a),
                    children: [(0, i.jsx)(t, {
                        className: S.entryIcon
                    }), (0, i.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: S.entryInner,
                        children: n
                    })]
                })
            }