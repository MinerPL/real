            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("913144"),
                i = n("600965"),
                l = n("316272"),
                r = n("191225"),
                o = n("292687"),
                u = n("373469"),
                d = n("42203"),
                c = n("778588"),
                E = n("42887"),
                f = n("449501"),
                _ = n("945956"),
                h = n("18494"),
                C = n("162771"),
                T = n("800762"),
                I = n("49111"),
                S = n("353927");

            function N() {
                var e;
                let t = a;
                if (null == t || !f.default.isOpen(t)) return !1;
                s.default.wait(() => i.close(t)), null === (e = _.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
            }

            function A() {
                let e = _.default.getChannelId(),
                    t = a === e;
                return function() {
                    let e = _.default.getChannelId(),
                        t = h.default.getChannelId(),
                        n = E.default.supports(S.Features.VIDEO);
                    if (!n) return !0;
                    let a = o.default.getWindowOpen(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                    if (a) return !0;
                    let s = u.default.getAllActiveStreams().length > 0,
                        i = null != e && Object.values(T.default.getVideoVoiceStatesForChannel(e)).some(e => {
                            let {
                                userId: t
                            } = e;
                            return !E.default.isLocalVideoDisabled(t)
                        });
                    if (!(i || s)) return !0;
                    let l = c.default.hasLayers(),
                        r = l && c.default.getLayers().includes(I.Layers.RTC_DEBUG);
                    if (r) return !1;
                    if (l) return !0;
                    let d = e === t;
                    return !!d || !1
                }() ? N() : (!t && N(), null != e && function(e) {
                    var t;
                    let n = d.default.getChannel(e);
                    if (null == n || f.default.isOpen(e)) return !1;
                    s.default.wait(() => i.open(n.id, I.PictureInPictureComponents.VIDEO, {
                        channel: n
                    })), null === (t = _.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
                }(e))
            }
            class m extends l.default {
                _initialize() {
                    h.default.addChangeListener(A), C.default.addChangeListener(A), _.default.addChangeListener(A), T.default.addChangeListener(A), c.default.addChangeListener(A), u.default.addChangeListener(A), o.default.addChangeListener(A), E.default.addChangeListener(A), r.default.addChangeListener(A)
                }
                _terminate() {
                    h.default.removeChangeListener(A), C.default.removeChangeListener(A), _.default.removeChangeListener(A), T.default.removeChangeListener(A), c.default.removeChangeListener(A), u.default.removeChangeListener(A), o.default.removeChangeListener(A), E.default.removeChangeListener(A), r.default.removeChangeListener(A)
                }
            }
            var p = new m