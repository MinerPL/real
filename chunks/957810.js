            r("222007"), r("424973");
            var e = r("263470"),
                Map = r("516863"),
                o = r("664007");
            t.exports = function(t, n) {
                var r = this.__data__;
                if (r instanceof e) {
                    var i = r.__data__;
                    if (!Map || i.length < 199) return i.push([t, n]), this.size = ++r.size, this;
                    r = this.__data__ = new o(i)
                }
                return r.set(t, n), this.size = r.size, this
            }