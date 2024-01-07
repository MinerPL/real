            "use strict";
            n.r(t), n.d(t, {
                StageDiscoveryRecommendationSource: function() {
                    return a
                },
                default: function() {
                    return _
                }
            });
            var l, a, r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                u = n("77078"),
                o = n("687521"),
                c = n("29913"),
                d = n("580357"),
                f = n("476263"),
                E = n("228427"),
                h = n("193038"),
                g = n("366091");

            function _(e) {
                let {
                    guild: t,
                    stageInstance: n,
                    showGuildPopout: l,
                    setShowGuildPopout: a,
                    handleGuildNameClick: s,
                    source: _,
                    speakers: S,
                    speakerCount: v,
                    audienceCount: R,
                    channelName: m
                } = e, C = t.id;
                return (0, r.jsx)("div", {
                    className: g.contentContainer,
                    children: (0, r.jsxs)("div", {
                        className: g.headerContainer,
                        children: [(0, r.jsxs)("div", {
                            className: g.guildInfoContainer,
                            children: [(0, r.jsx)(o.default, {
                                guildId: C,
                                shouldShow: l,
                                onRequestClose: () => a(!1),
                                children: () => (0, r.jsxs)(u.Clickable, {
                                    className: g.flexContainerRow,
                                    onClick: s,
                                    children: [(0, r.jsx)(f.default, {
                                        guild: t,
                                        size: f.default.Sizes.MINI,
                                        className: g.guildIcon
                                    }), (0, r.jsxs)("div", {
                                        className: g.flexContainerRow,
                                        children: [(0, r.jsx)(u.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            className: i(g.guildName, {
                                                [g.disabled]: null == s
                                            }),
                                            children: t.name
                                        }), (0, r.jsx)(d.default, {
                                            guild: t
                                        })]
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: g.rightJustifiedContent,
                                children: [6 === _ && (0, r.jsx)("div", {
                                    className: g.featuredTag,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        className: g.featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, r.jsx)(h.default, {
                                    count: R,
                                    className: g.audienceCount
                                })]
                            })]
                        }), (0, r.jsx)(u.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: g.topicText,
                            children: n.topic
                        }), (0, r.jsx)(u.Text, {
                            color: "header-secondary",
                            className: g.description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, r.jsx)(c.default, {
                            guild: t,
                            speakers: S,
                            speakerCount: v,
                            className: g.speakers
                        }), null != m && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: g.divider
                            }), (0, r.jsxs)("div", {
                                className: g.footer,
                                children: [(0, r.jsx)(E.default, {
                                    width: 20,
                                    height: 20,
                                    className: g.icon
                                }), (0, r.jsx)(u.Text, {
                                    color: "header-secondary",
                                    className: g.label,
                                    variant: "text-sm/normal",
                                    children: m
                                })]
                            })]
                        })]
                    })
                })
            }(l = a || (a = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.TRENDING = 1] = "TRENDING", l[l.PERSONALIZED = 2] = "PERSONALIZED", l[l.USER_GUILDS = 3] = "USER_GUILDS", l[l.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", l[l.INTRO_CARD = 5] = "INTRO_CARD", l[l.FEATURED = 6] = "FEATURED"