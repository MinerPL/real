            function i(t) {
                this.rand = t
            }
            if (r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("854508"), r("70102"), t.exports = function(t) {
                    return !n && (n = new i(null)), n.generate(t)
                }, t.exports.Rand = i, i.prototype.generate = function(t) {
                    return this._rand(t)
                }, i.prototype._rand = function(t) {
                    if (this.rand.getBytes) return this.rand.getBytes(t);
                    for (var e = new Uint8Array(t), r = 0; r < e.length; r++) e[r] = this.rand.getByte();
                    return e
                }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.crypto.getRandomValues(e), e
            } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.msCrypto.getRandomValues(e), e
            } : "object" == typeof window && (i.prototype._rand = function() {
                throw Error("Not implemented yet")
            });
            else try {
                var n, o = r("778583");
                if ("function" != typeof o.randomBytes) throw Error("Not supported");
                i.prototype._rand = function(t) {
                    return o.randomBytes(t)
                }
            } catch (t) {}