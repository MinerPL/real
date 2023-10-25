(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84648"], {
        176032: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return I
                }
            });
            var t = a("920040");
            a("773670");
            var s = a("498225"),
                l = a("77078"),
                u = a("272030"),
                o = a("957255"),
                d = a("530346"),
                i = a("662255"),
                r = a("306160"),
                c = a("49111"),
                p = a("782340"),
                M = a("359228"),
                I = function(e) {
                    var n;
                    let {
                        guild: I,
                        user: f,
                        onSelect: _
                    } = e, E = null !== (n = null == I ? void 0 : I.id) && void 0 !== n ? n : "", b = (0, s.useStateFromStores)([o.default], () => null != I && o.default.canManageUser(c.Permissions.BAN_MEMBERS, f, I), [I, f]);
                    return (0, t.jsx)(l.Menu, {
                        navId: "member-application-context-menu",
                        className: M.contextMenu,
                        onClose: u.closeContextMenu,
                        "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: _,
                        children: (0, t.jsxs)(l.MenuGroup, {
                            children: [b && (0, t.jsx)(l.MenuItem, {
                                id: "ban",
                                label: p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
                                icon: d.default,
                                color: "danger",
                                action: () => (0, l.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("743506").then(a.bind(a, "743506"));
                                    return n => (0, t.jsx)(e, {
                                        ...n,
                                        guildId: E,
                                        user: f
                                    })
                                })
                            }, "ban"), (0, t.jsx)(l.MenuItem, {
                                id: "copyUserId",
                                label: "Copy User ID",
                                icon: i.default,
                                action: () => (0, r.copy)(f.id)
                            }, "copyUserId")]
                        })
                    })
                }
        }
    }
]);