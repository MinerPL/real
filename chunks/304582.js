            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            }), a("222007");
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("27618"),
                u = a("782340");

            function s(e) {
                let t = e.id,
                    [s, o] = (0, n.useStateFromStoresArray)([d.default], () => {
                        var e;
                        return [d.default.isFriend(t), null !== (e = d.default.getNickname(t)) && void 0 !== e ? e : null]
                    }, [t]);
                if (!s) return null;
                let r = null == o ? u.default.Messages.ADD_FRIEND_NICKNAME : u.default.Messages.CHANGE_FRIEND_NICKNAME;
                return (0, i.jsx)(l.MenuItem, {
                    id: null == o ? "add-friend-nickname" : "edit-friend-nickname",
                    label: r,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("557890").then(a.bind(a, "557890"));
                            return a => (0, i.jsx)(t, {
                                user: e,
                                nickname: o,
                                ...a
                            })
                        })
                    }
                })
            }