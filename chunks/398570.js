            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("222007");
            var a = r("748820"),
                n = r("391679"),
                i = r("446674"),
                l = r("913144"),
                o = r("271938"),
                s = r("584369");
            let c = 0,
                d = [],
                u = [],
                h = !1;
            class p extends i.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                get loggedEvents() {
                    return d
                }
                get loggedTriggers() {
                    return u
                }
                get trackTriggers() {
                    return h
                }
            }
            p.displayName = "AnalyticsLogStore";
            var f = new p(l.default, {
                TRACK: function(e) {
                    let {
                        event: t,
                        properties: r,
                        fingerprint: a
                    } = e;
                    if (s.default.devToolsEnabled) {
                        var i;
                        (d = [...d, {
                            key: (c++).toString(),
                            event: t,
                            properties: r,
                            fingerprint: null != (i = a) ? (0, n.extractId)(i) : o.default.getId(),
                            timestamp: new Date
                        }]).length > 500 && d.shift()
                    }
                },
                TRACK_TRIGGER: function(e) {
                    let {
                        experimentId: t,
                        descriptor: r,
                        exposureType: n,
                        excluded: i,
                        location: l,
                        previouslyTracked: o
                    } = e;
                    if (!!s.default.devToolsEnabled) h && (u = [...u, {
                        key: (0, a.v4)(),
                        experimentId: t,
                        descriptor: r,
                        exposureType: n,
                        excluded: i,
                        location: l,
                        previouslyTracked: o,
                        timestamp: new Date
                    }]).length > 500 && u.shift()
                },
                SET_TRACK_TRIGGERS: function(e) {
                    let {
                        enabled: t
                    } = e;
                    h = t
                },
                ANALYTICS_LOG_CLEAR: function() {
                    d = [], u = []
                }
            })