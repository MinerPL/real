            "use strict";
            var i = "_erd";

            function o(e) {
                return e[i]
            }
            e.exports = {
                initState: function(e) {
                    return e[i] = {},
                        function(e) {
                            return e[i]
                        }(e)
                },
                getState: o,
                cleanState: function(e) {
                    delete e[i]
                }
            }