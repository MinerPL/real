            "use strict";
            n.r(t), n.d(t, {
                ReflectionJsonWriter: function() {
                    return s
                }
            }), n("222007"), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var r = n("537502"),
                a = n("497557"),
                o = n("803628"),
                i = n("759780");
            class s {
                write(e, t) {
                    let n = {};
                    for (let r of this.fields) {
                        if (!r.oneof) {
                            let a = this.field(r, e[r.localName], t);
                            void 0 !== a && (n[t.useProtoFieldName ? r.name : r.jsonName] = a);
                            continue
                        }
                        let a = e[r.oneof];
                        if (a.oneofKind !== r.localName) continue;
                        let o = "scalar" == r.kind || "enum" == r.kind ? Object.assign(Object.assign({}, t), {
                                emitDefaultValues: !0
                            }) : t,
                            s = this.field(r, a[r.localName], o);
                        (0, i.assert)(void 0 !== s), n[t.useProtoFieldName ? r.name : r.jsonName] = s
                    }
                    return n
                }
                field(e, t, n) {
                    let r;
                    if ("map" == e.kind) {
                        (0, i.assert)("object" == typeof t && null !== t);
                        let a = {};
                        switch (e.V.kind) {
                            case "scalar":
                                for (let [n, r] of Object.entries(t)) {
                                    let t = this.scalar(e.V.T, r, e.name, !1, !0);
                                    (0, i.assert)(void 0 !== t), a[n.toString()] = t
                                }
                                break;
                            case "message":
                                let o = e.V.T();
                                for (let [r, s] of Object.entries(t)) {
                                    let t = this.message(o, s, e.name, n);
                                    (0, i.assert)(void 0 !== t), a[r.toString()] = t
                                }
                                break;
                            case "enum":
                                let s = e.V.T();
                                for (let [r, o] of Object.entries(t)) {
                                    (0, i.assert)(void 0 === o || "number" == typeof o);
                                    let t = this.enum(s, o, e.name, !1, !0, n.enumAsInteger);
                                    (0, i.assert)(void 0 !== t), a[r.toString()] = t
                                }
                        }(n.emitDefaultValues || Object.keys(a).length > 0) && (r = a)
                    } else if (e.repeat) {
                        (0, i.assert)(Array.isArray(t));
                        let a = [];
                        switch (e.kind) {
                            case "scalar":
                                for (let n = 0; n < t.length; n++) {
                                    let r = this.scalar(e.T, t[n], e.name, e.opt, !0);
                                    (0, i.assert)(void 0 !== r), a.push(r)
                                }
                                break;
                            case "enum":
                                let o = e.T();
                                for (let r = 0; r < t.length; r++) {
                                    (0, i.assert)(void 0 === t[r] || "number" == typeof t[r]);
                                    let s = this.enum(o, t[r], e.name, e.opt, !0, n.enumAsInteger);
                                    (0, i.assert)(void 0 !== s), a.push(s)
                                }
                                break;
                            case "message":
                                let s = e.T();
                                for (let r = 0; r < t.length; r++) {
                                    let o = this.message(s, t[r], e.name, n);
                                    (0, i.assert)(void 0 !== o), a.push(o)
                                }
                        }(n.emitDefaultValues || a.length > 0 || n.emitDefaultValues) && (r = a)
                    } else switch (e.kind) {
                        case "scalar":
                            r = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                            break;
                        case "enum":
                            r = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                            break;
                        case "message":
                            r = this.message(e.T(), t, e.name, n)
                    }
                    return r
                }
                enum(e, t, n, r, a, o) {
                    if ("google.protobuf.NullValue" == e[0]) return null;
                    if (void 0 === t) {
                        (0, i.assert)(r);
                        return
                    }
                    if (0 !== t || a || r) return ((0, i.assert)("number" == typeof t), (0, i.assert)(Number.isInteger(t)), o || !e[1].hasOwnProperty(t)) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
                }
                message(e, t, n, r) {
                    return void 0 === t ? r.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, r)
                }
                scalar(e, t, n, s, u) {
                    if (void 0 === t) {
                        (0, i.assert)(s);
                        return
                    }
                    let l = u || s;
                    switch (e) {
                        case o.ScalarType.INT32:
                        case o.ScalarType.SFIXED32:
                        case o.ScalarType.SINT32:
                            if (0 === t) return l ? 0 : void 0;
                            return (0, i.assertInt32)(t), t;
                        case o.ScalarType.FIXED32:
                        case o.ScalarType.UINT32:
                            if (0 === t) return l ? 0 : void 0;
                            return (0, i.assertUInt32)(t), t;
                        case o.ScalarType.FLOAT:
                            (0, i.assertFloat32)(t);
                        case o.ScalarType.DOUBLE:
                            if (0 === t) return l ? 0 : void 0;
                            if ((0, i.assert)("number" == typeof t), Number.isNaN(t)) return "NaN";
                            if (t === Number.POSITIVE_INFINITY) return "Infinity";
                            if (t === Number.NEGATIVE_INFINITY) return "-Infinity";
                            return t;
                        case o.ScalarType.STRING:
                            if ("" === t) return l ? "" : void 0;
                            return (0, i.assert)("string" == typeof t), t;
                        case o.ScalarType.BOOL:
                            if (!1 === t) return !l && void 0;
                            return (0, i.assert)("boolean" == typeof t), t;
                        case o.ScalarType.UINT64:
                        case o.ScalarType.FIXED64:
                            (0, i.assert)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                            let c = a.PbULong.from(t);
                            if (c.isZero() && !l) return;
                            return c.toString();
                        case o.ScalarType.INT64:
                        case o.ScalarType.SFIXED64:
                        case o.ScalarType.SINT64:
                            (0, i.assert)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                            let d = a.PbLong.from(t);
                            if (d.isZero() && !l) return;
                            return d.toString();
                        case o.ScalarType.BYTES:
                            if ((0, i.assert)(t instanceof Uint8Array), !t.byteLength) return l ? "" : void 0;
                            return (0, r.base64encode)(t)
                    }
                }
                constructor(e) {
                    var t;
                    this.fields = null !== (t = e.fields) && void 0 !== t ? t : []
                }
            }