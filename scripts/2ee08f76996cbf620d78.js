(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43151"], {
        35647: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                IdIcon: function() {
                    return a
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("669491"),
                r = t("75196");
            let a = e => {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: s
                    })]
                })
            }
        },
        861370: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return u
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("77078"),
                r = t("845579"),
                a = t("662255"),
                s = t("306160");

            function u(e) {
                let {
                    id: n,
                    label: t,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !s.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(n);
                return (0, l.jsx)(i.MenuItem, {
                    id: f,
                    label: t,
                    action: function(e) {
                        let t = null != o && e.shiftKey ? o : n;
                        (0, s.copy)(t), null == u || u()
                    },
                    icon: a.default,
                    showIconFirst: c
                }, f)
            }
        },
        348866: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("77078"),
                r = t("272030"),
                a = t("861370"),
                s = t("970755"),
                u = t("782340");

            function o(e) {
                let {
                    channel: n,
                    integration: t,
                    onSelect: o
                } = e, c = (0, a.default)({
                    id: n.id,
                    label: u.default.Messages.COPY_ID_APPLICATION
                });
                return (0, l.jsxs)(i.Menu, {
                    "aria-label": u.default.Messages.MANAGE_INTEGRATION,
                    navId: "manage-integration",
                    onClose: r.closeContextMenu,
                    onSelect: o,
                    children: [(0, l.jsx)(i.MenuGroup, {
                        children: (0, l.jsx)(i.MenuItem, {
                            id: "remove-integration",
                            label: u.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                            action: () => {
                                (0, s.deletePrivateChannelIntegration)(n.id, t.application.id), null != o && o()
                            },
                            color: "danger"
                        })
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: c
                    })]
                })
            }
        },
        662255: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("469563"),
                r = t("35647"),
                a = t("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: t = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: n,
                        height: t,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon)
        }
    }
]);