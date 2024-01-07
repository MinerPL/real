            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("845579"),
                l = n("662255"),
                r = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !r.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, s.jsx)(i.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, r.copy)(n), null == u || u()
                    },
                    icon: l.default,
                    showIconFirst: c
                }, f)
            }