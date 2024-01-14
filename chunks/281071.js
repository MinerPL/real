"use strict";

function i(e) {
  let t = document.body;
  if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
  let n = document.createRange(),
    i = window.getSelection(),
    l = document.createElement("textarea");
  l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == i || i.removeAllRanges(), null == i || i.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
  let u = document.execCommand("copy");
  return t.removeChild(l), u
}
n.r(t), n.d(t, {
  copy: function() {
    return i
  }
}), n("70102")