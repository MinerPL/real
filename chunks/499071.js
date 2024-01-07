            "use strict";
            var n = r("99247");
            t.exports = function(t) {
                var e = t.getSelection();
                return e.isCollapsed() ? null : n(t.getCurrentContent(), e)
            }