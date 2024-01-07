            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("308472"),
                a = n("77078"),
                u = n("917764"),
                d = n("986632"),
                c = n("405607"),
                f = n("423080"),
                p = n("93393"),
                m = n("153769"),
                h = n("671434"),
                E = n("389480"),
                S = n("782340"),
                g = n("510585");
            let C = [8, 8, 8, 8];

            function T(e) {
                let {
                    icon: t,
                    isSelected: n,
                    onClick: i,
                    ...r
                } = e;
                return (0, l.jsx)(a.Clickable, {
                    ...r,
                    onClick: i,
                    className: o(g.categoryIcon, {
                        [g.selected]: n
                    }),
                    children: (0, l.jsx)(t, {
                        className: g.categoryIconIcon
                    })
                })
            }

            function v(e, t, n, i) {
                return (0, l.jsx)(a.Tooltip, {
                    text: function(e) {
                        switch (e.categoryInfo.type) {
                            case E.SoundboardSoundGridSectionType.FAVORITES:
                                return S.default.Messages.FAVORITES;
                            case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return S.default.Messages.RECENTLY_HEARD;
                            case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return S.default.Messages.FREQUENTLY_USED;
                            case E.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(f.GuildTooltipText, {
                                    guild: e.categoryInfo.guild,
                                    includeActivity: !1
                                });
                            case E.SoundboardSoundGridSectionType.DEFAULTS:
                                return S.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                        }
                    }(e),
                    "aria-label": function(e) {
                        switch (e.categoryInfo.type) {
                            case E.SoundboardSoundGridSectionType.FAVORITES:
                                return S.default.Messages.FAVORITES;
                            case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return S.default.Messages.RECENTLY_HEARD;
                            case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return S.default.Messages.FREQUENTLY_USED;
                            case E.SoundboardSoundGridSectionType.GUILD:
                                return e.categoryInfo.guild.name;
                            case E.SoundboardSoundGridSectionType.DEFAULTS:
                                return S.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                        }
                    }(e),
                    position: "right",
                    children: t => (function(e, t, n, i) {
                        switch (e.categoryInfo.type) {
                            case E.SoundboardSoundGridSectionType.FAVORITES:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: h.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: p.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: s.AnalyticsIcon,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(a.Clickable, {
                                    ...i,
                                    className: g.category,
                                    onClick: t,
                                    children: (0, l.jsx)(u.default, {
                                        guild: e.categoryInfo.guild,
                                        isSelected: n
                                    })
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.DEFAULTS:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: m.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            default:
                                return null
                        }
                    })(e, n, i, t)
                })
            }

            function y(e) {
                let {
                    soundboardListRef: t,
                    categories: n,
                    listPadding: r = C
                } = e, o = i.useRef(null);
                return (0, l.jsx)(c.default, {
                    className: g.categoryList,
                    categoryListRef: o,
                    expressionsListRef: t,
                    store: d.SoundboardPickerStore,
                    categories: n,
                    listPadding: r,
                    renderCategoryListItem: v,
                    rowCount: n.length,
                    categoryHeight: 40
                })
            }