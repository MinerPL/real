                "use strict";
                var n, r;

                function s(e) {
                    let t = 0,
                        i = [];
                    return async function() {
                        if (2 !== t) {
                            if (1 === t) return new Promise(e => {
                                i.push(e)
                            });
                            for (t = 1, await e(), t = 2; i.length > 0;) {
                                var n;
                                null === (n = i.shift()) || void 0 === n || n()
                            }
                        }
                    }
                }
                i.r(t), i.d(t, {
                    createQueuedAsyncInitializer: function() {
                        return s
                    }
                }), i("424973"), (r = n || (n = {}))[r.UNINITIALIZED = 0] = "UNINITIALIZED", r[r.INITIALIZING = 1] = "INITIALIZING", r[r.READY = 2] = "READY"