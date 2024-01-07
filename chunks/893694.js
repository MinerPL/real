            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("271938"),
                l = n("42203"),
                s = n("377253"),
                i = n("374648");

            function r(e) {
                var t, n, r;
                let d = null !== (n = null === (t = l.default.getBasicChannel(e)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== n ? n : "",
                    u = s.default.getMessages(e),
                    o = u.last();
                if (null == o) return !1;
                let c = null !== (r = u.getManyBefore(o.id, 10)) && void 0 !== r ? r : [],
                    E = a.default.getId();
                return c.some(t => {
                    var n;
                    let a = t.author.isClyde();
                    if (!a || null == t.messageReference) return !1;
                    let l = s.default.getMessage(e, t.messageReference.message_id);
                    if (null != l && (0, i.isProactiveClydeV2Enabled)(d, "allowProactiveClydeV2")) return !0;
                    return (null == l ? void 0 : null === (n = l.author) || void 0 === n ? void 0 : n.id) === E
                })
            }