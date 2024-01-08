            "use strict";
            l.r(t), l.d(t, {
                ConnectedUserAccount: function() {
                    return N
                },
                ConnectedApplicationUserRoleAccount: function() {
                    return y
                },
                ConnectedUserAccounts: function() {
                    return O
                }
            }), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("669491"),
                o = l("819855"),
                u = l("77078"),
                d = l("308289"),
                c = l("376556"),
                f = l("716241"),
                m = l("572943"),
                p = l("535013"),
                E = l("816499"),
                T = l("526190"),
                h = l("766274"),
                _ = l("246053"),
                S = l("867544"),
                I = l("128259"),
                g = l("49111"),
                A = l("214509"),
                v = l("782340"),
                C = l("825507");

            function N(e) {
                var t, l;
                let a, s, d, {
                    connectedAccount: h,
                    theme: N,
                    locale: y,
                    userId: O,
                    className: M,
                    showMetadata: x,
                    showInvisibleIcon: R
                } = e;
                null == x && (x = !0);
                let L = null !== (l = h.metadata) && void 0 !== l ? l : {},
                    P = x ? (0, p.getCreatedAtDate)(L[A.MetadataFields.CREATED_AT], y) : null,
                    b = (0, u.useToken)(r.default.unsafe_rawColors.TWITTER).hex(),
                    D = v.default.Messages.CONNECTION_VERIFIED;
                if (x) switch (h.type) {
                    case g.PlatformTypes.REDDIT:
                        a = (0, E.generateRedditMetadataItems)(L);
                        break;
                    case g.PlatformTypes.STEAM:
                        a = (0, E.generateSteamMetadataItems)(L);
                        break;
                    case g.PlatformTypes.TWITTER: {
                        a = (0, E.generateTwitterMetadataItems)(L);
                        let e = "1" === L[A.MetadataFields.TWITTER_VERIFIED];
                        e && (s = b, D = v.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                        break
                    }
                    case g.PlatformTypes.PAYPAL:
                        a = (0, E.generatePaypalMetadataItems)(L);
                        break;
                    case g.PlatformTypes.EBAY:
                        a = (0, E.generateEbayMetadataItems)(L);
                        break;
                    case g.PlatformTypes.TIKTOK:
                        a = (0, E.generateTikTokMetadataItems)(L)
                }
                let U = c.default.get((0, m.useLegacyPlatformType)(h.type)),
                    j = null == U ? void 0 : null === (t = U.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(U, h);
                null != R && R ? d = (0, n.jsx)(S.default, {
                    className: i(C.connectedAccountOpenIconContainer, C.connectedAccountHideIcon),
                    foregroundColor: "currentColor"
                }) : null != j && (d = (0, n.jsx)(u.Anchor, {
                    href: j,
                    onClick: e => {
                        var t, l;
                        t = h.type, l = O, (0, f.trackWithMetadata)(g.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t,
                            other_user_id: l
                        }), (0, I.handleClick)({
                            href: j,
                            trusted: (null == U ? void 0 : U.type) !== g.PlatformTypes.DOMAIN
                        }, e)
                    },
                    children: (0, n.jsx)(_.default, {
                        className: C.connectedAccountOpenIcon,
                        direction: _.default.Directions.RIGHT
                    })
                }));
                let F = (0, u.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
                    w = (0, u.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
                    G = h.verified ? (0, n.jsx)(T.default, {
                        className: C.connectedAccountVerifiedIcon,
                        color: null != s ? s : F,
                        forcedIconColor: w,
                        size: 16,
                        tooltipText: D
                    }) : null;
                return (0, n.jsxs)("div", {
                    className: i(C.connectedAccountContainer, null != a && a.length > 0 || null != P ? C.connectedAccountContainerWithMetadata : null, M),
                    children: [(0, n.jsxs)("div", {
                        className: C.connectedAccount,
                        children: [(0, n.jsx)(u.Tooltip, {
                            text: null == U ? void 0 : U.name,
                            children: e => (0, n.jsx)("img", {
                                ...e,
                                alt: v.default.Messages.IMG_ALT_LOGO.format({
                                    name: null == U ? void 0 : U.name
                                }),
                                className: C.connectedAccountIcon,
                                src: (0, o.isThemeDark)(N) ? null == U ? void 0 : U.icon.darkSVG : null == U ? void 0 : U.icon.lightSVG
                            })
                        }), (0, n.jsxs)("div", {
                            className: C.connectedAccountNameContainer,
                            children: [(0, n.jsxs)("div", {
                                className: C.connectedAccountName,
                                children: [(0, n.jsxs)("div", {
                                    className: C.connectedAccountNameTextContainer,
                                    children: [(0, n.jsx)(u.Tooltip, {
                                        overflowOnly: !0,
                                        text: h.name,
                                        children: e => (0, n.jsx)(u.Text, {
                                            ...e,
                                            variant: "text-md/semibold",
                                            color: "interactive-active",
                                            className: C.connectedAccountNameText,
                                            children: h.name
                                        })
                                    }), G]
                                }), d]
                            }), null != P ? (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: v.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                    date: P
                                })
                            }) : null]
                        })]
                    }), null != a && a.length > 0 ? (0, n.jsx)("div", {
                        className: C.connectedAccountChildren,
                        children: a
                    }) : null]
                })
            }

            function y(e) {
                let {
                    applicationRoleConnection: t,
                    className: l,
                    locale: a
                } = e, s = (0, E.generateRoleConnectionMetadataItems)(t, void 0, a);
                return (0, n.jsxs)("div", {
                    className: i(C.connectedAccountContainer, null != s && s.length > 0 ? C.connectedAccountContainerWithMetadata : null, l),
                    children: [(0, n.jsx)("div", {
                        className: C.connectedAccount,
                        children: (0, n.jsxs)("div", {
                            className: C.connectedAccountNameContainer,
                            children: [null != t.platform_name ? (0, n.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                children: t.platform_name
                            }) : null, null != t.platform_username ? (0, n.jsx)("div", {
                                className: C.connectedAccountName,
                                children: (0, n.jsx)("div", {
                                    className: C.connectedAccountNameTextContainer,
                                    children: (0, n.jsx)(u.Text, {
                                        variant: "text-md/semibold",
                                        color: "interactive-active",
                                        className: C.connectedAccountNameText,
                                        children: t.platform_username
                                    })
                                })
                            }) : null]
                        })
                    }), null != s && s.length > 0 ? (0, n.jsx)("div", {
                        className: i(C.connectedAccountChildren, C.connectedAccountChildrenNoIcon),
                        children: s
                    }) : null, (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            className: C.connectedAccountPoweredBy,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: v.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                                    applicationHook: () => (0, n.jsxs)("div", {
                                        className: C.connectedAccountPoweredByText,
                                        children: [null != t.application.bot ? (0, n.jsx)(d.default, {
                                            user: new h.default(t.application.bot),
                                            size: u.AvatarSizes.SIZE_16
                                        }) : null, (0, n.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-normal",
                                            children: t.application.name
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }
            let O = a.forwardRef(function(e, t) {
                let {
                    connectedAccounts: l,
                    theme: a,
                    locale: s,
                    className: r,
                    userId: o
                } = e;
                if (null == l || 0 === l.length) return null;
                let u = l.filter(e => c.default.isSupported(e.type)).map(e => (0, n.jsx)(N, {
                        connectedAccount: e,
                        theme: a,
                        locale: s,
                        userId: o
                    }, "".concat(e.type, ":").concat(e.id))),
                    d = [],
                    f = [];
                for (let e = 0; e < u.length; e++) {
                    let t = u[e];
                    e % 2 == 0 ? d.push(t) : f.push(t)
                }
                return (0, n.jsxs)("div", {
                    ref: t,
                    className: i(C.connectedAccounts, r),
                    children: [(0, n.jsx)("div", {
                        className: C.connectedAccountsColumn,
                        children: d
                    }), (0, n.jsx)("div", {
                        className: C.connectedAccountsColumn,
                        children: f
                    })]
                })
            })