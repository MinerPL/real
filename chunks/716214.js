            "use strict";
            n.r(t), n.d(t, {
                connectOrLurkStage: function() {
                    return T
                },
                connectToStage: function() {
                    return C
                },
                connectAndOpen: function() {
                    return m
                },
                navigateToStage: function() {
                    return S
                }
            });
            var i = n("851387"),
                a = n("987317"),
                l = n("990766"),
                s = n("792367"),
                r = n("248967"),
                u = n("373469"),
                o = n("42203"),
                d = n("305961"),
                c = n("957255"),
                _ = n("18494"),
                E = n("751661"),
                f = n("27822"),
                h = n("923510"),
                p = n("30577");

            function T(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return new Promise(async a => {
                    let l = o.default.getChannel(t);
                    if (null != l) return C(l, n), a(l);
                    await (0, r.stopLurkingAll)([e]), await i.default.joinGuild(e, {
                        lurker: !0
                    }), d.default.addConditionalChangeListener(() => {
                        let e = o.default.getChannel(t);
                        return null == e || (C(e), p.default.initialize(), a(e), !1)
                    })
                })
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = _.default.getVoiceChannelId();
                if (!t && ! function(e, t) {
                        let n = c.default.can(h.JOIN_VOCAL_CHANNEL_PERMISSIONS, e);
                        return !!n && (!E.shouldShowBlockedUsers(e.id) || t === e.id || (E.openStageBlockedUsersSheet(e, () => m(e, !0)), !1))
                    }(e, n)) return !1;
                if (f.default.initialize(), a.default.selectVoiceChannel(e.id), (n = _.default.getVoiceChannelId()) !== e.id) return !1;
                let i = u.default.getAllApplicationStreamsForChannel(e.id);
                return i.length > 0 && (0, l.watchStream)(i[0], {
                    noFocus: !1
                }), !0
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = _.default.getVoiceChannelId();
                if (!i && a !== e.id && (0, s.shouldShowVoiceChannelChangeConfirmation)(e) && E.showChannelChangeConfirmationAlert(e, () => m(e, t, n, !0))) return;
                let l = C(e, t);
                l && S(e, a, n)
            }

            function S(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                E.navigateToStage(e, t, n)
            }