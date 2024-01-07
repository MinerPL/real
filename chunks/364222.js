            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("713841"),
                r = s("376556"),
                o = s("37785"),
                d = s("592407"),
                u = s("900938"),
                c = s("49111"),
                E = s("782340");

            function _(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getProps().integrations);
                return n.useMemo(() => (function(e, t) {
                    var s, n, l, u;
                    let _;
                    if (!e.managed) return null;
                    let T = null === (s = e.tags) || void 0 === s ? void 0 : s.bot_id,
                        I = null === (n = e.tags) || void 0 === n ? void 0 : n.integration_id,
                        S = (null === (l = e.tags) || void 0 === l ? void 0 : l.premium_subscriber) !== void 0,
                        N = (null === (u = e.tags) || void 0 === u ? void 0 : u.guild_connections) !== void 0;
                    if (null != T ? _ = null == t ? void 0 : t.find(e => {
                            var t;
                            let {
                                application: s
                            } = e;
                            return (null == s ? void 0 : null === (t = s.bot) || void 0 === t ? void 0 : t.id) === T
                        }) : null != I && (_ = null == t ? void 0 : t.find(e => {
                            let {
                                id: t
                            } = e;
                            return t === I
                        })), null != _ && null != _.application && null != _.name) {
                        let e = _.application.id,
                            t = _.name;
                        [c.PlatformTypes.TWITCH, c.PlatformTypes.YOUTUBE].includes(_.type) && (t = "".concat(r.default.get(_.type).name, " - ").concat(t));
                        let s = () => {
                            d.default.setSection(c.GuildSettingsSections.INTEGRATIONS), i.default.setSection(c.IntegrationSettingsSections.APPLICATION, e)
                        };
                        return E.default.Messages.MANAGED_ROLE_INTEGRATION_LINKED_EXPLANATION.format({
                            name: t,
                            integrationNameHook: (e, t) => (0, a.jsx)(o.default, {
                                onClick: s,
                                children: e
                            }, t)
                        })
                    }
                    return S ? E.default.Messages.MANAGED_ROLE_PREMIUM_SUBSCRIBER_EXPLANATION : N ? E.default.Messages.MANAGED_ROLE_GUILD_CONNECTIONS_EXPLANATION : E.default.Messages.MANAGED_ROLE_EXPLAINATION
                })(e, t), [e, t])
            }