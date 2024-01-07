            "use strict";
            n.r(t), n.d(t, {
                useUserForLinkStatus: function() {
                    return d
                },
                useUserQRLinkUrl: function() {
                    return c
                },
                useHasMaxConnections: function() {
                    return E
                },
                usePendingRequestCount: function() {
                    return f
                },
                useAcceptedRequestsCount: function() {
                    return _
                },
                useActivityWindowTimeStamp: function() {
                    return h
                },
                useLinkTimestampText: function() {
                    return C
                }
            });
            var a = n("65597"),
                s = n("697218"),
                i = n("822825"),
                l = n("117933"),
                r = n("771783"),
                o = n("775032"),
                u = n("922832");

            function d(e) {
                let t = (0, a.default)([i.default], () => i.default.getLinkedUsers()),
                    n = Object.values(t).filter(t => null != t && t.link_status === e),
                    l = n.sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
                        var t;
                        return null !== (t = e.user_id) && void 0 !== t ? t : void 0
                    }).filter(e => null != e);
                return (0, a.useStateFromStoresArray)([s.default], () => l.map(e => s.default.getUser(e))).filter(e => null != e)
            }

            function c() {
                let e = (0, a.default)([i.default], () => i.default.getLinkCode()),
                    t = (0, a.default)([s.default], () => s.default.getCurrentUser());
                return null == e || null == t ? null : (0, u.FAMILY_CENTER_REQUEST_QR_CODE_URL)(t.id, e)
            }

            function E() {
                let e = (0, o.default)(),
                    t = d(u.UserLinkStatus.ACTIVE),
                    n = e ? u.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : u.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
                return t.length >= n
            }

            function f() {
                let e = (0, a.default)([s.default], () => s.default.getCurrentUser()),
                    t = (0, a.default)([i.default], () => i.default.getLinkedUsers());
                if (null == e) return 0;
                let n = Object.values(t).filter(t => null != t && t.link_status === u.UserLinkStatus.PENDING && e.id !== t.requestor_id);
                return n.length
            }

            function _() {
                let e = (0, a.default)([s.default], () => s.default.getCurrentUser()),
                    t = (0, a.default)([i.default], () => i.default.getLinkedUsers());
                if (null == e) return 0;
                let n = Object.values(t).filter(e => null != e && e.link_status === u.UserLinkStatus.ACTIVE);
                return n.length
            }

            function h(e) {
                let t = (0, r.useSelectedTeenId)(),
                    n = (0, a.default)([i.default], () => null == t ? null : i.default.getRangeStartTimestamp());
                return null == n ? null : (0, l.formatUserActivityTimestamp)(new Date(n).getTime(), () => e, 7)
            }

            function C(e, t) {
                let n = (0, a.default)([i.default], () => i.default.getLinkTimestamp(e));
                return null != n ? (0, l.formatLinkTimestamp)(Date.parse(n), t === u.UserLinkStatus.PENDING ? u.PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER : u.ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER) : null
            }