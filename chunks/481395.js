            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("781738"), n("843762");
            var a = n("913144"),
                s = n("533280"),
                i = n("679653"),
                l = n("256572"),
                r = n("915639"),
                o = n("845579"),
                u = n("271938"),
                d = n("982108"),
                c = n("42203"),
                E = n("26989"),
                f = n("305961"),
                _ = n("42887"),
                h = n("385649"),
                C = n("27618"),
                T = n("18494"),
                I = n("282109"),
                S = n("697218"),
                N = n("158998"),
                A = n("76629"),
                m = n("981957"),
                p = n("357046"),
                g = n("49111"),
                R = n("782340");
            let O = [],
                L = null,
                v = null,
                M = null,
                P = /\|\|([\s\S]+?)\|\|/g;

            function D(e, t, n, a) {
                let s = f.default.getGuild(n),
                    l = e.replace(P, R.default.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
                        var a;
                        let s = S.default.getUser(t);
                        if (null == s) return e;
                        return null !== (a = E.default.getNick(n, s.id)) && void 0 !== a ? a : N.default.getName(s)
                    }).replace(/<@&?(\d+)>/g, (e, t) => {
                        let n = null != s ? s.roles[t] : null;
                        return null != n && null != n.name ? n.name : R.default.Messages.MESSAGE_TTS_DELETED_ROLE
                    }).replace(/<#(\d+)>/g, (e, t) => {
                        let n = c.default.getChannel(t);
                        return null == n ? e : (0, i.computeChannelName)(n, S.default, C.default)
                    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(R.default.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t));
                return null == a ? R.default.Messages.MESSAGE_TTS.format({
                    username: t,
                    body: l
                }) : R.default.Messages.MESSAGE_TTS_REPLY.format({
                    username: t,
                    body: l,
                    replyUsername: a
                })
            }

            function y() {
                if (!s.supported) return !1;
                let e = r.default.locale;
                if (null == M) {
                    var t;
                    M = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
                }
                let n = M.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
                v = n.length > 0 ? n[0] : null
            }
            async function x(e, t, n, a, i) {
                let l = s.createUtterance(e, n);
                null !== l && (null == v && y(), t ? await (0, A.stopSpeaking)() : null == L || L.removeEventListener("end", A.stopSpeaking), l.addEventListener("end", A.stopSpeaking), null != a && l.addEventListener("start", a), null != i && l.addEventListener("end", i), L = l, s.speakUtterance(l, v))
            }

            function b(e, t, n, a, s) {
                x(e, t, s, () => {
                    (0, A.speakingMessage)(n, a)
                })
            }

            function U(e) {
                let {
                    text: t,
                    interrupt: n,
                    maxLength: a,
                    onStart: s,
                    onEnd: i
                } = e;
                x(t, n, a, s, i)
            }

            function G() {
                return null !== L && L.removeEventListener("end", A.stopSpeaking), s.cancelAll(), L = null, !0
            }

            function j(e) {
                var t, n, a;
                let {
                    message: s,
                    channel: i
                } = e, r = s.type === g.MessageTypes.REPLY ? l.default.getMessageByReference(s.messageReference) : null, o = (null == r ? void 0 : r.state) === l.ReferencedMessageState.LOADED ? null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.author : null, u = null != o ? null !== (n = E.default.getNick(i.guild_id, null == o ? void 0 : o.id)) && void 0 !== n ? n : N.default.getName(o) : null, d = i.getGuildId(), c = null !== (a = E.default.getNick(d, s.author.id)) && void 0 !== a ? a : N.default.getName(s.author), f = D(s.content, c, d, u);
                return b(f, !0, i.id, s.id), !0
            }

            function k(e) {
                var t, n, a, s, i, l, r;
                let {
                    channelId: f,
                    message: S,
                    optimistic: A
                } = e;
                if (A || _.default.isSelfDeaf()) return !1;
                let m = c.default.getChannel(f);
                if (null == m) return !1;
                let R = T.default.getChannelId(),
                    L = d.default.getCurrentSidebarChannelId(R),
                    v = f === R || f === L,
                    M = o.EnableTTSCommand.getSetting() && S.tts && v,
                    P = h.default.getTTSType(),
                    y = (null === (t = S.author) || void 0 === t ? void 0 : t.id) !== u.default.getId() && (P === g.TTSNotificationTypes.ALL_CHANNELS || P === g.TTSNotificationTypes.SELECTED_CHANNEL && v);
                if ((M || y) && ((null === (n = S.author) || void 0 === n ? void 0 : n.id) == null || !C.default.isBlocked(S.author.id))) {
                    if (O.indexOf(S.id) >= 0) return !1;
                    O.unshift(S.id) > 10 && O.pop();
                    let e = m.getGuildId();
                    if (null != e && I.default.getMutedChannels(e).has(f)) return !1;
                    let t = null !== (l = null !== (i = E.default.getNick(e, null === (a = S.author) || void 0 === a ? void 0 : a.id)) && void 0 !== i ? i : N.default.getName(S.author)) && void 0 !== l ? l : "",
                        n = S.type === g.MessageTypes.REPLY ? null === (s = S.referenced_message) || void 0 === s ? void 0 : s.author : null,
                        o = null != n ? null !== (r = E.default.getNick(e, null == n ? void 0 : n.id)) && void 0 !== r ? r : N.default.getName(n) : null,
                        u = D(S.content, t, e, o);
                    b(u, !1, m.id, S.id, p.MAX_TTS_LENGTH)
                }
                return !1
            }

            function w(e) {
                let {
                    id: t,
                    channelId: n
                } = e, a = m.default.currentMessage;
                return null != a && t === a.messageId && n === a.channelId && ((0, A.stopSpeaking)(), !0)
            }

            function F() {
                _.default.isSelfDeaf() && s.cancelAll()
            }
            var B = {
                init() {
                    a.default.subscribe("SPEAK_TEXT", U), a.default.subscribe("SPEAK_MESSAGE", j), a.default.subscribe("STOP_SPEAKING", G), a.default.subscribe("MESSAGE_CREATE", k), a.default.subscribe("MESSAGE_DELETE", w), a.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", F), a.default.subscribe("USER_SETTINGS_PROTO_UPDATE", y), a.default.subscribe("I18N_LOAD_SUCCESS", y)
                }
            }