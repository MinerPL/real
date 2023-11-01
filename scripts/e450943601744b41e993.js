(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41244"], {
        619335: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var u = a("274870"),
                n = a("116320"),
                l = a("617559"),
                r = a("213523"),
                s = a("593195"),
                f = a("361777"),
                d = a("497757"),
                i = a("774223"),
                c = a("991497"),
                C = a("393621"),
                T = a("905999"),
                h = a("660074"),
                o = a("990745"),
                p = a("190986"),
                D = a("721618"),
                N = a("733160"),
                E = a("990864"),
                I = a("274652"),
                _ = a("922744"),
                y = a("155207"),
                M = a("745183"),
                U = a("368121"),
                A = a("944633"),
                G = a("228427"),
                R = a("959097"),
                S = a("656038"),
                F = a("49111");

            function L(e, t) {
                switch (e.type) {
                    case F.ChannelTypes.DM:
                        return n.default;
                    case F.ChannelTypes.GROUP_DM:
                        let a = (0, u.getIsBroadcastingGDM)(e.id);
                        return a ? i.default : y.default;
                    case F.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return I.default;
                        if ((0, S.default)(e)) return E.default;
                        else return N.default;
                    case F.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
                        if (e.isNSFW()) return d.default;
                        else if ((0, S.default)(e)) return f.default;
                        else return s.default;
                    case F.ChannelTypes.GUILD_FORUM:
                        let L = e.isMediaChannel();
                        if (e.isNSFW()) return L ? D.default : T.default;
                        if ((0, S.default)(e)) return L ? p.default : C.default;
                        else return L ? o.default : c.default;
                    case F.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return D.default;
                        if ((0, S.default)(e)) return p.default;
                        else return o.default;
                    case F.ChannelTypes.GUILD_STAGE_VOICE:
                        return G.default;
                    case F.ChannelTypes.GUILD_VOICE:
                        if ((0, S.default)(e)) return A.default;
                        return U.default;
                    case F.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case F.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return _.default;
                        if (e.isForumPost()) return h.default;
                        else return R.default;
                    case F.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return _.default;
                        return M.default;
                    case F.ChannelTypes.GUILD_DIRECTORY:
                        return l.default;
                    default:
                        return null
                }
            }
        },
        33250: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var u = a("37983"),
                n = a("884691"),
                l = a("77078"),
                r = a("487269"),
                s = a("537560"),
                f = a("782340"),
                d = a("813599");

            function i(e) {
                let {
                    channel: t,
                    onClose: a,
                    transitionState: i
                } = e;
                return n.useEffect(() => {
                    (0, r.trackThreadBrowserOpened)()
                }, []), (0, u.jsx)(l.ModalRoot, {
                    className: d.modal,
                    transitionState: i,
                    "aria-label": f.default.Messages.THREADS,
                    size: l.ModalSize.DYNAMIC,
                    children: (0, u.jsx)(s.default, {
                        className: d.browser,
                        channel: t,
                        onClose: a
                    })
                })
            }
        }
    }
]);