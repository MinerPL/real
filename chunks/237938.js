            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("917351"),
                i = s.n(l),
                r = s("775560"),
                o = s("446674"),
                d = s("77078"),
                u = s("75766"),
                c = s("758276"),
                E = s("132664"),
                _ = s("213307"),
                T = s("324105"),
                I = s("149632"),
                S = s("525065"),
                N = s("84190"),
                g = s("49111"),
                f = s("782340"),
                A = s("667395"),
                L = s("319765");
            let m = ["322850917248663552", "172018499005317120", "414234792121597953", "228406572756369408"],
                C = ["620723483965653003", "662246299369734154", "181970867549503489", "102860784329052160"];
            var O = e => {
                let {
                    guild: t,
                    onEnableDiscovery: s,
                    isGuildAdmin: l
                } = e, [O, h] = (0, r.useStableMemo)(() => [i.sample(m), i.sample(C)], []);
                n.useEffect(() => {
                    E.fetchDiscoverableGuilds([O, h])
                }, [O, h]);
                let [R, D] = (0, o.useStateFromStoresArray)([_.default], () => [_.default.getGuild(O), _.default.getGuild(h)], [O, h]), {
                    canEnableDiscovery: M,
                    isPendingSuccess: G
                } = (0, o.useStateFromStoresObject)([u.default], () => ({
                    canEnableDiscovery: u.default.passesChecklist(t.id),
                    isPendingSuccess: u.default.isPendingSuccess(t.id)
                }), [t.id]), [x, p] = (0, o.useStateFromStoresArray)([S.default], () => [null, S.default.getMemberCount(t.id)], [t.id]), U = n.useCallback(() => {
                    null != s && s()
                }, [s]), v = null;
                return l ? G ? v = f.default.Messages.GUILD_SETTINGS_DISCOVERY_PENDING_HEALTHY : !M && (v = f.default.Messages.GUILD_SETTINGS_DISCOVERY_REQUIREMENTS_NOT_MET) : v = f.default.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY, (0, a.jsxs)("div", {
                    className: A.container,
                    children: [(0, a.jsx)("img", {
                        alt: "",
                        src: L,
                        className: A.sparkles
                    }), (0, a.jsxs)("div", {
                        className: A.discoverPreview,
                        children: [(0, a.jsx)(T.default, {
                            className: A.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == R,
                            guild: R
                        }), (0, a.jsx)(T.default, {
                            className: A.previewCard,
                            guild: t,
                            description: f.default.Messages.GUILD_SETTINGS_DISCOVERY_PREVIEW_DESCRIPTION,
                            presenceCount: x,
                            memberCount: p
                        }), (0, a.jsx)(T.default, {
                            className: A.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == D,
                            guild: D
                        })]
                    }), (0, a.jsx)(d.Heading, {
                        className: A.header,
                        variant: "heading-xl/semibold",
                        children: f.default.Messages.GUILD_SETTINGS_DISCOVERY_HEADER
                    }), (0, a.jsx)(d.Text, {
                        variant: "text-md/normal",
                        className: A.valueProp,
                        color: "header-secondary",
                        children: f.default.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION.format({
                            onLinkClick: () => (0, I.navigateToAndTrackHelpCenterClick)({
                                articleId: g.HelpdeskArticles.SERVER_DISCOVERY,
                                guildId: t.id,
                                pageView: c.DiscoverySettingsViews.INTRO
                            })
                        })
                    }), (0, a.jsx)(d.Text, {
                        variant: "text-md/normal",
                        className: A.byline,
                        color: "header-secondary",
                        children: f.default.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION_SUBHEADING.format({
                            onGuidelinesClick: () => (0, I.navigateToAndTrackHelpCenterClick)({
                                articleId: g.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
                                guildId: t.id,
                                pageView: c.DiscoverySettingsViews.INTRO
                            })
                        })
                    }), (0, a.jsx)(d.Tooltip, {
                        text: v,
                        children: e => (0, a.jsx)(d.Button, {
                            ...e,
                            className: A.enableButton,
                            color: d.Button.Colors.BRAND,
                            size: d.Button.Sizes.LARGE,
                            disabled: !M || !l,
                            onClick: U,
                            children: f.default.Messages.GUILD_SETTINGS_SET_UP_DISCOVERY
                        })
                    }), (0, a.jsx)(N.default, {
                        className: A.checklist,
                        guild: t,
                        guildId: t.id
                    })]
                })
            }