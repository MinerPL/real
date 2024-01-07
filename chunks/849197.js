            "use strict";
            n.r(t), n.d(t, {
                useInteractivePollMessage: function() {
                    return f
                },
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("627445"),
                i = n.n(l),
                r = n("65597"),
                o = n("819689"),
                u = n("377253"),
                d = n("905206");
            let c = s.createContext(void 0);

            function f(e) {
                var t;
                let n = null !== (t = s.useContext(c)) && void 0 !== t ? t : e;
                return i(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
            }

            function m(e) {
                let {
                    message: t,
                    children: n
                } = e, l = (0, r.default)([u.default], () => u.default.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), i = null != l;
                return s.useEffect(() => {
                    !i && o.default.focusMessage({
                        channelId: t.channel_id,
                        messageId: t.id
                    })
                }, [i, t.channel_id, t.id]), (0, a.jsx)(c.Provider, {
                    value: null != l ? l : t,
                    children: n
                })
            }

            function E(e) {
                let {
                    message: t,
                    children: n
                } = e;
                return (0, d.isPollMessageDirectlyInteractive)(t) ? (0, a.jsx)(a.Fragment, {
                    children: n
                }) : (0, a.jsx)(m, {
                    message: t,
                    children: n
                })
            }