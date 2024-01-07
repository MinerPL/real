            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("34692"),
                i = n("889464"),
                a = n("786908"),
                l = n("391169"),
                s = {
                    id: "alt-text",
                    selector: 'img, [role="img"]',
                    tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
                    metadata: {
                        description: "Images must have alternative text.",
                        help: ""
                    },
                    check: function(e) {
                        let t = (0, r.computeAccessibleName)(e);
                        if ("" === t) return "IMG" === e.tagName && e.hasAttribute("alt") || (0, l.isARIAHidden)(e) || !(0, i.isVisible)(e) ? a.Pass : "Image has no alternative text";
                        return a.Pass
                    }
                }