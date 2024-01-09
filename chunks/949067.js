            "use strict";
            n.r(t), n.d(t, {
                useLongestChannelMessageBeforeReply: function() {
                    return l
                }
            }), n("222007");
            var a = n("446674"),
                s = n("377253");

            function l(e, t) {
                return (0, a.useStateFromStores)([s.default], () => {
                    if (null == t) return;
                    let n = s.default.getMessages(e),
                        a = n.findOldest(e => e.author.id === t);
                    if (null == a) return;
                    let l = n.toArray();
                    for (let e of l) {
                        if (e.author.id !== t) break;
                        e.content.length > (null == a ? void 0 : a.content.length) && (a = e)
                    }
                    return a
                }, [e, t])
            }