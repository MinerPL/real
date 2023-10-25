(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28189"], {
        946661: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("920040");
            a("773670");
            var i = a("77078"),
                l = a("272030"),
                u = a("616265"),
                d = a("243338"),
                s = a("782340");

            function o(e) {
                let {
                    onSelect: t
                } = e;
                return (0, n.jsxs)(i.Menu, {
                    navId: "guild-context",
                    "aria-label": s.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onClose: l.closeContextMenu,
                    onSelect: t,
                    children: [(0, n.jsx)(i.MenuItem, {
                        id: "join",
                        label: s.default.Messages.JOIN_SERVER_BUTTON_CTA,
                        action: () => u.default.openCreateGuildModal({
                            initialSlide: d.CreateGuildSlideTypes.JOIN_GUILD,
                            location: "Guild List - ContextMenu"
                        })
                    }), (0, n.jsx)(i.MenuItem, {
                        id: "create",
                        label: s.default.Messages.CREATE_SERVER_BUTTON_CTA,
                        action: () => u.default.openCreateGuildModal({
                            location: "Guild List - ContextMenu"
                        })
                    })]
                })
            }
        }
    }
]);