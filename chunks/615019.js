            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                u = a("42887"),
                r = a("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.hasContext(e.id), [e.id]);
                return t ? (0, n.jsx)(i.MenuItem, {
                    id: "ingame-voice",
                    label: r.default.Messages.IN_GAME_VOICE_SETTINGS,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("301450").then(a.bind(a, "301450"));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            mediaEngineContext: e.id,
                            title: e.name
                        })
                    })
                }) : null
            }