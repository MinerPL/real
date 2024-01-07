            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return $
                }
            }), s("222007"), s("424973"), s("506083");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("151426"),
                d = s("669491"),
                u = s("819855"),
                c = s("77078"),
                S = s("913144"),
                E = s("619340"),
                f = s("642950"),
                m = s("264044"),
                T = s("135230"),
                _ = s("841098"),
                g = s("376556"),
                h = s("572943"),
                I = s("535013"),
                N = s("816499"),
                p = s("926994"),
                C = s("10641"),
                A = s("47319"),
                O = s("305961"),
                x = s("677099"),
                M = s("102985"),
                R = s("941886"),
                v = s("931138"),
                L = s("476263"),
                D = s("945330"),
                P = s("772280"),
                j = s("486952"),
                b = s("956089"),
                U = s("599110"),
                y = s("701909"),
                B = s("915639"),
                F = s("333562"),
                G = s("216503"),
                k = s("187451"),
                w = s("470781"),
                H = s("49111"),
                V = s("214509"),
                Y = s("994428"),
                W = s("782340"),
                K = s("521788"),
                z = s("926622");
            let Q = e => {
                var t, s;
                let n, {
                        integration: l
                    } = e,
                    {
                        isJoining: i,
                        joinErrorMessage: o,
                        showJoinErrorMessage: d
                    } = (0, r.useStateFromStoresObject)([A.default], () => ({
                        isJoining: A.default.isJoining(l.id),
                        joinErrorMessage: "" === A.default.joinErrorMessage(l.id) ? W.default.Messages.ERROR : A.default.joinErrorMessage(l.id),
                        showJoinErrorMessage: void 0 !== A.default.joinErrorMessage(l.id)
                    }), [l.id]),
                    u = null != (0, r.useStateFromStores)([O.default], () => O.default.getGuild(l.guild.id), [l.guild.id]);
                return !u && (n = (0, a.jsx)(c.Button, {
                    size: c.ButtonSizes.SMALL,
                    onClick: function() {
                        E.default.joinServer(l.id, () => {})
                    },
                    disabled: i,
                    children: (0, a.jsx)("span", {
                        children: i ? W.default.Messages.JOINING_GUILD : W.default.Messages.JOIN_GUILD
                    })
                })), (0, a.jsxs)("div", {
                    className: K.integrationWrapper,
                    children: [(0, a.jsxs)("div", {
                        className: K.integration,
                        children: [(0, a.jsx)(L.default, {
                            size: L.default.Sizes.SMALL,
                            guild: l.guild,
                            className: K.guildIcon
                        }), (0, a.jsxs)("div", {
                            className: K.integrationInner,
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: l.guild.toString()
                            }), (0, a.jsx)(c.Anchor, {
                                href: null === (s = g.default.get(l.type)) || void 0 === s ? void 0 : null === (t = s.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(s, l.account),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: l.account.name
                                })
                            })]
                        }), n]
                    }), d && (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: K.integrationError,
                        children: o
                    })]
                })
            };

            function q(e) {
                var t, s, l;
                let i, r, o, {
                        onDisconnect: S,
                        account: f,
                        theme: m,
                        locale: _
                    } = e,
                    [C, A] = n.useState(f.friendSync),
                    [O, x] = n.useState(f.visibility),
                    [M, R] = n.useState(f.metadataVisibility),
                    [L, P] = n.useState(f.showActivity),
                    [U, B] = n.useState(null),
                    [Y, z] = n.useState(null),
                    [q, Z] = n.useState(!1),
                    [X, J] = n.useState([]),
                    $ = (0, h.useLegacyPlatformType)(f.type),
                    ee = g.default.get($);
                n.useEffect(() => {
                    A(f.friendSync), x(f.visibility), R(f.metadataVisibility), P(f.showActivity)
                }, [f]), n.useEffect(() => {
                    !1 !== f.verified && (null != U && (x(U), E.default.setVisibility(f.type, f.id, U), B(null)), null != Y && (R(Y), E.default.setMetadataVisibility(f.type, f.id, Y), z(null)))
                }, [f]);

                function et() {
                    (0, p.default)(f.type, "User Settings")
                }

                function es() {
                    let e = g.default.get(f.type),
                        t = W.default.Messages.DISCONNECT_ACCOUNT_BODY;
                    (0, F.default)(f) && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(G.default, {
                            className: K.infoBox,
                            children: W.default.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({
                                platformName: e.name
                            })
                        })]
                    })), (0, c.openModal)(s => (0, a.jsx)(T.default, {
                        title: W.default.Messages.DISCONNECT_ACCOUNT_TITLE.format({
                            name: e.name
                        }),
                        body: t,
                        confirmText: W.default.Messages.DISCONNECT_ACCOUNT,
                        cancelText: W.default.Messages.CANCEL,
                        onConfirm: S,
                        ...s
                    }))
                }

                function ea(e) {
                    let {
                        verified: t
                    } = f, s = e ? 1 : 0;
                    if (e && !t) {
                        B(s), (0, p.default)(f.type, "User Settings");
                        return
                    }
                    x(s), E.default.setVisibility(f.type, f.id, s)
                }

                function en(e) {
                    let {
                        verified: t
                    } = f, s = e ? 1 : 0;
                    if (e && !t) {
                        z(s), (0, p.default)(f.type, "User Settings");
                        return
                    }
                    R(s), E.default.setMetadataVisibility(f.type, f.id, s)
                }

                function el(e) {
                    A(e), E.default.setFriendSync(f.type, f.id, e)
                }

                function ei(e) {
                    P(e), E.default.setShowActivity(f.type, f.id, e)
                }
                return (0, a.jsxs)("div", {
                    className: K.connection,
                    children: [function(e) {
                        var t;
                        let s = g.default.get(e.type),
                            n = g.default.get($),
                            l = null !== (t = e.metadata) && void 0 !== t ? t : {},
                            i = "1" === l[V.MetadataFields.TWITTER_VERIFIED],
                            r = null;
                        return s.type === H.PlatformTypes.TWITTER && i && (r = (0, a.jsx)(c.Tooltip, {
                            text: W.default.Messages.CONNECTION_VERIFIED_ON_TWITTER,
                            children: e => (0, a.jsx)(v.default, {
                                ...e,
                                className: K.connectionAccountLabelVerified,
                                color: d.default.unsafe_rawColors.TWITTER.css,
                                children: (0, a.jsx)(j.default, {
                                    color: d.default.unsafe_rawColors.WHITE_500.css
                                })
                            })
                        })), (0, a.jsxs)("div", {
                            className: K.connectionHeader,
                            children: [(0, a.jsx)("img", {
                                alt: n.name,
                                className: K.connectionIcon,
                                src: (0, u.isThemeDark)(m) ? n.icon.darkSVG : n.icon.lightSVG
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(c.Text, {
                                    color: "header-primary",
                                    variant: "text-md/semibold",
                                    className: K.connectionAccountValue,
                                    children: (0, a.jsxs)("div", {
                                        className: K.connectionAccountLabelContainer,
                                        children: [e.name, r]
                                    })
                                }), (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: K.connectionAccountLabel,
                                    children: n.name
                                })]
                            }), (0, a.jsx)(c.Clickable, {
                                className: K.connectionDelete,
                                onClick: es,
                                "aria-label": W.default.Messages.SERVICE_CONNECTIONS_DISCONNECT,
                                focusProps: {
                                    offset: {
                                        top: -4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                children: (0, a.jsx)(D.default, {
                                    width: 16,
                                    height: 16
                                })
                            })]
                        })
                    }(f), (t = f).twoWayLink ? null : t.type === H.PlatformTypes.XBOX ? (0, a.jsx)("div", {
                        className: K.upsellWrapper,
                        children: (0, a.jsx)(w.XboxTwoWayLinkUpsell, {})
                    }) : t.type === H.PlatformTypes.PLAYSTATION ? (0, a.jsx)("div", {
                        className: K.upsellWrapper,
                        children: (0, a.jsx)(k.PlayStationTwoWayLinkUpsell, {})
                    }) : null, function(e) {
                        var t;
                        let s = null !== (t = e.metadata) && void 0 !== t ? t : {},
                            n = null,
                            l = (0, I.getCreatedAtDate)(s[V.MetadataFields.CREATED_AT], _);
                        switch (e.type) {
                            case H.PlatformTypes.REDDIT:
                                n = (0, N.generateRedditMetadataItems)(s, K.metadataItem);
                                break;
                            case H.PlatformTypes.STEAM:
                                n = (0, N.generateSteamMetadataItems)(s, K.metadataItem);
                                break;
                            case H.PlatformTypes.TWITTER:
                                n = (0, N.generateTwitterMetadataItems)(s, K.metadataItem);
                                break;
                            case H.PlatformTypes.EBAY:
                                n = (0, N.generateEbayMetadataItems)(s, K.metadataItem);
                                break;
                            case H.PlatformTypes.PAYPAL:
                                n = (0, N.generatePaypalMetadataItems)(s, K.metadataItem);
                                break;
                            case H.PlatformTypes.TIKTOK:
                                n = (0, N.generateTikTokMetadataItems)(s, K.metadataItem)
                        }
                        null !== l && (null == n && (n = []), null == n || n.push((0, a.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-active",
                            className: K.connectedAccountVanityMetadataCreatedAt,
                            children: W.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                date: l
                            })
                        }, "member-since")));
                        let i = X.includes(e.id),
                            r = W.default.Messages.REFRESH;
                        if (null == n || 0 === n.length) {
                            if (!0 !== g.default.get(e.type).hasMetadata) return null;
                            n = [(0, a.jsx)(b.TextBadge, {
                                className: K.connectionMetadataUpsellTag,
                                text: W.default.Messages.NEW
                            }, "badge"), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                className: K.connectionMetadataUpsellDescription,
                                children: W.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({
                                    helpdeskUrl: y.default.getArticleURL(H.HelpdeskArticles.CONNECTION_DETAILS)
                                })
                            }, "label")], r = W.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS
                        }
                        return i && (r = W.default.Messages.DONE), n.push((0, a.jsx)(c.Button, {
                            className: K.metadataRefreshButton,
                            color: i ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
                            size: c.Button.Sizes.SMALL,
                            submitting: q,
                            disabled: i,
                            onClick: i ? void 0 : () => {
                                Z(!0), E.default.refresh(e.type, e.id).finally(() => {
                                    setTimeout(() => {
                                        X.push(e.id), J(X), Z(!1)
                                    }, 2e3)
                                })
                            },
                            children: r
                        }, "refresh-button")), (0, a.jsx)("div", {
                            className: K.metadataContainer,
                            children: n
                        })
                    }(f), (s = ee, H.FRIEND_SYNC_PLATFORM_TYPES.has(f.type) && (i = (0, a.jsx)(c.FormSwitch, {
                        className: K.connectionOptionSwitch,
                        hideBorder: !0,
                        value: C,
                        onChange: el,
                        children: (0, a.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            children: W.default.Messages.SYNC_FRIENDS
                        })
                    })), H.ACTIVITY_PLATFORM_TYPES.has(f.type) && (r = (0, a.jsx)(c.FormSwitch, {
                        className: K.connectionOptionSwitch,
                        hideBorder: !0,
                        value: L,
                        onChange: ei,
                        children: (0, a.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            children: W.default.Messages.DISPLAY_ACTIVITY.format({
                                platform: s.name
                            })
                        })
                    })), (null === (l = g.default.get(f.type)) || void 0 === l ? void 0 : l.hasMetadata) === !0 && (o = (0, a.jsx)(c.FormSwitch, {
                        className: K.connectionOptionSwitch,
                        hideBorder: !0,
                        value: 1 === M,
                        onChange: en,
                        disabled: 1 !== O || null == f.metadata,
                        children: (0, a.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            children: W.default.Messages.DISPLAY_DETAILS_ON_PROFILE
                        })
                    })), (0, a.jsx)("div", {
                        className: K.connectionOptionsWrapper,
                        children: (0, a.jsxs)("div", {
                            className: K.connectionOptions,
                            children: [(0, a.jsx)(c.FormSwitch, {
                                className: K.connectionOptionSwitch,
                                hideBorder: !0,
                                value: 1 === O,
                                onChange: ea,
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    children: W.default.Messages.DISPLAY_ON_PROFILE
                                })
                            }), o, r, i]
                        })
                    })), function() {
                        if (f.revoked || f.integrations.length > 0) return (0, a.jsx)(c.FormDivider, {
                            className: K.connectedAccountSeparator
                        })
                    }(), f.revoked ? (0, a.jsx)(c.FormItem, {
                        className: K.integrationsWrapper,
                        children: (0, a.jsx)(c.FormText, {
                            className: K.integrationRevoked,
                            children: W.default.Messages.CONNECTED_ACCOUNT_REVOKED.format({
                                onReconnect: et
                            })
                        })
                    }) : f.integrations.length > 0 ? (0, a.jsxs)(c.FormItem, {
                        className: K.integrationsWrapper,
                        children: [(0, a.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-xs/semibold",
                                children: W.default.Messages.SUB_ENABLED_SERVERS
                            })
                        }), (0, a.jsx)("div", {
                            children: f.integrations.map(e => (0, a.jsx)(Q, {
                                integration: e
                            }, e.id))
                        })]
                    }) : void 0]
                })
            }

            function Z() {
                return n.useEffect(() => () => {
                    (0, C.markDismissibleContentAsDismissed)(o.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION, {
                        dismissAction: Y.ContentDismissActionType.AUTO
                    })
                }, []), (0, a.jsxs)("div", {
                    className: K.connectContainer,
                    children: [(0, a.jsx)(c.Heading, {
                        variant: "heading-md/bold",
                        color: "interactive-active",
                        className: K.connectHeader,
                        children: W.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
                    }), (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: W.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({
                            privacyPolicyUrl: H.MarketingURLs.PRIVACY
                        })
                    }), (0, a.jsx)(X, {})]
                })
            }

            function X() {
                function e(e) {
                    let t = g.default.get(e);
                    (0, p.default)(t.type), U.default.track(H.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        previous_step: "desktop connections",
                        current_step: "desktop oauth",
                        platform_type: t.type
                    })
                }

                function t() {
                    S.default.dispatch({
                        type: "CONNECTIONS_GRID_MODAL_SHOW",
                        onComplete: e
                    })
                }
                let s = (0, h.usePlatforms)(),
                    n = (0, c.useRedesignIconContext)().enabled,
                    l = n ? 24 : 18;
                return (0, a.jsxs)("div", {
                    className: K.connectionsContainer,
                    children: [s.slice(0, 10).map(e => (0, a.jsx)(m.default, {
                        type: e.type,
                        className: K.accountButton,
                        innerClassName: K.accountButtonInner
                    }, e.type)), (0, a.jsx)(c.Tooltip, {
                        text: W.default.Messages.CONNECTIONS_VIEW_MORE,
                        children: e => {
                            let {
                                onMouseEnter: s,
                                onMouseLeave: n
                            } = e;
                            return (0, a.jsx)("div", {
                                className: i(K.accountAddWrapper, K.accountButton),
                                children: (0, a.jsx)(c.FocusRing, {
                                    children: (0, a.jsx)("button", {
                                        onMouseEnter: s,
                                        onMouseLeave: n,
                                        className: i(K.accountAddInner, K.accountButtonInner),
                                        type: "button",
                                        onClick: t,
                                        "aria-label": W.default.Messages.ADD_NEW_CONNECTION,
                                        children: (0, a.jsx)(P.default, {
                                            height: l,
                                            width: l,
                                            "aria-label": W.default.Messages.CONNECTIONS_VIEW_MORE
                                        })
                                    })
                                })
                            })
                        }
                    })]
                })
            }

            function J(e) {
                let t, {
                    fetching: n,
                    accounts: l,
                    theme: i,
                    locale: r
                } = e;
                return t = n ? (0, a.jsx)(c.Spinner, {
                    className: z.marginTop20,
                    type: c.Spinner.Type.SPINNING_CIRCLE
                }) : 0 === l.length ? (0, a.jsxs)(R.default, {
                    className: z.marginTop40,
                    theme: i,
                    children: [(0, a.jsx)(R.EmptyStateImage, {
                        darkSrc: s("137718"),
                        lightSrc: s("631399"),
                        width: 230,
                        height: 220
                    }), (0, a.jsx)(R.EmptyStateText, {
                        note: W.default.Messages.CONNECTED_ACCOUNTS_NONE,
                        children: W.default.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
                    })]
                }) : l.filter(e => g.default.isSupported(e.type)).map((e, t) => (0, a.jsx)(q, {
                    theme: i,
                    account: e,
                    locale: r,
                    onDisconnect: () => (function(e) {
                        let {
                            type: t,
                            id: s
                        } = e;
                        E.default.disconnect(t, s)
                    })(e)
                }, t)), (0, a.jsx)(c.FormItem, {
                    className: K.connectionList,
                    children: t
                })
            }
            var $ = () => {
                let e = (0, r.useStateFromStores)([M.default], () => M.default.hidePersonalInformation),
                    t = (0, r.useStateFromStores)([A.default], () => A.default.isFetching()),
                    s = (0, r.useStateFromStores)([A.default], () => A.default.getAccounts()),
                    l = (0, _.default)();
                (0, r.useStateFromStores)([x.default], () => x.default.getFlattenedGuildIds());
                let i = (0, r.useStateFromStores)([B.default], () => B.default.locale);
                return (n.useEffect(() => {
                    E.default.fetch()
                }, []), e) ? (0, a.jsx)(f.default, {}) : (0, a.jsxs)(c.FormSection, {
                    className: K.connections,
                    tag: c.FormTitleTags.H1,
                    title: W.default.Messages.CONNECTIONS,
                    children: [(0, a.jsx)(Z, {}), (0, a.jsx)(J, {
                        fetching: t,
                        accounts: s,
                        theme: l,
                        locale: i
                    })]
                })
            }