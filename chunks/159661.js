            "use strict";
            n.r(t), n.d(t, {
                baseRules: function() {
                    return v
                },
                customRules: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("463928"),
                i = n.n(o),
                c = n("77078"),
                u = n("54239"),
                d = n("79112"),
                h = n("367376"),
                p = n("393414"),
                f = n("599110"),
                g = n("49111"),
                C = n("234222");
            let m = i.defaultRules.link,
                x = {
                    section: g.AnalyticsSections.SETTINGS_CHANGELOG
                },
                _ = e => {
                    var t, n;
                    let {
                        level: l,
                        children: s,
                        className: o = null,
                        styleSheet: i = {}
                    } = e, u = (0, c.usePrivateHeadingLevel)(), d = parseInt(l, 10), h = isNaN(d) ? 1 : d;
                    return a.createElement("h".concat(u + h - 1), {
                        className: r(...(t = i, null == (n = o) ? [] : n.split(" ").map(e => t[e])))
                    }, s)
                },
                v = h.default.defaultRules,
                L = {
                    link: {
                        parse(e, t, n) {
                            let l;
                            let a = e[2],
                                s = a.startsWith("https://discordapp.com/nitro") || a.startsWith("https://discord.com/nitro"),
                                r = a.startsWith("https://discordapp.com/hypesquad") || a.startsWith("https://discord.com/hypesquad"),
                                o = a.startsWith("/shop/fullscreen?source=1") || a.startsWith("/activities");
                            return l = s || r ? e => {
                                f.default.track(g.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                                    location: x
                                }), s ? d.default.open(g.UserSettingsSections.PREMIUM) : r && d.default.open(g.UserSettingsSections.HYPESQUAD_ONLINE), n.changeLog.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    cta_type: "nitro"
                                }), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : o ? e => {
                                (0, p.transitionTo)(a), n.changeLog.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...f.default.getCampaignParams(a)
                                }), (0, u.popAllLayers)(), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(a), n.changeLog.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...f.default.getCampaignParams(a)
                                })
                            }, {
                                ...m.parse(e, t, n),
                                callToAction: l
                            }
                        },
                        react(e, t, n) {
                            let a = (0, l.jsx)(c.Anchor, {
                                href: i.sanitizeUrl(e.target),
                                title: e.title,
                                onClick: e.callToAction,
                                target: "_blank",
                                className: e.callToAction ? "cta" : void 0,
                                children: t(e.content, n)
                            }, n.key);
                            return a
                        }
                    },
                    lheading: e => ({
                        react: (t, n, a) => (0, l.jsx)(_, {
                            level: t.level,
                            className: t.className,
                            styleSheet: e,
                            children: n(t.content, a)
                        }, a.key)
                    }),
                    heading: {
                        react: (e, t, n) => (0, l.jsx)(_, {
                            level: e.level,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    image: {
                        react(e, t, a) {
                            let s = n("291802")("../../images/change-log/".concat(e.target).replace("../../images/change-log/", "./"));
                            return (0, l.jsx)("img", {
                                alt: e.alt,
                                src: s
                            }, a.key)
                        }
                    },
                    blockQuote: {
                        react: v.blockQuote.react
                    },
                    paragraph: {
                        react: (e, t, n) => (0, l.jsx)("p", {
                            children: t(e.content, n)
                        }, n.key)
                    }
                }