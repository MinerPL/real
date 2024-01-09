            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("292655"),
                d = n("82372"),
                c = n("426969"),
                f = n("13030"),
                h = n("151431"),
                C = s.memo(function() {
                    let e = (0, r.useStateFromStores)([c.default], () => c.default.shouldShowPopup()),
                        t = s.useCallback(() => {
                            e ? d.dismissAppLauncherPopup() : d.showAppLauncherPopup()
                        }, [e]);
                    return (0, a.jsx)(o.Tooltip, {
                        text: "Use an App",
                        children: e => (0, a.jsx)("div", {
                            ...e,
                            className: i(f.CHAT_INPUT_BUTTON_CLASSNAME, h.buttonContainer),
                            children: (0, a.jsx)(u.default, {
                                onClick: t,
                                tabIndex: 0,
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        bottom: 4,
                                        left: -4,
                                        right: -4
                                    }
                                }
                            })
                        })
                    })
                })