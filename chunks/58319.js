"use strict";
r.r(e), r.d(e, {
  Cache: function() {
    return Cache
  }
}), r("424973");
var n = r("926218"),
  i = r("737912"),
  a = r("871111"),
  Cache = function() {
    function Cache() {
      this.all = !1, this.before = [], this.after = [], this.between = []
    }
    return Cache.prototype._cacheAdd = function(t, e, r) {
      e && (e = e instanceof Date ? (0, i.clone)(e) : (0, i.cloneDates)(e)), "all" === t ? this.all = e : (r._value = e, this[t].push(r))
    }, Cache.prototype._cacheGet = function(t, e) {
      var r = !1,
        o = e ? Object.keys(e) : [],
        s = this[t];
      if ("all" === t) r = this.all;
      else if ((0, a.isArray)(s))
        for (var u = 0; u < s.length; u++) {
          var d = s[u];
          if (!(o.length && function(t) {
              for (var r = 0; r < o.length; r++) {
                var n = o[r];
                if (! function(t, e) {
                    if (Array.isArray(t)) return !!Array.isArray(e) && t.length === e.length && t.every(function(t, r) {
                      return t.getTime() === e[r].getTime()
                    });
                    return t instanceof Date ? e instanceof Date && t.getTime() === e.getTime() : t === e
                  }(e[n], t[n])) return !0
              }
              return !1
            }(d))) {
            r = d._value;
            break
          }
        }
      if (!r && this.all) {
        for (var y = new n.default(t, e), u = 0; u < this.all.length && y.accept(this.all[u]); u++);
        r = y.getValue(), this._cacheAdd(t, r, e)
      }
      return (0, a.isArray)(r) ? (0, i.cloneDates)(r) : r instanceof Date ? (0, i.clone)(r) : r
    }, Cache
  }()