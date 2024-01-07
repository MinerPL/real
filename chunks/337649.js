            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("476765"),
                i = n("849467"),
                u = n("155207"),
                r = n("228427"),
                d = n("244480"),
                o = n("151642"),
                c = n("29846"),
                f = n("119184"),
                _ = n("782340"),
                E = n("262999");

            function h(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: h,
                    ...T
                } = e, p = (0, l.useUID)(), g = (0, o.useStageBlockedUsersCount)(t.id), I = async () => {
                    await (0, d.moveSelfToAudience)(t), h()
                }, S = async () => {
                    await (0, d.audienceAckRequestToSpeak)(t, !1), h()
                };
                return (0, a.jsx)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": p,
                    ...T,
                    size: s.ModalSize.SMALL,
                    children: (0, a.jsxs)(s.ModalContent, {
                        className: E.content,
                        children: [(0, a.jsx)(f.default, {
                            children: (0, a.jsx)("div", {
                                className: E.stageIconBackground,
                                children: (0, a.jsx)(r.default, {
                                    width: 40,
                                    height: 40,
                                    className: E.stageIcon
                                })
                            })
                        }), (0, a.jsx)(s.Heading, {
                            id: p,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: E.headerTitle,
                            children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: E.headerSubtitle,
                            children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                        }), g > 0 && (0, a.jsx)(c.BlockedUsersNotice, {
                            channelId: t.id
                        }), (0, a.jsxs)("div", {
                            className: E.buttonsContainer,
                            children: [(0, a.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: E.button,
                                innerClassName: E.innerButton,
                                onClick: S,
                                children: [(0, a.jsx)("div", {
                                    className: E.icon,
                                    children: (0, a.jsx)(i.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
                            }), (0, a.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: E.button,
                                innerClassName: E.innerButton,
                                onClick: I,
                                children: [(0, a.jsx)("div", {
                                    className: E.icon,
                                    children: (0, a.jsx)(u.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
                            })]
                        })]
                    })
                })
            }