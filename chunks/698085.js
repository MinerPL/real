"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var r = n("456138"),
  i = n("786908");
let a = new Set(r.roles.keys());
var l = {
  id: "aria-valid-roles",
  selector: "[role]",
  tags: ["wcag2a", "wcag412"],
  metadata: {
    description: "ARIA roles used must conform to valid values",
    help: "Ensures all elements with a role attribute use a valid value"
  },
  check: function(e) {
    let t = e.getAttribute("role"),
      n = t.split(" ");
    for (let e of n)
      if (!a.has(e)) return "Role '".concat(e, "' is not a valid ARIA role");
    return i.Pass
  }
}