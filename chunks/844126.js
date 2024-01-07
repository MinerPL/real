            "use strict";
            var n = r("499071");
            t.exports = function(t, e) {
                if (t._latestEditorState.getSelection().isCollapsed()) {
                    e.preventDefault();
                    return
                }
                t.setClipboard(n(t._latestEditorState))
            }