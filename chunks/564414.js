            var r = n("562303"),
                i = n("270879"),
                o = Object.prototype,
                a = o.hasOwnProperty,
                u = o.propertyIsEnumerable,
                s = r(function() {
                    return arguments
                }()) ? r : function(t) {
                    return i(t) && a.call(t, "callee") && !u.call(t, "callee")
                };
            t.exports = s