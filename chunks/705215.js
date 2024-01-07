            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("70102");
            var i = n("197881"),
                a = n("338580");
            let l = (0, a.getErlpackEncoding)();
            class s {
                pack(e) {
                    return JSON.stringify(e)
                }
                unpack(e) {
                    if ("string" != typeof e) throw Error("Expected a string to be passed to JSONEncoding.unpack, got ".concat(null == e ? null : typeof e));
                    return JSON.parse(e)
                }
                getName() {
                    return "json"
                }
                wantsString() {
                    return !0
                }
            }
            let r = void 0 !== l ? l : s;
            i.ProcessArgs.isDiscordGatewayPlaintextSet() && (r = s);
            var u = r