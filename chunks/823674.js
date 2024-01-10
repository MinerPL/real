            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eg
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("483366"),
                o = n.n(r),
                u = n("446674"),
                d = n("77078"),
                c = n("206230"),
                f = n("563143"),
                h = n("189318"),
                C = n("449918"),
                p = n("619259"),
                m = n("752598"),
                E = n("267567"),
                g = n("979268"),
                S = n("520899"),
                _ = n("166257"),
                A = n("432173"),
                T = n("219013"),
                M = n("625149"),
                N = n("300322"),
                I = n("845579"),
                v = n("271938"),
                L = n("836417"),
                R = n("26989"),
                x = n("305961"),
                y = n("88093"),
                O = n("957255"),
                D = n("886074"),
                j = n("36562"),
                b = n("662255"),
                P = n("85175"),
                F = n("68238"),
                U = n("83900"),
                H = n("993477"),
                k = n("733160"),
                G = n("100300"),
                w = n("433487"),
                B = n("987772"),
                V = n("566998"),
                W = n("516358"),
                z = n("550515"),
                Z = n("959097"),
                K = n("251144"),
                Y = n("20662"),
                q = n("228220"),
                X = n("149279"),
                Q = n("599110"),
                J = n("306160"),
                $ = n("240873"),
                ee = n("870190"),
                et = n("61400"),
                en = n("327054"),
                ea = n("583022"),
                es = n("363396"),
                el = n("891405"),
                ei = n("261649"),
                er = n("739034"),
                eo = n("49111"),
                eu = n("680894"),
                ed = n("782340"),
                ec = n("346762");

            function ef(e) {
                e.stopPropagation()
            }

            function eh(e) {
                let {
                    message: t,
                    channel: n,
                    canReport: a,
                    onClose: s,
                    updatePosition: l
                } = e;
                return (0, ei.useMessageMenu)({
                    message: t,
                    channel: n,
                    textSelection: "",
                    favoriteableType: null,
                    favoriteableId: null,
                    favoriteableName: null,
                    itemHref: void 0,
                    itemSrc: void 0,
                    itemSafeSrc: void 0,
                    itemTextContent: void 0,
                    canReport: a,
                    onHeightUpdate: l,
                    onClose: s,
                    navId: "message-actions",
                    ariaLabel: ed.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
                })
            }

            function eC(e) {
                let {
                    label: t,
                    ariaLabel: n,
                    tooltipText: s,
                    tooltipColor: l,
                    icon: i,
                    iconProps: r,
                    channel: o,
                    message: u,
                    onClick: c,
                    key: f,
                    disabled: h,
                    dangerous: C,
                    separator: p,
                    sparkle: m,
                    ...E
                } = e;
                return (0, a.jsx)(d.Tooltip, {
                    text: null != s ? s : t,
                    color: null != l ? l : d.TooltipColors.PRIMARY,
                    "aria-label": t,
                    hideOnClick: !0,
                    tooltipClassName: ec.tooltip,
                    children: e => {
                        let {
                            onMouseEnter: s,
                            onMouseLeave: l,
                            onClick: d
                        } = e;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(X.Button, {
                                onMouseEnter: s,
                                onMouseLeave: l,
                                onClick: e => {
                                    null == d || d(), c(o, u, e)
                                },
                                "aria-label": null != n ? n : t,
                                disabled: h,
                                dangerous: C,
                                ...E,
                                children: [(0, a.jsx)(i, {
                                    className: ec.icon,
                                    ...r
                                }), m && (0, a.jsx)(D.default, {})]
                            }), p && (0, a.jsx)(X.Separator, {})]
                        })
                    }
                }, f)
            }

            function ep(e) {
                let {
                    channel: t,
                    message: n,
                    canCopy: l,
                    canPin: i,
                    canDelete: r,
                    canReport: o,
                    canEdit: p,
                    canPublish: m,
                    canReact: _,
                    canConfigureJoin: A,
                    canReply: T,
                    canStartThread: L,
                    canViewThread: D,
                    isExpanded: z,
                    showMoreUtilities: X,
                    showEmojiPicker: ei,
                    showMessageRemindersActions: ec,
                    isMessageReminder: ef,
                    setPopout: ep,
                    showClydeAiEmbeds: em,
                    setShowClydeAiEmbeds: eg,
                    isClydePersonalityModified: eS,
                    hasDeveloperMode: e_,
                    isGuildInviteReminder: eA,
                    isFocused: eT
                } = function(e) {
                    let {
                        channel: t,
                        message: n,
                        showEmojiPicker: a,
                        showEmojiBurstPicker: s,
                        showMoreUtilities: l,
                        setPopout: i,
                        showClydeAiEmbeds: r,
                        setShowClydeAiEmbeds: o,
                        isFocused: d
                    } = e, {
                        author: h
                    } = n, C = (0, u.useStateFromStores)([x.default], () => x.default.getGuild(t.guild_id), [t.guild_id]), p = (0, u.useStateFromStores)([v.default], () => v.default.getId()), m = (0, N.useIsActiveChannelOrUnarchivableThread)(t), _ = (0, N.useIsNonModInLockedThread)(t), A = I.RenderReactions.useSetting(), T = I.DeveloperMode.useSetting(), L = (0, u.useStateFromStores)([y.default], () => null == t.guild_id || y.default.canChatInGuild(t.guild_id), [t]), {
                        canManageMessages: D,
                        canAddNewReactions: j
                    } = (0, u.useStateFromStoresObject)([O.default], () => ({
                        canAddNewReactions: L && O.default.can(eo.Permissions.ADD_REACTIONS, t),
                        canManageMessages: O.default.can(eo.Permissions.MANAGE_MESSAGES, t)
                    }), [t, L]), b = (0, M.useCanReplyToMessage)(t, n), P = (0, N.useCanStartPublicThread)(t, n), F = (0, N.useCanViewThreadForMessage)(n), U = (0, u.useStateFromStores)([E.default], () => null != t.guild_id && E.default.isLurking(t.guild_id), [t]), H = (0, u.useStateFromStores)([R.default], () => null != t.guild_id && R.default.isCurrentUserGuest(t.guild_id), [t]), k = h.id === p, G = (D || k) && m && n.type in eo.MessageTypesDeletable;
                    n.type === eo.MessageTypes.AUTO_MODERATION_ACTION && (G = G && D);
                    let w = (0, ee.canReportMessage)(n),
                        B = (0, en.default)(n, t, D),
                        V = !t.isSystemDM() && (0, et.default)(n, p) && m && !_,
                        {
                            disableReactionCreates: W
                        } = (0, ea.default)({
                            channel: t,
                            canChat: L,
                            renderReactions: A,
                            canAddNewReactions: j,
                            isLurking: U,
                            isGuest: H,
                            isActiveChannelOrUnarchivableThread: m
                        }),
                        z = t.type === eo.ChannelTypes.GUILD_ANNOUNCEMENT && null != C && C.hasFeature(eo.GuildFeatures.NEWS) && (k || D) && n.type === eo.MessageTypes.DEFAULT,
                        Z = t.getGuildId(),
                        K = null != Z && (n.type === eo.MessageTypes.USER_JOIN || n.type === eo.MessageTypes.GUILD_INVITE_REMINDER) && O.default.canWithPartialContext(eo.Permissions.MANAGE_GUILD, {
                            guildId: Z
                        }),
                        {
                            showReminders: Y
                        } = g.default.useExperiment({
                            location: "9bfedc_1"
                        }, {
                            autoTrackExposure: !1
                        }),
                        q = (0, u.useStateFromStores)([S.default], () => null != S.default.getMessageReminders().find(e => e.messageId === n.id)),
                        X = (0, er.default)(),
                        Q = (0, u.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled),
                        $ = (0, f.useIsClydePersonalityModified)(t.getGuildId(), n.author.isClyde());
                    return {
                        channel: t,
                        message: n,
                        canPin: B,
                        canEdit: V,
                        canDelete: G,
                        canReport: w,
                        canReply: b,
                        canStartThread: P,
                        canViewThread: F,
                        canCopy: J.SUPPORTS_COPY,
                        hasDeveloperMode: T,
                        canReact: !W && A,
                        canPublish: z,
                        canConfigureJoin: K,
                        isExpanded: X && !Q && !a && !s && !l,
                        showEmojiPicker: a,
                        showEmojiBurstPicker: s,
                        showMoreUtilities: l,
                        showMessageRemindersActions: Y,
                        isMessageReminder: q,
                        setPopout: i,
                        showClydeAiEmbeds: r,
                        setShowClydeAiEmbeds: o,
                        isClydePersonalityModified: $,
                        isFocused: d,
                        isGuildInviteReminder: n.type === eo.MessageTypes.GUILD_INVITE_REMINDER
                    }
                }(e), [eM, eN] = s.useState(!1), [eI, ev] = s.useState(!1), eL = s.useCallback(() => {
                    !X && Q.default.track(eo.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                        message_id: n.id,
                        channel: n.channel_id
                    }), ep({
                        moreUtilities: !X
                    })
                }, [X, ep, n]), eR = s.useCallback(() => {
                    ep({
                        emojiPicker: !ei
                    })
                }, [ei, ep]), ex = (0, N.useIsActiveChannelOrUnarchivableThread)(t), ey = n.hasFlag(eo.MessageFlags.CROSSPOSTED);
                return (0, a.jsxs)(a.Fragment, {
                    children: [z ? (0, a.jsxs)(a.Fragment, {
                        children: [l && e_ ? eC({
                            key: "copy-id",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.COPY_ID_MESSAGE,
                            icon: b.default,
                            onClick: es.copyId
                        }) : null, l && !eA ? eC({
                            key: "copy-link",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.COPY_LINK,
                            icon: U.default,
                            onClick: es.copyLink
                        }) : null, A ? eC({
                            key: "configure",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.CONFIGURE,
                            icon: P.default,
                            onClick: es.configureJoin
                        }) : null, ec ? eC({
                            key: "mark-reminder",
                            channel: t,
                            message: n,
                            label: ef ? ed.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : ed.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
                            icon: ef ? j.default : G.default,
                            onClick: ef ? es.markMessageRemindersAsComplete : es.markMessageAsReminder
                        }) : null, ex ? eC({
                            key: "mark-unread",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.MARK_UNREAD,
                            icon: H.default,
                            onClick: es.markMessageUnread
                        }) : null, i ? eC({
                            key: "pin",
                            channel: t,
                            message: n,
                            label: n.pinned ? ed.default.Messages.UNPIN_MESSAGE : ed.default.Messages.PIN_MESSAGE,
                            icon: V.default,
                            onClick: es.pinMessage
                        }) : null, T && p ? eC({
                            key: "reply-self",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.MESSAGE_ACTION_REPLY,
                            icon: W.default,
                            onClick: es.replyToMessage
                        }) : null]
                    }) : null, (0, $.hasClydeAiThoughtsEmbed)(n) ? eC({
                        key: "clyde-view-source",
                        channel: t,
                        message: n,
                        label: em ? ed.default.Messages.CLYDE_VIEW_SOURCE_HIDE_TOOLTIP : ed.default.Messages.CLYDE_VIEW_SOURCE_SHOW_TOOLTIP,
                        icon: F.default,
                        onClick: () => {
                            eg(!em), Q.default.track(eo.AnalyticEvents.CLYDE_AI_THOUGHTS_VIEWED, {
                                message_id: n.id
                            })
                        }
                    }) : null, n.author.isClyde() ? eC({
                        key: "clyde-good",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.CLYDE_USER_RATING_TOOLTIP_GOOD,
                        icon: Y.default,
                        iconProps: {
                            color: eM ? (0, C.getColor)(eo.Color.GREEN_360) : void 0
                        },
                        onClick: () => {
                            let e = !eM;
                            eN(e), ev(!1), e && (Q.default.track(eo.AnalyticEvents.CLYDE_AI_MESSAGE_RATED, {
                                message_id: n.id,
                                rating: 1,
                                has_custom_personality: eS
                            }), (0, d.showToast)((0, d.createToast)((0, eu.randomClydeThanks)(), d.ToastType.SUCCESS)))
                        }
                    }) : null, n.author.isClyde() ? eC({
                        key: "clyde-bad",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.CLYDE_USER_RATING_TOOLTIP_BAD,
                        icon: K.default,
                        iconProps: {
                            color: eI ? (0, C.getColor)(eo.Color.RED_360) : void 0
                        },
                        onClick: () => {
                            let e = !eI;
                            ev(e), eN(!1), e && (0, h.openClydeFeedbackModal)(n.id, eS, eN, ev)
                        }
                    }) : null, _ && !eA ? (0, a.jsx)(el.default, {
                        channel: t,
                        message: n,
                        togglePopout: eR,
                        renderEmojiPicker: eE,
                        shouldShow: ei,
                        isFocused: eT
                    }) : null, T && !p ? eC({
                        key: "reply-other",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.MESSAGE_ACTION_REPLY,
                        icon: W.default,
                        onClick: es.replyToMessage
                    }) : null, p ? eC({
                        key: "edit",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.EDIT,
                        icon: B.default,
                        onClick: es.editMessage
                    }) : null, L ? eC({
                        key: "thread",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.CREATE_THREAD,
                        icon: Z.default,
                        onClick: es.createThread
                    }) : null, !L && D ? eC({
                        key: "view-thread",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.VIEW_THREAD,
                        icon: Z.default,
                        onClick: es.goToThread
                    }) : null, m ? eC({
                        key: "publish",
                        channel: t,
                        message: n,
                        label: ey ? ed.default.Messages.NEWS_CHANNEL_PUBLISHED : ed.default.Messages.NEWS_CHANNEL_PUBLISH,
                        icon: k.default,
                        onClick: es.publishMessage,
                        disabled: ey
                    }) : null, r && (eA || z) ? eC({
                        key: "delete",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.DELETE,
                        icon: q.default,
                        onClick: es.deleteMessage,
                        dangerous: !0,
                        separator: !z
                    }) : null, z && r ? null : (0, a.jsx)(d.Popout, {
                        renderPopout: e => {
                            let {
                                updatePosition: s,
                                closePopout: l
                            } = e;
                            return (0, a.jsx)(eh, {
                                channel: t,
                                message: n,
                                canReport: o,
                                onClose: l,
                                updatePosition: s
                            })
                        },
                        shouldShow: X,
                        onRequestClose: eL,
                        position: "left",
                        align: "top",
                        animation: d.Popout.Animation.NONE,
                        children: (e, a) => {
                            let {
                                onClick: s,
                                ...l
                            } = e, {
                                isShown: i
                            } = a;
                            return eC({
                                key: "more",
                                label: ed.default.Messages.MORE,
                                icon: w.default,
                                channel: t,
                                message: n,
                                selected: i,
                                onClick: eL,
                                ...l
                            })
                        }
                    })]
                })
            }

            function em(e) {
                let {
                    channel: t,
                    message: n
                } = e, s = (0, u.useStateFromStores)([p.default], () => null != p.default.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, m.canRetryInteractionData)(n.interactionData);
                return (0, a.jsxs)(a.Fragment, {
                    children: [!s && l && eC({
                        key: "retry",
                        label: ed.default.Messages.RETRY,
                        icon: z.default,
                        channel: t,
                        message: n,
                        onClick: es.retrySendMessage
                    }), eC({
                        key: "delete-usent",
                        label: ed.default.Messages.DELETE,
                        icon: q.default,
                        channel: t,
                        message: n,
                        onClick: es.deleteMessage
                    })]
                })
            }

            function eE(e, t, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = {
                        openPopoutType: "message_reaction_emoji_picker",
                        ...s && {
                            openPopoutType: "message_super_reaction_emoji_picker",
                            page: null != e.getGuildId() ? eo.AnalyticsPages.GUILD_CHANNEL : eo.AnalyticsPages.DM_CHANNEL,
                            section: (0, A.getBurstAnalyticsSection)(e),
                            object: eo.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
                        }
                    };
                return (0, a.jsx)(T.ReactionPicker, {
                    channel: e,
                    closePopout: n,
                    onSelectEmoji: (a, s, l) => {
                        ! function(e, t, n) {
                            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            null != e && (0, _.addReaction)(t.id, n.id, (0, A.toReactionEmoji)(e), void 0, {
                                burst: a
                            })
                        }(a, e, t, l), s && (l ? o(n, 150)() : n())
                    },
                    analyticsOverride: l,
                    messageId: t.id
                })
            }
            var eg = s.memo(function(e) {
                let {
                    channel: t,
                    message: n,
                    isHeader: s
                } = e, l = (0, u.useStateFromStores)([L.default], () => L.default.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
                    let {
                        channel: t,
                        message: n
                    } = e;
                    return n.state === eo.MessageStates.SEND_FAILED ? (0, a.jsx)(em, {
                        channel: t,
                        message: n
                    }) : null
                }(e), o = function(e) {
                    let {
                        message: t
                    } = e;
                    return t.state !== eo.MessageStates.SEND_FAILED ? (0, a.jsx)(ep, {
                        ...e
                    }) : null
                }(e);
                return l || null == r && null == o ? null : (0, a.jsx)("div", {
                    className: i(e.className, {
                        [ec.container]: !0,
                        [ec.isHeader]: s
                    }),
                    onClick: ef,
                    onContextMenu: ef,
                    role: "group",
                    "aria-label": ed.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
                    children: (0, a.jsxs)(X.default, {
                        className: e.innerClassName,
                        children: [r, o]
                    })
                })
            })