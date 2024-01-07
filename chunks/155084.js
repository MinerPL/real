            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007"), n("424973");
            var i = n("615361"),
                r = n("872717"),
                l = n("773336"),
                o = n("827032"),
                a = n("49111");
            let u = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var s = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: r
                        } = e,
                        a = {
                            name: n,
                            tags: (0, o.getGlobalTagsArray)()
                        };
                    null != r && r.forEach(e => {
                        a.tags.push(e)
                    });
                    let s = function() {
                        if ((0, l.isWeb)()) return "web";
                        {
                            let e = (0, l.getPlatformName)();
                            return u.has(e) ? e : null
                        }
                    }();
                    null != s && a.tags.push("platform:".concat(s));
                    let d = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return i.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != d && a.tags.push("release_channel:".concat(d)), this._metrics.push(a), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        r.default.post({
                            url: a.Endpoints.METRICS,
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