            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("781738");
            var u = n("37983"),
                r = n("884691"),
                a = n("77078"),
                s = n("272030"),
                l = n("79112"),
                i = n("534291"),
                o = n("158534"),
                d = n("812204"),
                c = n("685665"),
                f = n("960460"),
                S = n("425916"),
                E = n("373798"),
                M = n("23778"),
                m = n("872137"),
                p = n("846759"),
                T = n("887060"),
                I = n("22561"),
                h = n("856133"),
                _ = n("49111"),
                g = n("782340"),
                C = (0, o.default)(function(e) {
                    let {
                        webBuildOverride: t,
                        onSelect: n
                    } = e, [o, d] = r.useState(!1), C = (0, T.default)(), x = (0, m.default)(), R = (0, M.default)(), v = (0, h.default)(), j = (0, I.default)(), L = (0, p.default)(), {
                        AnalyticsLocationProvider: b,
                        analyticsLocations: A
                    } = (0, c.default)(), O = r.useMemo(() => (0, S.getRecentBuildOverrides)(), []);
                    async function N() {
                        try {
                            d(!0), await (0, f.clearBuildOverride)(), window.location.reload(!0)
                        } catch (e) {
                            d(!1)
                        }
                    }
                    let y = e => {
                            switch (e) {
                                case _.UserSettingsSections.STREAMER_MODE:
                                    return C;
                                case _.UserSettingsSections.APPEARANCE:
                                    return x;
                                case _.UserSettingsSections.ACCESSIBILITY:
                                    return R;
                                case _.UserSettingsSections.VOICE:
                                    return v;
                                case _.UserSettingsSections.TEXT:
                                    return j;
                                case _.UserSettingsSections.EXPERIMENTS:
                                    return L;
                                default:
                                    return null
                            }
                        },
                        k = (0, E.default)().filter(e => {
                            let {
                                section: t
                            } = e;
                            return t !== i.SectionTypes.HEADER && t !== i.SectionTypes.CUSTOM && t !== i.SectionTypes.DIVIDER && "logout" !== t
                        }).filter(e => null == e.predicate || e.predicate());
                    return (0, u.jsx)(b, {
                        children: (0, u.jsxs)(a.Menu, {
                            navId: "user-settings-cog",
                            onClose: s.closeContextMenu,
                            "aria-label": g.default.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,
                            onSelect: n,
                            children: [k.map(e => {
                                let {
                                    section: t,
                                    label: n,
                                    onClick: r
                                } = e, s = t.replace(/\W/gi, "_");
                                return (0, u.jsx)(a.MenuItem, {
                                    id: s,
                                    label: n,
                                    action: () => null != r ? r() : function(e, t) {
                                        let n = Object.values(_.UserSettingsSections),
                                            u = n.filter(t => t === e)[0];
                                        null != u && l.default.open(u, void 0, {
                                            analyticsLocations: t
                                        })
                                    }(t, A),
                                    children: y(t)
                                }, s)
                            }), e.user.isStaff() && O.length > 0 ? (0, u.jsx)(a.MenuItem, {
                                label: "Build overrides",
                                id: "build_overrides",
                                children: (0, u.jsx)(a.MenuGroup, {
                                    children: O.map(e => (0, u.jsx)(a.MenuRadioItem, {
                                        id: "input-".concat(e.payload),
                                        group: "build_overrides",
                                        label: e.id,
                                        checked: (null == t ? void 0 : t.id) === e.id,
                                        action: async () => {
                                            if ((null == t ? void 0 : t.id) === e.id) return;
                                            let n = await (0, f.applyPublicBuildOverride)(e.payload);
                                            200 === n.status && window.location.reload(!0)
                                        }
                                    }, "input-".concat(e.payload)))
                                })
                            }) : null, null != t ? (0, u.jsx)(a.MenuGroup, {
                                children: (0, u.jsx)(a.MenuItem, {
                                    id: "clear-build-override",
                                    disabled: o,
                                    label: g.default.Messages.CLEAR_BUILD_OVERRIDE,
                                    action: N,
                                    color: "danger"
                                })
                            }) : null]
                        })
                    })
                }, [d.default.CONTEXT_MENU, d.default.USER_SETTINGS_MENU])