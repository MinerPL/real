            "use strict";
            n.r(t), n.d(t, {
                useSortedGuildIdsForSoundboard: function() {
                    return d
                }
            }), n("843762");
            var l = n("884691"),
                i = n("65597"),
                r = n("957255"),
                o = n("677099"),
                s = n("697218"),
                a = n("719923"),
                u = n("843455");

            function d(e, t) {
                var n;
                let d = (0, i.default)([s.default], () => s.default.getCurrentUser()),
                    c = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : "",
                    f = (0, i.default)([o.default], () => o.default.getFlattenedGuildIds()),
                    p = (0, i.default)([r.default], () => null == e || null == e.guild_id || r.default.can(u.Permissions.USE_EXTERNAL_SOUNDS, e)),
                    m = l.useMemo(() => {
                        if ((a.default.canUseSoundboardEverywhere(d) || !t) && p) {
                            let e = "" !== c,
                                t = e ? f.filter(e => e !== c) : f;
                            return e && t.unshift(c), t
                        }
                        return [c]
                    }, [d, t, c, f, p]);
                return m
            }