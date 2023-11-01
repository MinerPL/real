(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30408"], {
        69448: function(e, n, t) {
            "use strict";
            e.exports = t.p + "f6da6e7ed1d57e445d0e.svg"
        },
        991630: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return f
                }
            });
            var l = t("37983"),
                u = t("884691"),
                i = t("414456"),
                r = t.n(i),
                a = t("587974"),
                s = t("315102"),
                c = t("524768"),
                o = t("616674"),
                d = t("363577");

            function f(e) {
                let {
                    section: n,
                    isSelected: t,
                    width: i,
                    height: f,
                    className: p,
                    selectable: h = !1,
                    onFocus: m,
                    onBlur: M,
                    onMouseOver: I,
                    onMouseLeave: g,
                    ...v
                } = e, [C, E] = u.useState(!1), S = u.useCallback(() => {
                    E(!0), null == m || m()
                }, [m]), A = u.useCallback(() => {
                    E(!1), null == M || M()
                }, [M]), _ = u.useCallback(() => {
                    E(!0), null == I || I()
                }, [I]), x = u.useCallback(() => {
                    E(!1), null == g || g()
                }, [g]), b = u.useMemo(() => {
                    if (n.type === c.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return s.default.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon,
                            bot: null === (e = n.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: i
                        })
                    }
                    return d
                }, [n, i]);
                return (0, l.jsx)("div", {
                    ...v,
                    className: r(o.wrapper, p, {
                        [o.selectable]: h,
                        [o.selected]: h && t
                    }),
                    onFocus: S,
                    onBlur: A,
                    onMouseOver: _,
                    onMouseLeave: x,
                    children: (0, l.jsx)(a.default, {
                        className: o.mask,
                        mask: h && (t || C) ? a.MaskIDs.SQUIRCLE : a.MaskIDs.AVATAR_DEFAULT,
                        width: i,
                        height: f,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            className: o.icon,
                            style: {
                                width: i,
                                height: f
                            },
                            src: b
                        })
                    })
                })
            }
        },
        943161: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var l = t("37983");
            t("884691");
            var u = t("414456"),
                i = t.n(u),
                r = t("83910"),
                a = t("93393"),
                s = t("317041"),
                c = t("749296");
            let o = e => {
                switch (e.id) {
                    case s.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case s.BuiltInSectionId.FRECENCY:
                        return a.default;
                    default:
                        return
                }
            };

            function d(e) {
                let {
                    section: n,
                    className: t,
                    width: u,
                    height: r,
                    padding: a,
                    isSelected: s,
                    selectable: d = !1,
                    ...f
                } = e, p = o(n);
                return (0, l.jsx)("div", {
                    className: i(c.wrapper, t, {
                        [c.selectable]: d,
                        [c.selected]: d && s
                    }),
                    style: {
                        width: u,
                        height: r,
                        padding: null != a ? a : 0
                    },
                    children: null != p ? (0, l.jsx)(p, {
                        className: c.icon,
                        width: u,
                        height: r,
                        ...f
                    }) : null
                })
            }
        },
        355263: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getIconComponent: function() {
                    return a
                },
                pxToRem: function() {
                    return s
                },
                getCommandQuery: function() {
                    return c
                }
            });
            var l = t("524768"),
                u = t("991630"),
                i = t("943161"),
                r = t("317041");
            let a = e => e.type === l.ApplicationCommandSectionType.BUILT_IN ? i.default : u.default;

            function s(e) {
                return "".concat(e / 16, "rem")
            }

            function c(e, n) {
                let t = n,
                    l = !1,
                    u = n.indexOf(":");
                if (u >= 0) {
                    let e = n.lastIndexOf(" ", u);
                    e >= 0 ? (n = n.substring(0, e), l = !0) : n = n.substring(0, u)
                } else n = n.substring(0, n.length);
                let i = n.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return i.length > r.MAX_SUBCOMMAND_LEVEL && (l = !0, i.pop()), n = i.join(" "), (t.length > n.length || n.endsWith(" ")) && (l = !0, n = n.trimEnd()), {
                    text: n,
                    parts: i,
                    hasSpaceTerminator: l
                }
            }
        },
        861370: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var l = t("37983");
            t("884691");
            var u = t("77078"),
                i = t("845579"),
                r = t("662255"),
                a = t("306160");

            function s(e) {
                let {
                    id: n,
                    label: t,
                    onSuccess: s,
                    shiftId: c,
                    showIconFirst: o
                } = e, d = i.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !a.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(n);
                return (0, l.jsx)(u.MenuItem, {
                    id: f,
                    label: t,
                    action: function(e) {
                        let t = null != c && e.shiftKey ? c : n;
                        (0, a.copy)(t), null == s || s()
                    },
                    icon: r.default,
                    showIconFirst: o
                }, f)
            }
        },
        385065: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return I
                }
            });
            var l = t("37983");
            t("884691");
            var u = t("118810"),
                i = t("77078"),
                r = t("272030"),
                a = t("798609"),
                s = t("861370"),
                c = t("152298"),
                o = t("26051"),
                d = t("667358"),
                f = t("563816"),
                p = t("518155"),
                h = t("718381"),
                m = t("875834"),
                M = t("782340");

            function I(e) {
                var n;
                let t, I, g, {
                        channel: v,
                        message: C,
                        target: E,
                        attachment: S,
                        onSelect: A,
                        onHeightUpdate: _
                    } = e,
                    x = E;
                if (null != S) I = t = S.url;
                else
                    for (;
                        (0, u.isElement)(x);)(0, u.isElement)(x, HTMLImageElement) && null != x.src && (I = x.src), (0, u.isElement)(x, HTMLAnchorElement) && null != x.href && (t = x.href, g = x.textContent), x = x.parentNode;
                let b = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString(),
                    L = (0, c.default)(b),
                    T = (0, d.default)(b),
                    N = (0, f.default)({
                        commandType: a.ApplicationCommandType.MESSAGE,
                        commandTargetId: C.id,
                        channel: v,
                        guildId: void 0,
                        onShow: _
                    }),
                    j = (0, m.default)(C, v),
                    k = (0, p.default)(C, v),
                    y = (0, h.default)(C, v),
                    O = (0, o.default)(null != t ? t : I, g),
                    w = (0, s.default)({
                        id: C.id,
                        label: M.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(C.channel_id, "-").concat(C.id)
                    });
                return (0, l.jsxs)(i.Menu, {
                    navId: "message",
                    onClose: r.closeContextMenu,
                    "aria-label": M.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: A,
                    children: [(0, l.jsx)(i.MenuGroup, {
                        children: L
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: T
                    }), (0, l.jsxs)(i.MenuGroup, {
                        children: [N, j, k, y]
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: O
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: w
                    })]
                })
            }
        }
    }
]);