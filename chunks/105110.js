            "use strict";
            n.r(t), n.d(t, {
                ButtonAction: function() {
                    return a
                },
                AnnouncementModalVariant1Properties: function() {
                    return c
                }
            }), n("222007"), n("70102"), n("424973");
            var a, s, i = n("849266");
            (s = a || (a = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.OPEN_MARKETING_PAGE = 1] = "OPEN_MARKETING_PAGE", s[s.OPEN_TIER_2_PAYMENT_MODAL = 2] = "OPEN_TIER_2_PAYMENT_MODAL";
            class l extends i.MessageType {
                create(e) {
                    let t = {
                        header: "",
                        pill: "",
                        body: "",
                        imageLink: "",
                        imageLinkLightTheme: ""
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
                internalBinaryRead(e, t, n, a) {
                    let s = null != a ? a : this.create(),
                        l = e.pos + t;
                    for (; e.pos < l;) {
                        let [t, a] = e.tag();
                        switch (t) {
                            case 1:
                                s.header = e.string();
                                break;
                            case 2:
                                s.pill = e.string();
                                break;
                            case 3:
                                s.body = e.string();
                                break;
                            case 4:
                                s.imageLink = e.string();
                                break;
                            case 5:
                                s.imageLinkLightTheme = e.string();
                                break;
                            default:
                                let l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(a, ") for ").concat(this.typeName));
                                let r = e.skip(a);
                                !1 !== l && (!0 === l ? i.UnknownFieldHandler.onRead : l)(this.typeName, s, t, a, r)
                        }
                    }
                    return s
                }
                internalBinaryWrite(e, t, n) {
                    "" !== e.header && t.tag(1, i.WireType.LengthDelimited).string(e.header), "" !== e.pill && t.tag(2, i.WireType.LengthDelimited).string(e.pill), "" !== e.body && t.tag(3, i.WireType.LengthDelimited).string(e.body), "" !== e.imageLink && t.tag(4, i.WireType.LengthDelimited).string(e.imageLink), "" !== e.imageLinkLightTheme && t.tag(5, i.WireType.LengthDelimited).string(e.imageLinkLightTheme);
                    let a = n.writeUnknownFields;
                    return !1 !== a && (!0 == a ? i.UnknownFieldHandler.onWrite : a)(this.typeName, e, t), t
                }
                constructor() {
                    super("discord_protos.premium_marketing.v1.FeatureCard", [{
                        no: 1,
                        name: "header",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 2,
                        name: "pill",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 3,
                        name: "body",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 4,
                        name: "image_link",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 5,
                        name: "image_link_light_theme",
                        kind: "scalar",
                        T: 9
                    }])
                }
            }
            let r = new l;
            class o extends i.MessageType {
                create(e) {
                    let t = {
                        copy: "",
                        buttonAction: 0
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
                internalBinaryRead(e, t, n, a) {
                    let s = null != a ? a : this.create(),
                        l = e.pos + t;
                    for (; e.pos < l;) {
                        let [t, a] = e.tag();
                        switch (t) {
                            case 1:
                                s.copy = e.string();
                                break;
                            case 2:
                                s.buttonAction = e.int32();
                                break;
                            default:
                                let l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(a, ") for ").concat(this.typeName));
                                let r = e.skip(a);
                                !1 !== l && (!0 === l ? i.UnknownFieldHandler.onRead : l)(this.typeName, s, t, a, r)
                        }
                    }
                    return s
                }
                internalBinaryWrite(e, t, n) {
                    "" !== e.copy && t.tag(1, i.WireType.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, i.WireType.Varint).int32(e.buttonAction);
                    let a = n.writeUnknownFields;
                    return !1 !== a && (!0 == a ? i.UnknownFieldHandler.onWrite : a)(this.typeName, e, t), t
                }
                constructor() {
                    super("discord_protos.premium_marketing.v1.SubscriptionButton", [{
                        no: 1,
                        name: "copy",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 2,
                        name: "button_action",
                        kind: "enum",
                        T: () => ["discord_protos.premium_marketing.v1.ButtonAction", a, "BUTTON_ACTION_"]
                    }])
                }
            }
            let u = new o;
            class d extends i.MessageType {
                create(e) {
                    let t = {
                        header: "",
                        subheader: "",
                        videoLink: "",
                        helpArticleId: "",
                        featureCards: [],
                        dismissKey: "",
                        heroArtVideoLinkLightTheme: "",
                        heroArtImageLinkDarkTheme: "",
                        heroArtImageLinkLightTheme: ""
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
                internalBinaryRead(e, t, n, a) {
                    let s = null != a ? a : this.create(),
                        l = e.pos + t;
                    for (; e.pos < l;) {
                        let [t, a] = e.tag();
                        switch (t) {
                            case 1:
                                s.header = e.string();
                                break;
                            case 2:
                                s.subheader = e.string();
                                break;
                            case 3:
                                s.videoLink = e.string();
                                break;
                            case 4:
                                s.helpArticleId = e.string();
                                break;
                            case 5:
                                s.featureCards.push(r.internalBinaryRead(e, e.uint32(), n));
                                break;
                            case 6:
                                s.button = u.internalBinaryRead(e, e.uint32(), n, s.button);
                                break;
                            case 7:
                                s.dismissKey = e.string();
                                break;
                            case 8:
                                s.heroArtVideoLinkLightTheme = e.string();
                                break;
                            case 9:
                                s.heroArtImageLinkDarkTheme = e.string();
                                break;
                            case 10:
                                s.heroArtImageLinkLightTheme = e.string();
                                break;
                            default:
                                let l = n.readUnknownField;
                                if ("throw" === l) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(a, ") for ").concat(this.typeName));
                                let o = e.skip(a);
                                !1 !== l && (!0 === l ? i.UnknownFieldHandler.onRead : l)(this.typeName, s, t, a, o)
                        }
                    }
                    return s
                }
                internalBinaryWrite(e, t, n) {
                    "" !== e.header && t.tag(1, i.WireType.LengthDelimited).string(e.header), "" !== e.subheader && t.tag(2, i.WireType.LengthDelimited).string(e.subheader), "" !== e.videoLink && t.tag(3, i.WireType.LengthDelimited).string(e.videoLink), "" !== e.helpArticleId && t.tag(4, i.WireType.LengthDelimited).string(e.helpArticleId);
                    for (let a = 0; a < e.featureCards.length; a++) r.internalBinaryWrite(e.featureCards[a], t.tag(5, i.WireType.LengthDelimited).fork(), n).join();
                    e.button && u.internalBinaryWrite(e.button, t.tag(6, i.WireType.LengthDelimited).fork(), n).join(), "" !== e.dismissKey && t.tag(7, i.WireType.LengthDelimited).string(e.dismissKey), "" !== e.heroArtVideoLinkLightTheme && t.tag(8, i.WireType.LengthDelimited).string(e.heroArtVideoLinkLightTheme), "" !== e.heroArtImageLinkDarkTheme && t.tag(9, i.WireType.LengthDelimited).string(e.heroArtImageLinkDarkTheme), "" !== e.heroArtImageLinkLightTheme && t.tag(10, i.WireType.LengthDelimited).string(e.heroArtImageLinkLightTheme);
                    let a = n.writeUnknownFields;
                    return !1 !== a && (!0 == a ? i.UnknownFieldHandler.onWrite : a)(this.typeName, e, t), t
                }
                constructor() {
                    super("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", [{
                        no: 1,
                        name: "header",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 2,
                        name: "subheader",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 3,
                        name: "video_link",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 4,
                        name: "help_article_id",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 5,
                        name: "feature_cards",
                        kind: "message",
                        repeat: 1,
                        T: () => r
                    }, {
                        no: 6,
                        name: "button",
                        kind: "message",
                        T: () => u
                    }, {
                        no: 7,
                        name: "dismiss_key",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 8,
                        name: "hero_art_video_link_light_theme",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 9,
                        name: "hero_art_image_link_dark_theme",
                        kind: "scalar",
                        T: 9
                    }, {
                        no: 10,
                        name: "hero_art_image_link_light_theme",
                        kind: "scalar",
                        T: 9
                    }])
                }
            }
            let c = new d