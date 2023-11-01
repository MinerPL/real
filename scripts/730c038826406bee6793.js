(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13072"], {
        527826: function(e, a, t) {
            "use strict";
            e.exports = t.p + "adf75861421c2a6a6269.png"
        },
        176488: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return m
                }
            });
            var s = t("872717"),
                d = t("679653"),
                l = t("305961"),
                n = t("42887"),
                r = t("27618"),
                c = t("697218"),
                i = t("171644"),
                o = t("49111"),
                u = t("782340");

            function m(e, a) {
                var t;
                let {
                    nonce: m,
                    forQRCode: f
                } = a, x = e.getGuildId(), N = l.default.getGuild(x), h = (0, i.XBOX_HANDOFF_SEARCH_PARAMS)({
                    guildId: null != x ? x : "0",
                    channelId: e.id,
                    channelName: (0, d.computeChannelName)(e, c.default, r.default),
                    guildName: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : u.default.Messages.UNNAMED,
                    muted: n.default.isSelfMute(),
                    deafened: n.default.isSelfDeaf(),
                    nonce: m
                });
                return f ? "".concat(s.default.getAPIBaseURL()).concat(o.Endpoints.XBOX_HANDOFF, "?").concat(h.toString()) : "".concat(i.XBOX_URL_BASE, "?").concat(h.toString())
            }
        },
        613895: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return p
                }
            });
            var s = t("37983"),
                d = t("884691"),
                l = t("446674"),
                n = t("77078"),
                r = t("671278"),
                c = t("420145"),
                i = t("701909"),
                o = t("76393"),
                u = t("176488"),
                m = t("780338"),
                f = t("171644"),
                x = t("49111"),
                N = t("782340"),
                h = t("637103");

            function _(e) {
                let {
                    step: a,
                    instructions: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: h.cardRow,
                    children: [(0, s.jsx)("div", {
                        className: h.stepNumberContainer,
                        children: (0, s.jsx)(n.Text, {
                            variant: "text-sm/semibold",
                            className: h.stepNumber,
                            children: a
                        })
                    }), (0, s.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "header-primary",
                        className: h.instructions,
                        children: t
                    })]
                })
            }

            function p(e) {
                let {
                    channel: a,
                    transitionState: t,
                    onClose: p
                } = e, O = (0, l.useStateFromStores)([o.default], () => null != o.default.getRemoteSessionId()), g = (0, u.default)(a, {
                    forQRCode: !0
                });
                return d.useEffect(() => {
                    O && p()
                }, [O, p]), d.useEffect(() => {
                    (0, m.default)(a.id, f.GameConsoleTypes.XBOX)
                }, [a.id]), (0, s.jsxs)(n.ModalRoot, {
                    size: n.ModalSize.DYNAMIC,
                    className: h.modalRoot,
                    transitionState: t,
                    children: [(0, s.jsxs)(n.ModalHeader, {
                        separator: !1,
                        className: h.modalHeaderContainer,
                        children: [(0, s.jsx)(n.Heading, {
                            className: h.modalHeader,
                            variant: "heading-xl/extrabold",
                            children: N.default.Messages.TRANSFER_VOICE_TO_XBOX
                        }), (0, s.jsx)(n.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: N.default.Messages.XBOX_APP_REQUIRED_SUBHEADER
                        })]
                    }), (0, s.jsx)(n.ModalContent, {
                        className: h.content,
                        children: (0, s.jsxs)("div", {
                            className: h.card,
                            children: [(0, s.jsxs)("div", {
                                className: h.cardText,
                                children: [(0, s.jsxs)(n.Text, {
                                    variant: "text-lg/semibold",
                                    color: "header-primary",
                                    className: h.cardRow,
                                    children: [(0, s.jsx)(c.default, {
                                        className: h.cardHeaderIcon
                                    }), N.default.Messages.XBOX_APP_FOR_MOBILE]
                                }), (0, s.jsx)(_, {
                                    step: 1,
                                    instructions: N.default.Messages.XBOX_APP_STEP_ONE
                                }), (0, s.jsx)(_, {
                                    step: 2,
                                    instructions: N.default.Messages.XBOX_APP_STEP_TWO
                                }), (0, s.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    children: (0, s.jsx)(n.Anchor, {
                                        className: h.learnMore,
                                        href: i.default.getArticleURL(x.HelpdeskArticles.XBOX_CONNECTION),
                                        children: N.default.Messages.LEARN_MORE
                                    })
                                })]
                            }), (0, s.jsx)(r.default, {
                                className: h.qrCode,
                                size: 120,
                                text: g
                            })]
                        })
                    }), (0, s.jsx)(n.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: p
                    })]
                })
            }
        }
    }
]);