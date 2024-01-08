            "use strict";
            n.r(t), n.d(t, {
                transitionToGuildFromEventInvite: function() {
                    return et
                },
                default: function() {
                    return en
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
                E = n("427953"),
                f = n("644223"),
                h = n("523086"),
                p = n("263901"),
                T = n("677315"),
                C = n("233322"),
                m = n("157186"),
                S = n("290886"),
                I = n("374021"),
                g = n("398604"),
                A = n("704341"),
                N = n("9294"),
                O = n("487946"),
                R = n("258158"),
                y = n("877275"),
                v = n("393414"),
                M = n("716214"),
                D = n("233069"),
                L = n("271938"),
                U = n("42203"),
                P = n("923959"),
                b = n("26989"),
                G = n("305961"),
                k = n("88093"),
                F = n("330154"),
                w = n("957255"),
                V = n("697218"),
                H = n("599110"),
                x = n("840707"),
                B = n("65300"),
                Y = n("851387"),
                K = n("990766"),
                j = n("49111"),
                W = n("724210"),
                z = n("706530"),
                q = n("91366"),
                Q = n("837979");
            let X = "invite",
                Z = null;

            function J(e) {
                var t, n, i;
                let a = {};
                switch (e.target_type) {
                    case q.InviteTargetTypes.STREAM:
                        a.targetType = e.target_type, a.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
                        break;
                    case q.InviteTargetTypes.EMBEDDED_APPLICATION:
                        a.targetType = e.target_type, a.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
                        break;
                    case q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
                        a.targetType = e.target_type
                }
                let l = null != G.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id),
                    s = !l || e.new_member;
                return s && null != e.channel && (0, D.isGuildTextChannelType)(e.channel.type) && (a.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (a.guildScheduledEvent = e.guild_scheduled_event), a
            }

            function $(e) {
                let {
                    guildId: t,
                    channel: i,
                    options: a,
                    analyticsLocations: l = []
                } = e, {
                    type: s
                } = i, r = function(e, t, n) {
                    var i, a;
                    if ((null == n ? void 0 : n.targetType) === q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return W.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                    if ((null == n ? void 0 : n.targetType) == null && !D.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && ((0, T.canSeeGuildHome)(e) || (0, S.canSeeOnboardingHome)(e))) return W.StaticChannelRoute.GUILD_HOME;
                    let l = U.default.getChannel(t.id);
                    return w.default.can(j.Permissions.VIEW_CHANNEL, l) ? t.id : null !== (a = null === (i = P.default.getDefaultChannel(e, !0, j.Permissions.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : t.id
                }(t, i, a), {
                    targetUserId: u,
                    targetType: o,
                    targetApplicationId: d
                } = null != a ? a : {}, c = s === j.ChannelTypes.GUILD_STAGE_VOICE, _ = j.Routes.CHANNEL(t, r);
                D.GUILD_VOCAL_CHANNEL_TYPES.has(s) ? (0, p.addPostConnectionCallback)(() => {
                    n.el("987317").then(n.bind(n, "987317")).then(e => {
                        let {
                            default: n
                        } = e, s = () => {
                            if (c) {
                                (0, M.connectAndOpen)(i instanceof D.ChannelRecordBase ? i : (0, D.createChannelRecord)(i)), (0, v.transitionTo)(_);
                                return
                            }
                            n.selectVoiceChannel(r), o === q.InviteTargetTypes.STREAM && null != u && K.watchStreamAndTransitionToStream({
                                streamType: z.StreamTypes.GUILD,
                                ownerId: u,
                                guildId: t,
                                channelId: r
                            }), o === q.InviteTargetTypes.EMBEDDED_APPLICATION && null != d && ((0, v.transitionTo)(j.Routes.CHANNEL(null != t ? t : j.ME, r)), (0, f.default)(r, d, l, null == a ? void 0 : a.intent))
                        };
                        (0, m.shouldShowMembershipVerificationGate)(t, [G.default, k.default, V.default, b.default]) ? (0, C.openMemberVerificationModal)(t, s) : s()
                    })
                }) : (0, E.isActivityInTextSupportedForChannelType)(s) && o === q.InviteTargetTypes.EMBEDDED_APPLICATION && null != d && ((0, v.transitionTo)(j.Routes.CHANNEL(null != t ? t : j.ME, r)), (0, f.default)(r, d, l, null == a ? void 0 : a.intent)), (function(e, t) {
                    let {
                        type: n
                    } = e, {
                        transitionTo: i,
                        welcomeModalChannelId: a,
                        guildScheduledEvent: l
                    } = null != t ? t : {}, s = n === j.ChannelTypes.GUILD_STAGE_VOICE, r = {
                        navigationReplace: !0
                    };
                    return null != a && (r.welcomeModalChannelId = a), s && (r.state = Q.STAGE_INVITE_STATE_KEY), null != l && (r.guildScheduledEventId = l.id), e => null != i ? i(e, r, y.default.INVITE_ACCEPT) : (0, v.transitionTo)(e, r, y.default.INVITE_ACCEPT)
                })(i, a)(_)
            }
            let ee = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    U.default.addConditionalChangeListener(() => {
                        var i;
                        let a = U.default.getChannel(e),
                            l = V.default.getCurrentUser();
                        return null == a || null == l || (!a.nsfw || !!l.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
                            let {
                                guildScheduledEvent: t,
                                welcomeModalChannelId: n
                            } = e;
                            null != t && (0, p.addPostConnectionCallback)(() => {
                                let e = {
                                    guildScheduledEventId: t.id
                                };
                                null != n && (e.welcomeModalChannelId = n), (0, I.transitionToEventDetailsFromInvite)(t, e)
                            })
                        }(t), !1) : ($({
                            guildId: null !== (i = a.getGuildId()) && void 0 !== i ? i : j.ME,
                            channel: a,
                            options: t,
                            analyticsLocations: n
                        }), !1))
                    })
                },
                et = async e => {
                    let {
                        guild_id: t,
                        channel_id: n
                    } = e;
                    (0, g.isGuildScheduledEventActive)(e) && null != n ? ee(n) : await Y.default.transitionToGuildSync(t)
                };
            var en = {
                resolveInvite: function e(t, n, i) {
                    return d.default.isDispatching() ? Promise.resolve().then(() => e(t, n, i)) : (d.default.dispatch({
                        type: "INVITE_RESOLVE",
                        code: t
                    }), (0, O.default)(t, n, i).then(e => {
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
                            url: j.Endpoints.INSTANT_INVITES(e),
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
                    let n = F.default.getInvite(e.id);
                    if (null != n && !n.isExpired()) return n.code;
                    let i = {
                            max_age: j.Durations.DAY
                        },
                        a = await this.createInvite(e.id, i, t).catch(() => d.default.dispatch({
                            type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
                        }));
                    return null == a ? void 0 : a.code
                },
                async getAllFriendInvites(e) {
                    await new Promise(e => d.default.wait(() => e(null)));
                    let t = F.default.getFriendInvitesFetching();
                    if (t) return null != Z ? Z.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
                    Z = o.default.get({
                        url: j.Endpoints.FRIEND_INVITES,
                        context: {
                            location: e
                        }
                    }), d.default.dispatch({
                        type: "FRIEND_INVITES_FETCH_REQUEST",
                        requestedAt: new Date
                    });
                    let {
                        body: n
                    } = await Z;
                    return Z = null, d.default.dispatch({
                        type: "FRIEND_INVITES_FETCH_RESPONSE",
                        receivedAt: new Date,
                        invites: n
                    }), n
                },
                createFriendInvite: (e, t) => (d.default.dispatch({
                    type: "FRIEND_INVITE_CREATE_REQUEST"
                }), o.default.post({
                    url: j.Endpoints.FRIEND_INVITES,
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
                    url: j.Endpoints.FRIEND_INVITES,
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
                    url: j.Endpoints.INVITE(e)
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
                        url: j.Endpoints.INVITE(t),
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
                    } = e, c = (0, N.parseExtraDataFromInviteKey)(l), E = c.baseCode, f = L.default.getSessionId();
                    let h = (i = s, a = c, {
                            ...i,
                            invite_guild_scheduled_event_id: a.guildScheduledEventId
                        }),
                        p = V.default.getCurrentUser();
                    return null !== (t = null == p ? void 0 : p.hasFlag(j.UserFlags.QUARANTINED)) && void 0 !== t && t ? ((0, R.default)(), new Promise((e, t) => t(Error()))) : (d.default.dispatch({
                        type: "INVITE_ACCEPT",
                        code: E
                    }), o.default.post({
                        url: j.Endpoints.INVITE(E),
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
                        let a = g.default.getGuildScheduledEvent(c.guildScheduledEventId),
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
                                let t = J(e);
                                ee(e.channel.id, t, null != i ? i : [])
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
                    if (null != s && (null === (n = s.features) || void 0 === n ? void 0 : n.includes(j.GuildFeatures.HUB))) {
                        A.default.onOpenHubInvite(e);
                        return
                    }
                    if (null != s && (null === (i = s.features) || void 0 === i ? void 0 : i.includes(j.GuildFeatures.COMMUNITY)) && (null === (a = s.features) || void 0 === a ? void 0 : a.includes(j.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !s.features.includes(j.GuildFeatures.PREVIEW_ENABLED)) {
                        (0, v.transitionTo)(j.Routes.GUILD_MEMBER_VERIFICATION(s.id, e.code));
                        return
                    }
                    if (null == l) return;
                    let r = J(e);
                    null != t && (r.transitionTo = t);
                    let u = null != s ? s.id : j.ME;
                    $({
                        guildId: u,
                        channel: l,
                        options: r
                    })
                },
                transitionToInviteSync(e, t, n) {
                    if (null != e.channel) {
                        let i = J(e);
                        this.transitionToInviteChannelSync(e.channel.id, {
                            ...i,
                            intent: n,
                            transitionTo: t
                        })
                    }
                },
                openNativeAppModal(e) {
                    h.default.openNativeAppModal(e, j.RPCCommands.INVITE_BROWSER)
                },
                openApp(e, t, n, i, l) {
                    var o, c;
                    let _;
                    let E = null != e ? (0, N.parseExtraDataFromInviteKey)(e) : null,
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
                            utmSource: 2 === l ? "friend_invite" : X,
                            fingerprint: n,
                            username: i,
                            attemptId: t,
                            event: null == E ? void 0 : E.guildScheduledEventId,
                            iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(f)
                        }), H.default.track(j.AnalyticEvents.DEEP_LINK_CLICKED, {
                            fingerprint: (0, u.maybeExtractId)(n),
                            attempt_id: t,
                            source: X,
                            invite_code: f
                        })
                    } else "#" === (_ = null != t ? j.Routes.INVITE_PROXY(t) : "")[0] && (_ = _.slice(1)), _ = "discord://".concat(_);
                    B.default.launch(_, t => {
                        d.default.dispatch(t ? {
                            type: "INVITE_APP_OPENED",
                            code: e
                        } : {
                            type: "INVITE_APP_NOT_OPENED",
                            code: e
                        })
                    })
                },
                transitionToInviteChannelSync: ee
            }