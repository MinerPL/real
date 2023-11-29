(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89327"], {
        310267: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                MagicWandIcon: function() {
                    return n
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("669491"),
                i = t("75196");
            let n = e => {
                let {
                    width: s = 24,
                    height: t = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "m21.182 2.818-.448-1.194a.25.25 0 0 0-.468 0l-.448 1.194-1.194.448a.25.25 0 0 0 0 .468l1.194.448.448 1.194a.25.25 0 0 0 .468 0l.448-1.194 1.194-.448a.25.25 0 0 0 0-.468l-1.194-.448ZM6.968 4.248l.76 2.025 2.024.759a.5.5 0 0 1 0 .936l-2.025.76-.759 2.024a.5.5 0 0 1-.936 0l-.76-2.025-2.024-.759a.5.5 0 0 1 0-.936l2.025-.76.759-2.024a.5.5 0 0 1 .936 0ZM18.53 7.591a.75.75 0 0 0 0-1.06L17.47 5.47a.75.75 0 0 0-1.06 0l-1.94 1.939a.75.75 0 0 0 0 1.06l1.06 1.061a.75.75 0 0 0 1.061 0l1.94-1.939ZM14.53 11.591a.75.75 0 0 0 0-1.06L13.47 9.47a.75.75 0 0 0-1.06 0l-9.94 9.939a.75.75 0 0 0 0 1.06l1.06 1.061a.75.75 0 0 0 1.061 0l9.94-9.939ZM20.727 13.273l-.759-2.025a.5.5 0 0 0-.936 0l-.76 2.025-2.024.759a.5.5 0 0 0 0 .936l2.025.76.759 2.024a.5.5 0 0 0 .936 0l.76-2.025 2.024-.759a.5.5 0 0 0 0-.936l-2.025-.76ZM10.734 1.624l.448 1.194 1.194.448a.25.25 0 0 1 0 .468l-1.194.448-.448 1.194a.25.25 0 0 1-.468 0l-.448-1.194-1.194-.448a.25.25 0 0 1 0-.468l1.194-.448.448-1.194a.25.25 0 0 1 .468 0Z",
                        className: o
                    })
                })
            }
        },
        881892: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return M
                }
            });
            var a = t("37983"),
                l = t("884691"),
                i = t("151426"),
                n = t("77078"),
                o = t("206230"),
                d = t("10641"),
                r = t("491605"),
                c = t("571658"),
                m = t("71216"),
                u = t("191735"),
                h = t("898260"),
                x = t("599110"),
                f = t("412707"),
                I = t("838093"),
                A = t("49111"),
                N = t("994428"),
                _ = t("782340"),
                L = t("592283");

            function M(e) {
                let {
                    guildId: s,
                    transitionState: M,
                    onClose: P,
                    analyticsType: C = i.DismissibleContent.APP_DIRECTORY_UPSELL_MODAL
                } = e;
                return l.useEffect(() => {
                    x.default.track(A.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.DismissibleContent[C],
                        guild_id: s
                    })
                }, [s, C]), (0, a.jsxs)(n.ModalRoot, {
                    transitionState: M,
                    className: L.modal,
                    size: n.ModalSize.SMALL,
                    children: [(0, a.jsxs)(n.ModalContent, {
                        className: L.modalContent,
                        children: [(0, a.jsx)(r.default, {
                            autoplay: !0,
                            shouldAnimate: !o.default.useReducedMotion,
                            importData: () => t.el("805888").then(t.t.bind(t, "805888", 19)),
                            className: L.animation
                        }), (0, a.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            children: _.default.Messages.APP_DIRECTORY_IPP_HEADER
                        }), (0, a.jsx)(n.Text, {
                            variant: "text-md/medium",
                            className: L.subheader,
                            color: "text-muted",
                            children: _.default.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER
                        }), (0, a.jsxs)("ul", {
                            className: L.listContainer,
                            children: [(0, a.jsxs)("li", {
                                className: L.listItem,
                                children: [(0, a.jsx)(u.default, {
                                    className: L.wandIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, a.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: _.default.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION
                                })]
                            }), (0, a.jsx)(h.default, {
                                className: L.divider
                            }), (0, a.jsxs)("li", {
                                className: L.listItem,
                                children: [(0, a.jsx)(m.default, {
                                    className: L.robotIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, a.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: _.default.Messages.APP_DIRECTORY_IPP_AUTOMATION
                                })]
                            }), (0, a.jsx)(h.default, {
                                className: L.divider
                            }), (0, a.jsxs)("li", {
                                className: L.listItem,
                                children: [(0, a.jsx)(c.default, {
                                    className: L.smileIcon,
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
                        className: L.modalFooter,
                        children: [(0, a.jsx)(n.Button, {
                            onClick: () => {
                                P(), (0, d.markDismissibleContentAsDismissed)(C, {
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
                                P(), (0, d.markDismissibleContentAsDismissed)(C, {
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
        },
        191735: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("469563"),
                i = t("310267"),
                n = t("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: s = 16,
                        height: t = 16,
                        color: l = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, n.default)(o),
                        width: s,
                        height: t,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M4.4147 21.7996L3.0005 20.3854L11.485 11.9009L12.8992 13.3151L4.4147 21.7996Z"
                        }), (0, a.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M19.088 8.19L21.384 3.414L16.609 5.71L12.899 2L13.721 7.064L8.72 9.586L14.325 10.474L15.212 16.078L17.734 11.077L22.798 11.899L19.088 8.19Z"
                        })]
                    })
                }, i.MagicWandIcon, void 0, {
                    size: 16
                })
        }
    }
]);