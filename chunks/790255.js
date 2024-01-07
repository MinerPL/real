            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("37983"),
                i = s("884691"),
                n = s("446674"),
                l = s("151426"),
                r = s("77078"),
                o = s("206230"),
                d = s("592407"),
                c = s("305961"),
                u = s("476765"),
                m = s("58608"),
                f = s("599110"),
                h = s("179803"),
                N = s("75061"),
                x = s("974126"),
                I = s("49111"),
                D = s("994428"),
                C = s("782340"),
                _ = s("94540");

            function g(e) {
                let {
                    guildId: t,
                    transitionState: s,
                    onClose: g
                } = e, j = (0, u.useUID)(), L = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t));
                return (i.useEffect(() => {
                    f.default.track(I.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                        type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                        guild_id: t
                    })
                }, [t]), null == p) ? null : (0, a.jsxs)(r.ModalRoot, {
                    transitionState: s,
                    "aria-labelledby": j,
                    size: r.ModalSize.LARGE,
                    className: _.modal,
                    children: [(0, a.jsxs)("div", {
                        className: _.content,
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: _.header,
                            children: C.default.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: C.default.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format({
                                guildName: p.name
                            })
                        }), (0, a.jsxs)("div", {
                            className: _.testimonials,
                            children: [(0, a.jsx)("div", {
                                className: _.designBuddiesContainer,
                                children: (0, a.jsx)(N.default, {
                                    message: C.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                                    adminTitle: C.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
                                    profilePic: "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
                                    emphasisColor: "text-positive",
                                    arrowPosition: "right"
                                })
                            }), (0, a.jsx)("div", {
                                className: _.valorantContainer,
                                children: (0, a.jsx)(N.default, {
                                    message: C.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                                    adminTitle: C.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
                                    profilePic: "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
                                    emphasisColor: "text-warning",
                                    arrowPosition: "left"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: _.buttonContainer,
                            children: [(0, a.jsx)(r.Button, {
                                onClick: () => g(),
                                look: r.Button.Looks.OUTLINED,
                                color: r.Button.Colors.PRIMARY,
                                children: C.default.Messages.CLOSE
                            }), (0, a.jsx)(r.Button, {
                                onClick: () => {
                                    f.default.track(I.AnalyticEvents.UPSELL_CLICKED, {
                                        type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                                        action: "primary"
                                    }), d.default.open(t, I.GuildSettingsSections.ONBOARDING), g(D.ContentDismissActionType.PRIMARY), (0, h.dismissedGuildOnboardingUpsell)(p.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2)
                                },
                                children: C.default.Messages.CHECK_IT_OUT
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: _.videoContainer,
                        children: (0, a.jsx)(m.default, {
                            className: _.video,
                            loop: !L,
                            autoPlay: !L,
                            playsInline: !0,
                            "data-testid": "onboarding-demo",
                            children: (0, a.jsx)("source", {
                                src: x,
                                type: "video/mp4"
                            }, "hevc")
                        })
                    })]
                })
            }