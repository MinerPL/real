            "use strict";
            n.r(e), n.d(e, {
                TryCatch: function() {
                    return s
                }
            });
            var r = n("103787"),
                i = n("714090");
            let a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            class s {
                static __initStatic() {
                    this.id = "TryCatch"
                }
                __init() {
                    this.name = s.id
                }
                setupOnce() {
                    this._options.setTimeout && (0, r.fill)(i.WINDOW, "setTimeout", o), this._options.setInterval && (0, r.fill)(i.WINDOW, "setInterval", o), this._options.requestAnimationFrame && (0, r.fill)(i.WINDOW, "requestAnimationFrame", c), this._options.XMLHttpRequest && "XMLHttpRequest" in i.WINDOW && (0, r.fill)(XMLHttpRequest.prototype, "send", l);
                    let t = this._options.eventTarget;
                    if (t) {
                        let e = Array.isArray(t) ? t : a;
                        e.forEach(u)
                    }
                }
                constructor(t) {
                    s.prototype.__init.call(this), this._options = {
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0,
                        ...t
                    }
                }
            }

            function o(t) {
                return function() {
                    for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    let s = n[0];
                    return n[0] = (0, i.wrap)(s, {
                        mechanism: {
                            data: {
                                function: (0, r.getFunctionName)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, n)
                }
            }

            function c(t) {
                return function(e) {
                    return t.apply(this, [(0, i.wrap)(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0, r.getFunctionName)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    })])
                }
            }

            function l(t) {
                return function() {
                    for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    let s = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(t => {
                        t in s && "function" == typeof s[t] && (0, r.fill)(s, t, function(e) {
                            let n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: (0, r.getFunctionName)(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                a = (0, r.getOriginalFunction)(e);
                            return a && (n.mechanism.data.handler = (0, r.getFunctionName)(a)), (0, i.wrap)(e, n)
                        })
                    }), t.apply(this, n)
                }
            }

            function u(t) {
                let e = i.WINDOW,
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, r.fill)(n, "addEventListener", function(e) {
                    return function(n, a, s) {
                        try {
                            "function" == typeof a.handleEvent && (a.handleEvent = (0, i.wrap)(a.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0, r.getFunctionName)(a),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.apply(this, [n, (0, i.wrap)(a, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0, r.getFunctionName)(a),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), s])
                    }
                }), (0, r.fill)(n, "removeEventListener", function(t) {
                    return function(e, n, r) {
                        try {
                            let i = n && n.__sentry_wrapped__;
                            i && t.call(this, e, i, r)
                        } catch (t) {}
                        return t.call(this, e, n, r)
                    }
                }))
            }
            s.__initStatic()