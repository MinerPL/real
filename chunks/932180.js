            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("424973");
            var a = s("884691"),
                n = s("599110"),
                l = s("579033"),
                i = s("49111");

            function r(e) {
                let t = a.useRef([]);
                a.useEffect(() => {
                    if (null != e && e.state !== l.GuildTemplateStates.RESOLVING) !t.current.includes(e.code) && (t.current.push(e.code), n.default.track(i.AnalyticEvents.CREATE_GUILD_VIEWED, {
                        guild_template_code: e.code,
                        guild_template_name: e.name,
                        guild_template_description: e.description,
                        guild_template_guild_id: e.sourceGuildId
                    }))
                })
            }