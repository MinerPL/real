            "use strict";
            let r;
            n.r(e), n.d(e, {
                FunctionToString: function() {
                    return a
                }
            });
            var i = n("103787");
            class a {
                static __initStatic() {
                    this.id = "FunctionToString"
                }
                __init() {
                    this.name = a.id
                }
                setupOnce() {
                    r = Function.prototype.toString;
                    try {
                        Function.prototype.toString = function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            let a = (0, i.getOriginalFunction)(this) || this;
                            return r.apply(a, e)
                        }
                    } catch (t) {}
                }
                constructor() {
                    a.prototype.__init.call(this)
                }
            }
            a.__initStatic()