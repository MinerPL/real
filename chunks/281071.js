            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == r || r.removeAllRanges(), null == r || r.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let s = document.execCommand("copy");
                return t.removeChild(l), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            }), n("70102")