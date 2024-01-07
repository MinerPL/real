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
                    id: "button-name",
                    selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
                    tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
                    metadata: {
                        description: "Ensures buttons have discernible text",
                        help: ""
                    },
                    check: function(e) {
                        let t = "" !== (0, r.computeAccessibleName)(e);
                        return t || (0, l.isARIAHidden)(e) || !(0, i.isVisible)(e) ? a.Pass : "button's accessible name is empty."
                    }
                }