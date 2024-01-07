            var e = r("74590");
            t.exports = function(t, n) {
                var r = e(this, t),
                    o = r.size;
                return r.set(t, n), this.size += r.size == o ? 0 : 1, this
            }