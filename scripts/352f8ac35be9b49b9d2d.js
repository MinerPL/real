(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44532"], {
        962429: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < t.length && r < e.length; r++)
                    if (!Object.is(e[r], t[r])) return !1;
                return !0
            }
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            })
        },
        365444: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useForceUpdate: function() {
                    return n.default
                },
                useStableMemo: function() {
                    return s.default
                },
                useLazyValue: function() {
                    return l.default
                }
            });
            var n = r("732427"),
                s = r("866490"),
                l = r("246105")
        },
        732427: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("773670");

            function s() {
                let [, e] = (0, n.useState)({});
                return (0, n.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("773670");
            let s = {};

            function l(e) {
                let t = (0, n.useRef)(s);
                return t.current === s && (t.current = e()), t.current
            }
        },
        866490: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("773670"),
                s = r("962429");
            let l = [];

            function a(e, t) {
                let r = (0, n.useRef)(),
                    a = (0, n.useRef)(l);
                return a.current === l ? (r.current = e(), a.current = t) : !(0, s.default)(t, a.current) && (r.current = e(), a.current = t), r.current
            }
        },
        397659: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                HeadphonesSlashIcon: function() {
                    return a
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("912557"),
                l = r("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20Zm-5.649.234a.478.478 0 0 0-.111-.769A10.954 10.954 0 0 0 12 1C5.925 1 1 5.925 1 12c0 1.78.423 3.46 1.173 4.947a.478.478 0 0 0 .769.111l3.19-3.19c.256-.256.16-.69-.196-.763A4.997 4.997 0 0 0 4.917 13H3.055a9 9 0 0 1 12.662-9.199c.196.09.429.053.582-.1l.76-.76ZM20.2 8.283a.518.518 0 0 1 .1-.582l.76-.76a.478.478 0 0 1 .769.112A10.954 10.954 0 0 1 23 12c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862a8.967 8.967 0 0 0-.746-4.717Zm-10.09 9.609c.237-.238.636-.176.727.147.273.97.062 2.04-.616 2.843-.82.973-2.278 1.448-3.55.742a.164.164 0 0 1-.035-.259l3.473-3.473Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        696675: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MicrophoneIcon: function() {
                    return a
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("912557"),
                l = r("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        780624: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MicrophoneSlashIcon: function() {
                    return a
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("912557"),
                l = r("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "m2.707 22.707 20-20a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414ZM10.803 17.319c-.216.216-.106.581.197.62V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 0 0-2 0 5.976 5.976 0 0 1-1.38 3.828l-.022.027a5.988 5.988 0 0 1-4.274 2.136.524.524 0 0 0-.344.15l-1.177 1.178ZM15.357 4.521c.15-.15.192-.38.084-.562A4 4 0 0 0 8 6v4c-.001.294.03.58.091.857.076.346.498.432.749.181l6.516-6.517ZM5.062 13.985a.473.473 0 0 0 .747.084l.748-.747a.53.53 0 0 0 .087-.614A5.974 5.974 0 0 1 6 10a1 1 0 0 0-2 0c0 1.45.386 2.812 1.062 3.985Z",
                        className: i
                    })
                })
            }
        },
        29846: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BlockedUsersNotice: function() {
                    return g
                },
                BlockedUser: function() {
                    return m
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("498225"),
                l = r("912557"),
                a = r("77078"),
                i = r("272030"),
                u = r("328275"),
                c = r("849467"),
                o = r("258078"),
                d = r("823050"),
                f = r("158998"),
                h = r("325861"),
                C = r("151642"),
                x = r("782340"),
                v = r("200334");
            let g = e => {
                    let {
                        channelId: t
                    } = e, r = (0, C.useStageBlockedUsersCount)(t);
                    return 0 === r ? null : (0, n.jsxs)("div", {
                        className: v.blockedNotice,
                        children: [(0, n.jsx)(u.default, {
                            className: v.blockedIcon,
                            color: l.default.unsafe_rawColors.RED_400.css
                        }), (0, n.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: x.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: r
                            })
                        }), (0, n.jsx)(a.Clickable, {
                            className: v.blockedButton,
                            onClick: e => {
                                (0, i.openContextMenu)(e, e => (0, n.jsx)(p, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: x.default.Messages.VIEW_ALL
                        })]
                    })
                },
                m = e => {
                    let {
                        user: t,
                        showStatus: r,
                        speaker: l,
                        channelId: i
                    } = e, u = (0, s.useStateFromStores)([h.default], () => h.default.isModerator(t.id, i)), C = null;
                    return r && (C = l ? x.default.Messages.STAGE_SPEAKER : u ? x.default.Messages.STAGE_MODERATOR_TOOLTIP : x.default.Messages.STAGE_AUDIENCE), (0, n.jsxs)("div", {
                        className: v.user,
                        children: [(0, n.jsx)(d.default, {
                            src: t.getAvatarURL(null, 32),
                            size: a.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: l ? () => (0, n.jsx)(c.default, {
                                className: v.icon
                            }) : null
                        }, t.id), (0, n.jsxs)("div", {
                            className: v.userInfo,
                            children: [(0, n.jsxs)("div", {
                                className: v.username,
                                children: [(0, n.jsx)(o.default, {
                                    size: r ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    children: f.default.getName(t)
                                }), (0, n.jsx)(o.default, {
                                    size: r ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    color: o.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: v.username,
                                children: [(0, n.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: x.default.Messages.BLOCKED
                                }), (0, n.jsxs)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", C]
                                })]
                            })]
                        })]
                    })
                },
                p = e => {
                    let {
                        channelId: t
                    } = e, r = (0, C.useStageBlockedUsers)(t);
                    return (0, n.jsx)(a.Scroller, {
                        className: v.container,
                        children: r.map(e => {
                            let {
                                user: r
                            } = e;
                            return (0, n.jsx)(m, {
                                user: r,
                                channelId: t
                            }, r.id)
                        })
                    })
                }
        },
        203966: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("77078"),
                l = r("476765"),
                a = r("151642"),
                i = r("29846"),
                u = r("782340"),
                c = r("433800");

            function o(e) {
                let {
                    channel: t,
                    onAccept: r,
                    transitionState: o,
                    onClose: d,
                    ...f
                } = e, h = (0, l.useUID)(), C = (0, a.useStageBlockedUsers)(t.id);
                return (0, n.jsxs)(s.ModalRoot, {
                    transitionState: o,
                    "aria-labelledby": h,
                    ...f,
                    size: s.ModalSize.SMALL,
                    children: [(0, n.jsxs)(s.ModalHeader, {
                        className: c.header,
                        children: [(0, n.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: u.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                                number: C.length
                            })
                        }), (0, n.jsx)(s.Text, {
                            color: "header-secondary",
                            className: c.description,
                            variant: "text-sm/normal",
                            children: u.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
                                number: C.length
                            })
                        })]
                    }), (0, n.jsx)(s.ModalContent, {
                        className: c.content,
                        children: C.map(e => {
                            let {
                                user: r,
                                id: s,
                                speaker: l
                            } = e;
                            return (0, n.jsx)(i.BlockedUser, {
                                user: r,
                                speaker: l,
                                showStatus: !0,
                                channelId: t.id
                            }, s)
                        })
                    }), (0, n.jsxs)(s.ModalFooter, {
                        className: c.footer,
                        children: [(0, n.jsx)(s.Button, {
                            onClick: () => {
                                r(t), d()
                            },
                            color: s.Button.Colors.BRAND,
                            children: u.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
                        }), (0, n.jsx)(s.Button, {
                            onClick: () => {
                                d()
                            },
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: u.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return i
                },
                UID: function() {
                    return u
                }
            });
            var n = r("552473"),
                s = r.n(n),
                l = r("365444");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return s(e)
                },
                i = () => (0, l.useLazyValue)(() => a()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(i())
                }
        },
        328275: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("75196");

            function l(e) {
                let {
                    width: t = 32,
                    height: r = 32,
                    color: l = "currentColor",
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(a),
                    width: t,
                    height: r,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: [(0, n.jsx)("clipPath", {
                        children: (0, n.jsx)("path", {
                            d: "m.000183 0h16v16h-16z"
                        })
                    }), (0, n.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, n.jsx)("path", {
                            d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                            fill: l
                        })
                    })]
                })
            }
        },
        200639: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("469563"),
                l = r("397659"),
                a = r("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            d: "M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z",
                            fill: s
                        }), (0, n.jsx)("path", {
                            d: "M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z",
                            fill: s
                        }), (0, n.jsx)("path", {
                            d: "M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z",
                            className: l,
                            fill: s
                        })]
                    })
                }, l.HeadphonesSlashIcon)
        },
        849467: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("469563"),
                l = r("696675"),
                a = r("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: l,
                            fill: s
                        }), (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: l,
                            fill: s
                        })]
                    })
                }, l.MicrophoneIcon)
        },
        97347: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("469563"),
                l = r("780624"),
                a = r("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            d: "M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z",
                            fill: s
                        }), (0, n.jsx)("path", {
                            d: "M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z",
                            fill: s
                        }), (0, n.jsx)("path", {
                            d: "M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z",
                            fill: s
                        }), (0, n.jsx)("path", {
                            d: "M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z",
                            className: l,
                            fill: s
                        })]
                    })
                }, l.MicrophoneSlashIcon)
        },
        823050: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return x
                }
            });
            var n, s, l = r("920040"),
                a = r("773670"),
                i = r("575482"),
                u = r.n(i),
                c = r("77078"),
                o = r("200639"),
                d = r("97347"),
                f = r("587974"),
                h = r("351701");
            (n = s || (s = {}))[n.OUTGOING = 0] = "OUTGOING", n[n.INCOMING = 1] = "INCOMING";
            class C extends a.PureComponent {
                renderStatus() {
                    let {
                        muted: e,
                        deafen: t
                    } = this.props, r = t ? o.default : d.default;
                    return e || t ? (0, l.jsx)(r, {
                        className: h.status
                    }, "status") : null
                }
                renderBorder() {
                    let {
                        speaking: e
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: u(h.border, {
                            [h.speaking]: e
                        })
                    }, "border")
                }
                renderMask() {
                    let {
                        muted: e,
                        speaking: t,
                        deafen: r
                    } = this.props;
                    return e && t ? (0, l.jsxs)(l.Fragment, {
                        children: [this.renderBorder(), this.renderStatus()]
                    }) : e || r ? (0, l.jsx)(l.Fragment, {
                        children: this.renderStatus()
                    }) : (0, l.jsx)(l.Fragment, {
                        children: this.renderBorder()
                    })
                }
                renderVoiceCallAvatar() {
                    let {
                        src: e,
                        disabled: t,
                        ringing: r,
                        ringingType: n,
                        avatarClassName: a,
                        muted: i,
                        deafen: o,
                        size: d,
                        renderIcon: C
                    } = this.props, x = (0, c.getAvatarSize)(d), v = (0, l.jsx)("img", {
                        src: e,
                        alt: " ",
                        className: u(h.voiceAvatar, a, {
                            [h.ringingOutgoing]: r && n === s.OUTGOING
                        })
                    });
                    if (t) return v;
                    let g = f.MaskIDs.AVATAR_DEFAULT;
                    return null != C ? g = d === c.AvatarSizes.SIZE_32 ? f.MaskIDs.AVATAR_CALL_ICON_32 : f.MaskIDs.AVATAR_CALL_ICON : (i || o) && (g = f.MaskIDs.AVATAR_VOICE_CALL_80), (0, l.jsxs)("div", {
                        className: h.callAvatarMaskContainer,
                        children: [(0, l.jsxs)(f.default, {
                            className: h.callAvatarMask,
                            width: x,
                            height: x,
                            mask: g,
                            children: [null == C ? void 0 : C(), v]
                        }), this.renderMask()]
                    })
                }
                render() {
                    let {
                        size: e,
                        onClick: t,
                        style: r,
                        onContextMenu: n,
                        className: a,
                        ringingType: i,
                        ringing: o
                    } = this.props, d = u(h.wrapper, {
                        [h.clickable]: null != t,
                        [h.ringingOutgoing]: o && i === s.OUTGOING,
                        [h.ringingIncoming]: o && i === s.INCOMING
                    }, a), f = (0, c.getAvatarSize)(e), C = {
                        height: f,
                        width: f,
                        ...r
                    };
                    return (0, l.jsx)("div", {
                        style: C,
                        onContextMenu: n,
                        className: d,
                        children: this.renderVoiceCallAvatar()
                    })
                }
            }
            C.defaultProps = {
                size: c.AvatarSizes.SIZE_80,
                ringingType: s.OUTGOING,
                speaking: !1,
                soundsharing: !1,
                ringing: !1,
                muted: !1,
                deafen: !1,
                hasVideo: !1,
                mirror: !1,
                disabled: !1,
                paused: !1
            }, C.RingingType = s;
            var x = C
        }
    }
]);