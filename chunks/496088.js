            "use strict";
            a.r(t), a.d(t, {
                VideoBackgroundIssue: function() {
                    return s
                },
                default: function() {
                    return O
                }
            });
            var l, s, n = a("37983"),
                r = a("884691"),
                u = a("77078"),
                i = a("928328"),
                o = a("597517"),
                c = a("599110"),
                d = a("49111"),
                E = a("533613"),
                f = a("782340");
            (l = s || (s = {})).BAD_OUTLINE = "BAD_OUTLINE", l.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY", l.FLICKERING = "FLICKERING", l.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG", l.OTHER = "OTHER";
            let C = ["OTHER"];

            function O(e) {
                let {
                    analyticsData: t,
                    transitionState: l,
                    onClose: s
                } = e;
                return r.useEffect(() => {
                    c.default.track(d.AnalyticEvents.OPEN_MODAL, {
                        type: "Video Background Feedback"
                    })
                }, []), (0, n.jsx)(i.default, {
                    header: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
                    body: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
                    problemTitle: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
                    problems: [{
                        value: "BAD_OUTLINE",
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE
                    }, {
                        value: "BACKGROUND_DETECTION_ACCURACY",
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY
                    }, {
                        value: "FLICKERING",
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING
                    }, {
                        value: "BACKGROUND_DETECTION_LAG",
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG
                    }, {
                        value: "OTHER",
                        label: f.default.Messages.CALL_FEEDBACK_OPTION_OTHER
                    }],
                    feedbackProblems: C,
                    onSubmit: function(e) {
                        var l, s, r, i;
                        let {
                            rating: C,
                            problem: O,
                            dontShowAgain: N,
                            feedback: D
                        } = e;
                        if (N && (0, o.hideHotspot)(E.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK), null != C) l = C, s = O, r = D, i = t, c.default.track(d.AnalyticEvents.VIDEO_BACKGROUND_FEEDBACK, {
                            ...i,
                            reason: s,
                            rating: l,
                            feedback: r
                        }), null != O && (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("874600").then(a.bind(a, "874600"));
                            return t => (0, n.jsx)(e, {
                                body: f.default.Messages.VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
                                ...t
                            })
                        })
                    },
                    onClose: s,
                    transitionState: l,
                    otherKey: "OTHER"
                })
            }