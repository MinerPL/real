            "use strict";

            function r(e, t, n) {
                if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
                return t.get(e)
            }
            n.r(t), n.d(t, {
                _class_extract_field_descriptor: function() {
                    return r
                }
            })