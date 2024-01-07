            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("979975"),
                i = n("200521"),
                r = n("782340");

            function o(e, t, n) {
                let {
                    rating: l,
                    problem: i,
                    feedback: o
                } = n;
                (0, s.default)({
                    problem: i,
                    summary: e,
                    feedback: o,
                    guildId: t.guild_id,
                    channelId: t.id,
                    location: "Summary divider",
                    rating: l
                }), (0, a.showToast)((0, a.createToast)(r.default.Messages.CALL_FEEDBACK_CONFIRMATION, a.ToastType.SUCCESS))
            }

            function u(e) {
                let {
                    summary: t,
                    channel: s,
                    rating: r
                } = e;
                null != t && (r === i.FeedbackRating.BAD ? (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("747194").then(n.bind(n, "747194"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        onSubmit: e => o(t, s, e),
                        startRating: r
                    })
                }) : o(t, s, {
                    rating: r,
                    problem: null,
                    feedback: "",
                    dontShowAgain: !1
                }))
            }