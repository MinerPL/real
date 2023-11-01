(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94672"], {
        48174: function(e, t, r) {
            "use strict";

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < t.length && r < e.length; r++)
                    if (!Object.is(e[r], t[r])) return !1;
                return !0
            }
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            })
        },
        775560: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useForceUpdate: function() {
                    return s.default
                },
                useStableMemo: function() {
                    return n.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var s = r("14716"),
                n = r("745510"),
                a = r("315378")
        },
        14716: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var s = r("884691");

            function n() {
                let [, e] = (0, s.useState)({});
                return (0, s.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var s = r("884691");
            let n = {};

            function a(e) {
                let t = (0, s.useRef)(n);
                return t.current === n && (t.current = e()), t.current
            }
        },
        745510: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var s = r("884691"),
                n = r("48174");
            let a = [];

            function l(e, t) {
                let r = (0, s.useRef)(),
                    l = (0, s.useRef)(a);
                return l.current === a ? (r.current = e(), l.current = t) : !(0, n.default)(t, l.current) && (r.current = e(), l.current = t), r.current
            }
        },
        29846: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BlockedUsersNotice: function() {
                    return m
                },
                BlockedUser: function() {
                    return _
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("446674"),
                a = r("669491"),
                l = r("77078"),
                u = r("272030"),
                o = r("328275"),
                c = r("849467"),
                d = r("258078"),
                i = r("823050"),
                f = r("158998"),
                S = r("325861"),
                x = r("151642"),
                h = r("782340"),
                E = r("960236");
            let m = e => {
                    let {
                        channelId: t
                    } = e, r = (0, x.useStageBlockedUsersCount)(t);
                    return 0 === r ? null : (0, s.jsxs)("div", {
                        className: E.blockedNotice,
                        children: [(0, s.jsx)(o.default, {
                            className: E.blockedIcon,
                            color: a.default.unsafe_rawColors.RED_400.css
                        }), (0, s.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: h.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: r
                            })
                        }), (0, s.jsx)(l.Clickable, {
                            className: E.blockedButton,
                            onClick: e => {
                                (0, u.openContextMenu)(e, e => (0, s.jsx)(g, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: h.default.Messages.VIEW_ALL
                        })]
                    })
                },
                _ = e => {
                    let {
                        user: t,
                        showStatus: r,
                        speaker: a,
                        channelId: u
                    } = e, o = (0, n.useStateFromStores)([S.default], () => S.default.isModerator(t.id, u)), x = null;
                    return r && (x = a ? h.default.Messages.STAGE_SPEAKER : o ? h.default.Messages.STAGE_MODERATOR_TOOLTIP : h.default.Messages.STAGE_AUDIENCE), (0, s.jsxs)("div", {
                        className: E.user,
                        children: [(0, s.jsx)(i.default, {
                            src: t.getAvatarURL(null, 32),
                            size: l.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: a ? () => (0, s.jsx)(c.default, {
                                className: E.icon
                            }) : null
                        }, t.id), (0, s.jsxs)("div", {
                            className: E.userInfo,
                            children: [(0, s.jsxs)("div", {
                                className: E.username,
                                children: [(0, s.jsx)(d.default, {
                                    size: r ? d.default.Sizes.SIZE_16 : d.default.Sizes.SIZE_14,
                                    children: f.default.getName(t)
                                }), (0, s.jsx)(d.default, {
                                    size: r ? d.default.Sizes.SIZE_16 : d.default.Sizes.SIZE_14,
                                    color: d.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, s.jsxs)("div", {
                                className: E.username,
                                children: [(0, s.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: h.default.Messages.BLOCKED
                                }), (0, s.jsxs)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", x]
                                })]
                            })]
                        })]
                    })
                },
                g = e => {
                    let {
                        channelId: t
                    } = e, r = (0, x.useStageBlockedUsers)(t);
                    return (0, s.jsx)(l.Scroller, {
                        className: E.container,
                        children: r.map(e => {
                            let {
                                user: r
                            } = e;
                            return (0, s.jsx)(_, {
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
                    return d
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("77078"),
                a = r("476765"),
                l = r("151642"),
                u = r("29846"),
                o = r("782340"),
                c = r("699141");

            function d(e) {
                let {
                    channel: t,
                    onAccept: r,
                    transitionState: d,
                    onClose: i,
                    ...f
                } = e, S = (0, a.useUID)(), x = (0, l.useStageBlockedUsers)(t.id);
                return (0, s.jsxs)(n.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": S,
                    ...f,
                    size: n.ModalSize.SMALL,
                    children: [(0, s.jsxs)(n.ModalHeader, {
                        className: c.header,
                        children: [(0, s.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                                number: x.length
                            })
                        }), (0, s.jsx)(n.Text, {
                            color: "header-secondary",
                            className: c.description,
                            variant: "text-sm/normal",
                            children: o.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
                                number: x.length
                            })
                        })]
                    }), (0, s.jsx)(n.ModalContent, {
                        className: c.content,
                        children: x.map(e => {
                            let {
                                user: r,
                                id: n,
                                speaker: a
                            } = e;
                            return (0, s.jsx)(u.BlockedUser, {
                                user: r,
                                speaker: a,
                                showStatus: !0,
                                channelId: t.id
                            }, n)
                        })
                    }), (0, s.jsxs)(n.ModalFooter, {
                        className: c.footer,
                        children: [(0, s.jsx)(n.Button, {
                            onClick: () => {
                                r(t), i()
                            },
                            color: n.Button.Colors.BRAND,
                            children: o.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
                        }), (0, s.jsx)(n.Button, {
                            onClick: () => {
                                i()
                            },
                            color: n.Button.Colors.PRIMARY,
                            look: n.Button.Looks.LINK,
                            children: o.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);