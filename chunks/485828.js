            "use strict";

            function i(t) {
                if (this._capacity = a(t), this._length = 0, this._front = 0, this._makeCapacity(), n(t)) {
                    for (var e = t.length, r = 0; r < e; ++r) this[r] = t[r];
                    this._length = e
                }
            }
            r("424973"), r("843762"), r("274635"), r("70102"), i.prototype.toArray = function() {
                for (var t = this._length, e = Array(t), r = this._front, i = this._capacity, n = 0; n < t; ++n) e[n] = this[r + n & i - 1];
                return e
            }, i.prototype.push = function(t) {
                var e = arguments.length,
                    r = this._length;
                if (e > 1) {
                    var i = this._capacity;
                    if (r + e > i) {
                        for (var n = 0; n < e; ++n) {
                            this._checkCapacity(r + 1);
                            var o = this._front + r & this._capacity - 1;
                            this[o] = arguments[n], r++, this._length = r
                        }
                        return r
                    }
                    for (var o = this._front, n = 0; n < e; ++n) this[o + r & i - 1] = arguments[n], o++;
                    return this._length = r + e, r + e
                }
                if (0 === e) return r;
                this._checkCapacity(r + 1);
                var n = this._front + r & this._capacity - 1;
                return this[n] = t, this._length = r + 1, r + 1
            }, i.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front + t - 1 & this._capacity - 1,
                        r = this[e];
                    return this[e] = void 0, this._length = t - 1, r
                }
            }, i.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front,
                        r = this[e];
                    return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length = t - 1, r
                }
            }, i.prototype.unshift = function(t) {
                var e = this._length,
                    r = arguments.length;
                if (r > 1) {
                    var i = this._capacity;
                    if (e + r > i) {
                        for (var n = r - 1; n >= 0; n--) {
                            this._checkCapacity(e + 1);
                            var i = this._capacity,
                                o = (this._front - 1 & i - 1 ^ i) - i;
                            this[o] = arguments[n], e++, this._length = e, this._front = o
                        }
                        return e
                    }
                    for (var a = this._front, n = r - 1; n >= 0; n--) {
                        var o = (a - 1 & i - 1 ^ i) - i;
                        this[o] = arguments[n], a = o
                    }
                    return this._front = a, this._length = e + r, e + r
                }
                if (0 === r) return e;
                this._checkCapacity(e + 1);
                var i = this._capacity,
                    n = (this._front - 1 & i - 1 ^ i) - i;
                return this[n] = t, this._length = e + 1, this._front = n, e + 1
            }, i.prototype.peekBack = function() {
                var t = this._length;
                if (0 !== t) return this[this._front + t - 1 & this._capacity - 1]
            }, i.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            }, i.prototype.get = function(t) {
                var e = t;
                if (e === (0 | e)) {
                    var r = this._length;
                    if (e < 0 && (e += r), !(e < 0) && !(e >= r)) return this[this._front + e & this._capacity - 1]
                }
            }, i.prototype.isEmpty = function() {
                return 0 === this._length
            }, i.prototype.clear = function() {
                this._length = 0, this._front = 0, this._makeCapacity()
            }, i.prototype.toString = function() {
                return this.toArray().toString()
            }, i.prototype.valueOf = i.prototype.toString, i.prototype.removeFront = i.prototype.shift, i.prototype.removeBack = i.prototype.pop, i.prototype.insertFront = i.prototype.unshift, i.prototype.insertBack = i.prototype.push, i.prototype.enqueue = i.prototype.push, i.prototype.dequeue = i.prototype.shift, i.prototype.toJSON = i.prototype.toArray, Object.defineProperty(i.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw RangeError("")
                }
            }), i.prototype._makeCapacity = function() {
                for (var t = this._capacity, e = 0; e < t; ++e) this[e] = void 0
            }, i.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(a(1.5 * this._capacity + 16))
            }, i.prototype._resizeTo = function(t) {
                var e = this._front,
                    r = this._capacity,
                    i = Array(r),
                    n = this._length;
                if (o(this, 0, i, 0, r), this._capacity = t, this._makeCapacity(), this._front = 0, e + n <= r) o(i, e, this, 0, n);
                else {
                    var a = n - (e + n & r - 1);
                    o(i, e, this, 0, a), o(i, 0, this, a, n - a)
                }
            };
            var n = Array.isArray;

            function o(t, e, r, i, n) {
                for (var o = 0; o < n; ++o) r[o + i] = t[o + e]
            }

            function a(t) {
                var e;
                if ("number" != typeof t) {
                    if (!n(t)) return 16;
                    t = t.length
                }
                return e = (Math.min(Math.max(16, t), 1073741824) >>> 0) - 1, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, (e |= e >> 16) + 1
            }
            t.exports = i