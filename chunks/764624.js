            "use strict";
            var r, a, o;
            n.r(t), n.d(t, {
                UnknownFieldHandler: function() {
                    return r
                },
                WireType: function() {
                    return a
                }
            }), n("424973"), n("222007"), ! function(e) {
                e.symbol = Symbol.for("protobuf-ts/unknown"), e.onRead = (n, r, a, o, i) => {
                    (t(r) ? r[e.symbol] : r[e.symbol] = []).push({
                        no: a,
                        wireType: o,
                        data: i
                    })
                }, e.onWrite = (t, n, r) => {
                    for (let {
                            no: t,
                            wireType: a,
                            data: o
                        }
                        of e.list(n)) r.tag(t, a).raw(o)
                }, e.list = (n, r) => {
                    if (t(n)) {
                        let t = n[e.symbol];
                        return r ? t.filter(e => e.no == r) : t
                    }
                    return []
                }, e.last = (t, n) => e.list(t, n).slice(-1)[0];
                let t = t => t && Array.isArray(t[e.symbol])
            }(r || (r = {})), (o = a || (a = {}))[o.Varint = 0] = "Varint", o[o.Bit64 = 1] = "Bit64", o[o.LengthDelimited = 2] = "LengthDelimited", o[o.StartGroup = 3] = "StartGroup", o[o.EndGroup = 4] = "EndGroup", o[o.Bit32 = 5] = "Bit32"