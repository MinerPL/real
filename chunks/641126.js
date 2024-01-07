            "use strict";
            n.r(t), n.d(t, {
                useChannelPollInteractions: function() {
                    return r
                },
                updatePollState: function() {
                    return o
                },
                getPollState: function() {
                    return u
                }
            });
            var a = n("308503"),
                s = n("233736");
            let l = {},
                i = (0, a.default)(e => ({
                    polls: {},
                    updatePollState(t, n, a) {
                        e(e => {
                            var s;
                            return {
                                polls: {
                                    ...e.polls,
                                    [t]: {
                                        ...e.polls[t],
                                        [n]: a(null === (s = e.polls[t]) || void 0 === s ? void 0 : s[n])
                                    }
                                }
                            }
                        })
                    }
                }));

            function r(e) {
                return i(t => {
                    var n;
                    return null !== (n = t.polls[e]) && void 0 !== n ? n : l
                }, s.default)
            }

            function o(e, t, n) {
                i.getState().updatePollState(e, t, n)
            }

            function u(e, t) {
                var n;
                return null === (n = i.getState().polls[e]) || void 0 === n ? void 0 : n[t]
            }