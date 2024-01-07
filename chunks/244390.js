            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                l = n("38654"),
                s = n("271938"),
                i = n("42887"),
                r = n("957255"),
                o = n("800762"),
                u = n("49111");

            function d(e) {
                return (0, a.useStateFromStoresObject)([s.default, o.default, i.default, r.default, l.default], () => (function(e) {
                    var t;
                    let {
                        channel: n,
                        authenticationStore: a = s.default,
                        voiceStateStore: d = o.default,
                        mediaEngineStore: c = i.default,
                        permissionStore: f = r.default,
                        impersonateStore: h = l.default
                    } = e, p = null != n ? d.getVoiceState(n.getGuildId(), a.getId()) : null, m = c.isSelfMute() || c.isSelfMutedTemporarily(), E = null == n ? void 0 : n.getGuildId(), C = h.isViewingRoles(E) && !f.can(u.Permissions.SPEAK, n);
                    return {
                        selfMute: m,
                        suppress: (null == p ? void 0 : p.suppress) || C,
                        mute: null !== (t = null == p ? void 0 : p.mute) && void 0 !== t && t
                    }
                })({
                    channel: e,
                    authenticationStore: s.default,
                    voiceStateStore: o.default,
                    mediaEngineStore: i.default,
                    permissionStore: r.default,
                    impersonateStore: l.default
                }))
            }