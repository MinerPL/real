            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("446674"),
                l = n("95410"),
                s = n("913144"),
                r = n("48703"),
                u = n("599110"),
                o = n("195052"),
                d = n("49111");
            let c = "BlockedDomainStore",
                _ = "BlockedDomainRevision",
                E = null;
            class f extends a.default.Store {
                initialize() {
                    i = null, l.default.get(c) && (l.default.remove(_), l.default.remove(c))
                }
                getCurrentRevision() {
                    if (null == i) {
                        var e;
                        i = null !== (e = l.default.get(_)) && void 0 !== e ? e : null
                    }
                    return i
                }
                async getBlockedDomainList() {
                    return null == E && (E = new Set(await o.default.getBlockedDomains())), E
                }
                isBlockedDomain(e) {
                    let t = n("874749");
                    if (null == E) return this.getBlockedDomainList(), null;
                    let i = (0, r.getHostname)(e),
                        a = new t.hash.sha256,
                        l = t.codec.hex.fromBits(a.update(i).finalize()),
                        s = "";
                    E.has(l) && (s = i);
                    let o = i.indexOf(".");
                    for (; - 1 !== o && "" === s;) i = i.substring(o + 1), a.reset(), l = t.codec.hex.fromBits(a.update(i).finalize()), E.has(l) && (s = i), o = i.indexOf(".");
                    return "" !== s ? (u.default.track(d.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, {
                        blocked_domain: s
                    }), s) : null
                }
            }
            f.displayName = "BlockedDomainStore";
            var h = new f(s.default, {
                BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
                    let {
                        list: t,
                        revision: n
                    } = e;
                    E = null, i = null, o.default.saveBlockedDomains(t), l.default.set("BlockedDomainRevision", n)
                }
            })