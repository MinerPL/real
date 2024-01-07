            "use strict";
            var i = r("463483"),
                n = r("599235"),
                o = r("249089"),
                a = r("487045");

            function s(t, e) {
                i.equal(e.length, 24, "Invalid key length");
                var r = e.slice(0, 8),
                    n = e.slice(8, 16),
                    o = e.slice(16, 24);
                "encrypt" === t ? this.ciphers = [a.create({
                    type: "encrypt",
                    key: r
                }), a.create({
                    type: "decrypt",
                    key: n
                }), a.create({
                    type: "encrypt",
                    key: o
                })] : this.ciphers = [a.create({
                    type: "decrypt",
                    key: o
                }), a.create({
                    type: "encrypt",
                    key: n
                }), a.create({
                    type: "decrypt",
                    key: r
                })]
            }

            function f(t) {
                o.call(this, t);
                var e = new s(this.type, this.options.key);
                this._edeState = e
            }
            n(f, o), t.exports = f, f.create = function(t) {
                return new f(t)
            }, f.prototype._update = function(t, e, r, i) {
                var n = this._edeState;
                n.ciphers[0]._update(t, e, r, i), n.ciphers[1]._update(r, i, r, i), n.ciphers[2]._update(r, i, r, i)
            }, f.prototype._pad = a.prototype._pad, f.prototype._unpad = a.prototype._unpad