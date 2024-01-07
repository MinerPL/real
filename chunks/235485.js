            "use strict";
            n.r(t), n.d(t, {
                setClientOffset: function() {
                    return o
                }
            });
            var r = n("897345");

            function o(e, t) {
                return {
                    type: r.INIT_COORDS,
                    payload: {
                        sourceClientOffset: t || null,
                        clientOffset: e || null
                    }
                }
            }