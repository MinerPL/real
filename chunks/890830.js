            "use strict";
            n.r(t), n.d(t, {
                useProgressBar: function() {
                    return i
                }
            });
            var r = n("290895"),
                o = n("825167"),
                a = n("181551");

            function i(e) {
                let {
                    value: t = 0,
                    minValue: n = 0,
                    maxValue: i = 100,
                    valueLabel: s,
                    isIndeterminate: c,
                    formatOptions: l = {
                        style: "percent"
                    }
                } = e, u = (0, r.filterDOMProps)(e, {
                    labelable: !0
                }), {
                    labelProps: d,
                    fieldProps: p
                } = (0, o.useLabel)({
                    ...e,
                    labelElementType: "span"
                }), f = ((t = (0, r.clamp)(t, n, i)) - n) / (i - n), m = (0, a.useNumberFormatter)(l);
                if (!c && !s) {
                    let e = "percent" === l.style ? f : t;
                    s = m.format(e)
                }
                return {
                    progressBarProps: (0, r.mergeProps)(u, {
                        ...p,
                        "aria-valuenow": c ? void 0 : t,
                        "aria-valuemin": n,
                        "aria-valuemax": i,
                        "aria-valuetext": c ? void 0 : s,
                        role: "progressbar"
                    }),
                    labelProps: d
                }
            }