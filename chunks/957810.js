            n("222007"), n("424973");
            var e = n("263470"),
                Map = n("516863"),
                o = n("664007");
            t.exports = function(t, r) {
                var n = this.__data__;
                if (n instanceof e) {
                    var i = n.__data__;
                    if (!Map || i.length < 199) return i.push([t, r]), this.size = ++n.size, this;
                    n = this.__data__ = new o(i)
                }
                return n.set(t, r), this.size = n.size, this
            }