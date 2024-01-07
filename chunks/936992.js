            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return S
                },
                GuildSelectModalBody: function() {
                    return C
                },
                default: function() {
                    return v
                }
            }), n("808653"), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("448105"),
                s = n.n(l),
                a = n("446674"),
                o = n("77078"),
                u = n("54239"),
                c = n("393414"),
                d = n("334811"),
                f = n("305961"),
                p = n("677099"),
                E = n("476263"),
                _ = n("810567"),
                h = n("427459"),
                I = n("49111"),
                m = n("782340"),
                g = n("109396");

            function S(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: i
                } = e;
                return (0, r.jsxs)(o.ModalHeader, {
                    className: g.selectHeaderContainer,
                    children: [(0, r.jsx)(o.Heading, {
                        className: g.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, r.jsx)(_.default, {
                        size: _.default.Sizes.MEDIUM,
                        placeholder: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: g.selectSearch,
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
                    onSelectGuild: l,
                    query: _
                } = e, S = (0, a.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds()), C = (0, a.useStateFromStoresArray)([f.default], () => S.reduce((e, t) => {
                    let r = f.default.getGuild(t);
                    return null == r || null != n && n.some(e => e.id === t) ? e : ((_.length <= 0 || s(_.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) && e.push(r), e)
                }, [])), {
                    enabled: v
                } = d.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function T() {
                    i(), (0, u.popLayer)(), (0, c.transitionTo)(I.Routes.GUILD_DISCOVERY)
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [0 === C.length && (0, r.jsx)("div", {
                        className: g.emptyStateWrapper,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === S.length ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, r.jsx)(o.Clickable, {
                                    onClick: T,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), C.map(e => (0, r.jsxs)(o.Clickable, {
                        className: g.selectGuild,
                        onClick: () => {
                            l(e)
                        },
                        children: [(0, r.jsx)(E.default, {
                            className: g.selectGuildIcon,
                            guild: e,
                            size: E.default.Sizes.SMALL
                        }), (0, r.jsxs)("div", {
                            className: g.selectGuildCopy,
                            children: [(0, r.jsx)(o.Text, {
                                className: g.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), v && (0, r.jsx)(o.Text, {
                                className: g.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, h.getTierName)(e.premiumTier)
                            })]
                        }), v && (0, r.jsx)(o.Text, {
                            className: g.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function v(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: l
                } = e, [s, a] = i.useState("");
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: l,
                    className: g.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(S, {
                        query: s,
                        setQuery: a
                    }), (0, r.jsx)(o.ModalContent, {
                        className: g.modalContent,
                        children: (0, r.jsx)(C, {
                            onClose: t,
                            onSelectGuild: n,
                            query: s
                        })
                    }), (0, r.jsx)(o.ModalCloseButton, {
                        className: g.modalCloseButton,
                        onClick: t
                    })]
                })
            }