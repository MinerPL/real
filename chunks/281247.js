"use strict";

function i(t, e) {
  return t.replace(RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function r(t, e) {
  t.classList ? t.classList.remove(e) : "string" == typeof t.className ? t.className = i(t.className, e) : t.setAttribute("class", i(t.className && t.className.baseVal || "", e))
}
n.r(e), n.d(e, {
  default: function() {
    return r
  }
}), n("781738")