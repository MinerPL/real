            "use strict";

            function r(e, t, n) {
                var r = t.reduce(function(t, n) {
                    return t || e.getData(n)
                }, "");
                return null != r ? r : n
            }
            n.r(t), n.d(t, {
                getDataFromDataTransfer: function() {
                    return r
                }
            }), n("808653")