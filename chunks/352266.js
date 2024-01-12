            "use strict";
            let s;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var i = n("446674"),
                r = n("95410"),
                a = n("913144"),
                o = n("48703"),
                d = n("599110"),
                u = n("195052"),
                l = n("49111");
            let f = "BlockedDomainStore",
                _ = "BlockedDomainRevision",
                c = null;
            class g extends i.default.Store {
                initialize() {
                    s = null, r.default.get(f) && (r.default.remove(_), r.default.remove(f))
                }
                getCurrentRevision() {
                    if (null == s) {
                        var e;
                        s = null !== (e = r.default.get(_)) && void 0 !== e ? e : null
                    }
                    return s
                }
                async getBlockedDomainList() {
                    return null == c && (c = new Set(await u.default.getBlockedDomains())), c
                }
                isBlockedDomain(e) {
                    let t = n("874749");
                    if (null == c) return this.getBlockedDomainList(), null;
                    let s = (0, o.getHostname)(e),
                        i = new t.hash.sha256,
                        r = t.codec.hex.fromBits(i.update(s).finalize()),
                        a = "";
                    c.has(r) && (a = s);
                    let u = s.indexOf(".");
                    for (; - 1 !== u && "" === a;) s = s.substring(u + 1), i.reset(), r = t.codec.hex.fromBits(i.update(s).finalize()), c.has(r) && (a = s), u = s.indexOf(".");
                    return "" !== a ? (d.default.track(l.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, {
                        blocked_domain: a
                    }), a) : null
                }
            }
            g.displayName = "BlockedDomainStore";
            var m = new g(a.default, {
                BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
                    let {
                        list: t,
                        revision: n
                    } = e;
                    c = null, s = null, u.default.saveBlockedDomains(t), r.default.set("BlockedDomainRevision", n)
                }
            })