            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return S
                },
                GuildSelectModalBody: function() {
                    return C
                },
                default: function() {
                    return L
                }
            }), n("808653"), n("424973"), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("448105"),
                s = n.n(r),
                a = n("446674"),
                o = n("77078"),
                u = n("54239"),
                c = n("393414"),
                d = n("334811"),
                f = n("305961"),
                p = n("677099"),
                h = n("476263"),
                E = n("810567"),
                m = n("427459"),
                _ = n("49111"),
                g = n("782340"),
                I = n("109396");

            function S(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: i
                } = e;
                return (0, l.jsxs)(o.ModalHeader, {
                    className: I.selectHeaderContainer,
                    children: [(0, l.jsx)(o.Heading, {
                        className: I.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, l.jsx)(E.default, {
                        size: E.default.Sizes.MEDIUM,
                        placeholder: g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: I.selectSearch,
                        query: i,
                        onChange: n,
                        onClear: () => n("")
                    })]
                })
            }

            function C(e) {
                let {
                    isTransfer: t = !1,
                    selectedSlotGuilds: n,
                    onClose: i,
                    onSelectGuild: r,
                    query: E
                } = e, S = (0, a.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds()), C = (0, a.useStateFromStoresArray)([f.default], () => S.reduce((e, t) => {
                    let l = f.default.getGuild(t);
                    return null == l || null != n && n.some(e => e.id === t) ? e : ((E.length <= 0 || s(E.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l), e)
                }, [])), {
                    enabled: L
                } = d.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function R() {
                    i(), (0, u.popLayer)(), (0, c.transitionTo)(_.Routes.GUILD_DISCOVERY)
                }
                return (0, l.jsxs)(l.Fragment, {
                    children: [0 === C.length && (0, l.jsx)("div", {
                        className: I.emptyStateWrapper,
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === S.length ? g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, l.jsx)(o.Clickable, {
                                    onClick: R,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), C.map(e => (0, l.jsxs)(o.Clickable, {
                        className: I.selectGuild,
                        onClick: () => {
                            r(e)
                        },
                        children: [(0, l.jsx)(h.default, {
                            className: I.selectGuildIcon,
                            guild: e,
                            size: h.default.Sizes.SMALL
                        }), (0, l.jsxs)("div", {
                            className: I.selectGuildCopy,
                            children: [(0, l.jsx)(o.Text, {
                                className: I.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), L && (0, l.jsx)(o.Text, {
                                className: I.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, m.getTierName)(e.premiumTier)
                            })]
                        }), L && (0, l.jsx)(o.Text, {
                            className: I.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function L(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: r
                } = e, [s, a] = i.useState("");
                return (0, l.jsxs)(o.ModalRoot, {
                    transitionState: r,
                    className: I.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, l.jsx)(S, {
                        query: s,
                        setQuery: a
                    }), (0, l.jsx)(o.ModalContent, {
                        className: I.modalContent,
                        children: (0, l.jsx)(C, {
                            onClose: t,
                            onSelectGuild: n,
                            query: s
                        })
                    }), (0, l.jsx)(o.ModalCloseButton, {
                        className: I.modalCloseButton,
                        onClick: t
                    })]
                })
            }