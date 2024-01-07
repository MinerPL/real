            "use strict";
            i.r(t), i.d(t, {
                useEmojiColorPalette: function() {
                    return r
                }
            });
            var a = i("446674"),
                l = i("819855"),
                n = i("206230"),
                o = i("161778"),
                s = i("584375");
            let r = e => {
                let t = (0, a.useStateFromStores)([n.default], () => n.default.saturation),
                    i = (0, a.useStateFromStores)([o.default], () => (0, l.isThemeDark)(o.default.theme));
                return (0, s.buildEmojiColorPalette)(e, t, i)
            }