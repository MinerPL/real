            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("424973");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("151426"),
                i = n("980215"),
                r = n("28561"),
                o = n("384997"),
                u = n("305961"),
                d = n("449008"),
                c = n("994428");

            function f(e) {
                e.stopPropagation()
            }
            var h = function(e) {
                let {
                    channel: t
                } = e, n = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(t.guild_id)), h = (0, i.useClydeProfilesEnabled)(n, !0, "member_list_notices"), p = [];
                return h && (0, d.isNotNullish)(t.guild_id) && p.push(s.DismissibleContent.CLYDE_AI_PERSONALITIES_NUX_MODAL), (0, a.jsx)(o.default, {
                    contentTypes: p,
                    groupName: c.DismissibleContentGroupName.MEMBER_LIST_HEADER,
                    children: e => {
                        let {
                            visibleContent: n,
                            markAsDismissed: l
                        } = e, i = (() => {
                            if (n === s.DismissibleContent.CLYDE_AI_PERSONALITIES_NUX_MODAL) return (0, a.jsx)(r.default, {
                                channel: t,
                                markAsDismissed: () => l(c.ContentDismissActionType.UNKNOWN)
                            });
                            return null
                        })();
                        return (0, a.jsx)("div", {
                            onContextMenu: f,
                            children: i
                        })
                    }
                })
            }