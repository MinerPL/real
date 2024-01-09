            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("151426"),
                i = a("384997"),
                d = a("67076"),
                r = a("994428");
            let u = [s.DismissibleContent.GUILD_FEED_NUX_CARD];
            var o = n.memo(function(e) {
                let {
                    guild: t
                } = e;
                return (0, l.jsx)(i.default, {
                    contentTypes: u,
                    groupName: r.DismissibleContentGroupName.GUILD_FEED_TOP,
                    children: e => {
                        let {
                            visibleContent: a,
                            markAsDismissed: n
                        } = e;
                        if (a === s.DismissibleContent.GUILD_FEED_NUX_CARD) return (0, l.jsx)(d.default, {
                            guild: t,
                            onClose: () => n(r.ContentDismissActionType.UNKNOWN)
                        });
                        return null
                    }
                })
            })