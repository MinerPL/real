            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return L
                }
            });
            var a = t("37983"),
                l = t("884691"),
                i = t("151426"),
                n = t("77078"),
                o = t("206230"),
                c = t("10641"),
                d = t("491605"),
                r = t("571658"),
                m = t("71216"),
                u = t("191735"),
                h = t("898260"),
                x = t("599110"),
                f = t("412707"),
                I = t("646186"),
                A = t("49111"),
                N = t("994428"),
                _ = t("782340"),
                M = t("592283");

            function L(e) {
                let {
                    guildId: s,
                    transitionState: L,
                    onClose: P,
                    analyticsType: C = i.DismissibleContent.APP_DIRECTORY_UPSELL_MODAL
                } = e;
                return l.useEffect(() => {
                    x.default.track(A.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.DismissibleContent[C],
                        guild_id: s
                    })
                }, [s, C]), (0, a.jsxs)(n.ModalRoot, {
                    transitionState: L,
                    className: M.modal,
                    size: n.ModalSize.SMALL,
                    children: [(0, a.jsxs)(n.ModalContent, {
                        className: M.modalContent,
                        children: [(0, a.jsx)(d.default, {
                            autoplay: !0,
                            shouldAnimate: !o.default.useReducedMotion,
                            importData: () => t.el("805888").then(t.t.bind(t, "805888", 19)),
                            className: M.animation
                        }), (0, a.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            children: _.default.Messages.APP_DIRECTORY_IPP_HEADER
                        }), (0, a.jsx)(n.Text, {
                            variant: "text-md/medium",
                            className: M.subheader,
                            color: "text-muted",
                            children: _.default.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER
                        }), (0, a.jsxs)("ul", {
                            className: M.listContainer,
                            children: [(0, a.jsxs)("li", {
                                className: M.listItem,
                                children: [(0, a.jsx)(u.default, {
                                    className: M.wandIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, a.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: _.default.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION
                                })]
                            }), (0, a.jsx)(h.default, {
                                className: M.divider
                            }), (0, a.jsxs)("li", {
                                className: M.listItem,
                                children: [(0, a.jsx)(m.default, {
                                    className: M.robotIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, a.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: _.default.Messages.APP_DIRECTORY_IPP_AUTOMATION
                                })]
                            }), (0, a.jsx)(h.default, {
                                className: M.divider
                            }), (0, a.jsxs)("li", {
                                className: M.listItem,
                                children: [(0, a.jsx)(r.default, {
                                    className: M.smileIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, a.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: _.default.Messages.APP_DIRECTORY_IPP_FUN
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)(n.ModalFooter, {
                        className: M.modalFooter,
                        children: [(0, a.jsx)(n.Button, {
                            onClick: () => {
                                P(), (0, c.markDismissibleContentAsDismissed)(C, {
                                    forceTrack: !0,
                                    dismissAction: N.ContentDismissActionType.PRIMARY,
                                    guildId: s
                                }), (0, I.goToAppDirectory)({
                                    guildId: s,
                                    entrypoint: {
                                        name: f.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_UPSELL_MODAL
                                    }
                                })
                            },
                            children: _.default.Messages.GUILD_EVENT_UPSELL_PRIMARY_CTA
                        }), (0, a.jsx)(n.Button, {
                            look: n.Button.Looks.LINK,
                            onClick: () => {
                                P(), (0, c.markDismissibleContentAsDismissed)(C, {
                                    forceTrack: !0,
                                    dismissAction: N.ContentDismissActionType.SECONDARY,
                                    guildId: s
                                })
                            },
                            color: n.Button.Colors.PRIMARY,
                            children: _.default.Messages.NOT_NOW
                        })]
                    })]
                })
            }