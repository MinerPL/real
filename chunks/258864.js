            "use strict";
            n.r(t), n.d(t, {
                PremiumMarketingComponentProperties: function() {
                    return l
                }
            }), n("222007"), n("70102");
            var a = n("849266"),
                s = n("105110");
            class i extends a.MessageType {
                create(e) {
                    let t = {
                        properties: {
                            oneofKind: void 0
                        }
                    };
                    return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
                }
                internalBinaryRead(e, t, n, i) {
                    let l = null != i ? i : this.create(),
                        r = e.pos + t;
                    for (; e.pos < r;) {
                        let [t, i] = e.tag();
                        switch (t) {
                            case 1:
                                l.properties = {
                                    oneofKind: "placeholder",
                                    placeholder: e.string()
                                };
                                break;
                            case 2:
                                l.properties = {
                                    oneofKind: "announcementModalVariant1",
                                    announcementModalVariant1: s.AnnouncementModalVariant1Properties.internalBinaryRead(e, e.uint32(), n, l.properties.announcementModalVariant1)
                                };
                                break;
                            default:
                                let r = n.readUnknownField;
                                if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                                let o = e.skip(i);
                                !1 !== r && (!0 === r ? a.UnknownFieldHandler.onRead : r)(this.typeName, l, t, i, o)
                        }
                    }
                    return l
                }
                internalBinaryWrite(e, t, n) {
                    "placeholder" === e.properties.oneofKind && t.tag(1, a.WireType.LengthDelimited).string(e.properties.placeholder), "announcementModalVariant1" === e.properties.oneofKind && s.AnnouncementModalVariant1Properties.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, a.WireType.LengthDelimited).fork(), n).join();
                    let i = n.writeUnknownFields;
                    return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
                }
                constructor() {
                    super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [{
                        no: 1,
                        name: "placeholder",
                        kind: "scalar",
                        oneof: "properties",
                        T: 9
                    }, {
                        no: 2,
                        name: "announcement_modal_variant_1",
                        kind: "message",
                        oneof: "properties",
                        T: () => s.AnnouncementModalVariant1Properties
                    }])
                }
            }
            let l = new i