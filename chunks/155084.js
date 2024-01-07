            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007"), n("424973");
            var r = n("615361"),
                i = n("872717"),
                a = n("773336"),
                s = n("827032"),
                o = n("49111");
            let u = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var l = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: i
                        } = e,
                        o = {
                            name: n,
                            tags: (0, s.getGlobalTagsArray)()
                        };
                    null != i && i.forEach(e => {
                        o.tags.push(e)
                    });
                    let l = function() {
                        if ((0, a.isWeb)()) return "web";
                        {
                            let e = (0, a.getPlatformName)();
                            return u.has(e) ? e : null
                        }
                    }();
                    null != l && o.tags.push("platform:".concat(l));
                    let c = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return r.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != c && o.tags.push("release_channel:".concat(c)), this._metrics.push(o), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        i.default.post({
                            url: o.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }