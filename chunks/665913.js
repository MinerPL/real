            "use strict";
            var n = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
                var r, n, i = e.prototype;
                return i.getType = function() {
                    return this.get("type")
                }, i.getMutability = function() {
                    return this.get("mutability")
                }, i.getData = function() {
                    return this.get("data")
                }, e
            }((0, r("646601").Record)({
                type: "TOKEN",
                mutability: "IMMUTABLE",
                data: Object
            }));
            t.exports = n