            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestPreview: function() {
                    return C
                }
            }), n("222007");
            var s = n("917351"),
                a = n.n(s),
                l = n("446674"),
                i = n("872717"),
                r = n("913144"),
                o = n("377253"),
                u = n("660478"),
                d = n("83722"),
                c = n("49111");
            let f = new Set,
                h = null;

            function C(e) {
                let {
                    id: t
                } = e, {
                    loaded: n,
                    message: s,
                    error: a
                } = (0, l.useStateFromStoresObject)([d.default, o.default, u.default], () => {
                    let e = u.default.lastMessageId(t),
                        n = d.default.getMessageRequestPreview(t);
                    if (null == n.message && null != e) {
                        let n = o.default.getMessage(t, e);
                        if (null != n) return {
                            loaded: !0,
                            error: !1,
                            message: n
                        }
                    }
                    return n
                }, [t]), i = (0, l.useStateFromStores)([d.default], () => d.default.shouldLoadMessageRequestPreview(t), [t]);
                return !n && null == s && i && function(e) {
                    f.add(e), null == h && (h = setTimeout(p, 0))
                }(t), {
                    loaded: n,
                    error: a,
                    message: s
                }
            }
            async function p() {
                try {
                    for (; !a.isEmpty(f);) await m()
                } finally {
                    h = null
                }
            }
            async function m() {
                let e = Array.from(f).slice(0, 25);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
                        query: {
                            channel_ids: e
                        }
                    });
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
                        requestedChannelIds: e,
                        supplementalData: t.body
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
                        requestedChannelIds: e
                    })
                } finally {
                    for (let t of e) f.delete(t)
                }
            }