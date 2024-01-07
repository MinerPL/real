            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("913144"),
                i = n("600965"),
                l = n("316272"),
                r = n("292687"),
                o = n("42203"),
                u = n("778588"),
                d = n("449501"),
                c = n("945956"),
                E = n("18494"),
                f = n("162771"),
                _ = n("800762"),
                h = n("191225"),
                C = n("420444"),
                T = n("320817"),
                I = n("49111");

            function S() {
                let e = c.default.getChannelId(),
                    t = h.default.getConnectedActivityChannelId(),
                    n = h.default.getSelfEmbeddedActivityForChannel(null != t ? t : ""),
                    l = o.default.getChannel(e),
                    r = o.default.getChannel(t),
                    u = null == t || (null == e || null == l) && (0, C.default)(t);
                if (u || null == t || null == r || null == n) return function() {
                    let e = a;
                    null != e && d.default.isOpen(e) && (s.default.wait(() => i.close(e)), a = null)
                }();
                {
                    let e = (0, T.default)(t, n.application_id);
                    return function(e, t) {
                        if (d.default.isOpen(t)) return !1;
                        s.default.wait(() => i.open(t, I.PictureInPictureComponents.EMBED_IFRAME, {
                            channel: e
                        })), a = t
                    }(r, e)
                }
            }

            function N() {
                let e = u.default.hasLayers(),
                    t = r.default.getWindowOpen(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                return e && !t ? function() {
                    let e = a;
                    null != e && d.default.isOpen(e) && s.default.wait(() => i.hide(e))
                }() : function() {
                    let e = a;
                    null != e && d.default.isOpen(e) && s.default.wait(() => i.show(e))
                }()
            }
            class A extends l.default {
                _initialize() {
                    E.default.addChangeListener(S), f.default.addChangeListener(S), c.default.addChangeListener(S), _.default.addChangeListener(S), r.default.addChangeListener(S), h.default.addChangeListener(S), u.default.addChangeListener(N)
                }
                _terminate() {
                    E.default.removeChangeListener(S), f.default.removeChangeListener(S), c.default.removeChangeListener(S), _.default.removeChangeListener(S), r.default.removeChangeListener(S), h.default.removeChangeListener(S), u.default.removeChangeListener(N)
                }
            }
            var m = new A