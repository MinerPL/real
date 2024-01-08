            "use strict";
            var i = r("463483"),
                n = r("599235"),
                a = r("249089"),
                o = r("487045");

            function s(t, e) {
                i.equal(e.length, 24, "Invalid key length");
                var r = e.slice(0, 8),
                    n = e.slice(8, 16),
                    a = e.slice(16, 24);
                "encrypt" === t ? this.ciphers = [o.create({
                    type: "encrypt",
                    key: r
                }), o.create({
                    type: "decrypt",
                    key: n
                }), o.create({
                    type: "encrypt",
                    key: a
                })] : this.ciphers = [o.create({
                    type: "decrypt",
                    key: a
                }), o.create({
                    type: "encrypt",
                    key: n
                }), o.create({
                    type: "decrypt",
                    key: r
                })]
            }

            function f(t) {
                a.call(this, t);
                var e = new s(this.type, this.options.key);
                this._edeState = e
            }
            n(f, a), t.exports = f, f.create = function(t) {
                return new f(t)
            }, f.prototype._update = function(t, e, r, i) {
                var n = this._edeState;
                n.ciphers[0]._update(t, e, r, i), n.ciphers[1]._update(r, i, r, i), n.ciphers[2]._update(r, i, r, i)
            }, f.prototype._pad = o.prototype._pad, f.prototype._unpad = o.prototype._unpad