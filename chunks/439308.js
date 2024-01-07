            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var r = n("456138"),
                i = n("34692"),
                a = n("889464"),
                l = n("786908"),
                s = n("391169");
            let u = {
                id: "aria-allowed-attributes",
                selector: s.ARIA_ATTRIBUTE_SELECTOR,
                tags: ["wcag2a", "wcag412"],
                metadata: {
                    description: "Only use supported ARIA attributes",
                    help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page."
                },
                check: function(e) {
                    let t = (0, i.getRole)(e),
                        n = r.roles.get(t);
                    if (null == n) return l.Pass;
                    for (let r of s.ARIA_ATTRIBUTE_NAMES)
                        if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
                            if ("aria-expanded" === r && e.hasAttribute("aria-controls")) continue;
                            if (!(0, a.isVisible)(e)) return l.Pass;
                            return "'".concat(t, "' does not support the ").concat(r, " attribute")
                        } return l.Pass
                }
            };
            var o = u