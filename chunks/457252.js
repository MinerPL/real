            "use strict";
            n.r(e), n.d(e, {
                addBreadcrumb: function() {
                    return c
                },
                captureEvent: function() {
                    return s
                },
                captureException: function() {
                    return i
                },
                captureMessage: function() {
                    return a
                },
                configureScope: function() {
                    return o
                },
                setContext: function() {
                    return l
                },
                setExtra: function() {
                    return d
                },
                setExtras: function() {
                    return u
                },
                setTag: function() {
                    return f
                },
                setTags: function() {
                    return h
                },
                setUser: function() {
                    return p
                },
                startTransaction: function() {
                    return g
                },
                withScope: function() {
                    return _
                }
            });
            var r = n("369590");

            function i(t, e) {
                return (0, r.getCurrentHub)().captureException(t, {
                    captureContext: e
                })
            }

            function a(t, e) {
                let n = "string" == typeof e ? e : void 0,
                    i = "string" != typeof e ? {
                        captureContext: e
                    } : void 0;
                return (0, r.getCurrentHub)().captureMessage(t, n, i)
            }

            function s(t, e) {
                return (0, r.getCurrentHub)().captureEvent(t, e)
            }

            function o(t) {
                (0, r.getCurrentHub)().configureScope(t)
            }

            function c(t) {
                (0, r.getCurrentHub)().addBreadcrumb(t)
            }

            function l(t, e) {
                (0, r.getCurrentHub)().setContext(t, e)
            }

            function u(t) {
                (0, r.getCurrentHub)().setExtras(t)
            }

            function d(t, e) {
                (0, r.getCurrentHub)().setExtra(t, e)
            }

            function h(t) {
                (0, r.getCurrentHub)().setTags(t)
            }

            function f(t, e) {
                (0, r.getCurrentHub)().setTag(t, e)
            }

            function p(t) {
                (0, r.getCurrentHub)().setUser(t)
            }

            function _(t) {
                (0, r.getCurrentHub)().withScope(t)
            }

            function g(t, e) {
                return (0, r.getCurrentHub)().startTransaction({
                    ...t
                }, e)
            }