            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("83800"),
                i = n("939563"),
                r = n("385887");
            let o = ["applicationCommand"];

            function s(e) {
                let {
                    insertBreak: t,
                    insertText: n
                } = e;
                return e.insertBreak = () => {
                    a(e) && t()
                }, e.insertSoftBreak = () => {
                    e.insertBreak()
                }, e.insertText = t => {
                    if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) {
                        n(t);
                        return
                    }
                    let r = t.split(/\r\n|\r|\n/);
                    if (!a(e)) {
                        n(r.join(" "));
                        return
                    }
                    l.HistoryUtils.withSingleEntry(e, () => {
                        let t = !1;
                        for (let l of r) t && i.SlateTransforms.splitNodes(e, {
                            always: !0
                        }), n(l), t = !0
                    })
                }, e
            }

            function a(e) {
                let t = r.EditorUtils.getCurrentBlock(e);
                return null != t && !o.includes(t[0].type)
            }