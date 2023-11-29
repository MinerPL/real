(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44532"], {
        203966: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                o = n("476765"),
                a = n("151642"),
                l = n("29846"),
                u = n("782340"),
                d = n("699141");

            function i(e) {
                let {
                    channel: t,
                    onAccept: n,
                    transitionState: i,
                    onClose: c,
                    ...h
                } = e, S = (0, o.useUID)(), f = (0, a.useStageBlockedUsers)(t.id);
                return (0, s.jsxs)(r.ModalRoot, {
                    transitionState: i,
                    "aria-labelledby": S,
                    ...h,
                    size: r.ModalSize.SMALL,
                    children: [(0, s.jsxs)(r.ModalHeader, {
                        className: d.header,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            children: u.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                                number: f.length
                            })
                        }), (0, s.jsx)(r.Text, {
                            color: "header-secondary",
                            className: d.description,
                            variant: "text-sm/normal",
                            children: u.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
                                number: f.length
                            })
                        })]
                    }), (0, s.jsx)(r.ModalContent, {
                        className: d.content,
                        children: f.map(e => {
                            let {
                                user: n,
                                id: r,
                                speaker: o
                            } = e;
                            return (0, s.jsx)(l.BlockedUser, {
                                user: n,
                                speaker: o,
                                showStatus: !0,
                                channelId: t.id
                            }, r)
                        })
                    }), (0, s.jsxs)(r.ModalFooter, {
                        className: d.footer,
                        children: [(0, s.jsx)(r.Button, {
                            onClick: () => {
                                n(t), c()
                            },
                            color: r.Button.Colors.BRAND,
                            children: u.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
                        }), (0, s.jsx)(r.Button, {
                            onClick: () => {
                                c()
                            },
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            children: u.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return l
                },
                UID: function() {
                    return u
                }
            });
            var s = n("995008"),
                r = n.n(s),
                o = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                l = () => (0, o.useLazyValue)(() => a()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(l())
                }
        }
    }
]);