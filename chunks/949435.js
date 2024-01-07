            "use strict";
            A.r(t), A.d(t, {
                useGuildProductAttachmentManagerContext: function() {
                    return s
                },
                GuildProductAttachmentManagerContextProvider: function() {
                    return o
                }
            }), A("70102");
            var a = A("37983"),
                l = A("884691"),
                n = A("168804");
            let r = l.createContext(void 0);

            function s() {
                let e = l.useContext(r);
                if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
                return e
            }

            function o(e) {
                let {
                    children: t,
                    guildId: A,
                    ...l
                } = e, s = (0, n.default)(A, l);
                return (0, a.jsx)(r.Provider, {
                    value: s,
                    children: t
                })
            }