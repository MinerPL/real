            "use strict";
            n.r(t), n.d(t, {
                MessageType: function() {
                    return _
                }
            }), n("70102");
            var r = n("803628"),
                a = n("935070"),
                o = n("621734"),
                i = n("18719"),
                s = n("16506"),
                u = n("609217"),
                l = n("737196"),
                c = n("507721"),
                d = n("107678"),
                f = n("928163"),
                p = n("154090"),
                m = n("171742"),
                h = n("926481");
            class _ {
                create(e) {
                    let t = (0, l.reflectionCreate)(this);
                    return void 0 !== e && (0, c.reflectionMergePartial)(this, t, e), t
                }
                clone(e) {
                    let t = this.create();
                    return (0, c.reflectionMergePartial)(this, t, e), t
                }
                equals(e, t) {
                    return (0, p.reflectionEquals)(this, e, t)
                }
                is(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultCheckDepth;
                    return this.refTypeCheck.is(e, t, !1)
                }
                isAssignable(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultCheckDepth;
                    return this.refTypeCheck.is(e, t, !0)
                }
                mergePartial(e, t) {
                    (0, c.reflectionMergePartial)(this, e, t)
                }
                fromBinary(e, t) {
                    let n = (0, h.binaryReadOptions)(t);
                    return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
                }
                fromJson(e, t) {
                    return this.internalJsonRead(e, (0, f.jsonReadOptions)(t))
                }
                fromJsonString(e, t) {
                    let n = JSON.parse(e);
                    return this.fromJson(n, t)
                }
                toJson(e, t) {
                    return this.internalJsonWrite(e, (0, f.jsonWriteOptions)(t))
                }
                toJsonString(e, t) {
                    var n;
                    return JSON.stringify(this.toJson(e, t), null, null !== (n = null == t ? void 0 : t.prettySpaces) && void 0 !== n ? n : 0)
                }
                toBinary(e, t) {
                    let n = (0, m.binaryWriteOptions)(t);
                    return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
                }
                internalJsonRead(e, t, n) {
                    if (null !== e && "object" == typeof e && !Array.isArray(e)) {
                        let r = null != n ? n : this.create();
                        return this.refJsonReader.read(e, r, t), r
                    }
                    throw Error("Unable to parse message ".concat(this.typeName, " from JSON ").concat((0, d.typeofJsonValue)(e), "."))
                }
                internalJsonWrite(e, t) {
                    return this.refJsonWriter.write(e, t)
                }
                internalBinaryWrite(e, t, n) {
                    return this.refBinWriter.write(e, t, n), t
                }
                internalBinaryRead(e, t, n, r) {
                    let a = null != r ? r : this.create();
                    return this.refBinReader.read(e, a, n, t), a
                }
                constructor(e, t, n) {
                    this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(r.normalizeFieldInfo), this.options = null != n ? n : {}, this.refTypeCheck = new a.ReflectionTypeCheck(this), this.refJsonReader = new o.ReflectionJsonReader(this), this.refJsonWriter = new i.ReflectionJsonWriter(this), this.refBinReader = new s.ReflectionBinaryReader(this), this.refBinWriter = new u.ReflectionBinaryWriter(this)
                }
            }