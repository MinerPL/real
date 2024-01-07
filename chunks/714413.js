            "use strict";
            n.r(t), n.d(t, {
                ADD_SOURCE: function() {
                    return r
                },
                ADD_TARGET: function() {
                    return o
                },
                REMOVE_SOURCE: function() {
                    return a
                },
                REMOVE_TARGET: function() {
                    return i
                },
                addSource: function() {
                    return s
                },
                addTarget: function() {
                    return c
                },
                removeSource: function() {
                    return l
                },
                removeTarget: function() {
                    return u
                }
            });
            var r = "dnd-core/ADD_SOURCE",
                o = "dnd-core/ADD_TARGET",
                a = "dnd-core/REMOVE_SOURCE",
                i = "dnd-core/REMOVE_TARGET";

            function s(e) {
                return {
                    type: r,
                    payload: {
                        sourceId: e
                    }
                }
            }

            function c(e) {
                return {
                    type: o,
                    payload: {
                        targetId: e
                    }
                }
            }

            function l(e) {
                return {
                    type: a,
                    payload: {
                        sourceId: e
                    }
                }
            }

            function u(e) {
                return {
                    type: i,
                    payload: {
                        targetId: e
                    }
                }
            }