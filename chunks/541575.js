            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("70102");
            var r = n("400211");

            function o(e, t) {
                if ("object" !== (0, r.default)(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== (0, r.default)(o)) return o;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }