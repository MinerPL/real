            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("274870"),
                a = n("116320"),
                r = n("617559"),
                i = n("213523"),
                s = n("593195"),
                u = n("361777"),
                o = n("497757"),
                d = n("774223"),
                c = n("991497"),
                f = n("393621"),
                h = n("905999"),
                p = n("660074"),
                C = n("990745"),
                m = n("190986"),
                v = n("721618"),
                g = n("733160"),
                S = n("990864"),
                E = n("274652"),
                I = n("922744"),
                _ = n("155207"),
                x = n("745183"),
                T = n("368121"),
                L = n("944633"),
                N = n("228427"),
                A = n("959097"),
                y = n("656038"),
                R = n("49111");

            function M(e, t) {
                switch (e.type) {
                    case R.ChannelTypes.DM:
                        return a.default;
                    case R.ChannelTypes.GROUP_DM:
                        let n = (0, l.getIsBroadcastingGDM)(e.id);
                        return n ? d.default : _.default;
                    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return E.default;
                        if ((0, y.default)(e)) return S.default;
                        else return g.default;
                    case R.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return i.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, y.default)(e)) return u.default;
                        else return s.default;
                    case R.ChannelTypes.GUILD_FORUM:
                        let M = e.isMediaChannel();
                        if (e.isNSFW()) return M ? v.default : h.default;
                        if ((0, y.default)(e)) return M ? m.default : f.default;
                        else return M ? C.default : c.default;
                    case R.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return v.default;
                        if ((0, y.default)(e)) return m.default;
                        else return C.default;
                    case R.ChannelTypes.GUILD_STAGE_VOICE:
                        return N.default;
                    case R.ChannelTypes.GUILD_VOICE:
                        if ((0, y.default)(e)) return L.default;
                        return T.default;
                    case R.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case R.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return I.default;
                        if (e.isForumPost()) return p.default;
                        else return A.default;
                    case R.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return I.default;
                        return x.default;
                    case R.ChannelTypes.GUILD_DIRECTORY:
                        return r.default;
                    default:
                        return null
                }
            }