            var Symbol = n("330206"),
                e = Symbol ? Symbol.prototype : void 0,
                o = e ? e.valueOf : void 0;
            t.exports = function(t) {
                return o ? Object(o.call(t)) : {}
            }