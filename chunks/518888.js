            "use strict";
            n.r(t), n.d(t, {
                overrideSurvey: function() {
                    return u
                },
                surveyHide: function() {
                    return d
                },
                surveyFetch: function() {
                    return c
                }
            });
            var l = n("759843"),
                a = n("627929"),
                s = n("913144"),
                i = n("599110"),
                r = n("840707"),
                o = n("49111");

            function u(e) {
                s.default.dispatch({
                    type: "SURVEY_OVERRIDE",
                    id: e
                })
            }

            function d(e, t) {
                s.default.dispatch({
                    type: "SURVEY_HIDE",
                    key: e
                }), t ? i.default.track(o.AnalyticEvents.APP_NOTICE_CLOSED, {
                    notice_type: o.NoticeTypes.SURVEY,
                    survey_id: e,
                    dismissed: t
                }) : i.default.track(o.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: o.NoticeTypes.SURVEY
                })
            }

            function c(e) {
                var t = {};
                return null != e && (t.survey_override = e), r.default.get({
                    url: o.Endpoints.USER_SURVEY,
                    query: t,
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_SURVEY_FETCH,
                        properties: e => {
                            var t;
                            let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                            return (0, a.exact)({
                                key: null == n ? void 0 : n.key
                            })
                        }
                    }
                }).then(e => {
                    var t;
                    s.default.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
                    })
                }, () => {
                    s.default.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null
                    })
                })
            }