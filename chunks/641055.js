            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("151426"),
                r = l("819855"),
                o = l("77078"),
                u = l("841098"),
                d = l("340066"),
                c = l("206230"),
                f = l("10641"),
                m = l("874419"),
                p = l("430312"),
                E = l("590456"),
                T = l("393036");
            let _ = () => {
                let e = (0, f.useIsDismissibleContentDismissed)(i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
                    t = (0, s.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme),
                    l = (0, u.default)(),
                    {
                        profileTheme: n
                    } = a.useContext(p.UserProfileContext),
                    o = (0, r.isThemeDark)(l) && (0, r.isThemeLight)(n);
                return !e && !t && o
            };
            var S = e => {
                let {
                    onTooltipClose: t
                } = e, {
                    profileType: l
                } = a.useContext(p.UserProfileContext), s = l === E.UserProfileTypes.POPOUT, i = _(), [r, u] = a.useState(!s && i);
                return (0, d.default)(() => u(i), s ? 300 : null), (0, n.jsx)(o.Popout, {
                    shouldShow: r,
                    position: "left",
                    align: "center",
                    spacing: 32,
                    ignoreModalClicks: !0,
                    onRequestClose: () => {
                        !s && u(!1)
                    },
                    renderPopout: e => {
                        let {
                            position: l
                        } = e;
                        return (0, n.jsx)(m.default, {
                            position: null != l ? l : "left",
                            onClose: t
                        })
                    },
                    children: () => (0, n.jsx)("span", {
                        className: T.hidden
                    })
                })
            }