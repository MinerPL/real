            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("629109"),
                r = n("42887"),
                u = n("829536"),
                o = n("782340");

            function d() {
                let e = (0, l.useStateFromStores)([r.default], () => (0, u.amplitudeToPerceptual)(r.default.getInputVolume()));
                return (0, a.jsx)(s.MenuControlItem, {
                    id: "input",
                    label: o.default.Messages.FORM_LABEL_INPUT_VOLUME,
                    control: (t, n) => (0, a.jsx)(s.MenuSliderControl, {
                        ...t,
                        ref: n,
                        value: e,
                        onChange: e => i.default.setInputVolume((0, u.perceptualToAmplitude)(e)),
                        "aria-label": o.default.Messages.FORM_LABEL_INPUT_VOLUME
                    })
                })
            }