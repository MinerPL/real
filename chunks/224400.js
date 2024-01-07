            "use strict";
            n.r(e), n.d(e, {
                getPurchaseToken: function() {
                    return o
                },
                getPurchaseTokenHash: function() {
                    return l
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
            var r = n("748820"),
                a = n("95410");
            let i = "purchase_token";

            function o() {
                let t = a.default.get(i);
                if (null != t && t.expires >= Date.now()) return t.purchaseToken;
                let e = (0, r.v4)();
                return a.default.set(i, {
                    purchaseToken: e,
                    expires: Date.now() + 5184e6
                }), e
            }
            async function l() {
                let t = new Uint8Array(o().split("").map(t => t.charCodeAt(0))),
                    e = await window.crypto.subtle.digest({
                        name: "SHA-256"
                    }, t);
                return btoa(String.fromCharCode(...new Uint8Array(e)))
            }