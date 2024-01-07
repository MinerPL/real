            "use strict";
            n.r(t), n.d(t, {
                isEligibleForNotice: function() {
                    return u
                },
                markNoticeDismissed: function() {
                    return c
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("801340"),
                i = n("872173"),
                r = n("374363"),
                o = n("93015");
            let u = e => {
                    var t;
                    if (!d(e)) return !1;
                    let n = null === (t = r.default.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
                        l = null != n ? s.Timestamp.toDate(n) : void 0,
                        i = null != l ? a().diff(l, "days") : null,
                        u = null != n;
                    if (u && !(null != i && i > 30)) return !1;
                    let {
                        isEligible: c
                    } = o.SafetyUserSentimentExperiment.getCurrentConfig({
                        location: "657a81_1"
                    }, {
                        autoTrackExposure: !0
                    });
                    return c
                },
                d = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
                c = () => {
                    let e = s.Timestamp.now();
                    i.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.safetyUserSentimentNoticeDismissedAt = e
                    }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
                }