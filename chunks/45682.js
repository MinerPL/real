            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("907002"),
                o = i("446674"),
                u = i("151426"),
                c = i("856567"),
                d = i("77078"),
                f = i("206230"),
                E = i("384997"),
                m = i("697218"),
                I = i("181114"),
                p = i("216422"),
                g = i("719923"),
                _ = i("994428"),
                S = i("782340"),
                h = i("985330");
            let C = {
                tension: 750,
                mass: 2.5,
                friction: 70
            };

            function T(e) {
                let {
                    tooltipText: t,
                    headingText: i,
                    textColor: l
                } = e, s = null != i;
                return (0, n.jsxs)("span", {
                    className: s ? void 0 : h.tooltipContainer,
                    children: [(0, n.jsxs)("span", {
                        className: h.tooltipContainer,
                        children: [(0, n.jsx)(p.default, {
                            className: h.nitroWheel
                        }), s ? (0, n.jsx)(d.Heading, {
                            color: null != l ? l : "text-normal",
                            variant: "heading-sm/semibold",
                            children: i
                        }) : null]
                    }), (0, n.jsx)(d.Text, {
                        variant: s ? "text-xs/normal" : "text-sm/medium",
                        color: null != l ? l : "text-normal",
                        children: t
                    })]
                })
            }

            function N(e) {
                let {
                    checked: t,
                    onClick: i,
                    id: s = "burst-reaction-toggle-button"
                } = e, p = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), N = m.default.getCurrentUser(), A = null != N && !(0, g.isPremium)(N), y = A ? [] : [u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP], [v, j] = (0, E.useSelectedDismissibleContent)(y), [R, O] = l.useState(!1), [M, x] = (0, r.useSpring)(() => ({})), P = (0, r.animated)(c.SuperReactionIcon);
                l.useEffect(() => {
                    let e = v === u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
                    e && (j(_.ContentDismissActionType.DISMISS), setTimeout(() => O(e), 200))
                }, [v, j]);
                let L = R ? S.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? S.default.Messages.SUPER_REACTION_TOGGLE_ENABLED : S.default.Messages.SUPER_REACTION_TOGGLE_DISABLED,
                    D = R ? S.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
                return (0, n.jsxs)(d.TooltipContainer, {
                    position: "top",
                    text: (0, n.jsx)(T, {
                        textColor: "always-white",
                        tooltipText: L,
                        headingText: D
                    }),
                    color: d.Tooltip.Colors.BRAND,
                    forceOpen: R,
                    "aria-label": L,
                    tooltipClassName: h.tooltip,
                    children: [(0, n.jsx)("input", {
                        className: h.visuallyHidden,
                        checked: t,
                        onChange: function() {
                            x({
                                from: {
                                    rotate: t ? "360deg" : "0deg"
                                },
                                to: {
                                    rotate: t ? "0deg" : "360deg"
                                },
                                config: C
                            }), null == i || i(), O(!1)
                        },
                        id: s,
                        type: "checkbox"
                    }), (0, n.jsxs)("label", {
                        htmlFor: s,
                        className: a(h.label, {
                            [h.labelChecked]: t
                        }),
                        children: [t ? (0, n.jsx)(I.Shine, {
                            className: h.shine,
                            shinePaused: p
                        }) : null, (0, n.jsx)(P, {
                            style: p ? void 0 : M,
                            width: 20,
                            height: 20,
                            color: t ? "white" : void 0,
                            className: h.icon
                        }), (0, n.jsx)("span", {
                            children: (0, n.jsx)(d.Text, {
                                className: h.visuallyHidden,
                                variant: "text-sm/semibold",
                                children: S.default.Messages.SUPER_REACTION_TOGGLE_DISABLED
                            })
                        })]
                    })]
                })
            }