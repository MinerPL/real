            var Symbol = r("506264"),
                n = Symbol ? Symbol.prototype : void 0,
                o = n ? n.valueOf : void 0;
            e.exports = function(e) {
                return o ? Object(o.call(e)) : {}
            }