            "use strict";
            n.r(e), n.d(e, {
                LinkedErrors: function() {
                    return a
                }
            }), n("854508");
            var r = n("103787"),
                i = n("4362");
            class a {
                static __initStatic() {
                    this.id = "LinkedErrors"
                }
                __init() {
                    this.name = a.id
                }
                setupOnce(t, e) {
                    t((t, n) => {
                        let s = e(),
                            o = s.getClient(),
                            c = s.getIntegration(a);
                        if (!o || !c) return t;
                        let l = o.getOptions();
                        return (0, r.applyAggregateErrorsToEvent)(i.exceptionFromError, l.stackParser, l.maxValueLength, c._key, c._limit, t, n), t
                    })
                }
                constructor(t = {}) {
                    a.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
                }
            }
            a.__initStatic()