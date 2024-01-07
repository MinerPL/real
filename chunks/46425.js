            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return x
                }
            }), l("222007");
            var i = l("37983");
            l("884691");
            var a = l("641761"),
                n = l("545158"),
                s = l("599110"),
                r = l("998944"),
                c = l("412707"),
                o = l("646186"),
                d = l("721908"),
                u = l("499139"),
                p = l("649135"),
                m = l("983616"),
                _ = l("49111"),
                f = l("782340"),
                h = l("971441");
            let C = new Map([
                    ["890343617762304070", {
                        imageSrc: l("311537")
                    }]
                ]),
                g = new Map,
                I = new Map([
                    [_.PlatformTypes.SPOTIFY, {
                        imageSrc: l("911871")
                    }]
                ]);

            function A(e) {
                var t, l;
                let {
                    result: a
                } = e, n = a.data, s = (0, d.default)({
                    application: n
                }), c = C.get(a.data.id);
                if (null == c) return null;
                let u = s.length > 0 ? (0, i.jsx)(r.default, {
                        application: a.data,
                        textVariant: "text-sm/semibold",
                        mutualGuilds: s,
                        mutualGuildShownMax: 3,
                        guildIconSize: r.GuildIconSize.SMALL,
                        compact: !0
                    }) : null,
                    p = null !== (l = null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0,
                    _ = p > 0 ? f.default.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
                        guildCount: p
                    }) : void 0;
                return (0, i.jsx)(m.default, {
                    imageSrc: c.imageSrc,
                    header: a.data.name,
                    description: a.data.description,
                    secondaryInfo: _,
                    ctaLabel: f.default.Messages.APPLICATION_ADD_TO_SERVER,
                    mutualGuildCount: u,
                    onCtaClick: () => (0, o.goToApplication)({
                        applicationId: n.id
                    })
                })
            }

            function E(e) {
                let {
                    result: t
                } = e, l = g.get(t.data.id);
                return null == l ? null : (0, i.jsx)(m.default, {
                    imageSrc: l.imageSrc,
                    header: t.data.name,
                    description: t.data.description,
                    secondaryInfo: f.default.Messages.APP_DIRECTORY_ACTIVITY_LABEL
                })
            }

            function v(e) {
                let t, l, a, {
                        result: r,
                        guildId: o
                    } = e,
                    d = I.get(r.data.name);
                return null == d ? null : (r.data.name === _.PlatformTypes.SPOTIFY && (t = f.default.Messages.APP_DIRECTORY_SPOTIFY_TITLE, l = f.default.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), a = () => {
                    s.default.track(_.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                        current_page: c.ApplicationDirectoryViews.SEARCH,
                        cta: "spotify",
                        guild_id: o
                    }), (0, n.default)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
                }), null == t || null == l || null == a) ? null : (0, i.jsx)(m.default, {
                    imageSrc: d.imageSrc,
                    header: t,
                    description: l,
                    ctaLabel: f.default.Messages.LEARN_MORE,
                    onCtaClick: a,
                    secondaryInfo: f.default.Messages.APP_DIRECTORY_CONNECTION_LABEL
                })
            }

            function x(e) {
                let {
                    results: t,
                    guildId: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: h.container,
                    children: [(0, i.jsx)(u.default, {}), (0, i.jsx)("div", {
                        className: h.list,
                        children: t.map((e, t) => {
                            let n = "".concat(t).concat(e.type);
                            if (e.type === a.ApplicationDirectorySearchResultType.APPLICATION) return (0, i.jsx)(A, {
                                result: e
                            }, n);
                            if (e.type === a.ApplicationDirectorySearchResultType.ACTIVITY_APPLICATION) return (0, i.jsx)(E, {
                                result: e
                            }, n);
                            if (e.type === a.ApplicationDirectorySearchResultType.CONNECTION) return (0, i.jsx)(v, {
                                guildId: l,
                                result: e
                            }, n)
                        })
                    }), (0, i.jsx)(p.default, {
                        guildId: l
                    })]
                })
            }