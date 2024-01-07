            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a, s = n("917351"),
                i = n.n(s),
                l = n("861309"),
                r = n("49111");
            a = class {
                constructor(e, t, n) {
                    if (this.transport = e, this.version = t, this.encoding = n, this.id = i.uniqueId(), this.authorization = {
                            authing: !1,
                            scopes: [],
                            accessToken: null,
                            expires: new Date(0)
                        }, this.application = {
                            id: null,
                            name: null,
                            icon: null
                        }, null == t || t > r.RPC_VERSION || t < 1) throw new l.default(r.RPCCloseCodes.INVALID_VERSION, "Invalid Version: ".concat(t))
                }
            }