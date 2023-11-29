(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41244"], {
        619335: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return y
                }
            });
            var a = l("274870"),
                n = l("116320"),
                r = l("617559"),
                u = l("213523"),
                C = l("593195"),
                s = l("361777"),
                d = l("497757"),
                i = l("774223"),
                f = l("991497"),
                c = l("393621"),
                o = l("905999"),
                h = l("660074"),
                L = l("990745"),
                H = l("190986"),
                p = l("721618"),
                M = l("733160"),
                T = l("990864"),
                V = l("274652"),
                N = l("922744"),
                v = l("155207"),
                I = l("745183"),
                D = l("368121"),
                E = l("944633"),
                R = l("228427"),
                x = l("959097"),
                Z = l("656038"),
                _ = l("49111");

            function y(e, t) {
                switch (e.type) {
                    case _.ChannelTypes.DM:
                        return n.default;
                    case _.ChannelTypes.GROUP_DM:
                        let l = (0, a.getIsBroadcastingGDM)(e.id);
                        return l ? i.default : v.default;
                    case _.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return V.default;
                        if ((0, Z.default)(e)) return T.default;
                        else return M.default;
                    case _.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return u.default;
                        if (e.isNSFW()) return d.default;
                        else if ((0, Z.default)(e)) return s.default;
                        else return C.default;
                    case _.ChannelTypes.GUILD_FORUM:
                        let y = e.isMediaChannel();
                        if (e.isNSFW()) return y ? p.default : o.default;
                        if ((0, Z.default)(e)) return y ? H.default : c.default;
                        else return y ? L.default : f.default;
                    case _.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return p.default;
                        if ((0, Z.default)(e)) return H.default;
                        else return L.default;
                    case _.ChannelTypes.GUILD_STAGE_VOICE:
                        return R.default;
                    case _.ChannelTypes.GUILD_VOICE:
                        if ((0, Z.default)(e)) return E.default;
                        return D.default;
                    case _.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case _.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return N.default;
                        if (e.isForumPost()) return h.default;
                        else return x.default;
                    case _.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return N.default;
                        return I.default;
                    case _.ChannelTypes.GUILD_DIRECTORY:
                        return r.default;
                    default:
                        return null
                }
            }
        },
        33250: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("77078"),
                u = l("487269"),
                C = l("537560"),
                s = l("782340"),
                d = l("813599");

            function i(e) {
                let {
                    channel: t,
                    onClose: l,
                    transitionState: i
                } = e;
                return n.useEffect(() => {
                    (0, u.trackThreadBrowserOpened)()
                }, []), (0, a.jsx)(r.ModalRoot, {
                    className: d.modal,
                    transitionState: i,
                    "aria-label": s.default.Messages.THREADS,
                    size: r.ModalSize.DYNAMIC,
                    children: (0, a.jsx)(C.default, {
                        className: d.browser,
                        channel: t,
                        onClose: l
                    })
                })
            }
        },
        774223: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("75196");

            function r(e) {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = "currentColor",
                    className: u,
                    foreground: C,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(s),
                    className: u,
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        className: C,
                        fill: r,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        },
        922744: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                r = l("782926"),
                u = l("75196"),
                C = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...C
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, u.default)(C),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            className: r,
                            fill: n,
                            d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z"
                        }), (0, a.jsx)("path", {
                            className: r,
                            fill: n,
                            d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z"
                        }), (0, a.jsx)("path", {
                            className: r,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z"
                        })]
                    })
                }, r.ThreadIcon, void 0, {
                    size: 24
                })
        },
        745183: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                r = l("782926"),
                u = l("75196"),
                C = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...C
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, u.default)(C),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            className: r,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z"
                        }), (0, a.jsx)("path", {
                            className: r,
                            fill: n,
                            d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z"
                        }), (0, a.jsx)("path", {
                            className: r,
                            fill: n,
                            d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z"
                        })]
                    })
                }, r.ThreadIcon, void 0, {
                    size: 24
                })
        }
    }
]);