            "use strict";
            n.r(t), n.d(t, {
                getRemoteIconURL: function() {
                    return b
                },
                transformChannel: function() {
                    return G
                },
                transformInternalTextMessage: function() {
                    return j
                },
                transformVoiceState: function() {
                    return k
                },
                transformRelationship: function() {
                    return w
                },
                isMatchingOrigin: function() {
                    return F
                },
                hasMessageReadPermission: function() {
                    return B
                },
                getVoiceConnectionState: function() {
                    return H
                },
                computeActivityFlags: function() {
                    return V
                },
                validateActivityInvite: function() {
                    return Y
                },
                fetchApplicationsRPC: function() {
                    return W
                },
                processSocketThrottlers: function() {
                    return K
                },
                validateOriginAndUpdateSocket: function() {
                    return z
                },
                getDeprecatedVoiceSettingsWithShortcut: function() {
                    return q
                },
                getVoiceSettingsWithShortcut: function() {
                    return Q
                },
                validatePostMessageTransport: function() {
                    return Z
                },
                validateApplication: function() {
                    return X
                }
            }), n("222007"), n("424973"), n("70102"), n("781738"), n("917351");
            var a, s = n("746379"),
                i = n.n(s),
                l = n("872717"),
                r = n("497"),
                o = n("95410"),
                u = n("819689"),
                d = n("711562"),
                c = n("367376"),
                E = n("574073"),
                f = n("845579"),
                _ = n("233069"),
                h = n("766274"),
                C = n("42203"),
                T = n("305961"),
                I = n("42887"),
                S = n("377253"),
                N = n("824563"),
                A = n("697218"),
                p = n("800762"),
                m = n("387111"),
                g = n("655518"),
                R = n("861309"),
                O = n("694352"),
                L = n("492249"),
                v = n("49111");
            let M = null !== (a = i.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== a ? a : "localhost",
                P = function() {
                    let e = M.split(":")[0];
                    if (!e.includes(".")) return e;
                    let t = e.split("."),
                        n = t[t.length - 1];
                    return /^\d+$/.test(n) ? e : t.slice(-2).join(".")
                }(),
                D = new RegExp("^".concat(g.default.escape("https://"), "(?:[a-z]+\\.)?(").concat(g.default.escape(P), "|discordapp.com|discord.com)$")),
                y = {};

            function x(e) {
                return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = b(e.src)), Array.isArray(e.content) && (e.content = e.content.map(x)), e
            }

            function b(e) {
                return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
            }

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t.indexOf(e) > -1
            }

            function G(e, t) {
                let n = [],
                    a = e.getGuildId();
                return ![v.ChannelTypes.GUILD_CATEGORY, ...(0, _.GUILD_VOCAL_CHANNEL_TYPES)].includes(e.type) && n.push(new Promise(t => {
                    S.default.whenReady(e.id, () => t()), u.default.fetchMessages({
                        channelId: e.id,
                        limit: v.MAX_MESSAGES_PER_CHANNEL
                    })
                })), Promise.all(n).then(() => {
                    var n;
                    let s = !e.isNSFW() || (null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0,
                        i = s && t ? S.default.getMessages(e.id).toArray().map(j) : [],
                        l = Object.values(p.default.getVoiceStatesForChannel(e.id)).map(t => k(a, e.id, t));
                    return {
                        id: e.id,
                        name: e.name,
                        type: e.type,
                        topic: e.topic,
                        bitrate: e.bitrate,
                        user_limit: e.userLimit,
                        guild_id: a,
                        position: e.position,
                        messages: i,
                        voice_states: l
                    }
                })
            }

            function j(e) {
                let t = c.default.parseToAST(e.content, !0, {
                        channelId: e.channel_id
                    }).map(x),
                    n = C.default.getChannel(e.channel_id),
                    a = null != e.author ? (0, E.getUserAuthor)(new h.default(e.author), n) : void 0;
                return {
                    id: e.id,
                    blocked: e.blocked,
                    bot: e.bot,
                    content: e.content,
                    content_parsed: t.length ? t : void 0,
                    nick: null == a ? void 0 : a.nick,
                    author_color: null == a ? void 0 : a.colorString,
                    edited_timestamp: e.edited_timestamp || e.editedTimestamp,
                    timestamp: e.timestamp,
                    tts: e.tts,
                    mentions: e.mentions,
                    mention_everyone: e.mention_everyone || e.mentionEveryone,
                    mention_roles: e.mention_roles || e.mentionRoles,
                    embeds: e.embeds,
                    attachments: e.attachments,
                    author: e.author,
                    pinned: e.pinned,
                    type: e.type
                }
            }

            function k(e, t, n) {
                let {
                    mute: a,
                    deaf: s,
                    selfMute: i,
                    selfDeaf: l,
                    suppress: r,
                    userId: o
                } = n, u = A.default.getUser(o);
                if (null == u) throw Error("Invalid user id: ".concat(o));
                return {
                    nick: m.default.getName(e, t, u),
                    mute: I.default.isLocalMute(u.id),
                    volume: I.default.getLocalVolume(u.id),
                    pan: I.default.getLocalPan(u.id),
                    voice_state: {
                        mute: a,
                        deaf: s,
                        self_mute: i,
                        self_deaf: l,
                        suppress: r
                    },
                    user: (0, O.default)(u)
                }
            }

            function w(e, t, n) {
                let a = A.default.getUser(t);
                return {
                    type: e,
                    user: null != a ? (0, O.default)(a) : null,
                    presence: {
                        status: N.default.getStatus(t),
                        activity: null != n ? N.default.getApplicationActivity(t, n) : N.default.getPrimaryActivity(t)
                    }
                }
            }

            function F(e) {
                let t;
                if (null == e) return !1;
                let n = window.location.origin;
                if (e === n) return !0;
                try {
                    t = i.parse(e).hostname
                } catch (e) {
                    return !1
                }
                return window.location.hostname === t && "localhost" === t || null == e.match("staging") && (!!(D.test(e) && D.test(n)) || !1)
            }

            function B(e, t, n) {
                let a = T.default.getGuild(e.getGuildId()),
                    s = null != a ? a.getApplicationId() : e.getApplicationId();
                return s === t || n.indexOf(v.OAuth2Scopes.MESSAGES_READ) > -1
            }

            function H(e) {
                switch (e) {
                    case v.RTCConnectionStates.RTC_CONNECTED:
                    case v.RTCConnectionStates.RTC_CONNECTING:
                    case v.RTCConnectionStates.RTC_DISCONNECTED:
                        return e.replace(/^RTC_/, "VOICE_");
                    default:
                        return e
                }
            }

            function V(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        instance: n,
                        secrets: a,
                        party: s
                    } = e,
                    i = 0;
                return (n && (i |= v.ActivityFlags.INSTANCE), (null == a ? void 0 : a.join) != null && (i |= v.ActivityFlags.JOIN), t) ? (i |= v.ActivityFlags.EMBEDDED, i |= v.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL) : (((null == s ? void 0 : s.privacy) === v.ActivityPartyPrivacy.PUBLIC || o.default.get("ACTIVITIES_FORCE_PUBLIC")) && (f.AllowActivityPartyPrivacyFriends.getSetting() && (i |= v.ActivityFlags.PARTY_PRIVACY_FRIENDS), f.AllowActivityPartyPrivacyVoiceChannel.getSetting() && (i |= v.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)), i)
            }

            function Y(e, t, n) {
                if (e === v.ActivityActionTypes.JOIN) return null != t && null != t.id && null != n.join;
                return !1
            }

            function W(e, t, n) {
                return l.default.get({
                    url: v.Endpoints.APPLICATION_RPC(t),
                    oldFormErrors: !0,
                    retries: 3
                }).then(a => {
                    let {
                        body: {
                            rpc_origins: s,
                            id: i,
                            name: l,
                            icon: r,
                            cover_image: o,
                            flags: u
                        }
                    } = a;
                    if ("string" == typeof n) {
                        if (e.transport === L.TransportTypes.POST_MESSAGE) {
                            let e = (0, d.default)(t);
                            if (null == e || !U(n, [e])) throw new R.default(v.RPCCloseCodes.INVALID_ORIGIN, "Invalid Origin")
                        } else if (!U(n, s)) throw new R.default(v.RPCCloseCodes.INVALID_ORIGIN, "Invalid Origin")
                    }
                    e.application = {
                        id: i,
                        name: l,
                        icon: r,
                        coverImage: o,
                        flags: u
                    }
                }, () => {
                    throw new R.default(v.RPCCloseCodes.INVALID_CLIENTID, "Invalid Client ID")
                })
            }
            async function K(e, t) {
                let n = y[e];
                null == n && (n = new r.default(t ? 2 : 60, 6e4), y[e] = n), await n.process()
            }

            function z(e, t) {
                null == t && (e.authorization.scopes = [L.RPC_LOCAL_SCOPE])
            }

            function q(e) {
                let t = I.default.getSettings(),
                    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
                        id: e.id,
                        name: e.name
                    })),
                    a = e(t);
                return {
                    input: {
                        available_devices: n(I.default.getInputDevices()),
                        device_id: t.inputDeviceId,
                        volume: t.inputVolume
                    },
                    output: {
                        available_devices: n(I.default.getOutputDevices()),
                        device_id: t.outputDeviceId,
                        volume: t.outputVolume
                    },
                    mode: {
                        type: t.mode,
                        auto_threshold: t.modeOptions.autoThreshold,
                        threshold: t.modeOptions.threshold,
                        shortcut: a,
                        delay: t.modeOptions.delay
                    },
                    automatic_gain_control: t.automaticGainControl,
                    echo_cancellation: t.echoCancellation,
                    noise_suppression: t.noiseSuppression,
                    qos: t.qos,
                    silence_warning: t.silenceWarning,
                    deaf: t.deaf,
                    mute: t.mute
                }
            }

            function Q(e, t) {
                let n = I.default.getSettings(e),
                    a = t(n);
                return {
                    input_mode: {
                        type: n.mode,
                        shortcut: a
                    },
                    local_mutes: Object.keys(n.localMutes),
                    local_volumes: n.localVolumes,
                    self_mute: n.mute,
                    self_deaf: n.deaf
                }
            }

            function Z(e) {
                if (e !== L.TransportTypes.POST_MESSAGE) throw new R.default(L.RPCErrors.INVALID_COMMAND, 'command not available from "'.concat(e, " transport"))
            }

            function X(e) {
                if (null == e.id) throw new R.default(L.RPCErrors.INVALID_COMMAND, "Invalid application")
            }