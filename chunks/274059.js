"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var r = n("456138"),
  i = n("889464"),
  a = n("786908"),
  l = n("391169"),
  s = {
    id: "aria-attribute-valid-value",
    selector: l.ARIA_ATTRIBUTE_SELECTOR,
    tags: [],
    metadata: {
      description: "ARIA attributes must use valid values",
      help: ""
    },
    check: function(e) {
      let t = function(e) {
        for (let t of l.ARIA_ATTRIBUTE_NAMES)
          if (e.hasAttribute(t)) {
            let n = e.getAttribute(t),
              i = r.aria.get(t);
            switch (i.type) {
              case "string":
                return a.Pass;
              case "id":
                return function(e, t) {
                  let n = document.getElementById(t);
                  return null == n ? "".concat(e, " references #").concat(t, " which does not exist") : a.Pass
                }(t, n);
              case "idlist":
                return function(e, t, n) {
                  if ("aria-controls" === e && ("false" === n.getAttribute("aria-expanded") || "false" === n.getAttribute("aria-selected")) || "aria-owns" === e && "false" === n.getAttribute("aria-expanded")) return a.Pass;
                  let r = t.split(" ");
                  for (let n of r) {
                    let r = document.getElementById(n);
                    if (null == r) return "".concat(e, " references #").concat(t, " which does not exist")
                  }
                  return a.Pass
                }(t, n, e);
              case "integer":
                return function(e, t) {
                  let n = parseInt(t, 10),
                    r = String(n);
                  return r !== t ? "".concat(e, " requires an integer but got ").concat(t) : a.Pass
                }(t, n);
              case "number":
                return function(e, t) {
                  return isFinite(t) ? a.Pass : "".concat(e, " requires a numeric value but got ").concat(t)
                }(t, n);
              case "boolean":
                return function(e, t, n) {
                  return "true" === t || "false" === t || "" === t && !0 === n.allowundefined ? a.Pass : "".concat(e, ' must be either "true" or "false"')
                }(t, n, i);
              case "token":
                return function(e, t, n) {
                  var r, i;
                  let l = function(e) {
                    switch (e) {
                      case "true":
                        return !0;
                      case "false":
                        return !1;
                      default:
                        return e
                    }
                  }(t);
                  return (null === (r = n.values) || void 0 === r ? void 0 : r.includes(l)) ? a.Pass : "".concat(e, " was ").concat(t, " but must be: ").concat(null === (i = n.values) || void 0 === i ? void 0 : i.join(", "))
                }(t, n, i);
              case "tokenlist":
                return function(e, t, n) {
                  let r = t.split(" ");
                  for (let a of r) {
                    var i, l;
                    if (null === (i = n.values) || void 0 === i || !i.includes(a)) return "".concat(e, " included ").concat(t, " but is restricted to: ").concat(null === (l = n.values) || void 0 === l ? void 0 : l.join(", "))
                  }
                  return a.Pass
                }(t, n, i);
              case "tristate":
                return function(e, t) {
                  switch (t) {
                    case "true":
                    case "false":
                    case "mixed":
                      return a.Pass;
                    default:
                      return "".concat(e, ' must be "true", "false", or "mixed" not ').concat(t)
                  }
                }(t, n)
            }
          } return a.Pass
      }(e);
      return t !== a.Pass && ((0, l.isARIAHidden)(e) || !(0, i.isVisible)(e)) ? a.Pass : t
    }
  }