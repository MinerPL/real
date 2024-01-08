            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                r = n("446674"),
                i = n("990766"),
                l = n("374014"),
                u = n("42203"),
                o = n("607391"),
                d = n("782340");
            let c = n("729861");

            function f(e) {
                let {
                    stream: t,
                    width: n,
                    noArt: f = !1,
                    selected: E = !1
                } = e, h = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t.channelId));
                return s.useEffect(() => {
                    (null == h ? void 0 : h.isGuildStageVoice()) && (0, i.closeStream)((0, l.encodeStreamKey)(t), !1)
                }, []), (0, a.jsx)(o.default, {
                    artURL: c,
                    noArt: f,
                    selected: E,
                    size: (0, o.getSizeForWidth)(n),
                    header: d.default.Messages.STREAM_ENDED,
                    onCTAClick: () => (0, i.closeStream)((0, l.encodeStreamKey)(t)),
                    callToAction: d.default.Messages.CLOSE_STREAM
                })
            }