            "use strict";
            n.r(t), n.d(t, {
                filterOutMessageRequestsAndSpam: function() {
                    return l
                },
                filterOutMessageRequestsAndSpamById: function() {
                    return s
                },
                isMessageRequestOrSpamRequest: function() {
                    return r
                },
                shouldShowMessageRequests: function() {
                    return u
                }
            }), n("222007"), n("808653");
            var i = n("288518"),
                a = n("486503");

            function l(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default], l = function(e) {
                    return Object.keys(e).map(t => [t, e[t]])
                }(e), s = l.filter(e => {
                    let [, i] = e;
                    return !t.isMessageRequest(i.id) && !n.isSpam(i.id)
                });
                return function(e) {
                    return Array.from(e).reduce((e, t) => {
                        let [n, i] = t;
                        return Object.assign(e, {
                            [n]: i
                        })
                    }, {})
                }(s)
            }

            function s(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default];
                return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
            }

            function r(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default];
                return t.isMessageRequest(e) || n.isSpam(e)
            }

            function u() {
                let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.default, a.default], n = t.getSpamChannelsCount(), l = e.getMessageRequestsCount();
                return l > 0 || n > 0
            }