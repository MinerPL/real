            "use strict";

            function i() {
                return n.el("225629").then(n.bind(n, "225629"))
            }
            async function l(e, t, n, l, r) {
                let o = await i();
                return o.crop_gif(e, t, n, l, r)
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                wasmCropGIF: function() {
                    return l
                }
            })