            "use strict";
            n.r(t), n.d(t, {
                AttachmentTypes: function() {
                    return s
                },
                default: function() {
                    return _
                }
            }), n("424973");
            var s, a, l = n("167115"),
                i = n("871388"),
                r = n("679653"),
                o = n("20606"),
                u = n("27618"),
                d = n("697218"),
                c = n("83910"),
                f = n("522049"),
                h = n("462579"),
                C = n("824326"),
                p = n("616225"),
                m = n("12724"),
                E = n("959097"),
                g = n("507491"),
                S = n("49111"),
                A = n("782340");

            function _(e) {
                let {
                    canAttachFiles: t,
                    canStartThreads: n,
                    useSlate: s,
                    canUseApplicationCommands: a,
                    hasClips: _,
                    channel: T,
                    activities: M,
                    newClipsCount: I,
                    canPostPolls: N,
                    appContext: v
                } = e, L = [];
                return t && (L.push({
                    type: "UPLOAD_A_FILE",
                    icon: g.default,
                    display: A.default.Messages.CHAT_ATTACH_UPLOAD_A_FILE
                }), L.push({
                    type: "UPLOAD_TEXT_AS_FILE",
                    icon: m.default,
                    display: A.default.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
                })), _ && t && v !== S.AppContext.POPOUT && L.push({
                    type: "CLIPS",
                    icon: f.default,
                    display: A.default.Messages.CLIPS_SHARE_A_CLIP,
                    badgeVal: I,
                    badgeColor: o.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                }), n && L.push({
                    type: "CREATE_THREAD",
                    icon: E.default,
                    display: A.default.Messages.CREATE_THREAD
                }), N && L.push({
                    type: "POLL",
                    icon: l.PollsIcon,
                    display: A.default.Messages.CREATE_POLL
                }), s && a && L.push({
                    type: "SLASH_COMMAND",
                    icon: c.default,
                    display: A.default.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
                }), M.forEach(e => {
                    !(0, i.default)(e, S.ActivityFlags.EMBEDDED) && (e.type === S.ActivityTypes.PLAYING && (0, i.default)(e, S.ActivityFlags.JOIN) && L.push({
                        type: "INVITE_TO_GAME",
                        icon: C.default,
                        display: A.default.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
                            channel: (0, r.computeChannelName)(T, d.default, u.default, !0),
                            game: null != e ? e.name : ""
                        }),
                        activity: e
                    }), e.type === S.ActivityTypes.LISTENING && (0, i.default)(e, S.ActivityFlags.SYNC) && L.push({
                        type: "INVITE_TO_LISTEN",
                        icon: p.default,
                        display: A.default.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
                            channel: (0, r.computeChannelName)(T, d.default, u.default, !0),
                            name: null != e ? e.name : ""
                        }),
                        activity: e
                    }), e.type === S.ActivityTypes.WATCHING && (0, i.default)(e, S.ActivityFlags.SYNC) && L.push({
                        type: "INVITE_TO_WATCH",
                        icon: h.default,
                        display: A.default.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
                            channel: (0, r.computeChannelName)(T, d.default, u.default, !0),
                            name: null != e ? e.name : ""
                        }),
                        activity: e
                    }))
                }), L
            }(a = s || (s = {})).UPLOAD_A_FILE = "UPLOAD_A_FILE", a.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", a.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", a.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", a.INVITE_TO_WATCH = "INVITE_TO_WATCH", a.CREATE_THREAD = "CREATE_THREAD", a.SLASH_COMMAND = "SLASH_COMMAND", a.CLIPS = "CLIPS", a.POLL = "POLL"