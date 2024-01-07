            "use strict";
            var i = r("37549")("%TypeError%"),
                n = r("737891"),
                o = r("504187"),
                a = r("971043"),
                s = r("701222"),
                f = r("604050"),
                h = r("300344"),
                c = r("6943"),
                u = r("552302"),
                d = r("865435");
            t.exports = function(t, e, r) {
                if ("Object" !== d(t)) throw new i("Assertion failed: Type(O) is not Object");
                if (!h(e)) throw new i("Assertion failed: IsPropertyKey(P) is not true");
                var l = n({
                    Type: d,
                    IsDataDescriptor: f,
                    IsAccessorDescriptor: s
                }, r) ? r : u(r);
                if (!n({
                        Type: d,
                        IsDataDescriptor: f,
                        IsAccessorDescriptor: s
                    }, l)) throw new i("Assertion failed: Desc is not a valid Property Descriptor");
                return o(f, c, a, t, e, l)
            }