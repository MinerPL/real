            var e = r("186489"),
                o = r("235723"),
                i = r("236748"),
                u = r("285445"),
                a = r("956285");

            function c(t) {
                var n = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++n < r;) {
                    var e = t[n];
                    this.set(e[0], e[1])
                }
            }
            c.prototype.clear = e, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = u, c.prototype.set = a, t.exports = c