            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eg
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
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
                I = n("300322"),
                N = n("845579"),
                v = n("271938"),
                L = n("836417"),
                x = n("26989"),
                R = n("305961"),
                y = n("88093"),
                O = n("957255"),
                D = n("886074"),
                j = n("36562"),
                b = n("662255"),
                P = n("85175"),
                U = n("68238"),
                F = n("83900"),
                H = n("993477"),
                k = n("733160"),
                G = n("100300"),
                w = n("433487"),
                B = n("987772"),
                V = n("566998"),
                W = n("516358"),
                Z = n("550515"),
                z = n("959097"),
                K = n("251144"),
                Y = n("20662"),
                q = n("228220"),
                X = n("149279"),
                J = n("599110"),
                Q = n("306160"),
                $ = n("240873"),
                ee = n("870190"),
                et = n("61400"),
                en = n("327054"),
                es = n("583022"),
                ea = n("363396"),
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
                    canReport: s,
                    onClose: a,
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
                    canReport: s,
                    onHeightUpdate: l,
                    onClose: a,
                    navId: "message-actions",
                    ariaLabel: ed.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
                })
            }

            function eC(e) {
                let {
                    label: t,
                    ariaLabel: n,
                    tooltipText: a,
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
                return (0, s.jsx)(d.Tooltip, {
                    text: null != a ? a : t,
                    color: null != l ? l : d.TooltipColors.PRIMARY,
                    "aria-label": t,
                    hideOnClick: !0,
                    tooltipClassName: ec.tooltip,
                    children: e => {
                        let {
                            onMouseEnter: a,
                            onMouseLeave: l,
                            onClick: d
                        } = e;
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(X.Button, {
                                onMouseEnter: a,
                                onMouseLeave: l,
                                onClick: e => {
                                    null == d || d(), c(o, u, e)
                                },
                                "aria-label": null != n ? n : t,
                                disabled: h,
                                dangerous: C,
                                ...E,
                                children: [(0, s.jsx)(i, {
                                    className: ec.icon,
                                    ...r
                                }), m && (0, s.jsx)(D.default, {})]
                            }), p && (0, s.jsx)(X.Separator, {})]
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
                    isExpanded: Z,
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
                        showEmojiPicker: s,
                        showEmojiBurstPicker: a,
                        showMoreUtilities: l,
                        setPopout: i,
                        showClydeAiEmbeds: r,
                        setShowClydeAiEmbeds: o,
                        isFocused: d
                    } = e, {
                        author: h
                    } = n, C = (0, u.useStateFromStores)([R.default], () => R.default.getGuild(t.guild_id), [t.guild_id]), p = (0, u.useStateFromStores)([v.default], () => v.default.getId()), m = (0, I.useIsActiveChannelOrUnarchivableThread)(t), _ = (0, I.useIsNonModInLockedThread)(t), A = N.RenderReactions.useSetting(), T = N.DeveloperMode.useSetting(), L = (0, u.useStateFromStores)([y.default], () => null == t.guild_id || y.default.canChatInGuild(t.guild_id), [t]), {
                        canManageMessages: D,
                        canAddNewReactions: j
                    } = (0, u.useStateFromStoresObject)([O.default], () => ({
                        canAddNewReactions: L && O.default.can(eo.Permissions.ADD_REACTIONS, t),
                        canManageMessages: O.default.can(eo.Permissions.MANAGE_MESSAGES, t)
                    }), [t, L]), b = (0, M.useCanReplyToMessage)(t, n), P = (0, I.useCanStartPublicThread)(t, n), U = (0, I.useCanViewThreadForMessage)(n), F = (0, u.useStateFromStores)([E.default], () => null != t.guild_id && E.default.isLurking(t.guild_id), [t]), H = (0, u.useStateFromStores)([x.default], () => null != t.guild_id && x.default.isCurrentUserGuest(t.guild_id), [t]), k = h.id === p, G = (D || k) && m && n.type in eo.MessageTypesDeletable;
                    n.type === eo.MessageTypes.AUTO_MODERATION_ACTION && (G = G && D);
                    let w = (0, ee.canReportMessage)(n),
                        B = (0, en.default)(n, t, D),
                        V = !t.isSystemDM() && (0, et.default)(n, p) && m && !_,
                        {
                            disableReactionCreates: W
                        } = (0, es.default)({
                            channel: t,
                            canChat: L,
                            renderReactions: A,
                            canAddNewReactions: j,
                            isLurking: F,
                            isGuest: H,
                            isActiveChannelOrUnarchivableThread: m
                        }),
                        Z = t.type === eo.ChannelTypes.GUILD_ANNOUNCEMENT && null != C && C.hasFeature(eo.GuildFeatures.NEWS) && (k || D) && n.type === eo.MessageTypes.DEFAULT,
                        z = t.getGuildId(),
                        K = null != z && (n.type === eo.MessageTypes.USER_JOIN || n.type === eo.MessageTypes.GUILD_INVITE_REMINDER) && O.default.canWithPartialContext(eo.Permissions.MANAGE_GUILD, {
                            guildId: z
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
                        J = (0, u.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled),
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
                        canViewThread: U,
                        canCopy: Q.SUPPORTS_COPY,
                        hasDeveloperMode: T,
                        canReact: !W && A,
                        canPublish: Z,
                        canConfigureJoin: K,
                        isExpanded: X && !J && !s && !a && !l,
                        showEmojiPicker: s,
                        showEmojiBurstPicker: a,
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
                }(e), [eM, eI] = a.useState(!1), [eN, ev] = a.useState(!1), eL = a.useCallback(() => {
                    !X && J.default.track(eo.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                        message_id: n.id,
                        channel: n.channel_id
                    }), ep({
                        moreUtilities: !X
                    })
                }, [X, ep, n]), ex = a.useCallback(() => {
                    ep({
                        emojiPicker: !ei
                    })
                }, [ei, ep]), eR = (0, I.useIsActiveChannelOrUnarchivableThread)(t), ey = n.hasFlag(eo.MessageFlags.CROSSPOSTED);
                return (0, s.jsxs)(s.Fragment, {
                    children: [Z ? (0, s.jsxs)(s.Fragment, {
                        children: [l && e_ ? eC({
                            key: "copy-id",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.COPY_ID_MESSAGE,
                            icon: b.default,
                            onClick: ea.copyId
                        }) : null, l && !eA ? eC({
                            key: "copy-link",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.COPY_LINK,
                            icon: F.default,
                            onClick: ea.copyLink
                        }) : null, A ? eC({
                            key: "configure",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.CONFIGURE,
                            icon: P.default,
                            onClick: ea.configureJoin
                        }) : null, ec ? eC({
                            key: "mark-reminder",
                            channel: t,
                            message: n,
                            label: ef ? ed.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : ed.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
                            icon: ef ? j.default : G.default,
                            onClick: ef ? ea.markMessageRemindersAsComplete : ea.markMessageAsReminder
                        }) : null, eR ? eC({
                            key: "mark-unread",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.MARK_UNREAD,
                            icon: H.default,
                            onClick: ea.markMessageUnread
                        }) : null, i ? eC({
                            key: "pin",
                            channel: t,
                            message: n,
                            label: n.pinned ? ed.default.Messages.UNPIN_MESSAGE : ed.default.Messages.PIN_MESSAGE,
                            icon: V.default,
                            onClick: ea.pinMessage
                        }) : null, T && p ? eC({
                            key: "reply-self",
                            channel: t,
                            message: n,
                            label: ed.default.Messages.MESSAGE_ACTION_REPLY,
                            icon: W.default,
                            onClick: ea.replyToMessage
                        }) : null]
                    }) : null, (0, $.hasClydeAiThoughtsEmbed)(n) ? eC({
                        key: "clyde-view-source",
                        channel: t,
                        message: n,
                        label: em ? ed.default.Messages.CLYDE_VIEW_SOURCE_HIDE_TOOLTIP : ed.default.Messages.CLYDE_VIEW_SOURCE_SHOW_TOOLTIP,
                        icon: U.default,
                        onClick: () => {
                            eg(!em), J.default.track(eo.AnalyticEvents.CLYDE_AI_THOUGHTS_VIEWED, {
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
                            eI(e), ev(!1), e && (J.default.track(eo.AnalyticEvents.CLYDE_AI_MESSAGE_RATED, {
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
                            color: eN ? (0, C.getColor)(eo.Color.RED_360) : void 0
                        },
                        onClick: () => {
                            let e = !eN;
                            ev(e), eI(!1), e && (0, h.openClydeFeedbackModal)(n.id, eS, eI, ev)
                        }
                    }) : null, _ && !eA ? (0, s.jsx)(el.default, {
                        channel: t,
                        message: n,
                        togglePopout: ex,
                        renderEmojiPicker: eE,
                        shouldShow: ei,
                        isFocused: eT
                    }) : null, T && !p ? eC({
                        key: "reply-other",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.MESSAGE_ACTION_REPLY,
                        icon: W.default,
                        onClick: ea.replyToMessage
                    }) : null, p ? eC({
                        key: "edit",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.EDIT,
                        icon: B.default,
                        onClick: ea.editMessage
                    }) : null, L ? eC({
                        key: "thread",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.CREATE_THREAD,
                        icon: z.default,
                        onClick: ea.createThread
                    }) : null, !L && D ? eC({
                        key: "view-thread",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.VIEW_THREAD,
                        icon: z.default,
                        onClick: ea.goToThread
                    }) : null, m ? eC({
                        key: "publish",
                        channel: t,
                        message: n,
                        label: ey ? ed.default.Messages.NEWS_CHANNEL_PUBLISHED : ed.default.Messages.NEWS_CHANNEL_PUBLISH,
                        icon: k.default,
                        onClick: ea.publishMessage,
                        disabled: ey
                    }) : null, r && (eA || Z) ? eC({
                        key: "delete",
                        channel: t,
                        message: n,
                        label: ed.default.Messages.DELETE,
                        icon: q.default,
                        onClick: ea.deleteMessage,
                        dangerous: !0,
                        separator: !Z
                    }) : null, Z && r ? null : (0, s.jsx)(d.Popout, {
                        renderPopout: e => {
                            let {
                                updatePosition: a,
                                closePopout: l
                            } = e;
                            return (0, s.jsx)(eh, {
                                channel: t,
                                message: n,
                                canReport: o,
                                onClose: l,
                                updatePosition: a
                            })
                        },
                        shouldShow: X,
                        onRequestClose: eL,
                        position: "left",
                        align: "top",
                        animation: d.Popout.Animation.NONE,
                        children: (e, s) => {
                            let {
                                onClick: a,
                                ...l
                            } = e, {
                                isShown: i
                            } = s;
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
                } = e, a = (0, u.useStateFromStores)([p.default], () => null != p.default.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, m.canRetryInteractionData)(n.interactionData);
                return (0, s.jsxs)(s.Fragment, {
                    children: [!a && l && eC({
                        key: "retry",
                        label: ed.default.Messages.RETRY,
                        icon: Z.default,
                        channel: t,
                        message: n,
                        onClick: ea.retrySendMessage
                    }), eC({
                        key: "delete-usent",
                        label: ed.default.Messages.DELETE,
                        icon: q.default,
                        channel: t,
                        message: n,
                        onClick: ea.deleteMessage
                    })]
                })
            }

            function eE(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = {
                        openPopoutType: "message_reaction_emoji_picker",
                        ...a && {
                            openPopoutType: "message_super_reaction_emoji_picker",
                            page: null != e.getGuildId() ? eo.AnalyticsPages.GUILD_CHANNEL : eo.AnalyticsPages.DM_CHANNEL,
                            section: (0, A.getBurstAnalyticsSection)(e),
                            object: eo.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
                        }
                    };
                return (0, s.jsx)(T.ReactionPicker, {
                    channel: e,
                    closePopout: n,
                    onSelectEmoji: (s, a, l) => {
                        ! function(e, t, n) {
                            let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            null != e && (0, _.addReaction)(t.id, n.id, (0, A.toReactionEmoji)(e), void 0, {
                                burst: s
                            })
                        }(s, e, t, l), a && (l ? o(n, 150)() : n())
                    },
                    analyticsOverride: l,
                    messageId: t.id
                })
            }
            var eg = a.memo(function(e) {
                let {
                    channel: t,
                    message: n,
                    isHeader: a
                } = e, l = (0, u.useStateFromStores)([L.default], () => L.default.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
                    let {
                        channel: t,
                        message: n
                    } = e;
                    return n.state === eo.MessageStates.SEND_FAILED ? (0, s.jsx)(em, {
                        channel: t,
                        message: n
                    }) : null
                }(e), o = function(e) {
                    let {
                        message: t
                    } = e;
                    return t.state !== eo.MessageStates.SEND_FAILED ? (0, s.jsx)(ep, {
                        ...e
                    }) : null
                }(e);
                return l || null == r && null == o ? null : (0, s.jsx)("div", {
                    className: i(e.className, {
                        [ec.container]: !0,
                        [ec.isHeader]: a
                    }),
                    onClick: ef,
                    onContextMenu: ef,
                    role: "group",
                    "aria-label": ed.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
                    children: (0, s.jsxs)(X.default, {
                        className: e.innerClassName,
                        children: [r, o]
                    })
                })
            })