            "use strict";
            n.r(t), n.d(t, {
                reflectionLongConvert: function() {
                    return a
                }
            });
            var r = n("803628");

            function a(e, t) {
                switch (t) {
                    case r.LongType.BIGINT:
                        return e.toBigInt();
                    case r.LongType.NUMBER:
                        return e.toNumber();
                    default:
                        return e.toString()
                }
            }