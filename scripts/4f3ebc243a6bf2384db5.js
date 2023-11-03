(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41244"], {
        619335: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return v
                }
            });
            var u = a("274870"),
                n = a("116320"),
                l = a("617559"),
                r = a("213523"),
                s = a("593195"),
                d = a("361777"),
                f = a("497757"),
                C = a("774223"),
                i = a("991497"),
                c = a("393621"),
                o = a("905999"),
                h = a("660074"),
                T = a("990745"),
                p = a("190986"),
                N = a("721618"),
                M = a("733160"),
                D = a("990864"),
                L = a("274652"),
                E = a("922744"),
                I = a("155207"),
                _ = a("745183"),
                y = a("368121"),
                R = a("944633"),
                U = a("228427"),
                A = a("959097"),
                G = a("656038"),
                S = a("49111");

            function v(e, t) {
                switch (e.type) {
                    case S.ChannelTypes.DM:
                        return n.default;
                    case S.ChannelTypes.GROUP_DM:
                        let a = (0, u.getIsBroadcastingGDM)(e.id);
                        return a ? C.default : I.default;
                    case S.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return L.default;
                        if ((0, G.default)(e)) return D.default;
                        else return M.default;
                    case S.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
                        if (e.isNSFW()) return f.default;
                        else if ((0, G.default)(e)) return d.default;
                        else return s.default;
                    case S.ChannelTypes.GUILD_FORUM:
                        let v = e.isMediaChannel();
                        if (e.isNSFW()) return v ? N.default : o.default;
                        if ((0, G.default)(e)) return v ? p.default : c.default;
                        else return v ? T.default : i.default;
                    case S.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return N.default;
                        if ((0, G.default)(e)) return p.default;
                        else return T.default;
                    case S.ChannelTypes.GUILD_STAGE_VOICE:
                        return U.default;
                    case S.ChannelTypes.GUILD_VOICE:
                        if ((0, G.default)(e)) return R.default;
                        return y.default;
                    case S.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case S.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return E.default;
                        if (e.isForumPost()) return h.default;
                        else return A.default;
                    case S.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return E.default;
                        return _.default;
                    case S.ChannelTypes.GUILD_DIRECTORY:
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
                    return C
                }
            });
            var u = a("37983"),
                n = a("884691"),
                l = a("77078"),
                r = a("487269"),
                s = a("537560"),
                d = a("782340"),
                f = a("813599");

            function C(e) {
                let {
                    channel: t,
                    onClose: a,
                    transitionState: C
                } = e;
                return n.useEffect(() => {
                    (0, r.trackThreadBrowserOpened)()
                }, []), (0, u.jsx)(l.ModalRoot, {
                    className: f.modal,
                    transitionState: C,
                    "aria-label": d.default.Messages.THREADS,
                    size: l.ModalSize.DYNAMIC,
                    children: (0, u.jsx)(s.default, {
                        className: f.browser,
                        channel: t,
                        onClose: a
                    })
                })
            }
        },
        774223: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var u = a("37983");
            a("884691");
            var n = a("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: l = "currentColor",
                    className: r,
                    foreground: s,
                    ...d
                } = e;
                return (0, u.jsx)("svg", {
                    ...(0, n.default)(d),
                    className: r,
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, u.jsx)("path", {
                        className: s,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        }
    }
]);