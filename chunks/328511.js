            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("35092"),
                a = n("913144"),
                l = n("474643");
            let s = {},
                r = {};
            class u extends i.default.Store {
                getStickerPreview(e, t) {
                    let n = t === l.DraftType.FirstThreadMessage ? r : s;
                    return n[e]
                }
            }
            u.displayName = "StickerMessagePreviewStore";
            let o = new u(a.default, {
                ADD_STICKER_PREVIEW: function(e) {
                    let {
                        channelId: t,
                        sticker: n,
                        draftType: i
                    } = e, a = i === l.DraftType.FirstThreadMessage ? r : s;
                    a[t] = [n]
                },
                CLEAR_STICKER_PREVIEW: function(e) {
                    let {
                        channelId: t,
                        draftType: n
                    } = e, i = n === l.DraftType.FirstThreadMessage ? r : s;
                    null != i[t] && delete i[t]
                },
                LOGOUT: function() {
                    s = {}, r = {}
                }
            });
            var d = o