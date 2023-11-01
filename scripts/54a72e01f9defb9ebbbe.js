(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89327"], {
        881892: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return D
                }
            });
            var i = t("37983"),
                a = t("884691"),
                l = t("151426"),
                n = t("77078"),
                o = t("206230"),
                d = t("10641"),
                c = t("491605"),
                r = t("571658"),
                m = t("71216"),
                u = t("191735"),
                x = t("898260"),
                h = t("599110"),
                A = t("412707"),
                _ = t("838093"),
                I = t("49111"),
                P = t("994428"),
                N = t("782340"),
                C = t("592283");

            function D(e) {
                let {
                    guildId: s,
                    transitionState: D,
                    onClose: R,
                    analyticsType: T = l.DismissibleContent.APP_DIRECTORY_UPSELL_MODAL
                } = e;
                return a.useEffect(() => {
                    h.default.track(I.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                        type: l.DismissibleContent[T],
                        guild_id: s
                    })
                }, [s, T]), (0, i.jsxs)(n.ModalRoot, {
                    transitionState: D,
                    className: C.modal,
                    size: n.ModalSize.SMALL,
                    children: [(0, i.jsxs)(n.ModalContent, {
                        className: C.modalContent,
                        children: [(0, i.jsx)(c.default, {
                            autoplay: !0,
                            shouldAnimate: !o.default.useReducedMotion,
                            importData: () => t.el("805888").then(t.t.bind(t, "805888", 19)),
                            className: C.animation
                        }), (0, i.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            children: N.default.Messages.APP_DIRECTORY_IPP_HEADER
                        }), (0, i.jsx)(n.Text, {
                            variant: "text-md/medium",
                            className: C.subheader,
                            color: "text-muted",
                            children: N.default.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER
                        }), (0, i.jsxs)("ul", {
                            className: C.listContainer,
                            children: [(0, i.jsxs)("li", {
                                className: C.listItem,
                                children: [(0, i.jsx)(u.default, {
                                    className: C.wandIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, i.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: N.default.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION
                                })]
                            }), (0, i.jsx)(x.default, {
                                className: C.divider
                            }), (0, i.jsxs)("li", {
                                className: C.listItem,
                                children: [(0, i.jsx)(m.default, {
                                    className: C.robotIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, i.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: N.default.Messages.APP_DIRECTORY_IPP_AUTOMATION
                                })]
                            }), (0, i.jsx)(x.default, {
                                className: C.divider
                            }), (0, i.jsxs)("li", {
                                className: C.listItem,
                                children: [(0, i.jsx)(r.default, {
                                    className: C.smileIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, i.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: N.default.Messages.APP_DIRECTORY_IPP_FUN
                                })]
                            })]
                        })]
                    }), (0, i.jsxs)(n.ModalFooter, {
                        className: C.modalFooter,
                        children: [(0, i.jsx)(n.Button, {
                            onClick: () => {
                                R(), (0, d.markDismissibleContentAsDismissed)(T, {
                                    forceTrack: !0,
                                    dismissAction: P.ContentDismissActionType.PRIMARY,
                                    guildId: s
                                }), (0, _.goToAppDirectory)({
                                    guildId: s,
                                    entrypoint: {
                                        name: A.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_UPSELL_MODAL
                                    }
                                })
                            },
                            children: N.default.Messages.GUILD_EVENT_UPSELL_PRIMARY_CTA
                        }), (0, i.jsx)(n.Button, {
                            look: n.Button.Looks.LINK,
                            onClick: () => {
                                R(), (0, d.markDismissibleContentAsDismissed)(T, {
                                    forceTrack: !0,
                                    dismissAction: P.ContentDismissActionType.SECONDARY,
                                    guildId: s
                                })
                            },
                            color: n.Button.Colors.PRIMARY,
                            children: N.default.Messages.NOT_NOW
                        })]
                    })]
                })
            }
        }
    }
]);