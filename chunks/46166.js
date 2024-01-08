            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return y
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("917351"),
                u = s.n(d),
                c = s("446674"),
                E = s("669491"),
                _ = s("266491"),
                T = s("77078"),
                I = s("913801"),
                S = s("45299"),
                N = s("545158"),
                g = s("716241"),
                f = s("465869"),
                A = s("900938"),
                L = s("973262"),
                m = s("965397"),
                C = s("578706"),
                O = s("781896"),
                h = s("599110"),
                R = s("257869"),
                D = s("837008"),
                M = s("49111"),
                G = s("782340"),
                x = s("704987");
            let p = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401e3, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
                U = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
                v = p[4],
                j = e => {
                    var t, s;
                    let {
                        guild: l,
                        canEnable: r
                    } = e, d = (0, D.useSubscriptionsSettings)(l.id), {
                        loading: c,
                        updateSubscriptionsSettings: A
                    } = (0, D.useUpdateSubscriptionsSettings)(), [R, j] = n.useState(l.hasFeature(M.GuildFeatures.CREATOR_STORE_PAGE)), [P, y] = n.useState(null !== (t = null == d ? void 0 : d.store_page_primary_color) && void 0 !== t ? t : v), [b, B] = n.useState(null == d ? void 0 : d.store_page_trailer_url), F = null == b || null != b.match(U), [H, V] = n.useState(null !== (s = null == d ? void 0 : d.store_page_show_subscriber_count) && void 0 !== s && s), w = n.useRef(null == d ? void 0 : d.store_page_slug).current, k = R !== l.hasFeature(M.GuildFeatures.CREATOR_STORE_PAGE) || (null == d ? void 0 : d.store_page_primary_color) == null && P !== v || (null == d ? void 0 : d.store_page_primary_color) != null && P !== (null == d ? void 0 : d.store_page_primary_color) || b !== (null == d ? void 0 : d.store_page_trailer_url) || null != H && H !== (null == d ? void 0 : d.store_page_show_subscriber_count), Y = async () => {
                        o(null != d, "Settings must be defined");
                        let e = {};
                        R !== l.hasFeature(M.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = R), ((null == d ? void 0 : d.store_page_primary_color) == null && P !== v || (null == d ? void 0 : d.store_page_primary_color) != null && P !== (null == d ? void 0 : d.store_page_primary_color)) && (e.store_page_primary_color = P), b !== (null == d ? void 0 : d.store_page_trailer_url) && (e.store_page_trailer_url = b), H !== (null == d ? void 0 : d.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = H), !u.isEmpty(e) && (await A(l.id, e), "store_page_enabled" in e && h.default.track(M.AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
                            enabled: R,
                            ...(0, g.collectGuildAnalyticsMetadata)(l.id)
                        }))
                    }, K = M.MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(w), W = null != b && b === (null == d ? void 0 : d.store_page_trailer_url), {
                        shouldRestrictUpdatingCreatorMonetizationSettings: z
                    } = (0, f.useShouldRestrictUpdatingCreatorMonetizationSettings)(l.id), X = z || !F;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(T.FormTitle, {
                            tag: "h1",
                            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TITLE
                        }), (0, a.jsx)(T.FormText, {
                            type: T.FormText.Types.DESCRIPTION,
                            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DESCRIPTION
                        }), (0, a.jsx)(T.FormSwitch, {
                            className: x.enableSwitch,
                            value: R,
                            disabled: z || !R && !r,
                            tooltipNote: R || r ? void 0 : G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PRIMARY_TOGGLE_DISABLED_TOOLTIP,
                            hideBorder: !0,
                            onChange: e => j(e),
                            children: (0, a.jsx)(T.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ENABLE
                            })
                        }), (0, a.jsxs)(T.FormItem, {
                            title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PROMO_URL,
                            disabled: z,
                            children: [(0, a.jsx)(I.default, {
                                value: K,
                                className: i({
                                    [x.disabled]: z
                                })
                            }), (0, a.jsx)(T.Button, {
                                onClick: () => (0, N.default)(K),
                                className: x.openPageButton,
                                disabled: z,
                                children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_GO_TO_PAGE
                            })]
                        }), (0, a.jsx)(T.FormDivider, {
                            className: x.divider
                        }), (0, a.jsxs)(T.FormItem, {
                            title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_TITLE,
                            disabled: z,
                            children: [(0, a.jsx)(T.FormText, {
                                disabled: z,
                                children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_DESCRIPTION
                            }), (0, a.jsxs)("div", {
                                className: x.accentColorContainer,
                                children: [(0, a.jsx)(T.Button, {
                                    onClick: () => null,
                                    color: T.Button.Colors.CUSTOM,
                                    style: {
                                        backgroundColor: "#".concat(P.toString(16).padStart(6, "0"))
                                    },
                                    className: x.buttonPreview,
                                    disabled: z,
                                    children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_BUTTON_PREVIEW
                                }), (0, a.jsx)(L.default, {
                                    colors: p,
                                    customColor: null,
                                    defaultColor: v,
                                    value: P,
                                    onChange: e => y(e),
                                    renderDefaultButton: () => null,
                                    renderCustomButton: () => null,
                                    colorContainerClassName: x.hideColorButtons,
                                    disabled: z
                                })]
                            })]
                        }), (0, a.jsx)(T.FormDivider, {
                            className: x.divider
                        }), (0, a.jsxs)(T.FormItem, {
                            title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_TITLE,
                            disabled: z,
                            children: [(0, a.jsx)(T.FormText, {
                                disabled: z,
                                children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_DESCRIPTION
                            }), (0, a.jsx)(T.TextInput, {
                                value: null != b ? b : void 0,
                                onChange: e => B("" === e ? null : e),
                                error: F ? null : G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_BAD_LINK,
                                placeholder: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_PLACEHOLDER,
                                className: x.trailerInputWrapper,
                                inputClassName: i(x.trailerInput, {
                                    [x.error]: !F,
                                    [x.trailerInputWithCheckmark]: W || !F
                                }),
                                prefixElement: F && W && (0, a.jsx)(C.default, {
                                    color: E.default.unsafe_rawColors.BRAND_500.css,
                                    backgroundColor: E.default.unsafe_rawColors.WHITE_500.css,
                                    className: x.inputCheckmark
                                }),
                                disabled: z
                            })]
                        }), (0, a.jsx)(T.FormDivider, {
                            className: x.divider
                        }), (0, a.jsxs)(T.FormItem, {
                            title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_TITLE,
                            disabled: z,
                            children: [(0, a.jsx)(T.FormText, {
                                disabled: z,
                                children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_DESCRIPTION
                            }), (0, a.jsx)(T.FormSwitch, {
                                className: x.premiumMemberCountSwitchContainer,
                                value: H,
                                hideBorder: !0,
                                onChange: e => V(e),
                                disabled: z,
                                children: (0, a.jsxs)("div", {
                                    className: x.iconSwitchLabel,
                                    children: [(0, a.jsx)("div", {
                                        className: x.iconContainer,
                                        children: (0, a.jsx)(O.default, {
                                            width: 28,
                                            height: 28,
                                            className: x.premiumMemberCountIcon
                                        })
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(T.Text, {
                                            variant: "text-md/medium",
                                            color: "header-primary",
                                            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT
                                        }), (0, a.jsx)(T.Text, {
                                            variant: "text-sm/normal",
                                            color: "header-secondary",
                                            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT_DESCRIPTION
                                        })]
                                    })]
                                })
                            })]
                        }), (0, a.jsx)(_.default, {
                            component: "div",
                            className: x.contentRegion,
                            children: k && (0, a.jsx)(m.default, {
                                children: (0, a.jsx)(S.default, {
                                    submitting: c,
                                    onReset: () => {
                                        var e, t;
                                        j(l.hasFeature(M.GuildFeatures.CREATOR_STORE_PAGE)), y(null !== (e = null == d ? void 0 : d.store_page_primary_color) && void 0 !== e ? e : v), B(null == d ? void 0 : d.store_page_trailer_url), V(null !== (t = null == d ? void 0 : d.store_page_show_subscriber_count) && void 0 !== t && t)
                                    },
                                    onSave: Y,
                                    disabled: X
                                })
                            })
                        })]
                    })
                };

            function P() {
                let e = (0, c.useStateFromStores)([A.default], () => A.default.getGuild()),
                    t = (0, R.useGroupListingsFetchContext)(),
                    s = (0, D.useSubscriptionListingsForGuild)(null == e ? void 0 : e.id),
                    n = s.some(e => e.published);
                return null != e && t ? (0, a.jsx)(j, {
                    guild: e,
                    canEnable: n
                }) : (0, a.jsx)(T.Spinner, {})
            }

            function y() {
                let e = (0, c.useStateFromStores)([A.default], () => A.default.getGuild());
                return (0, a.jsxs)(R.GroupListingsFetchContextProvider, {
                    guildId: null == e ? void 0 : e.id,
                    refetchOnMount: !0,
                    children: [(0, a.jsx)(P, {}), ";"]
                })
            }