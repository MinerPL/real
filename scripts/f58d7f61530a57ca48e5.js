(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["42091"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("912557"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("920040"),
                r = n("773670"),
                u = n("575482"),
                i = n.n(u),
                s = n("587974"),
                a = n("315102"),
                c = n("524768"),
                o = n("699278"),
                d = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: u,
                    height: f,
                    className: h,
                    selectable: p = !1,
                    onFocus: m,
                    onBlur: I,
                    onMouseOver: v,
                    onMouseLeave: C,
                    ...M
                } = e, [g, N] = r.useState(!1), x = r.useCallback(() => {
                    N(!0), null == m || m()
                }, [m]), E = r.useCallback(() => {
                    N(!1), null == I || I()
                }, [I]), R = r.useCallback(() => {
                    N(!0), null == v || v()
                }, [v]), A = r.useCallback(() => {
                    N(!1), null == C || C()
                }, [C]), S = r.useMemo(() => {
                    if (t.type === c.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return a.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: u
                        })
                    }
                    return d
                }, [t, u]);
                return (0, l.jsx)("div", {
                    ...M,
                    className: i(o.wrapper, h, {
                        [o.selectable]: p,
                        [o.selected]: p && n
                    }),
                    onFocus: x,
                    onBlur: E,
                    onMouseOver: R,
                    onMouseLeave: A,
                    children: (0, l.jsx)(s.default, {
                        className: o.mask,
                        mask: p && (n || g) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: u,
                        height: f,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            className: o.icon,
                            style: {
                                width: u,
                                height: f
                            },
                            src: S
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("575482"),
                u = n.n(r),
                i = n("83910"),
                s = n("93393"),
                a = n("317041"),
                c = n("488465");
            let o = e => {
                switch (e.id) {
                    case a.BuiltInSectionId.BUILT_IN:
                        return i.default;
                    case a.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function d(e) {
                let {
                    section: t,
                    className: n,
                    width: r,
                    height: i,
                    padding: s,
                    isSelected: a,
                    selectable: d = !1,
                    ...f
                } = e, h = o(t);
                return (0, l.jsx)("div", {
                    className: u(c.wrapper, n, {
                        [c.selectable]: d,
                        [c.selected]: d && a
                    }),
                    style: {
                        width: r,
                        height: i,
                        padding: null != s ? s : 0
                    },
                    children: null != h ? (0, l.jsx)(h, {
                        className: c.icon,
                        width: r,
                        height: i,
                        ...f
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return s
                },
                pxToRem: function() {
                    return a
                },
                getCommandQuery: function() {
                    return c
                }
            });
            var l = n("524768"),
                r = n("991630"),
                u = n("943161"),
                i = n("317041");
            let s = e => e.type === l.ApplicationCommandSectionType.BUILT_IN ? u.default : r.default;

            function a(e) {
                return "".concat(e / 16, "rem")
            }

            function c(e, t) {
                let n = t,
                    l = !1,
                    r = t.indexOf(":");
                if (r >= 0) {
                    let e = t.lastIndexOf(" ", r);
                    e >= 0 ? (t = t.substring(0, e), l = !0) : t = t.substring(0, r)
                } else t = t.substring(0, t.length);
                let u = t.split(" ", i.MAX_SUBCOMMAND_LEVEL + 1);
                return u.length > i.MAX_SUBCOMMAND_LEVEL && (l = !0, u.pop()), t = u.join(" "), (n.length > t.length || t.endsWith(" ")) && (l = !0, t = t.trimEnd()), {
                    text: t,
                    parts: u,
                    hasSpaceTerminator: l
                }
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("77078"),
                u = n("845579"),
                i = n("662255"),
                s = n("306160");

            function a(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: a,
                    shiftId: c,
                    showIconFirst: o
                } = e, d = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !s.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(r.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != c && e.shiftKey ? c : t;
                        (0, s.copy)(n), null == a || a()
                    },
                    icon: i.default,
                    showIconFirst: o
                }, f)
            }
        },
        385065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("117064"),
                u = n("77078"),
                i = n("272030"),
                s = n("798609"),
                a = n("861370"),
                c = n("636734"),
                o = n("26051"),
                d = n("667358"),
                f = n("563816"),
                h = n("522778"),
                p = n("718381"),
                m = n("875834"),
                I = n("782340");

            function v(e) {
                var t;
                let n, v, C, {
                        channel: M,
                        message: g,
                        target: N,
                        attachment: x,
                        onSelect: E,
                        onHeightUpdate: R
                    } = e,
                    A = N;
                if (null != x) v = n = x.url;
                else
                    for (;
                        (0, r.isElement)(A);)(0, r.isElement)(A, HTMLImageElement) && null != A.src && (v = A.src), (0, r.isElement)(A, HTMLAnchorElement) && null != A.href && (n = A.href, C = A.textContent), A = A.parentNode;
                let S = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
                    O = (0, c.default)(S),
                    T = (0, d.default)(S),
                    j = (0, f.default)({
                        commandType: s.ApplicationCommandType.MESSAGE,
                        commandTargetId: g.id,
                        channel: M,
                        guildId: void 0,
                        onShow: R
                    }),
                    w = (0, m.default)(g, M),
                    _ = (0, h.default)(g, M),
                    V = (0, p.default)(g, M),
                    b = (0, o.default)(null != n ? n : v, C),
                    L = (0, a.default)({
                        id: g.id,
                        label: I.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(g.channel_id, "-").concat(g.id)
                    });
                return (0, l.jsxs)(u.Menu, {
                    navId: "message",
                    onClose: i.closeContextMenu,
                    "aria-label": I.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: E,
                    children: [(0, l.jsx)(u.MenuGroup, {
                        children: O
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: T
                    }), (0, l.jsxs)(u.MenuGroup, {
                        children: [j, w, _, V]
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: b
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: L
                    })]
                })
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return r
                },
                default: function() {
                    return p
                }
            });
            var l, r, u = n("920040");
            n("773670");
            var i = n("575482"),
                s = n.n(i),
                a = n("77078"),
                c = n("36694"),
                o = n("381546"),
                d = n("68238"),
                f = n("423487"),
                h = n("866821");
            (l = r || (r = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var p = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: i = "text-normal",
                    textVariant: p = "text-sm/medium"
                } = e, m = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return f.default;
                        case r.INFO:
                            return d.default;
                        case r.ERROR:
                            return o.default;
                        case r.POSITIVE:
                            return c.default
                    }
                }(n), I = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return h.warning;
                        case r.INFO:
                            return h.info;
                        case r.ERROR:
                            return h.error;
                        case r.POSITIVE:
                            return h.positive
                    }
                }(n);
                return (0, u.jsxs)("div", {
                    className: s(h.container, I, l),
                    children: [(0, u.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, u.jsx)(m, {
                            className: h.icon
                        })
                    }), (0, u.jsx)(a.Text, {
                        className: h.text,
                        color: i,
                        variant: p,
                        children: t
                    })]
                })
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("469563"),
                u = n("35647"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, u.IdIcon)
        }
    }
]);