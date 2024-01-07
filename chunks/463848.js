            "use strict";
            l.r(t), l.d(t, {
                UserActivityTypes: function() {
                    return C
                },
                default: function() {
                    return N
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("871388"),
                o = l("152311"),
                u = l("532602"),
                d = l("299285"),
                c = l("699209"),
                f = l("769791"),
                m = l("373469"),
                p = l("42203"),
                E = l("305961"),
                T = l("957255"),
                h = l("800762"),
                _ = l("313873"),
                S = l("599110"),
                I = l("474293"),
                g = l("49111"),
                A = l("804354");

            function v(e) {
                let {
                    type: t,
                    source: l,
                    activity: a,
                    applicationStream: s,
                    user: r,
                    guildId: d,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m = (0, o.default)(a),
                    actionColor: p
                } = e;
                return (0, n.jsx)(u.default, {
                    className: (0, I.getClass)(A, "actions", t),
                    type: t,
                    source: l,
                    activity: a,
                    applicationStream: s,
                    user: r,
                    guildId: d,
                    look: i.Button.Looks.FILLED,
                    color: null != p ? p : i.Button.Colors.PRIMARY,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m
                })
            }
            let C = _.default.Types;
            var N = function(e) {
                let {
                    activity: t,
                    user: l,
                    useStoreStream: i = !0,
                    showActions: o = !0,
                    hideHeader: u = !1,
                    ...I
                } = e, A = (0, s.useStateFromStores)([h.default, p.default], () => {
                    var e;
                    return p.default.getChannel(null === (e = h.default.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId)
                }), {
                    enableHangStatus: C
                } = c.HangStatusExperiment.useExperiment({
                    guildId: null == A ? void 0 : A.guild_id,
                    location: "UserActivityContainer"
                }), N = (0, s.useStateFromStores)([m.default], () => i ? m.default.getAnyStreamForUser(l.id) : null), y = C && T.default.can(g.Permissions.CONNECT, A), M = (null == t ? void 0 : t.type) === g.ActivityTypes.HANG_STATUS && y ? A : null, O = (0, s.useStateFromStores)([E.default, h.default, p.default], () => {
                    var e, n;
                    return (0, r.default)(t, g.ActivityFlags.EMBEDDED) ? E.default.getGuild(null === (e = p.default.getChannel(null === (n = h.default.getVoiceStateForSession(l.id, null == t ? void 0 : t.session_id)) || void 0 === n ? void 0 : n.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != M ? E.default.getGuild(M.getGuildId()) : null
                }), x = (0, s.useStateFromStores)([E.default], () => null != N ? E.default.getGuild(N.guildId) : null), R = (0, s.useStateFromStores)([d.default], () => {
                    if (null != t) return null != t.application_id ? d.default.getApplication(t.application_id) : d.default.getApplicationByName(t.name);
                    return null
                });
                return (a.useEffect(() => {
                    (null == t ? void 0 : t.type) === g.ActivityTypes.HANG_STATUS && y && S.default.track(g.AnalyticEvents.VIEW_HANG_STATUS, {
                        source: "UserProfilePopout",
                        guild_id: null == M ? void 0 : M.guild_id,
                        channel_id: null == M ? void 0 : M.id
                    })
                }, [null == t ? void 0 : t.type, y, M]), (null == t ? void 0 : t.type) !== g.ActivityTypes.HANG_STATUS || y) ? (0, n.jsx)(_.default, {
                    ...I,
                    activity: t,
                    user: l,
                    application: R,
                    hideHeader: u,
                    activityGuild: null != O ? O : x,
                    renderActions: o ? () => (0, n.jsx)(v, {
                        ...I,
                        applicationStream: N,
                        activity: t,
                        user: l
                    }) : null,
                    onOpenSpotifyTrack: f.openTrack,
                    onOpenSpotifyArtist: f.openArtist,
                    onOpenSpotifyAlbum: f.openAlbum
                }) : null
            }