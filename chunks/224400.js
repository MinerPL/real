            "use strict";
            n.r(t), n.d(t, {
                getPurchaseToken: function() {
                    return u
                },
                getPurchaseTokenHash: function() {
                    return a
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
            var r = n("748820"),
                i = n("95410");
            let l = "purchase_token";

            function u() {
                let e = i.default.get(l);
                if (null != e && e.expires >= Date.now()) return e.purchaseToken;
                let t = (0, r.v4)();
                return i.default.set(l, {
                    purchaseToken: t,
                    expires: Date.now() + 5184e6
                }), t
            }
            async function a() {
                let e = new Uint8Array(u().split("").map(e => e.charCodeAt(0))),
                    t = await window.crypto.subtle.digest({
                        name: "SHA-256"
                    }, e);
                return btoa(String.fromCharCode(...new Uint8Array(t)))
            }