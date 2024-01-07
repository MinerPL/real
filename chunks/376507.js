            "use strict";

            function n(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    r = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    n = atob(r),
                    s = new ArrayBuffer(n.length),
                    i = new Uint8Array(s);
                for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
                return s
            }

            function s(e) {
                let t = new Uint8Array(e),
                    r = "";
                for (let e of t) r += String.fromCharCode(e);
                let n = btoa(r),
                    s = n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return s
            }
            r.r(t), r.d(t, {
                create: function() {
                    return N
                },
                get: function() {
                    return D
                }
            }), r("781738"), r("101997"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("222007"), r("70102");
            var i = "copy",
                a = "convert";

            function o(e, t, r) {
                if (t === i) return r;
                if (t === a) return e(r);
                if (t instanceof Array) return r.map(r => o(e, t[0], r));
                if (t instanceof Object) {
                    let n = {};
                    for (let [s, i] of Object.entries(t)) {
                        if (i.derive) {
                            let e = i.derive(r);
                            void 0 !== e && (r[s] = e)
                        }
                        if (!(s in r)) {
                            if (i.required) throw Error("Missing key: ".concat(s));
                            continue
                        }
                        if (null == r[s]) {
                            n[s] = null;
                            continue
                        }
                        n[s] = o(e, i.schema, r[s])
                    }
                    return n
                }
            }

            function u(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function l(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function d(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var E = {
                    type: l(i),
                    id: l(a),
                    transports: d(i)
                },
                _ = {
                    appid: d(i),
                    appidExclude: d(i),
                    credProps: d(i)
                },
                c = {
                    appid: d(i),
                    appidExclude: d(i),
                    credProps: d(i)
                },
                I = {
                    publicKey: l({
                        rp: l(i),
                        user: l({
                            id: l(a),
                            name: l(i),
                            displayName: l(i)
                        }),
                        challenge: l(a),
                        pubKeyCredParams: l(i),
                        timeout: d(i),
                        excludeCredentials: d([E]),
                        authenticatorSelection: d(i),
                        attestation: d(i),
                        extensions: d(_)
                    }),
                    signal: d(i)
                },
                R = {
                    type: l(i),
                    id: l(i),
                    rawId: l(a),
                    authenticatorAttachment: d(i),
                    response: l({
                        clientDataJSON: l(a),
                        attestationObject: l(a),
                        transports: u(i, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: u(c, e => e.getClientExtensionResults())
                },
                f = {
                    mediation: d(i),
                    publicKey: l({
                        challenge: l(a),
                        timeout: d(i),
                        rpId: d(i),
                        allowCredentials: d([E]),
                        userVerification: d(i),
                        extensions: d(_)
                    }),
                    signal: d(i)
                },
                A = {
                    type: l(i),
                    id: l(i),
                    rawId: l(a),
                    authenticatorAttachment: d(i),
                    response: l({
                        clientDataJSON: l(a),
                        authenticatorData: l(a),
                        signature: l(a),
                        userHandle: l(a)
                    }),
                    clientExtensionResults: u(c, e => e.getClientExtensionResults())
                };
            async function N(e) {
                let t = await navigator.credentials.create(o(n, I, e));
                return o(s, R, t)
            }
            async function D(e) {
                let t = await navigator.credentials.get(o(n, f, e));
                return o(s, A, t)
            }