            "use strict";
            i.r(t), i.d(t, {
                REACTION_MIN_WIDTH_DIGITS: function() {
                    return eo
                },
                showReactionsModal: function() {
                    return es
                },
                isMeReaction: function() {
                    return er
                },
                Reaction: function() {
                    return ed
                }
            }), i("222007");
            var a = i("37983"),
                l = i("884691"),
                n = i("414456"),
                o = i.n(n),
                s = i("748820"),
                r = i("458960"),
                u = i("509043"),
                d = i("446674"),
                c = i("862337"),
                p = i("130969"),
                h = i("77078"),
                f = i("430568"),
                T = i("57155"),
                m = i("206230"),
                E = i("716241"),
                g = i("58533"),
                _ = i("385976"),
                R = i("858619"),
                I = i("102873"),
                C = i("865453"),
                O = i("233322"),
                v = i("252931"),
                A = i("529932"),
                N = i("446066"),
                S = i("13066"),
                P = i("785621"),
                L = i("635956"),
                y = i("85589"),
                j = i("166257"),
                x = i("432173"),
                M = i("845579"),
                U = i("42203"),
                b = i("305961"),
                D = i("486996"),
                B = i("162771"),
                k = i("697218"),
                w = i("471671"),
                V = i("738107"),
                F = i("791106"),
                G = i("256170"),
                H = i("216422"),
                K = i("599110"),
                W = i("719923"),
                J = i("15935"),
                z = i("875978"),
                Y = i("412745"),
                X = i("459698"),
                Z = i("933629"),
                q = i("331011"),
                Q = i("81924"),
                $ = i("49111"),
                ee = i("646718"),
                et = i("782340"),
                ei = i("154403"),
                ea = i("550244"),
                el = i("314934"),
                en = i("219468");
            let eo = 9;

            function es(e, t, i) {
                (0, h.openModal)(e => (0, a.jsx)(T.default, {
                    ...e,
                    message: t,
                    selectedReaction: i
                }))
            }

            function er(e, t, i) {
                return i === z.ReactionTypes.BURST && t || i === z.ReactionTypes.NORMAL && e
            }
            class eu extends l.PureComponent {
                componentWillAppear(e) {
                    this.animateIn(e)
                }
                componentWillEnter(e) {
                    this.animateIn(e)
                }
                componentWillUnmount() {
                    this.hideTooltip()
                }
                animateIn(e) {
                    let {
                        autoUnfurlReactionTooltip: t
                    } = this.props;
                    w.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
                        toValue: 1,
                        duration: t ? 200 : 300,
                        easing: r.default.Easing.inOut(r.default.Easing.back())
                    }), r.default.timing(this.opacity, {
                        toValue: 1,
                        duration: t ? 200 : 300
                    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
                }
                render() {
                    let e, t;
                    let {
                        count: i,
                        burst_count: l,
                        colors: n,
                        isBurstReaction: s,
                        hideCount: d,
                        emoji: c,
                        readOnly: p,
                        isLurking: T,
                        isGuest: m,
                        isPendingMember: E,
                        className: _,
                        useChatFontScaling: R,
                        message: I,
                        hideEmoji: C,
                        animationStartPosition: O
                    } = this.props, {
                        shouldShowTooltip: v,
                        tooltipTextAria: A,
                        reactionRef: N,
                        tooltipPositionKey: S
                    } = this.state, L = R ? el : ea, y = {
                        transform: [{
                            scale: this.scale
                        }],
                        opacity: this.opacity
                    }, j = s ? l : i;
                    if (s && null != n) {
                        var M;
                        let {
                            accentColor: i,
                            backgroundColor: a,
                            opacity: l
                        } = n, o = null !== (M = (0, u.hex2rgb)(null != a ? a : "", l)) && void 0 !== M ? M : "";
                        this.isMe() && (y.borderColor = a), y.background = o, e = i, t = i
                    }
                    let U = null == N ? void 0 : N.getBoundingClientRect(),
                        b = null != O && null != U,
                        D = null == O;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(h.Popout, {
                            shouldShow: v,
                            "aria-label": null != A && A,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: S,
                            children: () => (0, a.jsx)("div", {
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.handleSetReactionRef,
                                children: (0, a.jsx)(r.default.div, {
                                    className: o(L.reaction, _, {
                                        [L.reactionMe]: this.isMe(),
                                        [L.reactionReadOnly]: p && !T && !E && !m,
                                        [L.shakeReaction]: C && null == O
                                    }),
                                    style: y,
                                    children: (0, a.jsx)(h.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: i => (0, a.jsxs)(h.Clickable, {
                                            ...i,
                                            className: L.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": p,
                                            "aria-label": (0, x.getAccessibleEmojiDisplayName)(this.isMe(), j, c, s),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, a.jsx)("div", {
                                                className: o({
                                                    [L.burstGlow]: s
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(t)
                                                }
                                            }), (0, a.jsxs)("div", {
                                                children: [s ? (0, a.jsxs)(a.Fragment, {
                                                    children: [b && (0, a.jsx)(g.default, {
                                                        messageId: I.id,
                                                        emoji: c,
                                                        startPosition: O,
                                                        targetPosition: U
                                                    }), D && (0, a.jsx)(Q.default, {
                                                        count: l,
                                                        emoji: c,
                                                        channelId: I.getChannelId(),
                                                        messageId: I.id,
                                                        useChatFontScaling: R,
                                                        color: t
                                                    })]
                                                }) : null, (0, a.jsx)(f.default, {
                                                    className: o({
                                                        [L.hideEmoji]: C
                                                    }),
                                                    emojiId: c.id,
                                                    emojiName: c.name,
                                                    size: "reaction",
                                                    animated: c.animated
                                                })]
                                            }), d ? null : (0, a.jsx)(V.default, {
                                                className: L.reactionCount,
                                                value: j,
                                                color: e,
                                                digitWidth: eo
                                            }), (0, a.jsx)(P.default, {
                                                count: j,
                                                reactionRef: N
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new c.Timeout, this.hideTimeout = new c.Timeout, this.ctaRef = l.createRef(), this.type = z.ReactionTypes.NORMAL, this.colors = {
                        backgroundColor: void 0,
                        borderColor: void 0,
                        textColor: void 0
                    }, this.state = {
                        shouldShowTooltip: !1,
                        tooltipText: null,
                        tooltipTextAria: null,
                        reactionRef: null,
                        tooltipPositionKey: void 0
                    }, this.hasShownTooltip = !1, this.nonce = (0, s.v4)(), this.userCanBurstReact = () => this.props.userHasPremium, this.handleClick = e => {
                        e.stopPropagation();
                        let {
                            message: t,
                            emoji: i,
                            readOnly: a,
                            isBurstReaction: l,
                            isPendingMember: n,
                            isLurking: o,
                            isGuest: s,
                            isForumToolbar: r
                        } = this.props, u = U.default.getChannel(t.getChannelId());
                        if (o || s) {
                            var d, c;
                            null === (c = this.ctaRef) || void 0 === c || null === (d = c.current) || void 0 === d || d.focus();
                            return
                        }
                        let p = t.getChannelId(),
                            h = r ? j.ReactionLocations.FORUM_TOOLBAR : j.ReactionLocations.MESSAGE;
                        if (l && !this.userCanBurstReact()) {
                            (0, y.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: ee.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == u ? void 0 : u.getGuildId()) != null ? $.AnalyticsPages.GUILD_CHANNEL : $.AnalyticsPages.DM_CHANNEL,
                                    section: null != u ? (0, x.getBurstAnalyticsSection)(u) : void 0,
                                    object: $.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        }
                        n ? this.handleShowVerificationGate() : !a && (this.isMe() ? (0, j.removeReaction)(p, t.id, i, void 0, h, {
                            burst: l
                        }) : (0, j.addReaction)(p, t.id, i, h, {
                            burst: l
                        }))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: i,
                            type: a,
                            reduceMotion: l,
                            animateEmoji: n,
                            autoUnfurlReactionTooltip: o
                        } = this.props, s = a === z.ReactionTypes.BURST;
                        s && !this.isReactionEventActive && !l && n && (0, j.playBurstReaction)({
                            channelId: i.getChannelId(),
                            messageId: i.id,
                            emoji: t,
                            key: J.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(s ? 750 : o ? 200 : 500, this.showTooltip, !1)
                    }, this.handleEnterTooltip = () => {
                        this.isReactionEventActive = !0, this.handleShowTooltip()
                    }, this.handleShowTooltip = () => {
                        this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), D.default.addChangeListener(this.updateTooltipText))
                    }, this.showTooltip = () => {
                        this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
                    }, this.handleLeave = () => {
                        this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), D.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
                    }, this.hideTooltip = () => {
                        this.setState({
                            shouldShowTooltip: !1
                        }), this.hasShownTooltip && K.default.track($.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: this.nonce
                        })
                    }, this.isMe = () => {
                        let {
                            me: e,
                            me_burst: t,
                            type: i
                        } = this.props;
                        return er(e, t, i)
                    }, this.updateTooltipText = () => {
                        let {
                            message: e,
                            emoji: t,
                            type: i
                        } = this.props, a = (0, q.getReactionTooltipText)(e, t, i), l = this.isKeyboardNavigation ? a : (0, q.getReactionTooltipText)(e, t, i, $.NOOP);
                        this.setState({
                            tooltipText: l,
                            tooltipTextAria: a,
                            shouldShowTooltip: null != l && "" !== l
                        })
                    }, this.renderLurkerModeUpsellPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            message: i,
                            isLurking: l
                        } = this.props, n = U.default.getChannel(i.getChannelId()), o = b.default.getGuild(null == n ? void 0 : n.getGuildId());
                        return l && null != o ? (0, a.jsx)(S.default, {
                            ctaRef: this.ctaRef,
                            type: S.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: o,
                            closePopout: t
                        }) : (0, a.jsx)(a.Fragment, {})
                    }, this.renderEmojiDetails = () => {
                        let e = this.props.emoji;
                        return null != e.id && (0, a.jsx)(ep, {
                            emojiId: e.id,
                            refreshPositionKey: this.refreshTooltipPositionKey,
                            onClose: this.handleLeave,
                            nonce: this.nonce
                        })
                    }, this.renderTooltip = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: i,
                            me_burst: l,
                            isBurstReaction: n = !1
                        } = this.props, {
                            tooltipText: s
                        } = this.state, r = i => {
                            let a = U.default.getChannel(t.getChannelId());
                            if (null == a) return;
                            this.handleLeave();
                            let l = n ? z.ReactionTypes.BURST : z.ReactionTypes.NORMAL;
                            es(a, t, {
                                emoji: e,
                                reactionType: l
                            })
                        }, u = "string" == typeof s, d = u ? "" === s.trim() : null == s, c = () => d || null == s ? null : (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            className: en.reactionTooltipText,
                            "aria-label": s,
                            children: s
                        });
                        return i === z.ReactionTypes.BURST ? (0, a.jsxs)(p.Dialog, {
                            className: en.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, a.jsx)(h.Clickable, {
                                className: en.burstReactionTooltipInner,
                                onClick: r,
                                children: (0, a.jsxs)("div", {
                                    className: en.burstReactionTooltipMessage,
                                    children: [(0, a.jsx)(f.default, {
                                        className: en.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), c()]
                                })
                            }), (() => {
                                let e = k.default.getCurrentUser();
                                if (l) return (0, a.jsxs)("div", {
                                    className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                    children: [(0, W.isPremium)(e) && (0, a.jsx)(H.default, {
                                        className: en.burstReactionTooltipNitroIcon,
                                        color: F.GradientCssUrls.PREMIUM_TIER_2
                                    }), (0, a.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        className: en.reactionTooltipText,
                                        "aria-label": "super reaction tooltip cta",
                                        children: et.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
                                    })]
                                });
                                if (this.userCanBurstReact()) return (0, a.jsxs)("div", {
                                    className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
                                    children: [(0, a.jsx)(H.default, {
                                        className: en.burstReactionTooltipNitroIcon,
                                        color: F.GradientCssUrls.PREMIUM_TIER_2
                                    }), (0, a.jsx)(h.Clickable, {
                                        onClick: this.handleClick,
                                        children: (0, a.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            className: en.reactionTooltipText,
                                            "aria-label": "super reaction tooltip cta",
                                            children: et.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                        })
                                    })]
                                });
                                if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, a.jsx)("div", {
                                    className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                    children: (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: et.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                        }), (0, a.jsx)(L.default, {
                                            subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
                                            buttonText: et.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                            className: en.burstReactionTooltipUpsellCta,
                                            onClick: e => e.stopPropagation()
                                        })]
                                    })
                                });
                                return null
                            })(), this.renderEmojiDetails()]
                        }) : (0, a.jsxs)(p.Dialog, {
                            className: en.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, a.jsx)(h.Clickable, {
                                onClick: r,
                                children: (0, a.jsxs)("div", {
                                    className: en.reactionTooltipInner,
                                    children: [(0, a.jsx)(f.default, {
                                        className: en.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), c()]
                                })
                            }), this.renderEmojiDetails()]
                        })
                    }, this.refreshTooltipPositionKey = () => {
                        this.setState({
                            tooltipPositionKey: String(Date.now())
                        })
                    }, this.handleShowVerificationGate = () => {
                        let {
                            message: e,
                            isPendingMember: t
                        } = this.props;
                        if (!t) return null;
                        let i = U.default.getChannel(e.getChannelId()),
                            a = b.default.getGuild(null == i ? void 0 : i.getGuildId());
                        null != a && (0, O.openMemberVerificationModal)(a.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: i
                        } = this.props, a = k.default.getCurrentUser(), l = U.default.getChannel(t.getChannelId()), n = i === z.ReactionTypes.BURST, o = (0, W.isPremium)(a), s = n ? ee.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : ee.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        n && !this.userCanBurstReact() && !o && (s = ee.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), E.default.trackWithMetadata($.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                            type: s,
                            expression_id: e.id,
                            expression_name: e.name,
                            is_animated: e.animated,
                            is_custom: null != e.id,
                            nonce: this.nonce
                        }), n && null != l && !o && !this.userCanBurstReact() && K.default.track($.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: ee.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == l ? void 0 : l.getGuildId()) != null ? $.AnalyticsPages.GUILD_CHANNEL : $.AnalyticsPages.DM_CHANNEL,
                                section: (0, x.getBurstAnalyticsSection)(l),
                                object: $.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            eu.defaultProps = {
                emojiSize: "jumbo"
            };
            let ed = l.memo(e => {
                    let {
                        type: t,
                        burst_colors: i,
                        message: l,
                        emoji: n
                    } = e, o = t === z.ReactionTypes.BURST, {
                        autoUnfurlReactionTooltip: s
                    } = (0, v.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }), r = (0, I.useEmojiColorPalette)(o && null != i ? i : []), u = (0, d.useStateFromStores)([J.default], () => void 0 !== J.default.getEffectForEmojiId(l.getChannelId(), l.id, n)), c = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion), p = M.AnimateEmoji.useSetting(), h = k.default.getCurrentUser(), f = (0, W.isPremium)(h), T = (0, d.useStateFromStores)([J.default], () => J.default.getReactionPickerAnimation(l.id, n.name, n.id)), E = o && (u || null != T);
                    return (0, a.jsx)(eu, {
                        ...e,
                        colors: r,
                        isBurstReaction: o,
                        hideEmoji: E,
                        userHasPremium: f,
                        reduceMotion: c,
                        animateEmoji: p,
                        animationStartPosition: T,
                        autoUnfurlReactionTooltip: s
                    })
                }),
                ec = e => {
                    var t;
                    let {
                        emojiId: i,
                        expressionSourceGuild: l,
                        hasJoinedExpressionSourceGuild: n,
                        onClose: o,
                        packCollectionData: s,
                        popoutData: r,
                        currentGuildId: u,
                        nonce: d
                    } = e;
                    (0, C.useTrackOpenPopout)({
                        emojiId: i,
                        currentGuildId: u,
                        popoutData: r,
                        emojiSourceGuildId: null == l ? void 0 : l.id,
                        nonce: d
                    });
                    let c = null !== (t = null == l ? void 0 : l.isDiscoverable()) && void 0 !== t && t,
                        p = s.collectEnabled,
                        f = null !== l && (c || p);
                    return (0, a.jsx)(a.Fragment, {
                        children: f ? null == l ? null : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: ei.reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, a.jsx)(X.GuildDetails, {
                                    expressionSourceGuild: l,
                                    hasJoinedExpressionSourceGuild: n,
                                    isDisplayingJoinGuildButtonInPopout: r.type === Y.EmojiPopoutType.JOIN_GUILD
                                })
                            }), (0, a.jsx)(X.EmojiPopoutList, {
                                emojiId: i,
                                expressionSourceGuild: l,
                                hasJoinedEmojiSourceGuild: n,
                                onClose: o,
                                popoutData: r,
                                packCollectionData: s,
                                isDisplayingButtonInTopSection: !1,
                                nonce: d
                            })]
                        }) : (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            "aria-label": r.type,
                            children: r.emojiDescription
                        })
                    })
                },
                ep = e => {
                    var t;
                    let {
                        emojiId: i,
                        refreshPositionKey: n,
                        onClose: s,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, d.useStateFromStoresObject)([_.default, b.default], () => {
                        let e = _.default.getCustomEmojiById(i);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === R.EmojiTypes.GUILD ? b.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [c, p] = l.useState(void 0), [f, T] = l.useState(!1), [m, E] = l.useState(!1), [g, I] = l.useState(!1), C = null != u, O = (0, A.usePackCollectionData)({
                        expressionSourceGuild: c
                    }), v = O.autoUnfurlReactionTooltip, S = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t, P = B.default.getGuildId(), L = null != P && (P === (null == c ? void 0 : c.id) || P === (null == u ? void 0 : u.id)), y = (0, Y.getEmojiPopoutData)({
                        isPremium: O.isPremium,
                        hasJoinedEmojiSourceGuild: C,
                        isDiscoverable: S,
                        packCollectionData: O,
                        emojiComesFromCurrentGuild: L,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    l.useEffect(() => {
                        let e = !f,
                            t = !v || g;
                        if (e && t) return;
                        let a = async () => {
                            n(), E(!0);
                            let e = await N.default.getGuildFromEmojiId(i);
                            p(e), E(!1), I(!0), n()
                        };
                        a()
                    }, [i, v, f, g, n]);
                    let j = !O.viewAndUseEnabled || C;
                    if (j) return null;
                    let x = () => {
                            T(!f)
                        },
                        M = () => {
                            let e = et.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, a.jsxs)(h.Clickable, {
                                onClick: x,
                                className: ei.reactionEmojiDetailsClickable,
                                children: [(0, a.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, a.jsx)(G.default, {
                                    width: 16,
                                    height: 16,
                                    className: o(ei.reactionEmojiDetailsArrow, {
                                        [ei.reactionEmojiDetailsArrowCollapsed]: !f
                                    })
                                })]
                            })
                        },
                        U = f && void 0 !== c,
                        D = () => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: ei.reactionEmojiDetailsDivider
                            }), null != y.emojiDescription && y.type !== Y.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                "aria-label": y.type,
                                children: y.emojiDescription
                            })]
                        });
                    return v ? (0, a.jsxs)("div", {
                        children: [g ? D() : null, m ? (0, a.jsx)(Z.PopoutLoadingAnimation, {
                            className: ei.emojiDetailsLoader
                        }) : g && (0, a.jsx)(ec, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: C,
                            onClose: s,
                            popoutData: y,
                            packCollectionData: O,
                            currentGuildId: P,
                            nonce: r
                        })]
                    }) : (0, a.jsxs)("div", {
                        children: [U ? D() : M(), m ? (0, a.jsx)(Z.PopoutLoadingAnimation, {
                            className: ei.emojiDetailsLoader
                        }) : U && (0, a.jsx)(ec, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: C,
                            onClose: s,
                            popoutData: y,
                            packCollectionData: O,
                            currentGuildId: P,
                            nonce: r
                        })]
                    })
                }