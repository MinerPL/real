            a("70102");
            e.exports = function(e, t, a) {
                if ("function" != typeof e) throw TypeError("Expected a function");
                return setTimeout(function() {
                    e.apply(void 0, a)
                }, t)
            }