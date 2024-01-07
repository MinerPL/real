            "use strict";
            n.r(t), n.d(t, {
                openGuildEventDetails: function() {
                    return u
                },
                transitionToEventDetailsFromInvite: function() {
                    return o
                },
                openEndEventModal: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("551042"),
                l = n("851387"),
                s = n("49111"),
                r = n("625611");

            function u(e) {
                let {
                    eventId: t,
                    parentGuildId: l,
                    recurrenceId: s
                } = e;
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("833843").then(n.bind(n, "833843"));
                    return n => (0, i.jsx)(e, {
                        guildScheduledEventId: t,
                        parentGuildId: l,
                        initialRecurrenceId: s,
                        ...n
                    })
                })
            }
            async function o(e, t) {
                let {
                    guild_id: n
                } = e;
                await l.default.transitionToGuildSync(n, t), u({
                    eventId: e.id,
                    event: e
                })
            }

            function d(e, t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("203811").then(n.bind(n, "203811"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === s.AppContext.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
                })
            }