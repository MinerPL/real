            function r(t) {
                this.rand = t
            }
            if (s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("854508"), s("70102"), t.exports = function(t) {
                    return !i && (i = new r(null)), i.generate(t)
                }, t.exports.Rand = r, r.prototype.generate = function(t) {
                    return this._rand(t)
                }, r.prototype._rand = function(t) {
                    if (this.rand.getBytes) return this.rand.getBytes(t);
                    for (var e = new Uint8Array(t), s = 0; s < e.length; s++) e[s] = this.rand.getByte();
                    return e
                }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? r.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.crypto.getRandomValues(e), e
            } : self.msCrypto && self.msCrypto.getRandomValues ? r.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.msCrypto.getRandomValues(e), e
            } : "object" == typeof window && (r.prototype._rand = function() {
                throw Error("Not implemented yet")
            });
            else try {
                var i, n = s("778583");
                if ("function" != typeof n.randomBytes) throw Error("Not supported");
                r.prototype._rand = function(t) {
                    return n.randomBytes(t)
                }
            } catch (t) {}