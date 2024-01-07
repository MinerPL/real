            n("70102"), n("222007");
            var r = Object.prototype.hasOwnProperty;

            function o(e) {
                if (!(this instanceof o)) throw TypeError("Constructor PseudoMap requires 'new'");
                if (this.clear(), e) {
                    if (e instanceof o || "function" == typeof Map && e instanceof Map) e.forEach(function(e, t) {
                        this.set(t, e)
                    }, this);
                    else if (Array.isArray(e)) e.forEach(function(e) {
                        this.set(e[0], e[1])
                    }, this);
                    else throw TypeError("invalid argument")
                }
            }

            function a(e, t) {
                return e === t || e != e && t != t
            }

            function i(e, t, n) {
                this.key = e, this.value = t, this._index = n
            }

            function s(e, t) {
                for (var n = 0, o = "_" + t, i = o; r.call(e, i); i = o + n++)
                    if (a(e[i].key, t)) return e[i]
            }
            e.exports = o, o.prototype.forEach = function(e, t) {
                t = t || this, Object.keys(this._data).forEach(function(n) {
                    "size" !== n && e.call(t, this._data[n].value, this._data[n].key)
                }, this)
            }, o.prototype.has = function(e) {
                return !!s(this._data, e)
            }, o.prototype.get = function(e) {
                var t = s(this._data, e);
                return t && t.value
            }, o.prototype.set = function(e, t) {
                (function(e, t, n) {
                    for (var o = 0, s = "_" + t, c = s; r.call(e, c); c = s + o++)
                        if (a(e[c].key, t)) {
                            e[c].value = n;
                            return
                        } e.size++, e[c] = new i(t, n, c)
                })(this._data, e, t)
            }, o.prototype.delete = function(e) {
                var t = s(this._data, e);
                t && (delete this._data[t._index], this._data.size--)
            }, o.prototype.clear = function() {
                var e = Object.create(null);
                e.size = 0, Object.defineProperty(this, "_data", {
                    value: e,
                    enumerable: !1,
                    configurable: !0,
                    writable: !1
                })
            }, Object.defineProperty(o.prototype, "size", {
                get: function() {
                    return this._data.size
                },
                set: function(e) {},
                enumerable: !0,
                configurable: !0
            }), o.prototype.values = o.prototype.keys = o.prototype.entries = function() {
                throw Error("iterators are not implemented in this version")
            }