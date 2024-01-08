            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("629109"),
                r = n("42887"),
                u = n("829536"),
                o = n("773336"),
                d = n("782340");

            function c() {
                let e = (0, l.useStateFromStores)([r.default], () => (0, u.amplitudeToPerceptual)(r.default.getOutputVolume()));
                return (0, a.jsx)(s.MenuControlItem, {
                    id: "output",
                    label: d.default.Messages.FORM_LABEL_OUTPUT_VOLUME,
                    control: (t, n) => (0, a.jsx)(s.MenuSliderControl, {
                        ...t,
                        ref: n,
                        value: e,
                        maxValue: o.isPlatformEmbedded ? 200 : 100,
                        onChange: e => i.default.setOutputVolume((0, u.perceptualToAmplitude)(e)),
                        "aria-label": d.default.Messages.FORM_LABEL_OUTPUT_VOLUME
                    })
                })
            }