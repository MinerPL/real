            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("446674"),
                s = n("913144"),
                l = n("692038"),
                i = n("697218"),
                r = n("288518"),
                o = n("486503");
            let u = {},
                d = new Set;

            function c(e) {
                return r.default.isMessageRequest(e) || o.default.isSpam(e)
            }

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!c(e) || null != t && e !== (null == t ? void 0 : t.channel_id)) return;
                let a = null == t ? null : (0, l.createMessageRecord)(t);
                u[e] = {
                    loaded: !0,
                    error: n,
                    message: a
                }
            }
            class h extends a.default.Store {
                initialize() {
                    this.waitFor(r.default, o.default, i.default)
                }
                shouldLoadMessageRequestPreview(e) {
                    return !d.has(e)
                }
                getMessageRequestPreview(e) {
                    return !(e in u) && (u[e] = {
                        loaded: !1,
                        error: !1,
                        message: null
                    }), u[e]
                }
            }
            h.displayName = "MessageRequestPreviewStore";
            var C = new h(s.default, {
                CONNECTION_OPEN: function() {
                    u = {}, d.clear()
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    c(t.id) && d.add(t.id)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) !c(e.id) && (d.delete(e.id), delete u[e.id])
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    d.delete(t.id), delete u[t.id]
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification) return !1;
                    f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.channel_id;
                    if (null == t) return !1;
                    let n = u[t];
                    if (null == n || null == n.message) return !1;
                    u[t] = {
                        ...n,
                        message: (0, l.updateMessageRecord)(n.message, e.message)
                    }
                },
                MESSAGE_DELETE: function(e) {
                    if (!c(e.channelId)) return !1;
                    u[e.channelId] = {
                        loaded: !0,
                        error: !1,
                        message: null
                    }
                },
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
                    let {
                        requestedChannelIds: t,
                        supplementalData: n
                    } = e, a = new Set([...t]);
                    for (let e of (n.forEach(e => {
                            f(e.channel_id, e.message_preview), a.delete(e.channel_id)
                        }), Array.from(a))) f(e, null)
                },
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function(e) {
                    let {
                        requestedChannelIds: t
                    } = e;
                    t.forEach(e => {
                        f(e, null, !0)
                    })
                }
            })