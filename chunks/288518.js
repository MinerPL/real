            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("988415"),
                a = n("42203"),
                l = n("455079");
            let s = new Set,
                r = new Set,
                u = !1,
                o = null;

            function d(e) {
                return e.isMessageRequest && !e.isSpam
            }

            function c(e) {
                let t = !1;
                return d(e) && !s.has(e.id) && (s.add(e.id), t = !0), !d(e) && s.has(e.id) && (s.delete(e.id), t = !0), !d(e) && r.has(e.id) && (r.delete(e.id), t = !0), t
            }

            function _(e) {
                var t;
                null != e && (o = null !== (t = (0, i.getCountryCodeByAlpha2)(e)) && void 0 !== t ? t : (0, i.getDefaultCountryCode)())
            }

            function E(e) {
                "CONNECTION_OPEN" === e.type && _(e.countryCode), s.clear(), r.clear(), Object.values(a.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
                }), u = !0
            }

            function f(e) {
                let {
                    channelId: t
                } = e;
                r.add(t)
            }

            function h(e) {
                let {
                    channel: t
                } = e;
                return c(t)
            }

            function p(e) {
                let {
                    channels: t
                } = e;
                for (let e of t) c(e)
            }

            function T(e) {
                let {
                    channel: t
                } = e;
                return !!s.has(t.id) && (s.delete(t.id), !0)
            }

            function C(e) {
                let {
                    messageRequestChannelIds: t
                } = e;
                t.forEach(e => s.add(e))
            }

            function m(e) {
                let {
                    countryCode: t
                } = e;
                _(t)
            }
            class S extends l.default {
                takeSnapshot() {
                    return {
                        version: S.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(s)
                    }
                }
                getMessageRequestChannelIds() {
                    return s
                }
                getMessageRequestsCount() {
                    return s.size
                }
                isMessageRequest(e) {
                    return s.has(e)
                }
                isAcceptedOptimistic(e) {
                    return r.has(e)
                }
                getUserCountryCode() {
                    return o
                }
                isReady() {
                    return u
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
                        null != e && (s = new Set(e))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: E,
                        CONNECTION_OPEN_SUPPLEMENTAL: E,
                        CACHE_LOADED_LAZY: this.loadCache,
                        OVERLAY_INITIALIZE: C,
                        CHANNEL_CREATE: h,
                        CHANNEL_UPDATES: p,
                        CHANNEL_DELETE: T,
                        SET_LOCATION_METADATA: m,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: f
                    }), this.waitFor(a.default)
                }
            }
            S.displayName = "MessageRequestStore", S.LATEST_SNAPSHOT_VERSION = 1;
            var I = new S