"use strict";
t.r(r), t.d(r, {
  computeAccessibleName: function() {
    return n
  }
});
var a = t("684819"),
  o = t("640029");

function n(e) {
  var r, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return (r = e, (0, o.hasAnyConcreteRoles)(r, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"])) ? "" : (0, a.computeTextAlternative)(e, t)
}