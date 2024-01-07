            "use strict";
            l.r(t), l.d(t, {
                GuildIconSize: function() {
                    return i
                },
                default: function() {
                    return I
                }
            }), l("424973");
            var i, a, n = l("37983"),
                s = l("884691"),
                r = l("414456"),
                c = l.n(r),
                o = l("769846"),
                d = l("77078"),
                u = l("627490"),
                p = l("587974"),
                m = l("315102"),
                _ = l("159885"),
                f = l("782340"),
                h = l("875612");
            (a = i || (i = {}))[a.SMALL = (0, _.cssValueToNumber)(o.default.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", a[a.LARGE = (0, _.cssValueToNumber)(o.default.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE";
            let C = {
                    [i.SMALL]: h.moreGuildsSmall,
                    [i.LARGE]: h.moreGuildsLarge
                },
                g = {
                    [i.SMALL]: h.iconSmall,
                    [i.LARGE]: h.iconLarge
                };

            function I(e) {
                var t, l, a;
                let {
                    application: r,
                    mutualGuilds: o,
                    mutualGuildShownMax: _ = 4,
                    className: I,
                    textVariant: A = "text-sm/normal",
                    compact: E,
                    guildIconSize: v = i.LARGE
                } = e, x = new Intl.ListFormat("en-US"), R = null !== (l = null === (t = r.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0, T = null !== (a = null == o ? void 0 : o.length) && void 0 !== a ? a : 0, {
                    shownMutualGuilds: N,
                    hiddenMutualGuilds: P
                } = s.useMemo(() => {
                    let e = [],
                        t = [];
                    return null == o || o.forEach(l => {
                        e.length < _ && null != l.icon ? e.push(l) : t.push(l)
                    }), e.length === _ && t.length > 0 && (t.push(e[_ - 1]), e = e.slice(0, _ - 1)), {
                        shownMutualGuilds: e,
                        hiddenMutualGuilds: t
                    }
                }, [o, _]), y = P.length, j = function(e, t, l, i) {
                    if (0 === t && 0 === e) return null;
                    if (t > 0 && 0 === l) return f.default.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
                        mutualGuildCount: t
                    });
                    let a = t > 0 ? f.default.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : f.default.Messages.APP_DIRECTORY_GUILD_COUNT,
                        n = new Intl.NumberFormat("en-US", {
                            notation: i ? "compact" : "standard",
                            compactDisplay: "short"
                        });
                    return a.format({
                        guildCount: n.format(e),
                        mutualGuildCount: t,
                        nonMutualGuildCount: n.format(l)
                    })
                }(R, T, Math.max(0, R - T), E);
                return 0 === N.length && null == j ? null : (0, n.jsxs)("div", {
                    className: c(I, h.wrapper),
                    children: [(0, n.jsx)("div", {
                        className: h.icons,
                        children: N.length > 0 ? (0, n.jsxs)(n.Fragment, {
                            children: [N.map((e, t) => {
                                let l = t === N.length - 1 && 0 === y,
                                    i = m.default.getGuildIconURL({
                                        id: e.id,
                                        icon: e.icon,
                                        size: v,
                                        canAnimate: !1
                                    }),
                                    a = (0, n.jsx)(d.Tooltip, {
                                        text: e.name,
                                        position: "top",
                                        children: e => (0, n.jsx)("img", {
                                            ...e,
                                            className: c(h.icon, g[v]),
                                            src: i,
                                            alt: ""
                                        })
                                    });
                                return l ? (0, n.jsx)(s.Fragment, {
                                    children: a
                                }, e.id) : (0, n.jsx)(p.default, {
                                    className: h.iconMask,
                                    height: v,
                                    width: v,
                                    mask: p.default.Masks.VOICE_USER_SUMMARY_ITEM,
                                    children: a
                                }, e.id)
                            }), y > 0 ? (0, n.jsx)(d.Tooltip, {
                                text: f.default.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
                                    appNames: x.format(P.map(e => e.name))
                                }),
                                position: "top",
                                children: e => (0, n.jsxs)("div", {
                                    ...e,
                                    className: c(h.moreGuilds, C[v]),
                                    children: ["+", y]
                                })
                            }) : null]
                        }) : (0, n.jsx)(u.default, {
                            width: v,
                            height: v,
                            className: h.defaultIcon
                        })
                    }), null != j ? (0, n.jsx)(d.Text, {
                        variant: A,
                        color: "header-secondary",
                        children: j
                    }) : null]
                })
            }