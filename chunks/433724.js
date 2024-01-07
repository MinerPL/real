            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                r = s("77078"),
                i = s("913144"),
                l = s("891653"),
                u = s("476765"),
                d = s("805199"),
                c = s("44771"),
                o = s("605475"),
                E = s("782340"),
                T = s("143598");

            function _(e) {
                let {
                    className: t,
                    disabled: s,
                    renderCTAButtons: _
                } = e, [S, m] = (0, n.useStateFromStoresArray)([d.default], () => [d.default.getCurrentDesktopIcon(), d.default.isEditorOpen]), f = (0, u.useUID)(), h = (0, r.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: f
                }), I = e => {
                    i.default.dispatch({
                        type: "APP_ICON_UPDATED",
                        id: e
                    })
                };
                return (0, a.jsx)("div", {
                    ...h,
                    className: T.container,
                    children: (0, a.jsxs)("div", {
                        className: t,
                        children: [(0, a.jsxs)("div", {
                            className: T.header,
                            children: [(0, a.jsxs)("div", {
                                className: T.headings,
                                children: [m ? null : (0, a.jsxs)("div", {
                                    className: T.title,
                                    children: [(0, a.jsx)(r.Heading, {
                                        variant: "text-md/medium",
                                        children: E.default.Messages.APP_ICON_SETTINGS_TITLE
                                    }), (0, a.jsx)(l.default, {
                                        className: T.premiumIcon
                                    })]
                                }), (0, a.jsx)(r.Heading, {
                                    variant: "text-sm/normal",
                                    children: E.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                })]
                            }), null == _ ? void 0 : _()]
                        }), (0, a.jsx)("div", {
                            className: T.presets,
                            children: o.ICONS.filter(e => {
                                let {
                                    isHidden: t
                                } = e;
                                return !0 !== t
                            }).map((e, t) => (0, a.jsx)(c.default, {
                                icon: e,
                                isSelected: S === e.id,
                                onSelect: e => I(e),
                                disabled: s,
                                tabIndex: 0 !== t || s ? void 0 : 0
                            }, e.id))
                        })]
                    })
                })
            }