            "use strict";
            n.r(t), n.d(t, {
                transitionToGuildFromEventInvite: function() {
                    return ee
                },
                default: function() {
                    return et
                }
            }), n("70102");
            var i = n("597755"),
                a = n.n(i),
                l = n("759843"),
                s = n("742270"),
                r = n("815157"),
                u = n("391679"),
                o = n("872717"),
                d = n("913144"),
                c = n("599417"),
                _ = n("333805"),
                E = n("644223"),
                f = n("523086"),
                h = n("263901"),
                p = n("677315"),
                T = n("233322"),
                C = n("157186"),
                m = n("290886"),
                S = n("374021"),
                I = n("398604"),
                g = n("704341"),
                A = n("9294"),
                N = n("487946"),
                O = n("258158"),
                R = n("877275"),
                y = n("393414"),
                v = n("716214"),
                M = n("233069"),
                L = n("271938"),
                D = n("42203"),
                U = n("923959"),
                P = n("26989"),
                b = n("305961"),
                G = n("88093"),
                k = n("330154"),
                F = n("957255"),
                w = n("697218"),
                H = n("599110"),
                x = n("840707"),
                V = n("65300"),
                B = n("851387"),
                Y = n("990766"),
                K = n("49111"),
                j = n("724210"),
                W = n("706530"),
                z = n("91366"),
                q = n("837979");
            let Q = "invite",
                X = null;

            function Z(e) {
                var t, n, i;
                let a = {};
                switch (e.target_type) {
                    case z.InviteTargetTypes.STREAM:
                        a.targetType = e.target_type, a.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
                        break;
                    case z.InviteTargetTypes.EMBEDDED_APPLICATION:
                        a.targetType = e.target_type, a.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
                        break;
                    case z.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
                        a.targetType = e.target_type
                }
                let l = null != b.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id),
                    s = !l || e.new_member;
                return s && null != e.channel && (0, M.isGuildTextChannelType)(e.channel.type) && (a.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (a.guildScheduledEvent = e.guild_scheduled_event), a
            }

            function J(e) {
                let {
                    guildId: t,
                    channel: i,
                    options: a,
                    analyticsLocations: l = []
                } = e, {
                    type: s
                } = i, r = function(e, t, n) {
                    var i, a;
                    if ((null == n ? void 0 : n.targetType) === z.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return j.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                    if ((null == n ? void 0 : n.targetType) == null && !M.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && ((0, p.canSeeGuildHome)(e) || (0, m.canSeeOnboardingHome)(e))) return j.StaticChannelRoute.GUILD_HOME;
                    let l = D.default.getChannel(t.id);
                    return F.default.can(K.Permissions.VIEW_CHANNEL, l) ? t.id : null !== (a = null === (i = U.default.getDefaultChannel(e, !0, K.Permissions.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : t.id
                }(t, i, a), {
                    targetUserId: u,
                    targetType: o,
                    targetApplicationId: d
                } = null != a ? a : {}, c = s === K.ChannelTypes.GUILD_STAGE_VOICE, _ = K.Routes.CHANNEL(t, r);
                M.GUILD_VOCAL_CHANNEL_TYPES.has(s) && (0, h.addPostConnectionCallback)(() => {
                    n.el("987317").then(n.bind(n, "987317")).then(e => {
                        let {
                            default: n
                        } = e, s = () => {
                            if (c) {
                                (0, v.connectAndOpen)(i instanceof M.ChannelRecordBase ? i : (0, M.createChannelRecord)(i)), (0, y.transitionTo)(_);
                                return
                            }
                            n.selectVoiceChannel(r), o === z.InviteTargetTypes.STREAM && null != u && Y.watchStreamAndTransitionToStream({
                                streamType: W.StreamTypes.GUILD,
                                ownerId: u,
                                guildId: t,
                                channelId: r
                            }), o === z.InviteTargetTypes.EMBEDDED_APPLICATION && null != d && ((0, y.transitionTo)(K.Routes.CHANNEL(null != t ? t : K.ME, r)), (0, E.default)(r, d, l, null == a ? void 0 : a.intent))
                        };
                        (0, C.shouldShowMembershipVerificationGate)(t, [b.default, G.default, w.default, P.default]) ? (0, T.openMemberVerificationModal)(t, s) : s()
                    })
                }), (function(e, t) {
                    let {
                        type: n
                    } = e, {
                        transitionTo: i,
                        welcomeModalChannelId: a,
                        guildScheduledEvent: l
                    } = null != t ? t : {}, s = n === K.ChannelTypes.GUILD_STAGE_VOICE, r = {
                        navigationReplace: !0
                    };
                    return null != a && (r.welcomeModalChannelId = a), s && (r.state = q.STAGE_INVITE_STATE_KEY), null != l && (r.guildScheduledEventId = l.id), e => null != i ? i(e, r, R.default.INVITE_ACCEPT) : (0, y.transitionTo)(e, r, R.default.INVITE_ACCEPT)
                })(i, a)(_)
            }
            let $ = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    D.default.addConditionalChangeListener(() => {
                        var i;
                        let a = D.default.getChannel(e),
                            l = w.default.getCurrentUser();
                        return null == a || null == l || (!a.nsfw || !!l.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
                            let {
                                guildScheduledEvent: t,
                                welcomeModalChannelId: n
                            } = e;
                            null != t && (0, h.addPostConnectionCallback)(() => {
                                let e = {
                                    guildScheduledEventId: t.id
                                };
                                null != n && (e.welcomeModalChannelId = n), (0, S.transitionToEventDetailsFromInvite)(t, e)
                            })
                        }(t), !1) : (J({
                            guildId: null !== (i = a.getGuildId()) && void 0 !== i ? i : K.ME,
                            channel: a,
                            options: t,
                            analyticsLocations: n
                        }), !1))
                    })
                },
                ee = async e => {
                    let {
                        guild_id: t,
                        channel_id: n
                    } = e;
                    (0, I.isGuildScheduledEventActive)(e) && null != n ? $(n) : await B.default.transitionToGuildSync(t)
                };
            var et = {
                resolveInvite: function e(t, n, i) {
                    return d.default.isDispatching() ? Promise.resolve().then(() => e(t, n, i)) : (d.default.dispatch({
                        type: "INVITE_RESOLVE",
                        code: t
                    }), (0, N.default)(t, n, i).then(e => {
                        let {
                            invite: t,
                            code: n,
                            banned: i
                        } = e;
                        return null != t ? d.default.dispatch({
                            type: "INVITE_RESOLVE_SUCCESS",
                            invite: t,
                            code: n
                        }) : d.default.dispatch({
                            type: "INVITE_RESOLVE_FAILURE",
                            code: n,
                            banned: i
                        }), {
                            invite: t,
                            code: n
                        }
                    }))
                },
                getInviteContext: (e, t) => ({
                    location: e,
                    location_guild_id: null != t.guild ? t.guild.id : void 0,
                    location_channel_id: null != t.channel ? t.channel.id : void 0,
                    location_channel_type: null != t.channel ? t.channel.type : void 0
                }),
                async createInvite(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    try {
                        let {
                            body: i
                        } = await o.default.post({
                            url: K.Endpoints.INSTANT_INVITES(e),
                            body: t,
                            context: {
                                location: n
                            }
                        });
                        return d.default.dispatch({
                            type: "INSTANT_INVITE_CREATE_SUCCESS",
                            channelId: e,
                            invite: i
                        }), i
                    } catch (t) {
                        throw d.default.dispatch({
                            type: "INSTANT_INVITE_CREATE_FAILURE",
                            channelId: e
                        }), new c.default(t)
                    }
                },
                async mobileCreateInvite(e, t) {
                    let n = k.default.getInvite(e.id);
                    if (null != n && !n.isExpired()) return n.code;
                    let i = {
                            max_age: K.Durations.DAY
                        },
                        a = await this.createInvite(e.id, i, t).catch(() => d.default.dispatch({
                            type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
                        }));
                    return null == a ? void 0 : a.code
                },
                async getAllFriendInvites(e) {
                    await new Promise(e => d.default.wait(() => e(null)));
                    let t = k.default.getFriendInvitesFetching();
                    if (t) return null != X ? X.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
                    X = o.default.get({
                        url: K.Endpoints.FRIEND_INVITES,
                        context: {
                            location: e
                        }
                    }), d.default.dispatch({
                        type: "FRIEND_INVITES_FETCH_REQUEST",
                        requestedAt: new Date
                    });
                    let {
                        body: n
                    } = await X;
                    return X = null, d.default.dispatch({
                        type: "FRIEND_INVITES_FETCH_RESPONSE",
                        receivedAt: new Date,
                        invites: n
                    }), n
                },
                createFriendInvite: (e, t) => (d.default.dispatch({
                    type: "FRIEND_INVITE_CREATE_REQUEST"
                }), o.default.post({
                    url: K.Endpoints.FRIEND_INVITES,
                    body: null != e ? e : {},
                    context: {
                        location: t
                    }
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    return d.default.dispatch({
                        type: "FRIEND_INVITE_CREATE_SUCCESS",
                        invite: t
                    }), t
                }, e => {
                    throw d.default.dispatch({
                        type: "FRIEND_INVITE_CREATE_FAILURE",
                        error: e
                    }), e
                })),
                revokeFriendInvites: () => (d.default.dispatch({
                    type: "FRIEND_INVITE_REVOKE_REQUEST"
                }), o.default.delete({
                    url: K.Endpoints.FRIEND_INVITES,
                    context: {
                        location
                    }
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    d.default.dispatch({
                        type: "FRIEND_INVITE_REVOKE_SUCCESS",
                        invites: t
                    })
                })),
                revokeFriendInvite: e => o.default.delete({
                    url: K.Endpoints.INVITE(e)
                }),
                clearInviteFromStore(e) {
                    d.default.dispatch({
                        type: "INSTANT_INVITE_CLEAR",
                        channelId: e
                    })
                },
                revokeInvite(e) {
                    let {
                        code: t,
                        channel: n
                    } = e;
                    return x.default.delete({
                        url: K.Endpoints.INVITE(t),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.INVITE_REVOKE,
                            properties: {
                                uses: e.uses,
                                max_uses: e.maxUses,
                                max_age: e.maxAge,
                                invite_type: e.type
                            }
                        }
                    }).then(() => {
                        d.default.dispatch({
                            type: "INSTANT_INVITE_REVOKE_SUCCESS",
                            code: t,
                            channelId: n.id
                        })
                    })
                },
                acceptInvite(e) {
                    var t, i, a;
                    let {
                        inviteKey: l,
                        context: s,
                        callback: r,
                        skipOnboarding: u
                    } = e, c = (0, A.parseExtraDataFromInviteKey)(l), E = c.baseCode, f = L.default.getSessionId();
                    let h = (i = s, a = c, {
                            ...i,
                            invite_guild_scheduled_event_id: a.guildScheduledEventId
                        }),
                        p = w.default.getCurrentUser();
                    return null !== (t = null == p ? void 0 : p.hasFlag(K.UserFlags.QUARANTINED)) && void 0 !== t && t ? ((0, O.default)(), new Promise((e, t) => t(Error()))) : (d.default.dispatch({
                        type: "INVITE_ACCEPT",
                        code: E
                    }), o.default.post({
                        url: K.Endpoints.INVITE(E),
                        context: h,
                        oldFormErrors: !0,
                        body: {
                            session_id: f
                        }
                    }).then(async e => {
                        var t, i;
                        d.default.dispatch({
                            type: "INVITE_ACCEPT_SUCCESS",
                            invite: e.body,
                            code: E
                        });
                        let a = I.default.getGuildScheduledEvent(c.guildScheduledEventId),
                            l = {
                                ...e.body,
                                guild_scheduled_event: a
                            },
                            s = null !== (i = null == l ? void 0 : l.guild_id) && void 0 !== i ? i : null == l ? void 0 : null === (t = l.guild) || void 0 === t ? void 0 : t.id;
                        if (!u && null != s && l.new_member) {
                            let {
                                default: e
                            } = await n.el("937692").then(n.bind(n, "937692"));
                            await e({
                                guildId: s
                            })
                        }
                        return null == r || r(l), e.body
                    }, e => {
                        var t, n;
                        throw d.default.dispatch({
                            type: "INVITE_ACCEPT_FAILURE",
                            code: E,
                            error: {
                                message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                                code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                            }
                        }), new _.default(e)
                    }))
                },
                acceptInviteAndTransitionToInviteChannel(e) {
                    let {
                        inviteKey: t,
                        context: n,
                        analyticsLocations: i,
                        callback: a,
                        skipOnboarding: l
                    } = e;
                    return this.acceptInvite({
                        inviteKey: t,
                        context: n,
                        skipOnboarding: l,
                        callback: e => {
                            if (null != e.channel) {
                                let t = Z(e);
                                $(e.channel.id, t, null != i ? i : [])
                            }
                            null != a && a(e)
                        }
                    })
                },
                transitionToInvite(e, t) {
                    var n, i, a;
                    let {
                        channel: l,
                        guild: s
                    } = e;
                    if (null != s && (null === (n = s.features) || void 0 === n ? void 0 : n.includes(K.GuildFeatures.HUB))) {
                        g.default.onOpenHubInvite(e);
                        return
                    }
                    if (null != s && (null === (i = s.features) || void 0 === i ? void 0 : i.includes(K.GuildFeatures.COMMUNITY)) && (null === (a = s.features) || void 0 === a ? void 0 : a.includes(K.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !s.features.includes(K.GuildFeatures.PREVIEW_ENABLED)) {
                        (0, y.transitionTo)(K.Routes.GUILD_MEMBER_VERIFICATION(s.id, e.code));
                        return
                    }
                    if (null == l) return;
                    let r = Z(e);
                    null != t && (r.transitionTo = t);
                    let u = null != s ? s.id : K.ME;
                    J({
                        guildId: u,
                        channel: l,
                        options: r
                    })
                },
                transitionToInviteSync(e, t, n) {
                    if (null != e.channel) {
                        let i = Z(e);
                        this.transitionToInviteChannelSync(e.channel.id, {
                            ...i,
                            intent: n,
                            transitionTo: t
                        })
                    }
                },
                openNativeAppModal(e) {
                    f.default.openNativeAppModal(e, K.RPCCommands.INVITE_BROWSER)
                },
                openApp(e, t, n, i, l) {
                    var o, c;
                    let _;
                    let E = null != e ? (0, A.parseExtraDataFromInviteKey)(e) : null,
                        f = null == E ? void 0 : E.baseCode;
                    if (d.default.dispatch({
                            type: "INVITE_APP_OPENING",
                            code: e
                        }), null != a.ua && a.ua.toLowerCase().indexOf("googlebot") > -1) {
                        d.default.dispatch({
                            type: "INVITE_APP_NOT_OPENED",
                            code: e
                        });
                        return
                    }
                    if ((null === (o = a.os) || void 0 === o ? void 0 : o.family) === "Android" || (null === (c = a.os) || void 0 === c ? void 0 : c.family) === "iOS") {
                        let e = null != f ? (0, s.getInviteDynamicLinkTemplate)(f) : (0, s.getDefaultDynamicLinkTemplate)(),
                            t = (0, r.generateAttemptId)();
                        _ = (0, r.default)(e, {
                            utmSource: 2 === l ? "friend_invite" : Q,
                            fingerprint: n,
                            username: i,
                            attemptId: t,
                            event: null == E ? void 0 : E.guildScheduledEventId,
                            iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(f)
                        }), H.default.track(K.AnalyticEvents.DEEP_LINK_CLICKED, {
                            fingerprint: (0, u.maybeExtractId)(n),
                            attempt_id: t,
                            source: Q,
                            invite_code: f
                        })
                    } else "#" === (_ = null != t ? K.Routes.INVITE_PROXY(t) : "")[0] && (_ = _.slice(1)), _ = "discord://".concat(_);
                    V.default.launch(_, t => {
                        d.default.dispatch(t ? {
                            type: "INVITE_APP_OPENED",
                            code: e
                        } : {
                            type: "INVITE_APP_NOT_OPENED",
                            code: e
                        })
                    })
                },
                transitionToInviteChannelSync: $
            }