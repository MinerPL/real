            "use strict";
            n.r(t), n.d(t, {
                PreviewData: function() {
                    return r
                }
            }), n("222007");
            var a = n("249654"),
                s = n("692038"),
                i = n("719926"),
                l = n("660478");
            class r {
                isLatest(e, t) {
                    return this.messageGeneration(e, t) === t
                }
                messageGeneration(e, t) {
                    let n = this.messages.get(e);
                    return null == n ? -1 / 0 : n.generation !== t && null != n.message && n.message.id === l.default.lastMessageId(e) ? (this.messages.set(e, {
                        ...n,
                        generation: t
                    }), t) : n.generation
                }
                messageId(e) {
                    var t, n;
                    let a = this.messages.get(e);
                    return null !== (n = null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null
                }
                messageRecord(e) {
                    var t;
                    let n = this.messages.get(e);
                    return null != n && null != n.message && !(n.message instanceof i.default) && (n.message = (0, s.createMessageRecord)(n.message)), null !== (t = null == n ? void 0 : n.message) && void 0 !== t ? t : null
                }
                has(e) {
                    return this.messages.has(e)
                }
                put(e, t, n) {
                    this.messages.set(e, {
                        message: t,
                        generation: n
                    })
                }
                putNew(e, t, n) {
                    var s;
                    let i = this.messages.get(e);
                    null != t && function(e, t) {
                        return null == t || a.default.compare(e, t) > 0
                    }(t.id, null == i ? void 0 : null === (s = i.message) || void 0 === s ? void 0 : s.id) && this.put(e, t, n)
                }
                putMany(e, t) {
                    for (let n of e) this.put(n.channel_id, n, t)
                }
                update(e) {
                    var t;
                    if (null == e.id || null == e.channel_id) return;
                    let n = e.channel_id,
                        a = this.messages.get(n);
                    if ((null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) !== e.id) return;
                    let l = a.message instanceof i.default ? (0, s.updateMessageRecord)(a.message, e) : (0, s.updateServerMessage)(a.message, e);
                    this.messages.set(n, {
                        ...a,
                        message: l
                    })
                }
                delete(e) {
                    this.messages.delete(e)
                }
                constructor() {
                    this.localNeeded = !0, this.messages = new Map
                }
            }