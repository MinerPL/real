"use strict";

function l(e) {
  let t = document.body;
  if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
  let n = document.createRange(),
    l = window.getSelection(),
    i = document.createElement("textarea");
  i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), n.selectNodeContents(i), null == l || l.removeAllRanges(), null == l || l.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
  let a = document.execCommand("copy");
  return t.removeChild(i), a
}
n.r(t), n.d(t, {
  copy: function() {
    return l
  }
}), n("70102")