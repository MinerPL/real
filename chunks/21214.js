            "use strict";
            s.r(a), s.d(a, {
                useCreationIntentSlide: function() {
                    return o
                },
                default: function() {
                    return I
                }
            });
            var n = s("37983");
            s("884691");
            var t = s("414456"),
                l = s.n(t),
                E = s("77078"),
                _ = s("145131"),
                d = s("599110"),
                i = s("350956"),
                T = s("49111"),
                r = s("782340"),
                u = s("196481"),
                L = s("819963"),
                M = s("20264");
            let C = .5 > Math.random();

            function o(e) {
                let {
                    onClose: a,
                    onBack: s,
                    onCreationIntentChosen: t,
                    hasFooter: o = !0
                } = e, I = (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(E.Button, {
                        className: u.backButton,
                        look: E.Button.Looks.BLANK,
                        size: E.Button.Sizes.MIN,
                        onClick: s,
                        children: r.default.Messages.BACK
                    })
                });

                function A(e) {
                    d.default.track(T.AnalyticEvents.GUILD_CREATION_INTENT_SELECTED, {
                        skipped: null == e,
                        is_community: !!e
                    }), t(!!e)
                }
                let c = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(E.ModalHeader, {
                        direction: _.default.Direction.VERTICAL,
                        className: u.header,
                        separator: !1,
                        children: [(0, n.jsx)(E.Heading, {
                            className: l(u.title),
                            variant: "heading-xl/semibold",
                            children: r.default.Messages.CREATION_INTENT_TITLE
                        }), (0, n.jsx)(E.Text, {
                            className: u.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: r.default.Messages.CREATION_INTENT_DESCRIPTION
                        }), null != a && (0, n.jsx)(E.ModalCloseButton, {
                            className: u.closeButton,
                            onClick: a
                        })]
                    }), (0, n.jsxs)(E.ModalContent, {
                        className: u.optionsList,
                        children: [C ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(i.default, {
                                icon: L,
                                message: r.default.Messages.CREATION_INTENT_OPTION_FRIENDS,
                                onClick: () => A(!1)
                            }), (0, n.jsx)(i.default, {
                                icon: M,
                                message: r.default.Messages.CREATION_INTENT_OPTION_COMMUNITY,
                                onClick: () => A(!0)
                            })]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(i.default, {
                                icon: M,
                                message: r.default.Messages.CREATION_INTENT_OPTION_COMMUNITY,
                                onClick: () => A(!0)
                            }), (0, n.jsx)(i.default, {
                                icon: L,
                                message: r.default.Messages.CREATION_INTENT_OPTION_FRIENDS,
                                onClick: () => A(!1)
                            })]
                        }), (0, n.jsx)(E.Text, {
                            className: u.skip,
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: r.default.Messages.CREATION_INTENT_SKIP.format({
                                onSkip: () => A(null)
                            })
                        })]
                    }), o && (0, n.jsx)(E.ModalFooter, {
                        justify: _.default.Justify.BETWEEN,
                        children: I
                    })]
                });
                return {
                    content: c,
                    footer: I
                }
            }

            function I(e) {
                let {
                    content: a
                } = o(e);
                return a
            }