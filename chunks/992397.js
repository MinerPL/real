"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007"), n("808653"), n("424973");
var r = n("456138"),
  i = n("34692"),
  a = n("889464"),
  l = n("786908");
let s = "button, a, ".concat(Array.from(r.roles.entries()).reduce((e, t) => {
  let [n, r] = t;
  return !0 === r.childrenPresentational && e.push('[role="'.concat(n, '"]')), e
}, []).join(", "));
var u = {
  id: "nested-interactive",
  selector: s,
  tags: [],
  metadata: {
    description: "Interactive controls must not be nested",
    help: "Nested focusable elements are inaccessible to screen readers"
  },
  check: function(e) {
    return ! function(e) {
      let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
        n = t.nextNode();
      for (; null !== n;) {
        if (n !== e && function(e) {
            switch (e.nodeName) {
              case "IFRAME":
              case "EMBED":
              case "DETAILS":
              case "LABEL":
                return !0;
              case "INPUT":
                return "hidden" !== e.getAttribute("type")
            }
            return function(e) {
              let t = (0, i.getRole)(e);
              switch (t) {
                case "link":
                  return e.hasAttribute("href");
                case "audio":
                  return e.hasAttribute("controls");
                case "img":
                  return e.hasAttribute("usemap");
                case "button":
                  return !0;
                default:
                  return !1
              }
            }(e)
          }(n)) return !1;
        n = t.nextNode()
      }
      return !0
    }(e) && (0, a.isVisible)(e) ? "Nested interactive element" : l.Pass
  }
}