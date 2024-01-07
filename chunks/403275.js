            "use strict";
            n.r(t), n.d(t, {
                deprecatedCommand: function() {
                    return i
                }
            });
            var a = n("861309"),
                s = n("492249");
            let i = {
                handler(e) {
                    throw new a.default(s.RPCErrors.INVALID_COMMAND, "Deprecated command: ".concat(e.cmd))
                }
            }