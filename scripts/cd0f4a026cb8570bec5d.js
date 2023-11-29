(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13743"], {
        936992: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                GuildSelectModalHeader: function() {
                    return L
                },
                GuildSelectModalBody: function() {
                    return R
                },
                default: function() {
                    return x
                }
            }), t("808653"), t("424973"), t("222007");
            var l = t("37983"),
                s = t("884691"),
                d = t("448105"),
                n = t.n(d),
                r = t("446674"),
                i = t("77078"),
                o = t("54239"),
                u = t("393414"),
                c = t("334811"),
                _ = t("305961"),
                m = t("677099"),
                I = t("476263"),
                S = t("810567"),
                M = t("427459"),
                E = t("49111"),
                C = t("782340"),
                U = t("109396");

            function L(e) {
                let {
                    isTransfer: a = !1,
                    setQuery: t,
                    query: s
                } = e;
                return (0, l.jsxs)(i.ModalHeader, {
                    className: U.selectHeaderContainer,
                    children: [(0, l.jsx)(i.Heading, {
                        className: U.selectHeader,
                        variant: "heading-md/semibold",
                        children: a ? C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, l.jsx)(S.default, {
                        size: S.default.Sizes.MEDIUM,
                        placeholder: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: U.selectSearch,
                        query: s,
                        onChange: t,
                        onClear: () => t("")
                    })]
                })
            }

            function R(e) {
                let {
                    isTransfer: a = !1,
                    selectedSlotGuilds: t,
                    onClose: s,
                    onSelectGuild: d,
                    query: S
                } = e, L = (0, r.useStateFromStores)([m.default], () => m.default.getFlattenedGuildIds()), R = (0, r.useStateFromStoresArray)([_.default], () => L.reduce((e, a) => {
                    let l = _.default.getGuild(a);
                    return null == l || null != t && t.some(e => e.id === a) ? e : ((S.length <= 0 || n(S.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l), e)
                }, [])), {
                    enabled: x
                } = c.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function f() {
                    s(), (0, o.popLayer)(), (0, u.transitionTo)(E.Routes.GUILD_DISCOVERY)
                }
                return (0, l.jsxs)(l.Fragment, {
                    children: [0 === R.length && (0, l.jsx)("div", {
                        className: U.emptyStateWrapper,
                        children: (0, l.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: 0 === L.length ? C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, a) => (0, l.jsx)(i.Clickable, {
                                    onClick: f,
                                    tag: "a",
                                    children: e
                                }, a)
                            }) : C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), R.map(e => (0, l.jsxs)(i.Clickable, {
                        className: U.selectGuild,
                        onClick: () => {
                            d(e)
                        },
                        children: [(0, l.jsx)(I.default, {
                            className: U.selectGuildIcon,
                            guild: e,
                            size: I.default.Sizes.SMALL
                        }), (0, l.jsxs)("div", {
                            className: U.selectGuildCopy,
                            children: [(0, l.jsx)(i.Text, {
                                className: U.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), x && (0, l.jsx)(i.Text, {
                                className: U.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, M.getTierName)(e.premiumTier)
                            })]
                        }), x && (0, l.jsx)(i.Text, {
                            className: U.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: a ? C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function x(e) {
                let {
                    onClose: a,
                    onSelectGuild: t,
                    transitionState: d
                } = e, [n, r] = s.useState("");
                return (0, l.jsxs)(i.ModalRoot, {
                    transitionState: d,
                    className: U.modal,
                    size: i.ModalSize.SMALL,
                    children: [(0, l.jsx)(L, {
                        query: n,
                        setQuery: r
                    }), (0, l.jsx)(i.ModalContent, {
                        className: U.modalContent,
                        children: (0, l.jsx)(R, {
                            onClose: a,
                            onSelectGuild: t,
                            query: n
                        })
                    }), (0, l.jsx)(i.ModalCloseButton, {
                        className: U.modalCloseButton,
                        onClick: a
                    })]
                })
            }
        }
    }
]);