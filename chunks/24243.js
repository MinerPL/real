            "use strict";
            var r = {
                current: function(t, e) {
                    if (!t.setNativeProps) return !1;
                    t.setNativeProps(e)
                },
                transformStyles: function(t) {
                    return t
                },
                inject: function(t, e) {
                    r.current = t, r.transformStyles = e
                }
            };
            t.exports = r