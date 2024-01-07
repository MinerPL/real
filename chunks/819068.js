            "use strict";
            let i;
            n.r(t), n.d(t, {
                OVERLAY_VERSION: function() {
                    return s
                },
                OVERLAY_DEFAULT_RESOLUTION: function() {
                    return a
                },
                OVERLAY_MIN_RESOLUTION: function() {
                    return o
                },
                OVERLAY_LAYOUT_ID: function() {
                    return l
                },
                DEV_PID: function() {
                    return u
                },
                getPID: function() {
                    return d
                },
                getRPCAuthToken: function() {
                    return f
                },
                validResolution: function() {
                    return E
                },
                setOutOfProcessSupport: function() {
                    return h
                },
                supportsOutOfProcess: function() {
                    return p
                }
            }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("121338");
            var r = n("773336");
            n("49111");
            let s = 2,
                a = {
                    width: 3840,
                    height: 2160
                },
                o = {
                    width: 768,
                    height: 432
                },
                l = "overlay_default",
                u = -2,
                c = !1;

            function d() {
                var e;
                if (void 0 !== i) return i;
                let t = new URLSearchParams(window.location.search),
                    n = null !== (e = t.get("pid")) && void 0 !== e ? e : "",
                    r = parseInt(n, 10);
                return isNaN(r) && (r = -1), i = r
            }

            function f() {
                let e = new URLSearchParams(window.location.search);
                return e.get("rpc_auth_token")
            }

            function E(e) {
                return !r.isPlatformEmbedded || e.width >= o.width && e.height >= o.height
            }

            function h(e) {
                c = e
            }

            function p() {
                return c
            }