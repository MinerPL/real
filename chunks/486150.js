            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("968194"),
                u = i("884385"),
                r = i("170108"),
                d = i("922174");
            async function o(e, t, o) {
                let {
                    hasSpotifyAccount: s,
                    activity: c,
                    user: f
                } = e;
                (0, d.default)(s) && null != c && null != c.sync_id && (await (0, u.ensureSpotifyPlayable)(), await (0, u.ensureSpotifyPremium)().catch(e => ((0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("775195").then(i.bind(i, "775195"));
                    return t => (0, n.jsx)(e, {
                        ...t
                    })
                }), Promise.reject(e))), a.sync(c, f.id), (0, r.default)(t, f, c, o))
            }