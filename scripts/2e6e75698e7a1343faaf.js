(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49602"], {
        18054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                init: function() {
                    return s
                },
                close: function() {
                    return c
                },
                setSection: function() {
                    return E
                },
                updateChannel: function() {
                    return S
                },
                saveChannel: function() {
                    return _
                },
                deleteChannel: function() {
                    return N
                },
                default: function() {
                    return f
                }
            });
            var l = n("872717"),
                i = n("913144"),
                a = n("81732");
            n("21121"), n("693051"), n("921245");
            var u = n("263024");
            n("492114");
            var r = n("42203"),
                o = n("54239"),
                d = n("49111");

            function s(e, t, n) {
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: e,
                    location: t,
                    subsection: n
                })
            }

            function c() {
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                })
            }

            function E(e) {
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: e
                })
            }

            function S(e) {
                let {
                    name: t,
                    type: n,
                    topic: l,
                    bitrate: a,
                    userLimit: u,
                    nsfw: r,
                    flags: o,
                    rateLimitPerUser: d,
                    defaultThreadRateLimitPerUser: s,
                    defaultAutoArchiveDuration: c,
                    template: E,
                    defaultReactionEmoji: S,
                    rtcRegion: _,
                    videoQualityMode: N,
                    autoArchiveDuration: f,
                    locked: T,
                    invitable: h,
                    availableTags: m,
                    defaultSortOrder: C,
                    defaultForumLayout: I,
                    iconEmoji: p,
                    themeColor: v
                } = e;
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: t,
                    channelType: n,
                    topic: l,
                    bitrate: a,
                    userLimit: u,
                    nsfw: r,
                    flags: o,
                    rateLimitPerUser: d,
                    defaultThreadRateLimitPerUser: s,
                    defaultAutoArchiveDuration: c,
                    template: E,
                    defaultReactionEmoji: S,
                    rtcRegion: _,
                    videoQualityMode: N,
                    autoArchiveDuration: f,
                    locked: T,
                    invitable: h,
                    availableTags: m,
                    defaultSortOrder: C,
                    defaultForumLayout: I,
                    iconEmoji: p,
                    themeColor: v
                })
            }
            async function _(e, t) {
                let {
                    name: n,
                    type: o,
                    position: s,
                    topic: c,
                    bitrate: E,
                    userLimit: S,
                    nsfw: _,
                    flags: N,
                    permissionOverwrites: f,
                    rateLimitPerUser: T,
                    defaultThreadRateLimitPerUser: h,
                    defaultAutoArchiveDuration: m,
                    template: C,
                    defaultReactionEmoji: I,
                    rtcRegion: p,
                    videoQualityMode: v,
                    autoArchiveDuration: L,
                    locked: A,
                    invitable: g,
                    availableTags: y,
                    defaultSortOrder: G,
                    defaultForumLayout: O,
                    iconEmoji: H,
                    themeColor: U
                } = t, b = r.default.getChannel(e);
                return i.default.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT"
                }), await u.default.unarchiveThreadIfNecessary(e), l.default.patch({
                    url: d.Endpoints.CHANNEL(e),
                    body: {
                        name: n,
                        type: o,
                        position: s,
                        topic: c,
                        bitrate: E,
                        user_limit: S,
                        nsfw: _,
                        flags: N,
                        permission_overwrites: f,
                        rate_limit_per_user: T,
                        default_thread_rate_limit_per_user: h,
                        default_auto_archive_duration: m,
                        template: C,
                        rtc_region: p,
                        video_quality_mode: v,
                        auto_archive_duration: L,
                        locked: A,
                        invitable: g,
                        default_reaction_emoji: null != I ? {
                            emoji_id: null == I ? void 0 : I.emojiId,
                            emoji_name: null == I ? void 0 : I.emojiName
                        } : null === I ? null : void 0,
                        available_tags: null == y ? void 0 : y.map(e => ({
                            id: e.id,
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: e.emojiName,
                            moderated: e.moderated
                        })),
                        default_sort_order: G,
                        default_forum_layout: O,
                        icon_emoji: null != H ? {
                            id: H.id,
                            name: H.name
                        } : null === H ? null : void 0,
                        theme_color: U
                    },
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                        channelId: e
                    });
                    let n = null == b ? void 0 : b.getGuildId();
                    return null != n && !(null == b ? void 0 : b.isThread()) && a.default.checkGuildTemplateDirty(n), t
                }, e => (i.default.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function N(e) {
                let t = r.default.getChannel(e);
                l.default.delete({
                    url: d.Endpoints.CHANNEL(e),
                    oldFormErrors: !0
                }).then(() => {
                    let e = null == t ? void 0 : t.getGuildId();
                    null != e && !(null == t ? void 0 : t.isThread()) && a.default.checkGuildTemplateDirty(e), c()
                })
            }
            var f = {
                init: s,
                open: function(e, t, n) {
                    s(e, t, n), (0, o.pushLayer)(d.Layers.CHANNEL_SETTINGS)
                },
                close: c,
                setSection: E,
                selectPermissionOverwrite: function(e) {
                    i.default.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: e
                    })
                },
                updateChannel: S,
                saveChannel: _,
                deleteChannel: N,
                updateVoiceChannelStatus: function(e, t) {
                    return l.default.put({
                        url: d.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
                        body: {
                            status: t
                        }
                    })
                }
            }
        },
        921245: function(e, t, n) {
            "use strict";
            n.r(t), n("65597"), n("650033"), n("362391"), n("697218"), n("21121")
        },
        492114: function(e, t, n) {
            "use strict";
            let l, i, a, u, r, o;
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var d = n("917351"),
                s = n.n(d),
                c = n("866227"),
                E = n.n(c),
                S = n("446674"),
                _ = n("872717"),
                N = n("913144"),
                f = n("233069"),
                T = n("813006"),
                h = n("517763"),
                m = n("766274"),
                C = n("42203"),
                I = n("49111");
            let p = I.FormStates.CLOSED,
                v = {},
                L = {},
                A = !1,
                g = !1,
                y = null,
                G = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "iconEmoji", "themeColor"];

            function O(e) {
                let t = C.default.getChannel(e.channelId);
                if (null == t) return U();
                p = I.FormStates.OPEN, u = a = t, y = "location" in e && null != e.location ? e.location : null, i = "subsection" in e ? e.subsection : null, null != u && (u = u.set("nsfw", u.isNSFW())), r = C.default.getChannel(u.parent_id), o = u.getGuildId(), v = {}, H({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: null != l ? l : I.ChannelSettingsSections.OVERVIEW,
                    subsection: i
                })
            }

            function H(e) {
                l = e.section, i = e.subsection, null != u && l === I.ChannelSettingsSections.INSTANT_INVITES && (A = !0, _.default.get({
                    url: I.Endpoints.INSTANT_INVITES(u.id),
                    oldFormErrors: !0
                }).then(e => {
                    A = !1, N.default.dispatch({
                        type: "CHANNEL_SETTINGS_LOADED_INVITES",
                        invites: e.body
                    })
                }, () => A = !1))
            }

            function U() {
                g = !1, p = I.FormStates.CLOSED, l = null, u = a = null, r = null, L = {}
            }
            let b = s.debounce(() => {
                if (null == u || null == a) return !1;
                let e = u.toJS(),
                    t = a.toJS(),
                    n = G.every(n => e[n] === t[n]);
                n && u !== a && (u = a, M.emitChange())
            }, 500);

            function F(e) {
                return new h.default({
                    code: e.code,
                    temporary: e.temporary,
                    revoked: e.revoked,
                    inviter: null != e.inviter ? new m.default(e.inviter) : null,
                    channel: (0, f.createChannelRecordFromInvite)(e.channel),
                    guild: null != e.guild ? new T.default(e.guild) : null,
                    uses: e.uses,
                    maxUses: e.max_uses,
                    maxAge: e.max_age,
                    createdAt: E(e.created_at),
                    type: e.type
                })
            }
            class w extends S.default.Store {
                initialize() {
                    this.waitFor(C.default)
                }
                hasChanges() {
                    return u !== a
                }
                isOpen() {
                    return g
                }
                getSection() {
                    return l
                }
                getInvites() {
                    return {
                        invites: L,
                        loading: A
                    }
                }
                showNotice() {
                    return this.hasChanges()
                }
                getChannel() {
                    return u
                }
                getFormState() {
                    return p
                }
                getCategory() {
                    return r
                }
                getProps() {
                    return {
                        submitting: p === I.FormStates.SUBMITTING,
                        errors: v,
                        channel: u,
                        section: l,
                        subsection: i,
                        invites: L,
                        selectedOverwriteId: o,
                        hasChanges: this.hasChanges(),
                        analyticsLocation: y
                    }
                }
            }
            w.displayName = "ChannelSettingsStore";
            let M = new w(N.default, {
                CHANNEL_SETTINGS_INIT: O,
                CHANNEL_SETTINGS_OPEN: function(e) {
                    g = !0, O(e)
                },
                CHANNEL_SETTINGS_SUBMIT: function() {
                    p = I.FormStates.SUBMITTING, v = {}
                },
                CHANNEL_SETTINGS_SUBMIT_SUCCESS: function() {
                    a = u, p = I.FormStates.OPEN
                },
                CHANNEL_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    p = I.FormStates.OPEN, v = Object.keys(null !== (t = e.errors) && void 0 !== t ? t : {}).reduce((t, n) => {
                        let l = e.errors[n];
                        return (0, d.isArray)(l) ? t[n] = l.join("\n") : t[n] = l, t
                    }, {})
                },
                CHANNEL_SETTINGS_CLOSE: U,
                CHANNEL_SETTINGS_OVERWRITE_SELECT: function(e) {
                    let {
                        overwriteId: t
                    } = e;
                    o = t
                },
                CHANNEL_SETTINGS_UPDATE: function(e) {
                    let {
                        name: t,
                        channelType: n,
                        topic: l,
                        bitrate: i,
                        userLimit: a,
                        nsfw: r,
                        flags: o,
                        rateLimitPerUser: d,
                        defaultThreadRateLimitPerUser: s,
                        autoArchiveDuration: c,
                        locked: E,
                        invitable: S,
                        defaultAutoArchiveDuration: _,
                        template: N,
                        defaultReactionEmoji: f,
                        rtcRegion: T,
                        videoQualityMode: h,
                        availableTags: m,
                        defaultSortOrder: C,
                        defaultForumLayout: I,
                        iconEmoji: p,
                        themeColor: v
                    } = e;
                    if (null == u) return !1;
                    null != t && (u = u.set("name", t)), null != l && (u = u.set("topic", l)), null != i && (u = u.set("bitrate", i)), null != a && (u = u.set("userLimit", a)), null != r && (u = u.set("nsfw", r)), null != o && (u = u.set("flags", o)), null != d && (u = u.set("rateLimitPerUser", d)), null != s && (u = u.set("defaultThreadRateLimitPerUser", s)), null != c && (u = u.set("threadMetadata", {
                        ...u.threadMetadata,
                        autoArchiveDuration: c
                    })), null != E && (u = u.set("threadMetadata", {
                        ...u.threadMetadata,
                        locked: E
                    })), null != S && (u = u.set("threadMetadata", {
                        ...u.threadMetadata,
                        invitable: S
                    })), null != _ && (u = u.set("defaultAutoArchiveDuration", _)), null != N && (u = u.set("template", N)), null != n && (u = u.set("type", n)), void 0 !== T && (u = u.set("rtcRegion", T)), null != h && (u = u.set("videoQualityMode", h)), void 0 !== f && (u = u.set("defaultReactionEmoji", f)), null != m && (u = u.set("availableTags", m)), null != C && (u = u.set("defaultSortOrder", C)), null != I && (u = u.set("defaultForumLayout", I)), void 0 !== p && (u = u.set("iconEmoji", p)), null != v && (u = u.set("themeColor", v)), b()
                },
                CHANNEL_SETTINGS_SET_SECTION: H,
                CHANNEL_SETTINGS_LOADED_INVITES: function(e) {
                    L = {}, e.invites.forEach(e => {
                        L[e.code] = F(e)
                    })
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    if (null == u) return !1;
                    let n = !1;
                    for (let e of t)(function(e) {
                        if (null == a || a.id !== e) return !1;
                        if (a === u) {
                            let t = C.default.getChannel(e);
                            if (null == t) return !1;
                            u = a = t, r = C.default.getChannel(u.parent_id)
                        } else {
                            let t = C.default.getChannel(e);
                            if (null == t) return !1;
                            a = t, null != u && (u = u.set("permissionOverwrites", a.permissionOverwrites), r = C.default.getChannel(u.parent_id))
                        }
                        return !0
                    })(e.id) && null != u && (null != o && null == u.permissionOverwrites[o] && (o = u.getGuildId()), n = !0);
                    return n
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    if (null == u || u.id !== t) return !1;
                    p = I.FormStates.CLOSED
                },
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    L = {
                        ...L
                    }, delete L[e.code]
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    L = {
                        ...L,
                        [e.invite.code]: F(e.invite)
                    }
                }
            });
            var j = M
        }
    }
]);