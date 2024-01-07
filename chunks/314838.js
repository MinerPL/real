            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            }), a("424973"), a("222007");
            var i = a("37983"),
                n = a("884691"),
                l = a("446674"),
                d = a("77078"),
                u = a("450911"),
                s = a("970728"),
                o = a("819689"),
                r = a("242757"),
                c = a("42203"),
                f = a("923959"),
                I = a("305961"),
                p = a("957255"),
                S = a("27618"),
                _ = a("677099"),
                T = a("697218"),
                v = a("49111"),
                A = a("782340");

            function m(e, t) {
                u.default.ensurePrivateChannel(e).then(e => {
                    null != c.default.getChannel(e) && o.default.sendInvite(e, t, "context_menu", null)
                })
            }

            function y(e, t) {
                let a = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser(), []),
                    u = (0, l.useStateFromStoresArray)([_.default, I.default, p.default], () => {
                        let e = _.default.getFlattenedGuildIds(),
                            a = [];
                        return e.forEach(e => {
                            let i = I.default.getGuild(e);
                            null != i && (0, r.canViewInviteModal)(p.default, i) && i.id !== t && a.push(i)
                        }), a
                    }, [t]),
                    [o, c] = n.useState({});
                return (null == a ? void 0 : a.id) === e.id || e.bot || 0 === u.length || S.default.isBlocked(e.id) ? null : (0, i.jsx)(d.MenuItem, {
                    id: "invite-to-server",
                    label: A.default.Messages.INVITE_TO_SERVER,
                    children: u.map(t => o[t.id] ? (0, i.jsx)(d.MenuItem, {
                        id: t.id,
                        disabled: !0,
                        label: A.default.Messages.INVITE_SENT
                    }, t.id) : (0, i.jsx)(d.MenuItem, {
                        id: t.id,
                        label: t.name,
                        action: () => (function(e, t) {
                            let a = f.default.getDefaultChannel(e.id, !0, v.Permissions.CREATE_INSTANT_INVITE);
                            if (null != a) {
                                if (c({
                                        ...o,
                                        [e.id]: !0
                                    }), !p.default.can(v.Permissions.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) {
                                    m(t, e.vanityURLCode);
                                    return
                                }
                                s.default.createInvite(a.id, {
                                    max_uses: 1,
                                    unique: !0
                                }, "User Invite Context Menu").then(e => m(t, e.code))
                            }
                        })(t, e.id)
                    }, t.id))
                })
            }