            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("872717"),
                a = n("913144"),
                l = n("950104"),
                s = n("27618"),
                r = n("697218"),
                u = n("599110"),
                o = n("404118"),
                d = n("736964"),
                c = n("987317"),
                _ = n("49111"),
                E = n("782340"),
                f = {
                    call(e, t, n, a, l) {
                        let f = n => {
                            c.default.selectVoiceChannel(e, t), n && this.ring(e), null == l || l(e)
                        };
                        if (null != a) {
                            let t = s.default.isBlocked(a);
                            if (t) return;
                            let l = r.default.getUser(a);
                            i.default.get({
                                url: _.Endpoints.CALL(e),
                                oldFormErrors: !0
                            }).then(e => {
                                f(n && e.body.ringable)
                            }, () => {
                                u.default.track(_.AnalyticEvents.OPEN_POPOUT, {
                                    type: "Not Friend",
                                    source: "Call"
                                }), o.default.show({
                                    title: E.default.Messages.START_CALL,
                                    body: E.default.Messages.CALL_INVITE_NOT_FRIENDS.format({
                                        username: null != l ? l.username : ""
                                    }),
                                    confirmText: E.default.Messages.ADD_FRIEND_BUTTON,
                                    cancelText: E.default.Messages.OKAY,
                                    onConfirm() {
                                        d.default.addRelationship({
                                            userId: a,
                                            context: {
                                                location: "Call"
                                            }
                                        })
                                    }
                                })
                            })
                        } else f(n)
                    },
                    ring(e, t) {
                        let n = l.default.getCall(e);
                        if (null != n && null != n.messageId && !l.default.isCallUnavailable(e)) {
                            i.default.post({
                                url: _.Endpoints.CALL_RING(e),
                                body: {
                                    recipients: t
                                },
                                oldFormErrors: !0
                            });
                            return
                        }
                        a.default.dispatch({
                            type: "CALL_ENQUEUE_RING",
                            channelId: e,
                            recipients: t
                        })
                    },
                    stopRinging: (e, t) => i.default.post({
                        url: _.Endpoints.CALL_STOP_RINGING(e),
                        body: {
                            recipients: t
                        },
                        oldFormErrors: !0
                    })
                }