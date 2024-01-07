            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("149022"),
                i = n("884351"),
                r = n("845579"),
                d = n("377253");
            let u = {},
                o = {};
            class c extends a.default.Store {
                isEditing(e, t) {
                    var n;
                    return (null === (n = u[e]) || void 0 === n ? void 0 : n.messageId) === t
                }
                isEditingAny(e) {
                    return null != u[e]
                }
                getEditingTextValue(e) {
                    var t;
                    return null === (t = u[e]) || void 0 === t ? void 0 : t.textValue
                }
                getEditingRichValue(e) {
                    var t;
                    return null === (t = u[e]) || void 0 === t ? void 0 : t.richValue
                }
                getEditingMessageId(e) {
                    var t;
                    return null === (t = u[e]) || void 0 === t ? void 0 : t.messageId
                }
                getEditingMessage(e) {
                    let t = u[e];
                    return null != t && null != t.messageId ? d.default.getMessage(e, t.messageId) : null
                }
                getEditActionSource(e) {
                    return o[e]
                }
            }
            c.displayName = "EditMessageStore";
            var E = new c(l.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: a,
                        source: l
                    } = e, d = r.UseLegacyChatInput.getSetting(), c = i.default.unparse(a, t);
                    u[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: c,
                        richValue: (0, s.toRichValue)(d ? c : a)
                    }, o[t] = l
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: a
                    } = e, l = u[t];
                    if (null == l) return !1;
                    u[t] = {
                        ...l,
                        textValue: n,
                        richValue: a
                    }
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || null == u[t]) return !1;
                    delete u[t], delete o[t]
                }
            })