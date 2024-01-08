            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("151426"),
                i = n("343885"),
                r = n("980215"),
                u = n("28561"),
                o = n("509802"),
                d = n("305961"),
                c = n("449008"),
                f = n("994428");

            function h(e) {
                e.stopPropagation()
            }
            var p = function(e) {
                var t;
                let {
                    channel: n
                } = e, p = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(n.guild_id)), m = (0, r.useClydeProfilesEnabled)(p, !0, "member_list_notices");
                i.default.useExperiment({
                    guildId: null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : "",
                    location: "member_list_notices"
                });
                let E = [];
                return m && (0, c.isNotNullish)(n.guild_id) && E.push(s.DismissibleContent.CLYDE_AI_PERSONALITIES_NUX_MODAL), (0, a.jsx)(o.default, {
                    contentTypes: E,
                    groupName: f.DismissibleContentGroupName.MEMBER_LIST_HEADER,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: l
                        } = e, i = (() => {
                            if (t === s.DismissibleContent.CLYDE_AI_PERSONALITIES_NUX_MODAL) return (0, a.jsx)(u.default, {
                                channel: n,
                                markAsDismissed: () => l(f.ContentDismissActionType.UNKNOWN)
                            });
                            return null
                        })();
                        return (0, a.jsx)("div", {
                            onContextMenu: h,
                            children: i
                        })
                    }
                })
            }