            "use strict";
            n.r(t), n.d(t, {
                ButtonAddReaction: function() {
                    return L
                }
            }), n("702976"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("483366"),
                o = n.n(r),
                u = n("130969"),
                d = n("77078"),
                c = n("913144"),
                f = n("62587"),
                m = n("85589"),
                E = n("166257"),
                _ = n("432173"),
                h = n("219013"),
                p = n("697218"),
                I = n("79945"),
                T = n("790950"),
                g = n("568734"),
                C = n("719923"),
                S = n("875978"),
                A = n("49111"),
                N = n("958706"),
                M = n("646718"),
                v = n("782340"),
                x = n("550244"),
                O = n("314934");
            class L extends s.Component {
                render() {
                    let {
                        type: e,
                        message: t,
                        className: n,
                        children: s,
                        useChatFontScaling: l
                    } = this.props, {
                        isReactionPickerActive: r
                    } = this.state, o = t.state === A.MessageStates.SENDING, u = e === S.ReactionTypes.BURST;
                    if (o || (0, g.hasFlag)(t.flags, A.MessageFlags.EPHEMERAL)) return null;
                    let m = p.default.getCurrentUser(),
                        E = (0, C.isPremium)(m),
                        _ = u ? v.default.Messages.ADD_BURST_REACTION : v.default.Messages.ADD_REACTION;
                    !E && u && (_ = (0, a.jsx)(f.NitroTooltipLabel, {
                        tooltipText: v.default.Messages.ADD_BURST_REACTION
                    }));
                    let h = l ? O : x;
                    return (0, a.jsx)(d.Popout, {
                        shouldShow: r,
                        onRequestClose: this.handleReactionPickerToggle,
                        renderPopout: this.renderReactionPopout,
                        position: "right",
                        children: (e, t) => {
                            let {
                                isShown: l
                            } = t;
                            return (0, a.jsx)(d.TooltipContainer, {
                                text: _,
                                color: d.TooltipColors.PRIMARY,
                                "aria-label": u ? v.default.Messages.ADD_BURST_REACTION : v.default.Messages.ADD_REACTION,
                                tooltipClassName: h.addReactionTooltip,
                                children: (0, a.jsxs)(d.Clickable, {
                                    ...e,
                                    onClick: e => {
                                        this.handleAddReactionClick(e)
                                    },
                                    onMouseEnter: () => {
                                        c.default.dispatch({
                                            type: "EMOJI_INTERACTION_INITIATED",
                                            interaction: N.EmojiInteractionPoint.AddReactionPopoutMouseEntered
                                        })
                                    },
                                    onFocus: () => {
                                        c.default.dispatch({
                                            type: "EMOJI_INTERACTION_INITIATED",
                                            interaction: N.EmojiInteractionPoint.AddReactionPopoutFocused
                                        })
                                    },
                                    className: i(h.reactionBtn, {
                                        [h.active]: l
                                    }, n),
                                    children: [u ? (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)(T.default, {
                                            className: h.icon
                                        })
                                    }) : (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)(I.default, {
                                            className: h.icon
                                        })
                                    }), s]
                                })
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isReactionPickerActive: !1
                    }, this.onAddReaction = (e, t) => {
                        if (null == e) return;
                        let {
                            channel: n,
                            message: a,
                            isForumToolbar: s
                        } = this.props;
                        (0, E.addReaction)(n.id, a.id, (0, _.toReactionEmoji)(e), s ? E.ReactionLocations.FORUM_TOOLBAR : E.ReactionLocations.MESSAGE, {
                            burst: t
                        })
                    }, this.handleReactionPickerToggle = () => {
                        this.setState(e => ({
                            isReactionPickerActive: !e.isReactionPickerActive
                        }))
                    }, this.handleAddReactionClick = e => {
                        let {
                            type: t,
                            channel: n
                        } = this.props;
                        e.stopPropagation();
                        let a = p.default.getCurrentUser();
                        t === S.ReactionTypes.BURST && !(0, C.isPremium)(a) && (0, m.openBurstReactionsUpsellModal)({
                            analytics: {
                                type: M.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                page: null != n.getGuildId() ? A.AnalyticsPages.GUILD_CHANNEL : A.AnalyticsPages.DM_CHANNEL,
                                section: (0, _.getBurstAnalyticsSection)(n),
                                object: A.AnalyticsObjects.INLINE_REACTION_PICKER_UPSELL
                            }
                        }), this.handleReactionPickerToggle()
                    }, this.renderReactionPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            type: n,
                            channel: s,
                            message: l
                        } = this.props, i = n === S.ReactionTypes.BURST, r = {
                            openPopoutType: "message_reaction_emoji_picker",
                            ...i && {
                                openPopoutType: "message_super_reaction_emoji_picker",
                                page: null != s.getGuildId() ? A.AnalyticsPages.GUILD_CHANNEL : A.AnalyticsPages.DM_CHANNEL,
                                section: (0, _.getBurstAnalyticsSection)(s),
                                object: A.AnalyticsObjects.REACTION_RAIL
                            }
                        }, c = (0, a.jsx)(h.ReactionPicker, {
                            closePopout: t,
                            channel: s,
                            onSelectEmoji: (e, n, a) => {
                                this.onAddReaction(e, a), n && (a ? o(t, 150)() : t())
                            },
                            analyticsOverride: r,
                            messageId: l.id
                        });
                        return (0, a.jsx)(u.DialogContext.Consumer, {
                            children: e => e ? (0, a.jsx)(d.Dialog, {
                                "aria-label": v.default.Messages.REACTION_PICKER,
                                children: c
                            }) : c
                        })
                    }
                }
            }