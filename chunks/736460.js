            var i = r("599235"),
                n = r("950731"),
                a = r("515886"),
                o = r("912065").Buffer,
                s = Array(160);

            function f() {
                this.init(), this._w = s, a.call(this, 128, 112)
            }
            i(f, n), f.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, f.prototype._hash = function() {
                var t = o.allocUnsafe(48);

                function e(e, r, i) {
                    t.writeInt32BE(e, i), t.writeInt32BE(r, i + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
            }, t.exports = f