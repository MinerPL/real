            "use strict";
            var n = r("935621"),
                i = r("697884"),
                o = r("458373");
            t.exports = function(t, e) {
                var r = e.currentTarget.ownerDocument;
                if (!t.props.preserveSelectionOnBlur && o(r) === r.body) {
                    var a = r.defaultView.getSelection(),
                        u = t.editor;
                    1 === a.rangeCount && i(u, a.anchorNode) && i(u, a.focusNode) && a.removeAllRanges()
                }
                var s = t._latestEditorState,
                    c = s.getSelection();
                if (c.getHasFocus()) {
                    var l = c.set("hasFocus", !1);
                    t.props.onBlur && t.props.onBlur(e), t.update(n.acceptSelection(s, l))
                }
            }