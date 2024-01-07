            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return s
                }
            });
            var d = o("37983");
            o("884691");
            var l = o("77078"),
                r = o("759388");

            function s() {
                return (0, r.useRegisterAccessibilityChecks)(document.body), (0, d.jsx)(l.HiddenVisually, {
                    children: (0, d.jsx)("svg", {
                        "aria-hidden": !0,
                        children: (0, d.jsxs)("filter", {
                            id: "violation-overlay",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%",
                            children: [(0, d.jsx)("feFlood", {
                                floodColor: "#ff0000",
                                floodOpacity: "0.3",
                                result: "floodFill"
                            }), (0, d.jsx)("feBlend", {
                                in: "SourceGraphic",
                                in2: "floodFill",
                                mode: "overlay"
                            })]
                        })
                    })
                })
            }
            o("199100")