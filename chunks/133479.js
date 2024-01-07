            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return g
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                i = a("917351"),
                l = a("446674"),
                r = a("669491"),
                c = a("891128"),
                u = a("165984"),
                o = a("505088"),
                d = a("77078"),
                _ = a("697218"),
                S = a("908539"),
                f = a("132206"),
                T = a("260883"),
                A = a("170213"),
                E = a("782340"),
                I = a("122698");

            function g() {
                let t = (0, f.useSafetyHubAccountStanding)(),
                    e = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
                    [a, g] = s.useState(36),
                    N = s.useRef({
                        [S.AccountStandingState.ALL_GOOD]: null,
                        [S.AccountStandingState.LIMITED]: null,
                        [S.AccountStandingState.VERY_LIMITED]: null,
                        [S.AccountStandingState.AT_RISK]: null,
                        [S.AccountStandingState.SUSPENDED]: null
                    }),
                    m = s.useCallback(() => {
                        let t = Math.max(...Object.values(N.current).map(t => {
                            var e;
                            return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36
                        }));
                        g(Math.max(t, 36))
                    }, []);
                s.useEffect(() => {
                    m();
                    let t = (0, i.debounce)(m, 100);
                    window.addEventListener("resize", t)
                }, [m]);
                let C = {
                        [S.AccountStandingState.ALL_GOOD]: {
                            title: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE,
                            description: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION.format({
                                termsOfService: A.SafetyHubLinks.TOS_LINK,
                                communityGuidelines: A.SafetyHubLinks.COMMUNITY_GUIDELINES
                            }),
                            status: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
                            Icon: c.CircleCheckIcon,
                            color: r.default.colors.STATUS_POSITIVE
                        },
                        [S.AccountStandingState.LIMITED]: {
                            title: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE,
                            description: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION,
                            status: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.colors.STATUS_WARNING
                        },
                        [S.AccountStandingState.VERY_LIMITED]: {
                            title: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE,
                            description: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION,
                            status: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.unsafe_rawColors.ORANGE_345
                        },
                        [S.AccountStandingState.AT_RISK]: {
                            title: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE,
                            description: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
                            status: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.colors.STATUS_DANGER
                        },
                        [S.AccountStandingState.SUSPENDED]: {
                            title: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE,
                            description: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION.format({
                                termsOfService: A.SafetyHubLinks.TOS_LINK,
                                communityGuidelines: A.SafetyHubLinks.COMMUNITY_GUIDELINES
                            }),
                            status: E.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
                            Icon: o.CircleXIcon,
                            color: r.default.colors.ICON_MUTED
                        }
                    },
                    {
                        title: h,
                        description: x,
                        color: H,
                        Icon: p
                    } = C[t.state],
                    O = Object.keys(C).length;
                return (0, n.jsxs)(d.Card, {
                    className: I.container,
                    outline: !1,
                    children: [(0, n.jsx)("div", {
                        className: I.profile,
                        children: (0, n.jsx)(T.default, {
                            user: e,
                            size: d.AvatarSizes.SIZE_80
                        })
                    }), (0, n.jsxs)("div", {
                        className: I.status,
                        children: [(0, n.jsxs)("div", {
                            className: I.title,
                            children: [(0, n.jsx)(d.Heading, {
                                color: "header-primary",
                                variant: "heading-lg/normal",
                                children: h.format({
                                    hook: t => (0, n.jsx)(d.Text, {
                                        style: {
                                            color: H.css
                                        },
                                        variant: "heading-lg/bold",
                                        tag: "span",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(d.Text, {
                                color: "text-normal",
                                variant: "text-sm/normal",
                                children: x
                            })]
                        }), (0, n.jsxs)("div", {
                            className: I.health,
                            style: {
                                height: a
                            },
                            children: [(0, n.jsx)("div", {
                                className: I.line
                            }), Object.entries(C).map((e, a) => {
                                let [s, i] = e, l = parseInt(s) === t.state;
                                return (0, n.jsxs)("div", {
                                    className: I.statusOption,
                                    ref: t => N.current[parseInt(s)] = t,
                                    children: [l ? (0, n.jsx)(p, {
                                        className: I.marker,
                                        color: i.color
                                    }) : (0, n.jsx)("div", {
                                        className: I.marker,
                                        style: {
                                            marginLeft: 0 === a ? -6 : 0,
                                            marginRight: a === O - 1 ? -6 : 0
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: I.empty
                                        })
                                    }), i.status.format({
                                        hook: t => (0, n.jsx)(d.Text, {
                                            color: "text-normal",
                                            variant: "text-sm/normal",
                                            className: I.statusLabel,
                                            children: t
                                        })
                                    })]
                                }, a)
                            })]
                        })]
                    })]
                })
            }