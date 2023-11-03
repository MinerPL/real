(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84648"], {
        804090: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                HammerIcon: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M1.233 21.134a1 1 0 0 1 0-1.414l7.475-7.475a.5.5 0 0 1 .707 0l2.121 2.121a.5.5 0 0 1 0 .707l-7.475 7.475a1 1 0 0 1-1.414 0l-1.414-1.414ZM7.758 7.76l8.485 8.485a2 2 0 0 0 2.829 0l3.535-3.536a2 2 0 0 0 0-2.828l-2.94-2.94.658-.656a1 1 0 0 0 0-1.414L18.91 3.456a1 1 0 0 0-1.414 0l-.657.657-2.717-2.717a2 2 0 0 0-2.829 0L7.758 4.93a2 2 0 0 0 0 2.829Z",
                        className: i
                    })
                })
            }
        },
        35647: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                IdIcon: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: i
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: i
                    })]
                })
            }
        },
        176032: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                r = l("77078"),
                s = l("272030"),
                i = l("957255"),
                o = l("530346"),
                u = l("662255"),
                c = l("306160"),
                d = l("49111"),
                f = l("782340"),
                h = l("297298"),
                v = function(e) {
                    var t;
                    let {
                        guild: v,
                        user: p,
                        onSelect: C
                    } = e, M = null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : "", I = (0, a.useStateFromStores)([i.default], () => null != v && i.default.canManageUser(d.Permissions.BAN_MEMBERS, p, v), [v, p]);
                    return (0, n.jsx)(r.Menu, {
                        navId: "member-application-context-menu",
                        className: h.contextMenu,
                        onClose: s.closeContextMenu,
                        "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: C,
                        children: (0, n.jsxs)(r.MenuGroup, {
                            children: [I && (0, n.jsx)(r.MenuItem, {
                                id: "ban",
                                label: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
                                icon: o.default,
                                color: "danger",
                                action: () => (0, r.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await l.el("743506").then(l.bind(l, "743506"));
                                    return t => (0, n.jsx)(e, {
                                        ...t,
                                        guildId: M,
                                        user: p
                                    })
                                })
                            }, "ban"), (0, n.jsx)(r.MenuItem, {
                                id: "copyUserId",
                                label: "Copy User ID",
                                icon: u.default,
                                action: () => (0, c.copy)(p.id)
                            }, "copyUserId")]
                        })
                    })
                }
        },
        530346: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                r = l("804090"),
                s = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.75 0.5L15.5 6.5V8L11.751 11.751H10.25L3.5 5.75V4.25L7.25 0.5H8.75ZM12.2803 1.03033C12.5732 0.737437 13.0458 0.735124 13.346 1.0353L14.3967 2.08602C14.6923 2.38166 14.6966 2.85672 14.4017 3.15165C14.1088 3.44454 13.6362 3.44686 13.336 3.14668L12.2853 2.09596C11.9897 1.80032 11.9854 1.32527 12.2803 1.03033V1.03033ZM5.27297 8.75L6.86396 10.341L2.09099 15.114L0.5 13.523L5.27297 8.75Z",
                            fill: a
                        })
                    })
                }, r.HammerIcon)
        },
        662255: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                r = l("35647"),
                s = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon)
        }
    }
]);