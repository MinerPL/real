            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            let i = Object.freeze({
                    overflowY: "scroll",
                    overflowX: "hidden"
                }),
                r = Object.freeze({
                    overflowX: "scroll",
                    overflowY: "hidden"
                }),
                o = Object.freeze({
                    overflow: "auto"
                });

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
                    n = "vertical" === t ? i : "horizontal" === t ? r : o;
                return null != e ? {
                    ...n,
                    ...e
                } : n
            }