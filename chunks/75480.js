    "use strict";

    function d(e) {
      let a = null == e ? void 0 : e.activeElement;
      return ["INPUT", "TEXTAREA"].includes(null == a ? void 0 : a.tagName) || (null == a ? void 0 : a.isContentEditable)
    }
    t.r(a), t.d(a, {
      default: function() {
        return d
      }
    })