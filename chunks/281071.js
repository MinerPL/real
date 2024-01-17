"use strict";

function r(e) {
  let t = document.body;
  if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
  let n = document.createRange(),
    r = window.getSelection(),
    u = document.createElement("textarea");
  u.value = e, u.contentEditable = "true", u.style.visibility = "none", t.appendChild(u), n.selectNodeContents(u), null == r || r.removeAllRanges(), null == r || r.addRange(n), u.focus(), u.setSelectionRange(0, e.length);
  let a = document.execCommand("copy");
  return t.removeChild(u), a
}
n.r(t), n.d(t, {
  copy: function() {
    return r
  }
}), n("70102")