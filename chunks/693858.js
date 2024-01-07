            "use strict";
            var r, a, o, i, l = n("289275"),
                u = n("207815"),
                s = n("362776"),
                c = n("268540"),
                d = n("605357"),
                f = n("522552"),
                p = n("350139"),
                h = n("632336"),
                m = n("169163"),
                y = n("289011"),
                v = n("708670"),
                g = n("111878"),
                b = l.setImmediate,
                _ = l.clearImmediate,
                k = l.process,
                C = l.Dispatch,
                Function = l.Function,
                MessageChannel = l.MessageChannel,
                String = l.String,
                w = 0,
                S = {},
                N = "onreadystatechange";
            f(function() {
                r = l.location
            });
            var x = function(e) {
                    if (d(S, e)) {
                        var t = S[e];
                        delete S[e], t()
                    }
                },
                P = function(e) {
                    return function() {
                        x(e)
                    }
                },
                A = function(e) {
                    x(e.data)
                },
                R = function(e) {
                    l.postMessage(String(e), r.protocol + "//" + r.host)
                };
            (!b || !_) && (b = function(e) {
                y(arguments.length, 1);
                var t = c(e) ? e : Function(e),
                    n = h(arguments, 1);
                return S[++w] = function() {
                    u(t, void 0, n)
                }, a(w), w
            }, _ = function(e) {
                delete S[e]
            }, g ? a = function(e) {
                k.nextTick(P(e))
            } : C && C.now ? a = function(e) {
                C.now(P(e))
            } : MessageChannel && !v ? (i = (o = new MessageChannel).port2, o.port1.onmessage = A, a = s(i.postMessage, i)) : l.addEventListener && c(l.postMessage) && !l.importScripts && r && "file:" !== r.protocol && !f(R) ? (a = R, l.addEventListener("message", A, !1)) : a = N in m("script") ? function(e) {
                p.appendChild(m("script"))[N] = function() {
                    p.removeChild(this), x(e)
                }
            } : function(e) {
                setTimeout(P(e), 0)
            }), e.exports = {
                set: b,
                clear: _
            }