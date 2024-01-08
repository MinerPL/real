            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("917351"),
                l = n.n(a),
                s = n("446674"),
                i = n("913144"),
                r = n("305961");
            let o = null,
                u = {};
            class d extends s.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                getOptimalRegion() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = this.getRegions(t);
                    return null != n ? null !== (e = n.find(e => {
                        let {
                            optimal: t
                        } = e;
                        return t
                    })) && void 0 !== e ? e : l.sample(n) : null
                }
                getOptimalRegionId() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = this.getOptimalRegion(e);
                    return null != t ? t.id : null
                }
                getRandomRegion() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = this.getRegions(e);
                    return null != t ? l.sample(t) : null
                }
                getRandomRegionId() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = this.getRandomRegion(e);
                    return null != t ? t.id : null
                }
                getRegions(e) {
                    return null != e ? u[e] : o
                }
            }
            d.displayName = "RegionStore";
            var c = new d(i.default, {
                LOAD_REGIONS: function(e) {
                    let t = l.sortBy(e.regions, e => e.name);
                    null != e.guildId ? u[e.guildId] = t : o = t
                },
                GUILD_DELETE: function(e) {
                    delete u[e.guild.id]
                }
            })