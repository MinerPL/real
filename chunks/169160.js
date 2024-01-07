            t.exports = function(t) {
                var n = this.has(t) && delete this.__data__[t];
                return this.size -= n ? 1 : 0, n
            }