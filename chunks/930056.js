            "use strict";
            n.r(t), n.d(t, {
                NONE: function() {
                    return o
                },
                ALL: function() {
                    return a
                },
                areDirty: function() {
                    return i
                }
            });
            var r = n("125692"),
                o = [],
                a = [];

            function i(e, t) {
                return e !== o && (e === a || void 0 === t || (0, r.intersection)(t, e).length > 0)
            }
            o.__IS_NONE__ = !0, a.__IS_ALL__ = !0