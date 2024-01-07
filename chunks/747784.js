            "use strict";
            r("424973");
            var n = r("839361"),
                i = r("935621");
            t.exports = function(t) {
                var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
                return i.push(t, e, "split-block")
            }