            "use strict";
            n.r(t), n.d(t, {
                filterOutMessageRequestsAndSpam: function() {
                    return r
                },
                filterOutMessageRequestsAndSpamById: function() {
                    return a
                },
                isMessageRequestOrSpamRequest: function() {
                    return o
                },
                shouldShowMessageRequests: function() {
                    return d
                }
            }), n("222007"), n("808653");
            var s = n("288518"),
                i = n("486503");

            function r(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, i.default], r = function(e) {
                    return Object.keys(e).map(t => [t, e[t]])
                }(e), a = r.filter(e => {
                    let [, s] = e;
                    return !t.isMessageRequest(s.id) && !n.isSpam(s.id)
                });
                return function(e) {
                    return Array.from(e).reduce((e, t) => {
                        let [n, s] = t;
                        return Object.assign(e, {
                            [n]: s
                        })
                    }, {})
                }(a)
            }

            function a(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, i.default];
                return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
            }

            function o(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, i.default];
                return t.isMessageRequest(e) || n.isSpam(e)
            }

            function d() {
                let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.default, i.default], n = t.getSpamChannelsCount(), r = e.getMessageRequestsCount();
                return r > 0 || n > 0
            }