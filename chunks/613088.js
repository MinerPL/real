            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("77078"),
                o = n("433487"),
                u = n("149279"),
                d = n("392533"),
                c = n("782340"),
                E = n("133487"),
                f = function(e) {
                    let {
                        guild: t
                    } = e, [n, i] = s.useState(!1), f = s.useCallback(() => i(!0), [i]), _ = s.useCallback(() => i(!0), [i]);
                    return (0, a.jsx)("div", {
                        className: l(E.actionButtonsContainer, {
                            [E.forceButtonsShow]: n
                        }),
                        children: (0, a.jsx)(u.default, {
                            children: (0, a.jsx)(d.GuildDiscoveryMenuPopout, {
                                onRequestOpen: f,
                                onRequestClose: _,
                                guild: t,
                                children: e => {
                                    let {
                                        onClick: t,
                                        ...n
                                    } = e;
                                    return (0, a.jsx)(r.Tooltip, {
                                        text: c.default.Messages.MORE,
                                        hideOnClick: !0,
                                        children: e => {
                                            let {
                                                onClick: s,
                                                ...i
                                            } = e;
                                            return (0, a.jsx)(u.Button, {
                                                ...n,
                                                ...i,
                                                onClick: e => {
                                                    e.stopPropagation(), null == s || s(), t(e)
                                                },
                                                "aria-label": c.default.Messages.MORE,
                                                children: (0, a.jsx)(o.default, {
                                                    className: E.overflowIcon
                                                })
                                            })
                                        }
                                    })
                                }
                            })
                        })
                    })
                }