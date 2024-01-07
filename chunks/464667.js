            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("229353"),
                o = a.n(n),
                u = a("928328"),
                i = a("597517"),
                d = a("41645"),
                c = a("246429"),
                r = a("533613"),
                _ = a("782340");
            let f = [o.CALL_FEEDBACK_OPTION_OTHER];

            function E(e) {
                let {
                    onClose: t,
                    transitionState: n,
                    analyticsData: E
                } = e;
                return (0, l.jsx)(u.default, {
                    header: _.default.Messages.CALL_FEEDBACK_SHEET_TITLE,
                    body: _.default.Messages.CALL_FEEDBACK_PROMPT,
                    problemTitle: _.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
                    problems: (0, d.default)(!1),
                    feedbackProblems: f,
                    onSubmit: function(e) {
                        var t, n, o;
                        let {
                            rating: u,
                            problem: f,
                            dontShowAgain: O,
                            feedback: A
                        } = e;
                        if (O && (0, i.hideHotspot)(r.HotspotLocations.VOICE_CALL_FEEDBACK), null != u)(0, c.default)(u, (t = f, null !== (o = null === (n = (0, d.default)(!1).find(e => e.label === t)) || void 0 === n ? void 0 : n.code) && void 0 !== o ? o : null), f, A, E), null != f && (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("874600").then(a.bind(a, "874600"));
                            return t => (0, l.jsx)(e, {
                                body: _.default.Messages.CALL_FEEDBACK_CONFIRMATION,
                                ...t
                            })
                        })
                    },
                    onClose: t,
                    transitionState: n,
                    otherKey: o.CALL_FEEDBACK_OPTION_OTHER
                })
            }