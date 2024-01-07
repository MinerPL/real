                "use strict";
                var e = r("859514"),
                    o = r("503486"),
                    u = r("145661"),
                    i = r("802490"),
                    c = "WebAssembly",
                    WebAssembly = o[c],
                    f = 7 !== Error("e", {
                        cause: 7
                    }).cause,
                    s = function(t, n) {
                        var r = {};
                        r[t] = i(t, n, f), e({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: f
                        }, r)
                    },
                    a = function(t, n) {
                        if (WebAssembly && WebAssembly[t]) {
                            var r = {};
                            r[t] = i(c + "." + t, n, f), e({
                                target: c,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: f
                            }, r)
                        }
                    };
                s("Error", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("EvalError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("RangeError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("ReferenceError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("SyntaxError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("TypeError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("URIError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), a("CompileError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), a("LinkError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), a("RuntimeError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                })