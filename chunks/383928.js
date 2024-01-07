            "use strict";
            n.r(t), n.d(t, {
                validateTransportType: function() {
                    return i
                }
            });
            var a = n("861309"),
                s = n("492249");

            function i(e) {
                if (s.TransportTypes.IPC !== e && s.TransportTypes.POST_MESSAGE !== e) throw new a.default(s.RPCErrors.INVALID_COMMAND, "Invalid transport.")
            }