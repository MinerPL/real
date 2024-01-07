            "use strict";
            n.r(t), n.d(t, {
                useGuildIncidentsState: function() {
                    return C
                },
                shouldShowRaidNotificationNagbar: function() {
                    return p
                }
            }), n("222007");
            var r = n("316693"),
                i = n("65597"),
                u = n("374363"),
                l = n("305961"),
                o = n("957255"),
                s = n("162771"),
                a = n("697218"),
                d = n("991170"),
                c = n("610174"),
                f = n("311161"),
                h = n("54346"),
                _ = n("421127");
            n("49111");

            function C(e) {
                let {
                    showAlertMode: t
                } = (0, c.useGuildAlertModeEnabled)(null != e ? e : "0"), n = (0, i.default)([l.default, o.default], () => {
                    let t = l.default.getGuild(e);
                    if (null == t) return !1;
                    let n = o.default.getGuildPermissions(t);
                    return null != n && r.default.hasAny(n, _.IncidentAlertModeratorPermissions)
                }), u = (0, i.default)([h.default], () => null != e ? h.default.getGuildIncident(e) : null), s = null != u && (0, f.isUnderLockdown)(u);
                return {
                    shouldShowIncidentActions: n && t,
                    incidentData: u,
                    isUnderLockdown: s
                }
            }

            function p() {
                var e;
                let t = s.default.getGuildId(),
                    n = function(e) {
                        let t = a.default.getCurrentUser(),
                            n = h.default.getIncidentsByGuild(),
                            i = Object.keys(n).map(e => l.default.getGuild(e));
                        for (let u of i) {
                            if (null == u) continue;
                            let i = n[u.id];
                            if (null == i || !(0, f.hasDetectedActivity)(i) && !(0, f.isUnderLockdown)(i) || (0, f.isUnderLockdown)(i) && u.id !== e) continue;
                            let l = r.default.hasAny(d.default.computePermissions({
                                user: t,
                                context: u,
                                checkElevated: !1
                            }), _.IncidentAlertModeratorPermissions);
                            if (l) return u.id
                        }
                        return null
                    }(t),
                    {
                        showAlertMode: i
                    } = (0, c.getGuildAlertModeEnabled)(null != n ? n : "0"),
                    o = null !== (e = u.default.getGuildsProto()) && void 0 !== e ? e : {},
                    C = null != n ? o[n] : null,
                    p = null != C && C.disableRaidAlertNag;
                return {
                    show: null != n && i && !p,
                    guildId: n
                }
            }