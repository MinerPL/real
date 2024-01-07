            var n = e("897506"),
                o = e("346173"),
                i = Object.prototype,
                u = i.hasOwnProperty,
                a = i.propertyIsEnumerable,
                c = n(function() {
                    return arguments
                }()) ? n : function(t) {
                    return o(t) && u.call(t, "callee") && !a.call(t, "callee")
                };
            t.exports = c