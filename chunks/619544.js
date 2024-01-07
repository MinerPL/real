            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("597287"),
                r = n("77078"),
                o = n("426490"),
                u = n("782340"),
                d = n("314164");

            function c(e) {
                let {
                    didSelfVote: t,
                    label: n,
                    percentage: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: d.votesData,
                    children: [t && (0, a.jsx)(i.VisuallyHidden, {
                        children: u.default.Messages.POLL_ANSWER_VOTED_ARIA
                    }), (0, a.jsxs)(r.Text, {
                        variant: "text-md/semibold",
                        color: "none",
                        children: [s, "%"]
                    }), (0, a.jsx)(r.Text, {
                        variant: "text-xs/semibold",
                        color: "none",
                        children: n
                    })]
                })
            }

            function f(e) {
                let {
                    answer: t,
                    hasVoted: n,
                    isExpired: s,
                    myAvatarUrl: i
                } = e, r = n || s, u = !0 === t.isSelected, f = !0 === t.didSelfVote, m = !0 === t.isVictor;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.PollMediaView, {
                        attachmentClassName: l(d.attachment, {
                            [d.attachmentWithResults]: r
                        }),
                        emojiClassName: d.emoji,
                        media: t.pollMedia,
                        fallback: (0, a.jsx)("div", {
                            className: l(d.attachment, d.mediaMissing)
                        })
                    }), u && (0, a.jsx)(o.PollAnswerSelectedIcon, {
                        size: 40,
                        className: d.selectedIcon
                    }), r && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c, {
                            didSelfVote: f,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: f ? i : void 0
                        }), !s && f && (0, a.jsx)(o.PollAnswerVotedIcon, {
                            size: 18,
                            className: d.pollAnswerIcon
                        }), m && (0, a.jsx)(o.PollAnswerVictorIcon, {
                            size: 18,
                            className: d.pollAnswerIcon
                        })]
                    })]
                })
            }

            function m(e) {
                let {
                    isExpired: t,
                    hasVoted: n,
                    myAvatarUrl: s,
                    ...l
                } = e;
                return (0, a.jsx)(o.PollAnswers, {
                    className: d.answersContainer,
                    answerClassName: d.answer,
                    myAvatarUrl: s,
                    renderAnswerContent: e => (0, a.jsx)(f, {
                        answer: e,
                        isExpired: t,
                        hasVoted: n,
                        myAvatarUrl: s
                    }),
                    ...l
                })
            }