            "use strict";
            n.r(e), n.d(e, {
                addItemToEnvelope: function() {
                    return o
                },
                createAttachmentEnvelopeItem: function() {
                    return f
                },
                createEnvelope: function() {
                    return s
                },
                createEventEnvelopeHeaders: function() {
                    return m
                },
                envelopeContainsItemType: function() {
                    return l
                },
                envelopeItemTypeToDataCategory: function() {
                    return _
                },
                forEachEnvelopeItem: function() {
                    return c
                },
                getSdkMetadataForEnvelopeHeader: function() {
                    return g
                },
                parseEnvelope: function() {
                    return h
                },
                serializeEnvelope: function() {
                    return d
                }
            }), n("222007"), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("808653");
            var r = n("704391"),
                i = n("696634"),
                a = n("654069");

            function s(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return [t, e]
            }

            function o(t, e) {
                let [n, r] = t;
                return [n, [...r, e]]
            }

            function c(t, e) {
                let n = t[1];
                for (let t of n) {
                    let n = t[0].type,
                        r = e(t, n);
                    if (r) return !0
                }
                return !1
            }

            function l(t, e) {
                return c(t, (t, n) => e.includes(n))
            }

            function u(t, e) {
                let n = e || new TextEncoder;
                return n.encode(t)
            }

            function d(t, e) {
                let [n, r] = t, a = JSON.stringify(n);

                function s(t) {
                    "string" == typeof a ? a = "string" == typeof t ? a + t : [u(a, e), t] : a.push("string" == typeof t ? u(t, e) : t)
                }
                for (let t of r) {
                    let [e, n] = t;
                    if (s("\n".concat(JSON.stringify(e), "\n")), "string" == typeof n || n instanceof Uint8Array) s(n);
                    else {
                        let t;
                        try {
                            t = JSON.stringify(n)
                        } catch (e) {
                            t = JSON.stringify((0, i.normalize)(n))
                        }
                        s(t)
                    }
                }
                return "string" == typeof a ? a : function(t) {
                    let e = t.reduce((t, e) => t + e.length, 0),
                        n = new Uint8Array(e),
                        r = 0;
                    for (let e of t) n.set(e, r), r += e.length;
                    return n
                }(a)
            }

            function h(t, e, n) {
                let r = "string" == typeof t ? e.encode(t) : t;

                function i(t) {
                    let e = r.subarray(0, t);
                    return r = r.subarray(t + 1), e
                }

                function a() {
                    let t = r.indexOf(10);
                    return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)))
                }
                let s = a(),
                    o = [];
                for (; r.length;) {
                    let t = a(),
                        e = "number" == typeof t.length ? t.length : void 0;
                    o.push([t, e ? i(e) : a()])
                }
                return [s, o]
            }

            function f(t, e) {
                let n = "string" == typeof t.data ? u(t.data, e) : t.data;
                return [(0, a.dropUndefinedKeys)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            let p = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay",
                check_in: "monitor"
            };

            function _(t) {
                return p[t]
            }

            function g(t) {
                if (!t || !t.sdk) return;
                let {
                    name: e,
                    version: n
                } = t.sdk;
                return {
                    name: e,
                    version: n
                }
            }

            function m(t, e, n, i) {
                let s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: t.event_id,
                    sent_at: new Date().toISOString(),
                    ...e && {
                        sdk: e
                    },
                    ...!!n && {
                        dsn: (0, r.dsnToString)(i)
                    },
                    ...s && {
                        trace: (0, a.dropUndefinedKeys)({
                            ...s
                        })
                    }
                }
            }