            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("70102");
            var a = n("913144"),
                s = n("190017"),
                i = n("271938"),
                l = n("602043");

            function r() {
                if (!(0, l.isSupportedPlatform)()) return;
                let e = i.default.getToken(),
                    t = i.default.getId();
                if (null == e) throw Error("missing user token");
                s.init(e, t)
            }

            function o() {
                s.destroy()
            }
            var u = {
                init() {
                    a.default.subscribe("CONNECTION_OPEN", r), a.default.subscribe("LOGOUT", o)
                }
            }