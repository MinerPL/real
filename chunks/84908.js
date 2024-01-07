            "use strict";
            var a, n, l, i, r, o, d, u;
            s.r(t), s.d(t, {
                SpeedTestStates: function() {
                    return a
                },
                SpeedTestDirections: function() {
                    return n
                },
                SpeedTestLifecycles: function() {
                    return l
                },
                SpeedTestOpcodes: function() {
                    return i
                }
            }), (r = a || (a = {})).STARTING_RECEIVER = "STARTING_RECEIVER", r.SENDING = "SENDING", r.AWAITING_RESULTS = "AWAITING_RESULTS", r.COMPLETED = "COMPLETED", (o = n || (n = {})).CLIENT_TO_SERVER = "CLIENT_TO_SERVER", o.SERVER_TO_CLIENT = "SERVER_TO_CLIENT", (d = l || (l = {}))[d.INACTIVE = 0] = "INACTIVE", d[d.CANCELLED = 1] = "CANCELLED", d[d.AWAITING_ENDPOINT = 2] = "AWAITING_ENDPOINT", d[d.CONNECTING = 3] = "CONNECTING", d[d.PINGING = 4] = "PINGING", d[d.TESTING = 5] = "TESTING", d[d.UPLOADING = 6] = "UPLOADING", d[d.COMPLETED = 7] = "COMPLETED", (u = i || (i = {}))[u.CLIENT_TO_SERVER_START = 0] = "CLIENT_TO_SERVER_START", u[u.CLIENT_TO_SERVER_END = 1] = "CLIENT_TO_SERVER_END", u[u.SERVER_TO_CLIENT_START = 2] = "SERVER_TO_CLIENT_START", u[u.SERVER_TO_CLIENT_END = 3] = "SERVER_TO_CLIENT_END"