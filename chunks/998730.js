            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                u = n("446674"),
                a = n("77078"),
                o = n("679653"),
                s = n("42203"),
                i = n("923959"),
                c = n("27618"),
                d = n("697218"),
                A = n("476765"),
                f = n("462392"),
                L = n("782340"),
                C = n("643286");
            let _ = e => {
                let {
                    guildId: t,
                    channel: n,
                    onSelectChannel: r
                } = e, s = (0, u.useStateFromStoresArray)([i.default], () => i.default.getChannels(t)[i.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel()
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t
                }), [t]);
                return (0, l.jsx)(a.FormItem, {
                    className: C.channelSelector,
                    required: !0,
                    children: (0, l.jsx)(a.SearchableSelect, {
                        value: null == n ? void 0 : n.id,
                        options: s.map(e => ({
                            value: e.id,
                            label: (0, o.computeChannelName)(e, d.default, c.default, !0)
                        })),
                        onChange: e => {
                            let t = s.find(t => t.id === e);
                            r(null != t ? t : void 0)
                        },
                        placeholder: L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
                    })
                })
            };

            function N(e) {
                let {
                    action: t,
                    triggerType: n,
                    guildId: o,
                    isEdit: i,
                    onEditChannel: c,
                    onClose: d,
                    transitionState: N
                } = e, T = (0, A.useUID)(), [I, h] = r.useState(t.metadata.channelId), [O, E] = r.useState(null), M = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(I), [I]), S = (0, f.getActionInfo)(t.type, t, n);
                if (null == S) return null;
                let {
                    headerText: v
                } = S;
                return (0, l.jsxs)(a.ModalRoot, {
                    transitionState: N,
                    "aria-labelledby": T,
                    size: a.ModalSize.SMALL,
                    children: [(0, l.jsxs)(a.ModalContent, {
                        className: C.actionContentContainer,
                        children: [(0, l.jsx)(a.Heading, {
                            id: T,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: C.header,
                            children: v
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
                        }), (0, l.jsx)(_, {
                            guildId: o,
                            channel: M,
                            onSelectChannel: e => {
                                null != e && h(e.id)
                            }
                        }), null != O ? (0, l.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: O
                        }) : (0, l.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
                        })]
                    }), (0, l.jsxs)(a.ModalFooter, {
                        children: [(0, l.jsx)(a.Button, {
                            onClick: () => {
                                if (null == I) {
                                    E(L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
                                    return
                                }
                                c(I)
                            },
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.SMALL,
                            children: i ? L.default.Messages.EDIT : L.default.Messages.SAVE
                        }), (0, l.jsx)(a.Button, {
                            onClick: () => {
                                d()
                            },
                            color: a.Button.Colors.TRANSPARENT,
                            look: a.Button.Looks.LINK,
                            children: L.default.Messages.CANCEL
                        })]
                    })]
                })
            }