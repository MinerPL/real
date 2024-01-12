            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("913144"),
                r = n("891653"),
                o = n("476765"),
                u = n("805199"),
                d = n("44771"),
                c = n("605475"),
                f = n("782340"),
                m = n("143598");

            function h(e) {
                let {
                    className: t,
                    disabled: n,
                    renderCTAButtons: h
                } = e, [g, _] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen]), S = (0, o.useUID)(), p = (0, s.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: S
                }), E = e => {
                    l.default.dispatch({
                        type: "APP_ICON_UPDATED",
                        id: e
                    })
                };
                return (0, a.jsx)("div", {
                    ...p,
                    className: m.container,
                    children: (0, a.jsxs)("div", {
                        className: t,
                        children: [(0, a.jsxs)("div", {
                            className: m.header,
                            children: [(0, a.jsxs)("div", {
                                className: m.headings,
                                children: [_ ? null : (0, a.jsxs)("div", {
                                    className: m.title,
                                    children: [(0, a.jsx)(s.Heading, {
                                        variant: "text-md/medium",
                                        children: f.default.Messages.APP_ICON_SETTINGS_TITLE
                                    }), (0, a.jsx)(r.default, {
                                        className: m.premiumIcon
                                    })]
                                }), (0, a.jsx)(s.Heading, {
                                    variant: "text-sm/normal",
                                    children: f.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                })]
                            }), null == h ? void 0 : h()]
                        }), (0, a.jsx)("div", {
                            className: m.presets,
                            children: c.ICONS.filter(e => {
                                let {
                                    isHidden: t
                                } = e;
                                return !0 !== t
                            }).map((e, t) => (0, a.jsx)(d.default, {
                                icon: e,
                                isSelected: g === e.id,
                                onSelect: e => E(e),
                                disabled: n,
                                tabIndex: 0 !== t || n ? void 0 : 0
                            }, e.id))
                        })]
                    })
                })
            }