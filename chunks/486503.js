            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("42203"),
                a = n("455079");
            let l = new Set,
                s = new Set,
                r = !1;

            function u(e) {
                return e.isSpam
            }

            function o(e) {
                let t = !1;
                if (e.isSpam && !l.has(e.id)) l.add(e.id), t = !0;
                if (!e.isSpam && l.has(e.id)) l.delete(e.id), t = !0;
                if (!e.isSpam && s.has(e.id)) s.delete(e.id), t = !0;
                return t
            }

            function d() {
                l.clear(), s.clear(), Object.values(i.default.getMutablePrivateChannels()).forEach(e => {
                    o(e)
                }), r = !0
            }

            function c(e) {
                let {
                    channelId: t
                } = e;
                s.add(t)
            }

            function _(e) {
                let {
                    channel: t
                } = e;
                return o(t)
            }

            function E(e) {
                let {
                    channels: t
                } = e;
                for (let e of t) o(e)
            }

            function f(e) {
                let {
                    channel: t
                } = e, n = !1;
                return l.has(t.id) && (l.delete(t.id), n = !0), n
            }
            class h extends a.default {
                takeSnapshot() {
                    return {
                        version: h.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(l)
                    }
                }
                getSpamChannelIds() {
                    return l
                }
                getSpamChannelsCount() {
                    return l.size
                }
                isSpam(e) {
                    return l.has(e)
                }
                isAcceptedOptimistic(e) {
                    return s.has(e)
                }
                isReady() {
                    return r
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
                        null != e && (l = new Set(e))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: d,
                        CONNECTION_OPEN_SUPPLEMENTAL: d,
                        CACHE_LOADED_LAZY: this.loadCache,
                        CHANNEL_CREATE: _,
                        CHANNEL_UPDATES: E,
                        CHANNEL_DELETE: f,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: c
                    }), this.waitFor(i.default)
                }
            }
            h.displayName = "SpamMessageRequestStore", h.LATEST_SNAPSHOT_VERSION = 1;
            var p = new h