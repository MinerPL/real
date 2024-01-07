            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("629109"),
                r = s("42887"),
                o = s("145131"),
                d = s("476765"),
                u = s("829536"),
                c = s("782340"),
                S = s("926622");
            let E = (0, d.uid)(),
                f = (0, d.uid)();

            function m() {
                let {
                    inputVolume: e,
                    outputVolume: t
                } = (0, n.useStateFromStoresObject)([r.default], () => ({
                    inputVolume: r.default.getInputVolume(),
                    outputVolume: r.default.getOutputVolume()
                }));
                return (0, a.jsxs)(o.default, {
                    className: "volume",
                    children: [(0, a.jsxs)(o.default.Child, {
                        basis: "50%",
                        children: [(0, a.jsx)(l.FormTitle, {
                            id: E,
                            tag: l.FormTitleTags.H5,
                            className: S.marginBottom4,
                            children: c.default.Messages.FORM_LABEL_INPUT_VOLUME
                        }), (0, a.jsx)(l.Slider, {
                            initialValue: (0, u.amplitudeToPerceptual)(e),
                            asValueChanges: e => i.default.setInputVolume((0, u.perceptualToAmplitude)(e)),
                            "aria-labelledby": E
                        })]
                    }), (0, a.jsxs)(o.default.Child, {
                        basis: "50%",
                        children: [(0, a.jsx)(l.FormTitle, {
                            id: f,
                            tag: l.FormTitleTags.H5,
                            className: S.marginBottom4,
                            children: c.default.Messages.FORM_LABEL_OUTPUT_VOLUME
                        }), (0, a.jsx)(l.Slider, {
                            initialValue: (0, u.amplitudeToPerceptual)(t),
                            maxValue: 200,
                            onValueRender: e => "".concat(e.toFixed(0), "%"),
                            asValueChanges: e => i.default.setOutputVolume((0, u.perceptualToAmplitude)(e)),
                            "aria-labelledby": f
                        })]
                    })]
                })
            }