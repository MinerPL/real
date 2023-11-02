(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44532"], {
        29846: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                BlockedUsersNotice: function() {
                    return m
                },
                BlockedUser: function() {
                    return _
                }
            });
            var t = a("37983");
            a("884691");
            var l = a("446674"),
                r = a("669491"),
                n = a("77078"),
                o = a("272030"),
                d = a("328275"),
                c = a("849467"),
                i = a("258078"),
                u = a("823050"),
                x = a("158998"),
                S = a("325861"),
                f = a("151642"),
                E = a("782340"),
                h = a("960236");
            let m = e => {
                    let {
                        channelId: s
                    } = e, a = (0, f.useStageBlockedUsersCount)(s);
                    return 0 === a ? null : (0, t.jsxs)("div", {
                        className: h.blockedNotice,
                        children: [(0, t.jsx)(d.default, {
                            className: h.blockedIcon,
                            color: r.default.unsafe_rawColors.RED_400.css
                        }), (0, t.jsx)(n.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: E.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: a
                            })
                        }), (0, t.jsx)(n.Clickable, {
                            className: h.blockedButton,
                            onClick: e => {
                                (0, o.openContextMenu)(e, e => (0, t.jsx)(C, {
                                    ...e,
                                    channelId: s
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: E.default.Messages.VIEW_ALL
                        })]
                    })
                },
                _ = e => {
                    let {
                        user: s,
                        showStatus: a,
                        speaker: r,
                        channelId: o
                    } = e, d = (0, l.useStateFromStores)([S.default], () => S.default.isModerator(s.id, o)), f = null;
                    return a && (f = r ? E.default.Messages.STAGE_SPEAKER : d ? E.default.Messages.STAGE_MODERATOR_TOOLTIP : E.default.Messages.STAGE_AUDIENCE), (0, t.jsxs)("div", {
                        className: h.user,
                        children: [(0, t.jsx)(u.default, {
                            src: s.getAvatarURL(null, 32),
                            size: n.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: r ? () => (0, t.jsx)(c.default, {
                                className: h.icon
                            }) : null
                        }, s.id), (0, t.jsxs)("div", {
                            className: h.userInfo,
                            children: [(0, t.jsxs)("div", {
                                className: h.username,
                                children: [(0, t.jsx)(i.default, {
                                    size: a ? i.default.Sizes.SIZE_16 : i.default.Sizes.SIZE_14,
                                    children: x.default.getName(s)
                                }), (0, t.jsx)(i.default, {
                                    size: a ? i.default.Sizes.SIZE_16 : i.default.Sizes.SIZE_14,
                                    color: i.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(s.discriminator)
                                })]
                            }), (0, t.jsxs)("div", {
                                className: h.username,
                                children: [(0, t.jsx)(n.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: E.default.Messages.BLOCKED
                                }), (0, t.jsxs)(n.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", f]
                                })]
                            })]
                        })]
                    })
                },
                C = e => {
                    let {
                        channelId: s
                    } = e, a = (0, f.useStageBlockedUsers)(s);
                    return (0, t.jsx)(n.Scroller, {
                        className: h.container,
                        children: a.map(e => {
                            let {
                                user: a
                            } = e;
                            return (0, t.jsx)(_, {
                                user: a,
                                channelId: s
                            }, a.id)
                        })
                    })
                }
        },
        203966: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return i
                }
            });
            var t = a("37983");
            a("884691");
            var l = a("77078"),
                r = a("476765"),
                n = a("151642"),
                o = a("29846"),
                d = a("782340"),
                c = a("699141");

            function i(e) {
                let {
                    channel: s,
                    onAccept: a,
                    transitionState: i,
                    onClose: u,
                    ...x
                } = e, S = (0, r.useUID)(), f = (0, n.useStageBlockedUsers)(s.id);
                return (0, t.jsxs)(l.ModalRoot, {
                    transitionState: i,
                    "aria-labelledby": S,
                    ...x,
                    size: l.ModalSize.SMALL,
                    children: [(0, t.jsxs)(l.ModalHeader, {
                        className: c.header,
                        children: [(0, t.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: d.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                                number: f.length
                            })
                        }), (0, t.jsx)(l.Text, {
                            color: "header-secondary",
                            className: c.description,
                            variant: "text-sm/normal",
                            children: d.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
                                number: f.length
                            })
                        })]
                    }), (0, t.jsx)(l.ModalContent, {
                        className: c.content,
                        children: f.map(e => {
                            let {
                                user: a,
                                id: l,
                                speaker: r
                            } = e;
                            return (0, t.jsx)(o.BlockedUser, {
                                user: a,
                                speaker: r,
                                showStatus: !0,
                                channelId: s.id
                            }, l)
                        })
                    }), (0, t.jsxs)(l.ModalFooter, {
                        className: c.footer,
                        children: [(0, t.jsx)(l.Button, {
                            onClick: () => {
                                a(s), u()
                            },
                            color: l.Button.Colors.BRAND,
                            children: d.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
                        }), (0, t.jsx)(l.Button, {
                            onClick: () => {
                                u()
                            },
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: d.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);