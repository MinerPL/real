            "use strict";
            n.r(t), n.d(t, {
                openClydeFeedbackModal: function() {
                    return C
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("928328"),
                i = n("599110"),
                r = n("680894"),
                o = n("49111"),
                u = n("200521"),
                d = n("782340"),
                c = n("693268");
            let f = [{
                className: c.emojiThumbsUp,
                rating: u.FeedbackRating.GOOD,
                classNameSelected: c.selected
            }, {
                className: c.emojiThumbsDown,
                rating: u.FeedbackRating.BAD,
                classNameSelected: c.selected
            }];

            function h(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    onSubmit: a
                } = e;
                return (0, s.jsx)(l.default, {
                    header: d.default.Messages.CLYDE_FEEDBACK_HEADER,
                    body: d.default.Messages.CLYDE_FEEDBACK_BODY,
                    problemTitle: d.default.Messages.CLYDE_FEEDBACK_PROBLEM_TITLE,
                    onSubmit: a,
                    onClose: n,
                    ratingConfigs: f,
                    transitionState: t,
                    problems: (0, r.getClydeFeedbackReasons)(),
                    ratingsSelectorClassName: c.ratingsSelector,
                    feedbackProblems: [r.ClydeFeedbackReasons.OTHER],
                    otherKey: r.ClydeFeedbackReasons.OTHER,
                    startRating: u.FeedbackRating.BAD,
                    hideDontShowCheckbox: !0
                })
            }
            let C = (e, t, n, l) => {
                let d = s => {
                    let {
                        rating: d,
                        problem: c,
                        feedback: f
                    } = s;
                    d === u.FeedbackRating.GOOD && (n(!0), l(!1)), i.default.track(o.AnalyticEvents.CLYDE_AI_MESSAGE_RATED, {
                        reason: c,
                        location,
                        rating: (e => {
                            switch (e) {
                                case u.FeedbackRating.GOOD:
                                    return 1;
                                case u.FeedbackRating.BAD:
                                    return -1;
                                default:
                                    return 0
                            }
                        })(d),
                        feedback: f,
                        message_id: e,
                        has_custom_personality: t
                    }), (0, a.showToast)((0, a.createToast)((0, r.randomClydeThanks)(), a.ToastType.SUCCESS))
                };
                (0, a.openModalLazy)(() => new Promise(e => {
                    e(e => (0, s.jsx)(h, {
                        ...e,
                        onSubmit: d
                    }))
                }))
            }