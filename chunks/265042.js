            n("424973");
            var r = n("55942").RBTree;

            function o(e, t, n) {
                this.discrete = !1 === e, this.delta = e || .01, this.K = void 0 === t ? 25 : t, this.CX = void 0 === n ? 1.1 : n, this.centroids = new r(a), this.nreset = 0, this.reset()
            }

            function a(e, t) {
                return e.mean > t.mean ? 1 : e.mean < t.mean ? -1 : 0
            }

            function i(e, t) {
                return e.mean_cumn - t.mean_cumn
            }
            o.prototype.reset = function() {
                this.centroids.clear(), this.n = 0, this.nreset += 1, this.last_cumulate = 0
            }, o.prototype.size = function() {
                return this.centroids.size
            }, o.prototype.toArray = function(e) {
                var t = [];
                return e ? (this._cumulate(!0), this.centroids.each(function(e) {
                    t.push(e)
                })) : this.centroids.each(function(e) {
                    t.push({
                        mean: e.mean,
                        n: e.n
                    })
                }), t
            }, o.prototype.summary = function() {
                return [(this.discrete ? "exact " : "approximating ") + this.n + " samples using " + this.size() + " centroids", "min = " + this.percentile(0), "Q1  = " + this.percentile(.25), "Q2  = " + this.percentile(.5), "Q3  = " + this.percentile(.75), "max = " + this.percentile(1)].join("\n")
            }, o.prototype.push = function(e, t) {
                t = t || 1, e = Array.isArray(e) ? e : [e];
                for (var n = 0; n < e.length; n++) this._digest(e[n], t)
            }, o.prototype.push_centroid = function(e) {
                e = Array.isArray(e) ? e : [e];
                for (var t = 0; t < e.length; t++) this._digest(e[t].mean, e[t].n)
            }, o.prototype._cumulate = function(e) {
                if (this.n !== this.last_cumulate && (e || !this.CX || !(this.CX > this.n / this.last_cumulate))) {
                    var t = 0;
                    this.centroids.each(function(e) {
                        e.mean_cumn = t + e.n / 2, t = e.cumn = t + e.n
                    }), this.n = this.last_cumulate = t
                }
            }, o.prototype.find_nearest = function(e) {
                if (0 === this.size()) return null;
                var t = this.centroids.lowerBound({
                        mean: e
                    }),
                    n = null === t.data() ? t.prev() : t.data();
                if (n.mean === e || this.discrete) return n;
                var r = t.prev();
                return r && Math.abs(r.mean - e) < Math.abs(n.mean - e) ? r : n
            }, o.prototype._new_centroid = function(e, t, n) {
                var r = {
                    mean: e,
                    n: t,
                    cumn: n
                };
                return this.centroids.insert(r), this.n += t, r
            }, o.prototype._addweight = function(e, t, n) {
                t !== e.mean && (e.mean += n * (t - e.mean) / (e.n + n)), e.cumn += n, e.mean_cumn += n / 2, e.n += n, this.n += n
            }, o.prototype._digest = function(e, t) {
                var n = this.centroids.min(),
                    r = this.centroids.max(),
                    o = this.find_nearest(e);
                if (o && o.mean === e) this._addweight(o, e, t);
                else if (o === n) this._new_centroid(e, t, 0);
                else if (o === r) this._new_centroid(e, t, this.n);
                else if (this.discrete) this._new_centroid(e, t, o.cumn);
                else {
                    var a = o.mean_cumn / this.n;
                    Math.floor(4 * this.n * this.delta * a * (1 - a)) - o.n >= t ? this._addweight(o, e, t) : this._new_centroid(e, t, o.cumn)
                }
                this._cumulate(!1), !this.discrete && this.K && this.size() > this.K / this.delta && this.compress()
            }, o.prototype.bound_mean = function(e) {
                var t = this.centroids.upperBound({
                        mean: e
                    }),
                    n = t.prev(),
                    r = n.mean === e ? n : t.next();
                return [n, r]
            }, o.prototype.p_rank = function(e) {
                var t = (Array.isArray(e) ? e : [e]).map(this._p_rank, this);
                return Array.isArray(e) ? t : t[0]
            }, o.prototype._p_rank = function(e) {
                if (0 !== this.size()) {
                    if (e < this.centroids.min().mean) return 0;
                    if (e > this.centroids.max().mean) return 1;
                    this._cumulate(!0);
                    var t = this.bound_mean(e),
                        n = t[0],
                        r = t[1];
                    if (this.discrete) return n.cumn / this.n;
                    var o = n.mean_cumn;
                    return n !== r && (o += (e - n.mean) * (r.mean_cumn - n.mean_cumn) / (r.mean - n.mean)), o / this.n
                }
            }, o.prototype.bound_mean_cumn = function(e) {
                this.centroids._comparator = i;
                var t = this.centroids.upperBound({
                    mean_cumn: e
                });
                this.centroids._comparator = a;
                var n = t.prev(),
                    r = n && n.mean_cumn === e ? n : t.next();
                return [n, r]
            }, o.prototype.percentile = function(e) {
                var t = (Array.isArray(e) ? e : [e]).map(this._percentile, this);
                return Array.isArray(e) ? t : t[0]
            }, o.prototype._percentile = function(e) {
                if (0 !== this.size()) {
                    this._cumulate(!0), this.centroids.min(), this.centroids.max();
                    var t = this.n * e,
                        n = this.bound_mean_cumn(t),
                        r = n[0],
                        o = n[1];
                    if (o === r || null === r || null === o) return (r || o).mean;
                    if (!this.discrete) return r.mean + (t - r.mean_cumn) * (o.mean - r.mean) / (o.mean_cumn - r.mean_cumn);
                    else if (t <= r.cumn) return r.mean;
                    else return o.mean
                }
            };

            function s(e) {
                this.config = e || {}, this.mode = this.config.mode || "auto", o.call(this, "cont" === this.mode && e.delta), this.digest_ratio = this.config.ratio || .9, this.digest_thresh = this.config.thresh || 1e3, this.n_unique = 0
            }
            o.prototype.compress = function() {
                if (!this.compressing) {
                    var e = this.toArray();
                    for (this.reset(), this.compressing = !0; e.length > 0;) this.push_centroid(function(e) {
                        var t = Math.floor(Math.random() * e.length);
                        return e.splice(t, 1)[0]
                    }(e));
                    this._cumulate(!0), this.compressing = !1
                }
            }, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.push = function(e) {
                o.prototype.push.call(this, e), this.check_continuous()
            }, s.prototype._new_centroid = function(e, t, n) {
                this.n_unique += 1, o.prototype._new_centroid.call(this, e, t, n)
            }, s.prototype._addweight = function(e, t, n) {
                1 === e.n && (this.n_unique -= 1), o.prototype._addweight.call(this, e, t, n)
            }, s.prototype.check_continuous = function() {
                return !("auto" !== this.mode || this.size() < this.digest_thresh) && !!(this.n_unique / this.size() > this.digest_ratio) && (this.mode = "cont", this.discrete = !1, this.delta = this.config.delta || .01, this.compress(), !0)
            }, e.exports = {
                TDigest: o,
                Digest: s
            }