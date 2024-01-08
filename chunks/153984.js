            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("255397"),
                s = n("607391"),
                i = n("782340");
            let r = n("328989");

            function u(e) {
                let {
                    width: t,
                    className: n,
                    channelId: u,
                    noArt: o = !1
                } = e;
                return (0, a.jsx)(s.default, {
                    artURL: r,
                    noArt: o,
                    size: (0, s.getSizeForWidth)(t),
                    className: n,
                    callToAction: i.default.Messages.STREAM_SHOW_ALL_PARTICIPANTS,
                    header: i.default.Messages.STREAM_PARTICIPANTS_HIDDEN.format(),
                    onCTAClick: () => l.default.toggleVoiceParticipantsHidden(u, !1)
                })
            }