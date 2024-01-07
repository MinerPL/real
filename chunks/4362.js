            "use strict";
            n.r(e), n.d(e, {
                eventFromException: function() {
                    return l
                },
                eventFromMessage: function() {
                    return u
                },
                eventFromUnknownInput: function() {
                    return d
                },
                exceptionFromError: function() {
                    return a
                }
            }), n("222007");
            var r = n("675065"),
                i = n("103787");

            function a(t, e) {
                let n = o(t, e),
                    r = {
                        type: e && e.name,
                        value: function(t) {
                            let e = t && t.message;
                            return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
                        }(e)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function s(t, e) {
                return {
                    exception: {
                        values: [a(t, e)]
                    }
                }
            }

            function o(t, e) {
                let n = e.stacktrace || e.stack || "",
                    r = function(t) {
                        if (t) {
                            if ("number" == typeof t.framesToPop) return t.framesToPop;
                            if (c.test(t.message)) return 1
                        }
                        return 0
                    }(e);
                try {
                    return t(n, r)
                } catch (t) {}
                return []
            }
            let c = /Minified React error #\d+;/i;

            function l(t, e, n, r) {
                let a = n && n.syntheticException || void 0,
                    s = d(t, e, a, r);
                return (0, i.addExceptionMechanism)(s), s.level = "error", n && n.event_id && (s.event_id = n.event_id), (0, i.resolvedSyncPromise)(s)
            }

            function u(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    s = r && r.syntheticException || void 0,
                    o = h(t, e, s, a);
                return o.level = n, r && r.event_id && (o.event_id = r.event_id), (0, i.resolvedSyncPromise)(o)
            }

            function d(t, e, n, a, c) {
                let l;
                if ((0, i.isErrorEvent)(e) && e.error) return s(t, e.error);
                if ((0, i.isDOMError)(e) || (0, i.isDOMException)(e)) {
                    if ("stack" in e) l = s(t, e);
                    else {
                        let r = e.name || ((0, i.isDOMError)(e) ? "DOMError" : "DOMException"),
                            s = e.message ? "".concat(r, ": ").concat(e.message) : r;
                        l = h(t, s, n, a), (0, i.addExceptionTypeValue)(l, s)
                    }
                    return "code" in e && (l.tags = {
                        ...l.tags,
                        "DOMException.code": "".concat(e.code)
                    }), l
                }
                return (0, i.isError)(e) ? s(t, e) : (0, i.isPlainObject)(e) || (0, i.isEvent)(e) ? (l = function(t, e, n, a) {
                    let s = (0, r.getCurrentHub)(),
                        c = s.getClient(),
                        l = c && c.getOptions().normalizeDepth,
                        u = {
                            exception: {
                                values: [{
                                    type: (0, i.isEvent)(e) ? e.constructor.name : a ? "UnhandledRejection" : "Error",
                                    value: function(t, e) {
                                        let {
                                            isUnhandledRejection: n
                                        } = e, r = (0, i.extractExceptionKeysForMessage)(t), a = n ? "promise rejection" : "exception";
                                        if ((0, i.isErrorEvent)(t)) return "Event `ErrorEvent` captured as ".concat(a, " with message `").concat(t.message, "`");
                                        if ((0, i.isEvent)(t)) {
                                            let e = function(t) {
                                                try {
                                                    let e = Object.getPrototypeOf(t);
                                                    return e ? e.constructor.name : void 0
                                                } catch (t) {}
                                            }(t);
                                            return "Event `".concat(e, "` (type=").concat(t.type, ") captured as ").concat(a)
                                        }
                                        return "Object captured as ".concat(a, " with keys: ").concat(r)
                                    }(e, {
                                        isUnhandledRejection: a
                                    })
                                }]
                            },
                            extra: {
                                __serialized__: (0, i.normalizeToSize)(e, l)
                            }
                        };
                    if (n) {
                        let e = o(t, n);
                        e.length && (u.exception.values[0].stacktrace = {
                            frames: e
                        })
                    }
                    return u
                }(t, e, n, c), (0, i.addExceptionMechanism)(l, {
                    synthetic: !0
                }), l) : (l = h(t, e, n, a), (0, i.addExceptionTypeValue)(l, "".concat(e), void 0), (0, i.addExceptionMechanism)(l, {
                    synthetic: !0
                }), l)
            }

            function h(t, e, n, r) {
                let i = {
                    message: e
                };
                if (r && n) {
                    let r = o(t, n);
                    r.length && (i.exception = {
                        values: [{
                            value: e,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    })
                }
                return i
            }