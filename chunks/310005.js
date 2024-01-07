            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                o = l("819855"),
                d = l("77078"),
                u = l("54239"),
                c = l("841098"),
                f = l("376556"),
                m = l("412707"),
                I = l("646186"),
                N = l("926994"),
                T = l("47319"),
                E = l("957255"),
                h = l("145131"),
                g = l("810567"),
                p = l("841811"),
                S = l("295810"),
                O = l("741919"),
                _ = l("599110"),
                A = l("315102"),
                C = l("701909"),
                x = l("299039"),
                R = l("158998"),
                M = l("700104"),
                v = l("15639"),
                L = l("49111"),
                j = l("782340"),
                b = l("816189"),
                P = l("390494"),
                D = l("449638"),
                y = l("117809");

            function G(e, t) {
                return t.toLowerCase().includes(e)
            }

            function B(e) {
                let {
                    query: t,
                    setQuery: l
                } = e, s = a.useCallback(e => {
                    l(e)
                }, [l]);
                return (0, n.jsx)("div", {
                    className: b.searchContainer,
                    children: (0, n.jsx)(g.default, {
                        size: g.default.Sizes.MEDIUM,
                        query: t,
                        onChange: s,
                        onClear: () => l(""),
                        placeholder: j.default.Messages.INTEGRATIONS_SEARCH,
                        "aria-label": j.default.Messages.INTEGRATIONS_SEARCH
                    })
                })
            }

            function H(e) {
                let {
                    guild: t,
                    channel: l,
                    applicationIntegrations: s,
                    builtInIntegrations: g,
                    customWebhooks: H,
                    followedChannelWebhooks: k,
                    isLoading: U,
                    canCreateWebhook: F,
                    onManageBuiltIn: w,
                    onManageCustomWebhooks: W,
                    onManageFollowedChannels: V,
                    onManageApplication: Y
                } = e, K = (0, c.default)(), [z, Z] = a.useState(""), {
                    isFetchingConnections: q,
                    accounts: J
                } = (0, r.useStateFromStoresObject)([T.default], () => ({
                    isFetchingConnections: T.default.isFetching(),
                    accounts: T.default.getAccounts()
                }), []), {
                    canManageWebhooks: X,
                    canManageGuild: Q
                } = (0, r.useStateFromStoresObject)([E.default], () => ({
                    canManageWebhooks: null != t && E.default.can(L.Permissions.MANAGE_WEBHOOKS, t) || null != l && E.default.can(L.Permissions.MANAGE_WEBHOOKS, l),
                    canManageGuild: null != t && null == l && E.default.can(L.Permissions.MANAGE_GUILD, t)
                }), [t, l]), {
                    availableTwitchIntegrations: $,
                    availableYoutubeIntegrations: ee,
                    guildTwitchIntegrations: et,
                    guildYoutubeIntegrations: el
                } = a.useMemo(() => {
                    var e, t, l, n, a, s, i, r;
                    return {
                        availableTwitchIntegrations: null !== (a = null === (e = g.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                        availableYoutubeIntegrations: null !== (s = null === (t = g.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0,
                        guildTwitchIntegrations: null !== (i = null === (l = g.twitch) || void 0 === l ? void 0 : l.filter(e => e.enabled).length) && void 0 !== i ? i : 0,
                        guildYoutubeIntegrations: null !== (r = null === (n = g.youtube) || void 0 === n ? void 0 : n.filter(e => e.enabled).length) && void 0 !== r ? r : 0
                    }
                }, [g.twitch, g.youtube]), {
                    showTwitchCard: en,
                    showYoutubeCard: ea
                } = a.useMemo(() => {
                    if (q || !Q) return {
                        showTwitchCard: !1,
                        showYoutubeCard: !1
                    };
                    let e = null == t ? void 0 : t.hasFeature(L.GuildFeatures.COMMUNITY),
                        l = J.filter(e => e.type === L.PlatformTypes.TWITCH).length > 0,
                        n = J.filter(e => e.type === L.PlatformTypes.YOUTUBE).length > 0;
                    return {
                        showTwitchCard: $ > 0 || !l && e,
                        showYoutubeCard: ee > 0 || !n && e
                    }
                }, [q, Q, t, J, $, ee]), es = a.useMemo(() => Object.values(s).filter(e => {
                    var t, l;
                    let {
                        application: n
                    } = e;
                    return t = n, !!("" === (l = (l = z).trim().toLowerCase()) || t.id === l || G(l, t.name) || null != t.bot && G(l, t.bot.username)) || !1
                }), [s, z]), ei = Object.values(s).length, er = (0, r.useStateFromStores)([v.default], () => {
                    if (null != t) return es.find(e => v.default.canShowOverviewTooltip(t.id, e.integration.id))
                }, [es, t]), eo = a.useMemo(() => void 0 !== er ? [er, ...es.filter(e => e.integration.id !== er.integration.id)] : es, [es, er]), ed = (0, d.useModalsStore)(d.hasAnyModalOpenSelector), [eu, ec] = a.useState(!1), ef = a.useRef(0), em = () => {
                    ec(!0), clearTimeout(ef.current), ef.current = setTimeout(() => {
                        ec(!1)
                    }, 200)
                };
                a.useEffect(() => (window.addEventListener("scroll", em, !0), () => window.removeEventListener("scroll", em)));
                let eI = eo.map(e => {
                        let l = !ed && e.integration.id === (null == er ? void 0 : er.integration.id);
                        return function(e, t, l, a, s) {
                            var i;
                            let {
                                application: r,
                                integration: o
                            } = t, d = [];
                            return null != o.user ? d.push({
                                icon: p.default,
                                text: j.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
                                    timestamp: x.default.extractTimestamp(o.id),
                                    user: R.default.getUserTag(o.user)
                                })
                            }) : d.push({
                                icon: p.default,
                                text: j.default.Messages.INTEGRATION_ADDED_DATE.format({
                                    timestamp: x.default.extractTimestamp(o.id)
                                })
                            }), (0, n.jsx)(M.default, {
                                name: r.name,
                                imageSrc: null !== (i = r.getIconURL(48)) && void 0 !== i ? i : A.DEFAULT_AVATARS[0],
                                integration: t,
                                buttonText: j.default.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                                hasNextSection: !0,
                                onButtonClick: () => {
                                    l(r.id), _.default.track(L.AnalyticEvents.APP_MANAGE_CTA_CLICKED, {
                                        application_id: r.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? E.default.can(L.Permissions.ADMINISTRATOR, e) : void 0
                                    })
                                },
                                details: d,
                                guildId: null == e ? void 0 : e.id,
                                isScrolling: a,
                                canShowMigrationTooltip: s
                            }, "integration-".concat(o.id))
                        }(t, e, Y, eu, l)
                    }),
                    eN = (0, n.jsx)("div", {
                        className: b.footerImage
                    });
                0 === eI.length && Q && (eI = function(e, t, l) {
                    let a = (0, o.isThemeDark)(e) ? D : y,
                        s = (0, n.jsxs)(h.default, {
                            direction: h.default.Direction.VERTICAL,
                            align: h.default.Align.CENTER,
                            className: b.emptyStateWrapper,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: a,
                                className: b.emptyStateSearchImage
                            }), (0, n.jsx)(d.Card, {
                                editable: !0,
                                className: b.emptyStateCard,
                                children: (0, n.jsx)(d.Text, {
                                    color: "text-muted",
                                    variant: "text-sm/normal",
                                    children: j.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH
                                })
                            })]
                        }),
                        i = (0, n.jsx)(d.Card, {
                            editable: !0,
                            className: b.emptyStateCard,
                            children: (0, n.jsxs)("div", {
                                className: b.emptyStateText,
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    src: P,
                                    className: b.emptyStateImage
                                }), (0, n.jsx)(d.Heading, {
                                    color: "header-secondary",
                                    variant: "heading-xl/bold",
                                    children: j.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
                                }), (0, n.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: j.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
                                        handleGoToAppDirectory: () => {
                                            (0, I.goToAppDirectory)({
                                                guildId: l,
                                                entrypoint: {
                                                    name: m.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS
                                                }
                                            }), (0, u.popLayer)()
                                        }
                                    })
                                })]
                            })
                        });
                    return t > 0 ? s : i
                }(K, ei, null == t ? void 0 : t.id), eN = null);
                let eT = C.default.getArticleURL(L.HelpdeskArticles.INTEGRATIONS),
                    eE = null != l ? j.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : j.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
                    eh = [];
                if (X) {
                    var eg, ep, eS, eO, e_;
                    let e;
                    if (eh.push((eg = H.length, ep = F, eS = W, e = eg > 0 ? j.default.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : j.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON, (0, n.jsx)(M.default, {
                            name: j.default.Messages.INTEGRATIONS_WEBHOOKS,
                            icon: O.default,
                            buttonText: e,
                            buttonDisabled: !ep,
                            onButtonClick: eS,
                            hasNextSection: eg > 0,
                            details: [{
                                text: j.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                                    count: eg
                                })
                            }]
                        }, "webhooks"))), (null == l ? void 0 : l.type) !== L.ChannelTypes.GUILD_VOICE && ((null == l ? void 0 : l.type) == null || !L.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type))) {
                        ;
                        let e, t;
                        eh.push((eO = k.length, e_ = V, eO > 0 ? (e = j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON, t = e_) : (e = j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON, t = () => open(C.default.getArticleURL(L.HelpdeskArticles.CHANNEL_FOLLOWING))), (0, n.jsx)(M.default, {
                            name: j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                            icon: S.default,
                            buttonText: e,
                            onButtonClick: t,
                            hasNextSection: eO > 0,
                            details: [{
                                text: j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({
                                    count: eO
                                })
                            }]
                        }, "channels-followed")))
                    }
                }
                return en && eh.push(function(e, t, l) {
                    let a, s, i;
                    let r = f.default.get(L.PlatformTypes.TWITCH);
                    return e > 0 ? (a = j.default.Messages.INTEGRATIONS_TWITCH_BUTTON, s = j.default.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
                        count: t
                    }), i = () => l(L.PlatformTypes.TWITCH)) : (a = j.default.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON, s = j.default.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY, i = () => (0, N.default)(L.PlatformTypes.TWITCH, "Integration Settings")), (0, n.jsx)(M.default, {
                        name: j.default.Messages.INTEGRATIONS_TWITCH,
                        icon: r.icon.whiteSVG,
                        iconBackgroundColor: r.color,
                        iconClassName: b.platformIcon,
                        buttonText: a,
                        onButtonClick: i,
                        hasNextSection: e > 0,
                        details: [{
                            text: s
                        }]
                    }, "integrations-twitch")
                }($, et, w)), ea && eh.push(function(e, t, l) {
                    let a, s, i;
                    let r = f.default.get(L.PlatformTypes.YOUTUBE);
                    return e > 0 ? (a = j.default.Messages.INTEGRATIONS_YOUTUBE_BUTTON, s = j.default.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
                        count: t
                    }), i = () => l(L.PlatformTypes.YOUTUBE)) : (a = j.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON, s = j.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY, i = () => (0, N.default)(L.PlatformTypes.YOUTUBE, "Integration Settings")), (0, n.jsx)(M.default, {
                        name: j.default.Messages.INTEGRATIONS_YOUTUBE,
                        icon: r.icon.whiteSVG,
                        iconBackgroundColor: r.color,
                        iconClassName: b.platformIcon,
                        buttonText: a,
                        onButtonClick: i,
                        hasNextSection: e > 0,
                        details: [{
                            text: s
                        }]
                    }, "integrations-youtube")
                }(ee, el, w)), (0, n.jsxs)(d.FormSection, {
                    className: i(null != eN ? b.footerPlaceholder : null),
                    children: [(0, n.jsx)(d.FormText, {
                        type: d.FormTextTypes.DESCRIPTION,
                        children: eE.format({
                            helpdeskArticle: eT
                        })
                    }), (0, n.jsx)(d.FormDivider, {
                        className: b.divider
                    }), U || q || null == t ? (0, n.jsx)(d.Spinner, {
                        className: b.spinner,
                        type: d.Spinner.Type.SPINNING_CIRCLE
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [eh, Q ? (0, n.jsxs)(n.Fragment, {
                            children: [eh.length > 0 ? (0, n.jsx)(d.FormDivider, {
                                className: b.divider
                            }) : null, (0, n.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                className: b.sectionHeader,
                                children: j.default.Messages.INTEGRATIONS_APPLICATION_SECTION
                            }), ei > 4 ? (0, n.jsx)(B, {
                                query: z,
                                setQuery: Z
                            }) : null, eI]
                        }) : null, eN]
                    })]
                })
            }