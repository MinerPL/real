            "use strict";

            function n() {
                return {
                    get(t, e) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: () => Promise.resolve()
                            },
                            n = e();
                        return n.then(t => Promise.all([t, r.miss(t)])).then(t => {
                            let [e] = t;
                            return e
                        })
                    },
                    set: (t, e) => Promise.resolve(e),
                    delete: t => Promise.resolve(),
                    clear: () => Promise.resolve()
                }
            }
            r.r(e), r.d(e, {
                createNullCache: function() {
                    return n
                }
            }), r("222007")