            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ev
                }
            }), n("70102");
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("272030"),
                o = n("819689"),
                u = n("987317"),
                d = n("990766"),
                c = n("798609"),
                f = n("63522"),
                m = n("881536"),
                E = n("441979"),
                _ = n("605250"),
                h = n("201131"),
                p = n("95039"),
                I = n("289967"),
                T = n("866027"),
                g = n("398604"),
                C = n("477558"),
                S = n("592407"),
                A = n("86456"),
                N = n("393414"),
                M = n("244480"),
                v = n("488464"),
                x = n("808422"),
                O = n("120252"),
                L = n("967241"),
                R = n("936436"),
                y = n("271938"),
                P = n("950104"),
                D = n("42203"),
                j = n("305961"),
                U = n("957255"),
                b = n("824563"),
                G = n("18494"),
                B = n("697218"),
                k = n("800762"),
                w = n("277174"),
                H = n("497880"),
                F = n("944662"),
                V = n("748880"),
                Y = n("888393"),
                W = n("548703"),
                K = n("859316"),
                z = n("427655"),
                J = n("161225"),
                Z = n("41163"),
                X = n("830220"),
                q = n("924399"),
                Q = n("954060"),
                $ = n("178889"),
                ee = n("52538"),
                et = n("879033"),
                en = n("523257"),
                ea = n("14733"),
                es = n("513448"),
                el = n("606099"),
                ei = n("151218"),
                er = n("423509"),
                eo = n("80301"),
                eu = n("210977"),
                ed = n("512622"),
                ec = n("874612"),
                ef = n("703712"),
                em = n("659500"),
                eE = n("387111"),
                e_ = n("286235"),
                eh = n("299039"),
                ep = n("95045"),
                eI = n("232259"),
                eT = n("49111"),
                eg = n("706530"),
                eC = n("782340"),
                eS = n("896393");

            function eA(e) {
                let {
                    message: t,
                    channel: n,
                    compact: i
                } = e, {
                    author: r
                } = t, {
                    guild_id: o
                } = n, u = t.getChannelId(), d = (0, l.useStateFromStores)([j.default], () => j.default.getGuild(o), [o]), c = s.useCallback(() => {
                    null != d && (0, p.openGuildBoostingMarketingModal)({
                        guildId: d.id,
                        location: {
                            section: eT.AnalyticsSections.CHANNEL_TEXT_AREA,
                            object: eT.AnalyticsObjects.BOOST_ANNOUNCEMENT_UPSELL
                        }
                    })
                }, [d]), f = (0, eI.useUsernameHook)(r, u, n.guild_id, !0);
                return (0, a.jsx)(ef.default, {
                    message: t,
                    compact: i,
                    guild: d,
                    usernameHook: f,
                    onClickMessage: c
                })
            }

            function eN(e) {
                let {
                    message: t,
                    compact: n,
                    channel: s
                } = e, l = (0, eI.useUsernameHook)(t.author, s.id, s.guild_id);
                return (0, a.jsx)(J.default, {
                    message: t,
                    compact: n,
                    usernameHook: l
                })
            }
            let eM = Object.freeze({
                [eT.MessageTypes.DEFAULT]: void 0,
                [eT.MessageTypes.REPLY]: void 0,
                [eT.MessageTypes.CHAT_INPUT_COMMAND]: void 0,
                [eT.MessageTypes.CONTEXT_MENU_COMMAND]: void 0,
                [eT.MessageTypes.RECIPIENT_ADD]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e, {
                        author: i
                    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = eE.default.getName(null, r, o), d = (0, eI.useUsernameHook)(i, r, n.guild_id), c = (0, eI.useUsernameHook)(o, r, n.guild_id);
                    return n.isThread() ? (0, a.jsx)(eo.default, {
                        message: t,
                        channel: n,
                        compact: s,
                        targetUser: o,
                        actorUsernameHook: d,
                        targetUsernameHook: c
                    }) : (0, a.jsx)(ee.default, {
                        message: t,
                        compact: s,
                        otherUsername: u,
                        usernameHook: d,
                        otherUsernameHook: c
                    })
                },
                [eT.MessageTypes.RECIPIENT_REMOVE]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e, {
                        author: i
                    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = (0, eI.useUsernameHook)(i, r, n.guild_id), d = (0, eI.useUsernameHook)(o, r, n.guild_id);
                    return n.isThread() ? (0, a.jsx)(eu.default, {
                        message: t,
                        channel: n,
                        compact: s,
                        targetUser: o,
                        actorUsernameHook: u,
                        targetUsernameHook: d
                    }) : null != o && o.id !== i.id ? (0, a.jsx)(et.default, {
                        message: t,
                        channel: n,
                        compact: s,
                        usernameHook: u,
                        otherUser: o,
                        otherUsernameHook: d
                    }) : (0, a.jsx)(et.default, {
                        message: t,
                        channel: n,
                        usernameHook: u
                    })
                },
                [eT.MessageTypes.CALL]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: i
                    } = e, {
                        id: r,
                        author: o
                    } = t, d = y.default.getId(), c = t.getChannelId(), f = (0, l.useStateFromStores)([P.default], () => P.default.isCallActive(c, r), [c, r]), m = (0, l.useStateFromStores)([k.default], () => k.default.getVoiceState(eT.ME, d)), E = !f && null != t.call && !t.call.participants.includes(d), _ = f && (null == m || m.channelId !== c), h = s.useCallback(() => u.default.selectVoiceChannel(c), [c]), p = (0, eI.useUsernameHook)(o, c, i.guild_id);
                    return (0, a.jsx)(V.default, {
                        compact: n,
                        message: t,
                        missed: E,
                        joinable: _,
                        usernameHook: p,
                        onClickJoinCall: h
                    })
                },
                [eT.MessageTypes.CHANNEL_NAME_CHANGE]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: s
                    } = e, {
                        author: l
                    } = t, i = t.getChannelId(), r = (0, eI.useUsernameHook)(l, i, s.guild_id);
                    return (0, a.jsx)(K.default, {
                        compact: n,
                        message: t,
                        usernameHook: r,
                        isForumPost: s.isForumPost()
                    })
                },
                [eT.MessageTypes.CHANNEL_ICON_CHANGE]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: s
                    } = e, {
                        author: l
                    } = t, i = t.getChannelId(), r = (0, eI.useUsernameHook)(l, i, s.guild_id);
                    return (0, a.jsx)(W.default, {
                        compact: n,
                        message: t,
                        usernameHook: r
                    })
                },
                [eT.MessageTypes.CHANNEL_PINNED_MESSAGE]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: l
                    } = e, {
                        author: i
                    } = t, r = t.getChannelId(), o = s.useCallback(() => {
                        if (G.default.getChannelId() !== r) {
                            let e = D.default.getChannel(r);
                            null != e && (0, N.transitionToGuild)(e.guild_id, e.id)
                        }
                        setTimeout(() => em.ComponentDispatch.dispatch(eT.ComponentActions.TOGGLE_CHANNEL_PINS), 0)
                    }, [r]), u = (0, eI.useUsernameHook)(i, r, l.guild_id);
                    return (0, a.jsx)(z.default, {
                        message: t,
                        compact: n,
                        usernameHook: u,
                        onClickPins: __OVERLAY__ ? null : o
                    })
                },
                [eT.MessageTypes.USER_JOIN]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: s
                    } = e, {
                        author: l
                    } = t, i = t.getChannelId(), r = (0, eI.useUsernameHook)(l, i, s.guild_id);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ec.default, {
                            message: t,
                            compact: n,
                            usernameHook: r
                        }), (0, a.jsx)(R.WelcomeCTAContainer, {
                            channel: s,
                            message: t
                        })]
                    })
                },
                [eT.MessageTypes.GUILD_BOOST]: eA,
                [eT.MessageTypes.GUILD_BOOST_TIER_1]: eA,
                [eT.MessageTypes.GUILD_BOOST_TIER_2]: eA,
                [eT.MessageTypes.GUILD_BOOST_TIER_3]: eA,
                [eT.MessageTypes.CHANNEL_FOLLOW_ADD]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: s
                    } = e, {
                        author: l
                    } = t, i = t.getChannelId(), r = (0, eI.useUsernameHook)(l, i, s.guild_id);
                    return (0, a.jsx)(Y.default, {
                        message: t,
                        compact: n,
                        usernameHook: r
                    })
                },
                [eT.MessageTypes.GUILD_STREAM]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: i
                    } = e, {
                        author: r,
                        author: {
                            id: o
                        },
                        messageReference: u
                    } = t, c = t.getChannelId(), f = (0, l.useStateFromStores)([b.default], () => b.default.findActivity(o, e => e.type === eT.ActivityTypes.PLAYING), [o]), m = (0, l.useStateFromStores)([D.default], () => null != u ? D.default.getChannel(u.channel_id) : null, [u]), E = null == u ? void 0 : u.guild_id, _ = (0, eI.useUsernameHook)(r, c, i.guild_id), h = s.useCallback(() => {
                        null != m && null != E && (0, d.watchStreamAndTransitionToStream)({
                            streamType: eg.StreamTypes.GUILD,
                            ownerId: o,
                            channelId: m.id,
                            guildId: E
                        })
                    }, [o, m, E]);
                    return null != u && null != m && null != u.guild_id ? (0, a.jsx)(Q.default, {
                        message: t,
                        compact: n,
                        channel: m,
                        playingActivity: f,
                        onJoinStream: h,
                        usernameHook: _
                    }) : null
                },
                [eT.MessageTypes.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
                    let {
                        message: t,
                        compact: n
                    } = e, s = t.getChannelId(), i = (0, l.useStateFromStores)([D.default], () => D.default.getChannel(s), [s]), r = null != i ? i.getGuildId() : null;
                    return (0, a.jsx)(Z.UIKitGuildDiscoveryDisqualified, {
                        message: t,
                        compact: n,
                        onClick: () => {
                            null != r && S.default.open(r, eT.GuildSettingsSections.DISCOVERY)
                        }
                    })
                },
                [eT.MessageTypes.GUILD_DISCOVERY_REQUALIFIED]: Z.UIKitGuildDiscoveryRequalified,
                [eT.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Z.UIKitGuildDiscoveryGracePeriodInitialWarning,
                [eT.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Z.UIKitGuildDiscoveryGracePeriodFinalWarning,
                [eT.MessageTypes.THREAD_CREATED]: function(e) {
                    let {
                        message: t,
                        channel: l,
                        compact: o
                    } = e, u = (0, eI.useUsernameHook)(t.author, t.channel_id, l.guild_id), d = s.useCallback(async e => {
                        var n;
                        let a = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                        if (null != a) {
                            await O.default.loadThread(a);
                            let t = D.default.getChannel(a);
                            null != t && (0, L.openThreadSidebarForViewing)(t, e.shiftKey)
                        }
                    }, [t]), c = s.useCallback(() => {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("33250").then(n.bind(n, "33250"));
                            return t => (0, a.jsx)(e, {
                                channel: l,
                                ...t
                            })
                        })
                    }, [l]), f = s.useCallback(e => {
                        var s;
                        let l = D.default.getChannel(null === (s = t.messageReference) || void 0 === s ? void 0 : s.channel_id);
                        null != l && (0, r.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                channel: l
                            })
                        })
                    }, [t]);
                    return (0, a.jsx)(er.default, {
                        message: t,
                        compact: o,
                        usernameHook: u,
                        onClickThread: d,
                        onClickViewThreads: c,
                        onContextMenuThread: f
                    })
                },
                [eT.MessageTypes.THREAD_STARTER_MESSAGE]: ed.default,
                [eT.MessageTypes.GUILD_INVITE_REMINDER]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e, i = (0, l.useStateFromStores)([B.default], () => B.default.getCurrentUser()), r = (0, l.useStateFromStores)([j.default], () => {
                        var e, t;
                        return null !== (t = null === (e = j.default.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(i)) && void 0 !== t && t
                    });
                    return (0, a.jsx)($.default, {
                        message: t,
                        compact: s,
                        isOwner: r,
                        channel: n
                    })
                },
                [eT.MessageTypes.AUTO_MODERATION_ACTION]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: s
                    } = e;
                    return (0, h.isAutomodMessageRecord)(t) ? (0, a.jsx)(F.default, {
                        message: t,
                        compact: n,
                        channel: s
                    }) : null
                },
                [eT.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eN,
                [eT.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eN,
                [eT.MessageTypes.GUILD_INCIDENT_REPORT_RAID]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: s
                    } = e, l = (0, eI.useUsernameHook)(t.author, s.id, s.guild_id);
                    return (0, a.jsx)(q.default, {
                        message: t,
                        compact: n,
                        channel: s,
                        usernameHook: l
                    })
                },
                [eT.MessageTypes.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
                    let {
                        message: t,
                        compact: n,
                        channel: s
                    } = e, l = (0, eI.useUsernameHook)(t.author, s.id, s.guild_id);
                    return (0, a.jsx)(X.default, {
                        message: t,
                        compact: n,
                        channel: s,
                        usernameHook: l
                    })
                },
                [eT.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE]: T.default,
                [eT.MessageTypes.PURCHASE_NOTIFICATION]: function(e) {
                    var t;
                    let {
                        message: n,
                        channel: s,
                        compact: l
                    } = e;
                    return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === c.PurchaseNotificationType.GUILD_PRODUCT ? (0, a.jsx)(I.default, {
                        message: n,
                        channel: s,
                        compact: l
                    }) : null
                },
                [eT.MessageTypes.INTERACTION_PREMIUM_UPSELL]: void 0,
                [eT.MessageTypes.STAGE_START]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e, i = (0, eI.useUsernameHook)(t.author, n.id, n.guild_id), r = (0, l.useStateFromStores)([g.default], () => g.default.getActiveEventByChannel(n.id), [n.id]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(el.default, {
                            message: t,
                            compact: s,
                            usernameHook: i
                        }), null != r && r.name === t.content ? (0, a.jsx)(C.default, {
                            code: "".concat(n.guild_id, "-").concat(r.id)
                        }) : null]
                    })
                },
                [eT.MessageTypes.STAGE_END]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e, l = (0, eI.useUsernameHook)(t.author, n.id, n.guild_id);
                    return (0, a.jsx)(en.default, {
                        message: t,
                        compact: s,
                        usernameHook: l
                    })
                },
                [eT.MessageTypes.STAGE_SPEAKER]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e, l = (0, eI.useUsernameHook)(t.author, n.id, n.guild_id);
                    return (0, a.jsx)(es.default, {
                        message: t,
                        compact: s,
                        usernameHook: l
                    })
                },
                [eT.MessageTypes.STAGE_RAISE_HAND]: function(e) {
                    var t, n;
                    let {
                        message: s,
                        channel: r,
                        compact: u
                    } = e, d = (0, eI.useUsernameHook)(s.author, r.id, r.guild_id), c = (0, l.useStateFromStores)([U.default], () => U.default.can(eT.Permissions.MUTE_MEMBERS, r)), f = (0, l.useStateFromStores)([v.default], () => v.default.getParticipant(r.id, s.author.id)), m = new Date(eh.default.extractTimestamp(s.id)).toISOString() === new Date(null !== (n = null == f ? void 0 : null === (t = f.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), E = c && (null == f ? void 0 : f.rtsState) === x.RequestToSpeakStates.REQUESTED_TO_SPEAK && m;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ea.default, {
                            message: s,
                            compact: u,
                            usernameHook: d
                        }), E ? (0, a.jsxs)(i.Button, {
                            wrapperClassName: eS.inviteToSpeakButtonWrapper,
                            innerClassName: eS.inviteToSpeakButtonInner,
                            look: i.Button.Looks.FILLED,
                            color: i.Button.Colors.PRIMARY,
                            onClick: () => {
                                (0, M.setUserSuppress)(r, s.author.id, !1), o.default.deleteMessage(r.id, s.id, !0)
                            },
                            children: [(0, a.jsx)(w.default, {
                                height: 20,
                                width: 20
                            }), eC.default.Messages.REQUEST_TO_SPEAK_ACCEPT]
                        }) : null]
                    })
                },
                [eT.MessageTypes.STAGE_TOPIC]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e, l = (0, eI.useUsernameHook)(t.author, n.id, n.guild_id);
                    return (0, a.jsx)(ei.default, {
                        message: t,
                        compact: s,
                        usernameHook: l
                    })
                },
                [eT.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: f.default,
                [eT.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED]: A.PrivateChannelIntegrationAddedSystemMessage,
                [eT.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: A.PrivateChannelIntegrationRemovedSystemMessage,
                [eT.MessageTypes.PREMIUM_REFERRAL]: void 0,
                [eT.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e;
                    return (0, a.jsx)(E.default, {
                        message: t,
                        channel: n,
                        compact: s
                    })
                },
                [eT.MessageTypes.CUSTOM_GIFT]: void 0,
                [eT.MessageTypes.GUILD_GAMING_STATS_PROMPT]: function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: s
                    } = e;
                    return (0, a.jsx)(m.default, {
                        message: t,
                        channel: n,
                        compact: s
                    })
                },
                [eT.MessageTypes.VOICE_HANGOUT_INVITE]: void 0
            });
            var ev = s.memo(function(e) {
                let {
                    message: t,
                    channel: n,
                    compact: s
                } = e, {
                    type: l
                } = t, i = eM[l];
                if (null == i) {
                    var r;
                    return r = Error("unknown message type ".concat(t.type)), e_.default.captureException(r), new(0, _.default)("SystemMessage").error("", r), null
                }
                return (0, a.jsx)(H.default, {
                    message: t,
                    content: (0, ep.default)(t).content,
                    children: (0, a.jsx)(i, {
                        message: t,
                        channel: n,
                        compact: s
                    })
                })
            })