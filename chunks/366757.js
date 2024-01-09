            "use strict";
            n.r(t), n.d(t, {
                useShowConvoStarterInDM: function() {
                    return u
                }
            });
            var s = n("446674"),
                a = n("288518"),
                l = n("933152"),
                i = n("377253"),
                r = n("27618"),
                o = n("49111");

            function u(e) {
                let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
                    n = t ? e.getRecipientId() : null,
                    u = (0, l.useStrangerDangerWarning)(e.id, "dm_convo_starter");
                return (0, s.useStateFromStores)([i.default, a.default, r.default], () => {
                    if (null != u || !t || a.default.isMessageRequest(e.id) || null != n && r.default.getRelationshipType(n) === o.RelationshipTypes.BLOCKED) return !1;
                    let s = i.default.getMessages(e.id),
                        l = s.ready && !s.hasMoreBefore && !s.hasMoreAfter && s.length < 25;
                    return l && !i.default.hasCurrentUserSentMessage(e.id)
                }, [u, t, e.id, n])
            }