            "use strict";
            n.r(t), n.d(t, {
                AttachmentTypes: function() {
                    return a
                },
                default: function() {
                    return A
                }
            }), n("424973");
            var a, s, l = n("167115"),
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
                _ = n("782340");

            function A(e) {
                let {
                    canAttachFiles: t,
                    canStartThreads: n,
                    useSlate: a,
                    canUseApplicationCommands: s,
                    hasClips: A,
                    channel: T,
                    activities: M,
                    newClipsCount: N,
                    canPostPolls: I,
                    appContext: v
                } = e, L = [];
                return t && (L.push({
                    type: "UPLOAD_A_FILE",
                    icon: g.default,
                    display: _.default.Messages.CHAT_ATTACH_UPLOAD_A_FILE
                }), L.push({
                    type: "UPLOAD_TEXT_AS_FILE",
                    icon: m.default,
                    display: _.default.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
                })), A && t && v !== S.AppContext.POPOUT && L.push({
                    type: "CLIPS",
                    icon: f.default,
                    display: _.default.Messages.CLIPS_SHARE_A_CLIP,
                    badgeVal: N,
                    badgeColor: o.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                }), n && L.push({
                    type: "CREATE_THREAD",
                    icon: E.default,
                    display: _.default.Messages.CREATE_THREAD
                }), I && L.push({
                    type: "POLL",
                    icon: l.PollsIcon,
                    display: _.default.Messages.CREATE_POLL
                }), a && s && L.push({
                    type: "SLASH_COMMAND",
                    icon: c.default,
                    display: _.default.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
                }), M.forEach(e => {
                    !(0, i.default)(e, S.ActivityFlags.EMBEDDED) && (e.type === S.ActivityTypes.PLAYING && (0, i.default)(e, S.ActivityFlags.JOIN) && L.push({
                        type: "INVITE_TO_GAME",
                        icon: C.default,
                        display: _.default.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
                            channel: (0, r.computeChannelName)(T, d.default, u.default, !0),
                            game: null != e ? e.name : ""
                        }),
                        activity: e
                    }), e.type === S.ActivityTypes.LISTENING && (0, i.default)(e, S.ActivityFlags.SYNC) && L.push({
                        type: "INVITE_TO_LISTEN",
                        icon: p.default,
                        display: _.default.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
                            channel: (0, r.computeChannelName)(T, d.default, u.default, !0),
                            name: null != e ? e.name : ""
                        }),
                        activity: e
                    }), e.type === S.ActivityTypes.WATCHING && (0, i.default)(e, S.ActivityFlags.SYNC) && L.push({
                        type: "INVITE_TO_WATCH",
                        icon: h.default,
                        display: _.default.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
                            channel: (0, r.computeChannelName)(T, d.default, u.default, !0),
                            name: null != e ? e.name : ""
                        }),
                        activity: e
                    }))
                }), L
            }(s = a || (a = {})).UPLOAD_A_FILE = "UPLOAD_A_FILE", s.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", s.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", s.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", s.INVITE_TO_WATCH = "INVITE_TO_WATCH", s.CREATE_THREAD = "CREATE_THREAD", s.SLASH_COMMAND = "SLASH_COMMAND", s.CLIPS = "CLIPS", s.POLL = "POLL"