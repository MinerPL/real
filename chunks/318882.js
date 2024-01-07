            r("70102");
            var i = r("912065").Buffer,
                n = r("488274"),
                o = r("275682"),
                a = r("599235"),
                s = r("553999"),
                f = r("981491"),
                h = r("951350");

            function c(t) {
                o.Writable.call(this);
                var e = h[t];
                if (!e) throw Error("Unknown message digest");
                this._hashType = e.hash, this._hash = n(e.hash), this._tag = e.id, this._signType = e.sign
            }

            function u(t) {
                o.Writable.call(this);
                var e = h[t];
                if (!e) throw Error("Unknown message digest");
                this._hash = n(e.hash), this._tag = e.id, this._signType = e.sign
            }

            function d(t) {
                return new c(t)
            }

            function l(t) {
                return new u(t)
            }
            Object.keys(h).forEach(function(t) {
                h[t].id = i.from(h[t].id, "hex"), h[t.toLowerCase()] = h[t]
            }), a(c, o.Writable), c.prototype._write = function(t, e, r) {
                this._hash.update(t), r()
            }, c.prototype.update = function(t, e) {
                return "string" == typeof t && (t = i.from(t, e)), this._hash.update(t), this
            }, c.prototype.sign = function(t, e) {
                this.end();
                var r = s(this._hash.digest(), t, this._hashType, this._signType, this._tag);
                return e ? r.toString(e) : r
            }, a(u, o.Writable), u.prototype._write = function(t, e, r) {
                this._hash.update(t), r()
            }, u.prototype.update = function(t, e) {
                return "string" == typeof t && (t = i.from(t, e)), this._hash.update(t), this
            }, u.prototype.verify = function(t, e, r) {
                return "string" == typeof e && (e = i.from(e, r)), this.end(), f(e, this._hash.digest(), t, this._signType, this._tag)
            }, t.exports = {
                Sign: d,
                Verify: l,
                createSign: d,
                createVerify: l
            }