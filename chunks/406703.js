            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("450911"),
                u = a("168973"),
                s = a("271938"),
                o = a("42203"),
                r = a("27618"),
                c = a("18494"),
                f = a("49111"),
                I = a("782340");

            function p(e, t) {
                let p = s.default.getId(),
                    T = t === f.AppContext.POPOUT,
                    A = (0, n.useStateFromStores)([c.default, o.default], () => c.default.getVoiceChannelId() === o.default.getDMFromUserId(e.id)),
                    S = (0, n.useStateFromStores)([r.default], () => r.default.isBlocked(e.id));
                if (p === e.id || T || A || e.bot) return null;
                let v = () => d.default.openPrivateChannel(e.id, !0),
                    _ = !u.default.disableCallUserConfirmationPrompt;
                return (0, i.jsx)(l.MenuItem, {
                    id: "call",
                    label: I.default.Messages.CALL,
                    action: _ ? () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("241890").then(a.bind(a, "241890"));
                            return t => (0, i.jsx)(e, {
                                onSubmit: v,
                                ...t
                            })
                        })
                    } : v,
                    disabled: S
                })
            }