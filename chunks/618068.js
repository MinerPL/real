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
                    id: "input-label",
                    selector: 'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
                    tags: ["wcag2a", "wcag131", "wcag412", "section508", "section508.22.a", "ACT"],
                    metadata: {
                        description: "Form inputs require a label",
                        help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby."
                    },
                    check: function(e) {
                        let t = (0, r.computeAccessibleName)(e);
                        if ("" === t) return (0, l.isARIAHidden)(e) || !(0, i.isVisible)(e) ? a.Pass : "Form input has no label";
                        return a.Pass
                    }
                }