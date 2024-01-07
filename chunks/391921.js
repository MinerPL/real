            "use strict";
            n.r(t), n.d(t, {
                useSearchFieldState: function() {
                    return o
                }
            }), n("222007");
            var r = n("679750");

            function o(e) {
                let [t, n] = (0, r.useControlledState)(a(e.value), a(e.defaultValue) || "", e.onChange);
                return {
                    value: t,
                    setValue: n
                }
            }

            function a(e) {
                if (null != e) return e.toString()
            }