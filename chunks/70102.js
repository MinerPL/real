            "use strict";
            var e = n("859514"),
                i = n("503486"),
                u = n("145661"),
                o = n("802490"),
                c = "WebAssembly",
                WebAssembly = i[c],
                a = 7 !== Error("e", {
                    cause: 7
                }).cause,
                s = function(t, r) {
                    var n = {};
                    n[t] = o(t, r, a), e({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: a
                    }, n)
                },
                f = function(t, r) {
                    if (WebAssembly && WebAssembly[t]) {
                        var n = {};
                        n[t] = o(c + "." + t, r, a), e({
                            target: c,
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: a
                        }, n)
                    }
                };
            s("Error", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), s("EvalError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), s("RangeError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), s("ReferenceError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), s("SyntaxError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), s("TypeError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), s("URIError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), f("CompileError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), f("LinkError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            }), f("RuntimeError", function(t) {
                return function(r) {
                    return u(t, this, arguments)
                }
            })