            "use strict";
            a.r(t), a.d(t, {
                useExplicitMediaAttachmentsForMessage: function() {
                    return n
                },
                useExplicitMediaEmbedsForMessage: function() {
                    return o
                }
            });
            var s = a("65597"),
                l = a("377253"),
                i = a("447435");
            let n = (e, t, a) => {
                    var n, o;
                    let d = (0, s.default)([l.default], () => l.default.getMessage(e, t));
                    if (null == d) return [];
                    let r = void 0 !== a ? e => e.id === a : e => (0, i.isMediaObscured)({
                        type: i.ObscuredMediaTypes.Attachment,
                        media: e
                    }, (0, i.shouldRedactExplicitContent)(d));
                    return null !== (o = null == d ? void 0 : null === (n = d.attachments) || void 0 === n ? void 0 : n.filter(r)) && void 0 !== o ? o : []
                },
                o = (e, t, a) => {
                    var n, o;
                    let d = (0, s.default)([l.default], () => l.default.getMessage(e, t));
                    if (null == d) return [];
                    let r = void 0 !== a ? e => e.id === a : e => (0, i.isMediaObscured)({
                        type: i.ObscuredMediaTypes.Embed,
                        media: e
                    }, (0, i.shouldRedactExplicitContent)(d));
                    return null !== (o = null == d ? void 0 : null === (n = d.embeds) || void 0 === n ? void 0 : n.filter(r)) && void 0 !== o ? o : []
                }