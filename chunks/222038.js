            "use strict";
            s.r(t), s.d(t, {
                hasCrypto: function() {
                    return d
                },
                hasWebAuthn: function() {
                    return u
                },
                generateTotpSecret: function() {
                    return c
                },
                encodeTotpSecret: function() {
                    return S
                },
                encodeTotpSecretAsUrl: function() {
                    return E
                }
            }), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("781738");
            var a, n, l, i = s("584811");
            let r = null !== (l = null === (a = window) || void 0 === a ? void 0 : a.crypto) && void 0 !== l ? l : null === (n = window) || void 0 === n ? void 0 : n.msCrypto,
                o = "Uint8Array" in window,
                d = null != r && "getRandomValues" in r && o,
                u = "PublicKeyCredential" in window && o;

            function c() {
                var e;
                return function(e) {
                    let t = i.encode(e).toString("utf8").replace(/=/g, "");
                    return t.toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
                }((e = 20, r.getRandomValues(new Uint8Array(20))))
            }

            function S(e) {
                return e.replace(/[\s._-]+/g, "").toUpperCase()
            }

            function E(e, t) {
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
                return "otpauth://totp/".concat(encodeURI(s), ":").concat(encodeURI(e), "?secret=").concat(S(t), "&issuer=").concat(encodeURIComponent(s))
            }