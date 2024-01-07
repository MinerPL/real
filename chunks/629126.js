            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                l = n("385976"),
                r = function(e, t) {
                    return (0, i.useStateFromStores)([l.default], () => {
                        var n;
                        if (null == t) return null;
                        let i = l.default.getDisambiguatedEmojiContext(e);
                        return null !== (n = i.getById(t)) && void 0 !== n ? n : i.getByName(t)
                    }, [e, t])
                }