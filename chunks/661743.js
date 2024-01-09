            "use strict";
            n.r(t), n.d(t, {
                HangStatusPopout: function() {
                    return _
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n.n(r),
                o = n("77078"),
                d = n("943722"),
                c = n("468759"),
                f = n("987772"),
                h = n("233965"),
                p = n("32346"),
                m = n("925749"),
                E = n("782340"),
                C = n("492013");
            let g = e => {
                    e.stopPropagation(), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("579371").then(n.bind(n, "579371"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                },
                S = e => {
                    let {
                        style: t,
                        className: n,
                        name: l,
                        icon: s
                    } = e;
                    return (0, a.jsx)(o.Tooltip, {
                        text: l,
                        children: e => (0, a.jsx)("div", {
                            className: i(n, C.iconWidget),
                            style: t,
                            ...e,
                            children: null != s && s
                        })
                    })
                },
                _ = e => {
                    let {
                        currentStatus: t
                    } = e, n = l.useRef(p.default.getRecentCustomStatuses()), s = (0, m.getHangStatusOptions)(), r = (e, t) => {
                        e.stopPropagation(), (0, h.updateHangStatus)(t, !0)
                    }, _ = (e, t) => {
                        e.stopPropagation(), (0, h.updateCustomHangStatus)(t.status, t.emoji, !0)
                    }, I = l.useCallback(e => {
                        e.stopPropagation(), (0, h.clearHangStatus)(!0)
                    }, []);
                    return (0, a.jsxs)("div", {
                        className: C.popout,
                        children: [(0, a.jsxs)("div", {
                            className: C.iconsContainer,
                            children: [Object.entries(s).map(e => {
                                let [n, l] = e;
                                return (0, a.jsx)(o.Clickable, {
                                    "aria-label": l.title,
                                    onClick: e => r(e, n),
                                    children: (0, a.jsx)(S, {
                                        className: i(C.iconWidget, {
                                            [C.selectedWidget]: n === (null == t ? void 0 : t.state)
                                        }),
                                        name: l.title,
                                        icon: (0, a.jsx)("img", {
                                            src: l.icon,
                                            alt: "",
                                            className: C.icon
                                        }),
                                        style: n === (null == t ? void 0 : t.state) ? {
                                            backgroundColor: null != l.color ? l.color : void 0
                                        } : {}
                                    })
                                }, n)
                            }), (0, a.jsx)(o.Clickable, {
                                "aria-label": E.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                onClick: I,
                                children: (0, a.jsx)(S, {
                                    className: C.optionButton,
                                    name: E.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                    icon: (0, a.jsx)(c.default, {
                                        className: C.editIcon,
                                        foreground: C.editIconColor
                                    })
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: C.divider
                        }), (0, a.jsxs)("div", {
                            className: C.iconsContainer,
                            children: [n.current.map((e, n) => {
                                let l = e.status === (null == t ? void 0 : t.details) && u.isEqual(e.emoji, null == t ? void 0 : t.emoji);
                                return (0, a.jsx)(o.Clickable, {
                                    "aria-label": e.status,
                                    onClick: t => _(t, e),
                                    children: (0, a.jsx)(S, {
                                        className: i(C.iconWidget, {
                                            [C.selectedWidget]: l
                                        }),
                                        name: e.status,
                                        icon: null != e.emoji ? (0, a.jsx)(d.ActivityEmoji, {
                                            className: C.customIcon,
                                            emoji: e.emoji,
                                            hideTooltip: !0
                                        }) : null,
                                        style: l ? {
                                            backgroundColor: "#7174B7B3"
                                        } : {
                                            backgroundColor: "#6466914D"
                                        }
                                    })
                                }, "custom-status-".concat(n))
                            }), n.current.length > 0 ? (0, a.jsx)(o.Clickable, {
                                "aria-label": null != t ? E.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : E.default.Messages.STATUS_POPOUT_SET_CUSTOM,
                                onClick: g,
                                children: (0, a.jsx)(S, {
                                    className: C.optionButton,
                                    name: null != t ? E.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : E.default.Messages.STATUS_POPOUT_SET_CUSTOM,
                                    icon: (0, a.jsx)(f.default, {
                                        width: 20,
                                        height: 20,
                                        foreground: C.editIconColor
                                    })
                                })
                            }, "custom-status-edit") : (0, a.jsxs)(o.Clickable, {
                                "aria-label": E.default.Messages.STATUS_POPOUT_SET_CUSTOM,
                                onClick: g,
                                className: C.setCustomButton,
                                children: [(0, a.jsx)(f.default, {
                                    className: C.editIcon,
                                    foreground: C.editIconColor
                                }), (0, a.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "interactive-active",
                                    children: E.default.Messages.STATUS_POPOUT_SET_CUSTOM
                                })]
                            }, "custom-status-edit-full")]
                        })]
                    })
                }