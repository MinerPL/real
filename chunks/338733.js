            "use strict";
            n.r(t), n.d(t, {
                CLIENT_THEMES_DATA_ATTRIBUTE: function() {
                    return i
                },
                default: function() {
                    return o
                }
            });
            var a = n("884691"),
                s = n("446674"),
                r = n("714657");
            let i = "data-client-themes",
                l = "custom-theme-background",
                u = () => {
                    let e = (0, s.useStateFromStores)([r.default], () => r.default.getLinearGradient()),
                        t = (0, a.useMemo)(() => null == e ? null : ".".concat(l, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e]);
                    return t
                };
            var o = () => {
                let e = u();
                return null === e ? {
                    clientThemesCSS: "",
                    clientThemesClassName: ""
                } : {
                    clientThemesCSS: e,
                    clientThemesClassName: l
                }
            }