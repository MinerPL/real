            "use strict";
            var i = r("390493");
            r("424973"), r("854508");
            var n = Object.keys || function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return e
            };
            t.exports = c;
            var a = r("245387"),
                o = r("769419");
            r("599235")(c, a);
            for (var s = n(o.prototype), f = 0; f < s.length; f++) {
                var h = s[f];
                !c.prototype[h] && (c.prototype[h] = o.prototype[h])
            }

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                a.call(this, t), o.call(this, t), this.allowHalfOpen = !0, t && (!1 === t.readable && (this.readable = !1), !1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", u)))
            }

            function u() {
                !this._writableState.ended && i.nextTick(d, this)
            }

            function d(t) {
                t.end()
            }
            Object.defineProperty(c.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(c.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(c.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(c.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(t) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
                }
            })