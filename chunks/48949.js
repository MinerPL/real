            "use strict";
            n.r(e), n.d(e, {
                makeMultiplexedTransport: function() {
                    return s
                }
            }), n("424973"), n("222007");
            var r = n("103787"),
                i = n("356739");

            function a(t, e) {
                let n;
                return (0, r.forEachEnvelopeItem)(t, (t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n)), n
            }

            function s(t, e) {
                return n => {
                    let s = t(n),
                        o = {};

                    function c(e, s) {
                        let c = s ? "".concat(e, ":").concat(s) : e;
                        if (!o[c]) {
                            var l, u;
                            let d = (0, r.dsnFromString)(e);
                            if (!d) return;
                            let h = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(d);
                            o[c] = s ? (l = t, u = s, t => {
                                let e = l(t);
                                return {
                                    send: async t => {
                                        let n = a(t, ["event", "transaction", "profile", "replay_event"]);
                                        return n && (n.release = u), e.send(t)
                                    },
                                    flush: t => e.flush(t)
                                }
                            })({
                                ...n,
                                url: h
                            }) : t({
                                ...n,
                                url: h
                            })
                        }
                        return o[c]
                    }
                    return {
                        send: async function t(t) {
                            let n = e({
                                envelope: t,
                                getEvent: function(e) {
                                    let n = e && e.length ? e : ["event"];
                                    return a(t, n)
                                }
                            }).map(t => "string" == typeof t ? c(t, void 0) : c(t.dsn, t.release)).filter(t => !!t);
                            0 === n.length && n.push(s);
                            let r = await Promise.all(n.map(e => e.send(t)));
                            return r[0]
                        },
                        flush: async function t(t) {
                            let e = [...Object.keys(o).map(t => o[t]), s],
                                n = await Promise.all(e.map(e => e.flush(t)));
                            return n.every(t => t)
                        }
                    }
                }
            }