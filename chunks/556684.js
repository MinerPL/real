            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("16470"),
                l = n("446674"),
                i = n("77078"),
                r = n("843962"),
                o = n("393027"),
                u = n("42203"),
                d = n("305961"),
                c = n("697218"),
                f = n("476263"),
                h = n("315102"),
                C = n("3989");

            function p() {
                let {
                    guildId: e,
                    channelId: t
                } = (0, o.default)(e => {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return {
                        guildId: t,
                        channelId: n
                    }
                }, s.default), n = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(e)), p = (0, l.useStateFromStores)([u.default], () => null == n ? u.default.getChannel(t) : null), m = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()), E = null != p ? (0, r.getChannelIconURL)(p) : null, g = null != m ? m.getAvatarURL(e, 80) : h.DEFAULT_AVATARS[0], S = (0, a.jsx)(i.Avatar, {
                    src: g,
                    "aria-hidden": !0,
                    size: i.AvatarSizes.SIZE_80,
                    className: C.avatarSizeOverride
                }), A = null;
                return A = null != n ? (0, a.jsx)(f.default, {
                    guild: n
                }) : null != E ? (0, a.jsx)(i.Avatar, {
                    "aria-hidden": !0,
                    src: E,
                    size: i.AvatarSizes.SIZE_80,
                    className: C.avatarSizeOverride
                }) : S, (0, a.jsxs)("div", {
                    className: C.container,
                    children: [(0, a.jsx)("div", {
                        className: C.personAvatar,
                        children: S
                    }), (0, a.jsx)("div", {
                        className: C.guildAvatar,
                        children: A
                    }), (0, a.jsx)("svg", {
                        className: C.illustration,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "156",
                        height: "70",
                        viewBox: "0 0 123 55",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: "#D3D6ED",
                                d: "M7.6003,3.7337 C7.6003,3.1817 7.1533,2.7337 6.6003,2.7337 C5.7663,2.7337 5.0903,2.0577 5.0903,1.2237 C5.0903,0.6717 4.6423,0.2237 4.0903,0.2237 C3.5383,0.2237 3.0903,0.6717 3.0903,1.2237 C3.0903,2.0577 2.4133,2.7337 1.5803,2.7337 C1.0283,2.7337 0.5803,3.1817 0.5803,3.7337 C0.5803,4.2857 1.0283,4.7337 1.5803,4.7337 C2.4133,4.7337 3.0903,5.4097 3.0903,6.2437 C3.0903,6.7967 3.5383,7.2437 4.0903,7.2437 C4.6423,7.2437 5.0903,6.7967 5.0903,6.2437 C5.0903,5.4097 5.7663,4.7337 6.6003,4.7337 C7.1533,4.7337 7.6003,4.2857 7.6003,3.7337"
                            }), (0, a.jsx)("path", {
                                fill: "#ACB0FF",
                                d: "M96.6157,5.4263 C96.6157,4.8743 96.1687,4.4263 95.6157,4.4263 C95.0627,4.4263 94.6157,4.8743 94.6157,5.4263 C94.6157,6.2603 93.9397,6.9363 93.1057,6.9363 C92.5537,6.9363 92.1057,7.3843 92.1057,7.9363 C92.1057,8.4883 92.5537,8.9363 93.1057,8.9363 C93.9397,8.9363 94.6157,9.6123 94.6157,10.4463 C94.6157,10.9983 95.0627,11.4463 95.6157,11.4463 C96.1687,11.4463 96.6157,10.9983 96.6157,10.4463 C96.6157,9.6123 97.2917,8.9363 98.1257,8.9363 C98.6787,8.9363 99.1257,8.4883 99.1257,7.9363 C99.1257,7.3843 98.6787,6.9363 98.1257,6.9363 C97.2917,6.9363 96.6157,6.2603 96.6157,5.4263 Z"
                            }), (0, a.jsx)("path", {
                                fill: "#FFF",
                                d: "M120.7351 14.0452L119.5511 15.2282C119.1611 15.6182 119.1611 16.2512 119.5511 16.6422 119.7471 16.8372 120.0031 16.9352 120.2581 16.9352 120.5141 16.9352 120.7701 16.8372 120.9651 16.6422L122.1491 15.4592C122.5401 15.0682 122.5401 14.4362 122.1491 14.0452 121.7581 13.6542 121.1261 13.6542 120.7351 14.0452zM113.635 21.1452C113.245 21.5352 113.245 22.1682 113.635 22.5592 113.831 22.7542 114.087 22.8522 114.342 22.8522 114.598 22.8522 114.855 22.7542 115.049 22.5592L116.233 21.3752C116.624 20.9842 116.624 20.3522 116.233 19.9612 115.842 19.5702 115.209 19.5702 114.819 19.9612L113.635 21.1452zM120.9655 19.9612C120.5745 19.5702 119.9425 19.5702 119.5515 19.9612 119.1605 20.3522 119.1605 20.9842 119.5515 21.3752L120.7355 22.5592C120.9305 22.7542 121.1865 22.8522 121.4425 22.8522 121.6975 22.8522 121.9535 22.7542 122.1495 22.5592 122.5395 22.1682 122.5395 21.5352 122.1495 21.1452L120.9655 19.9612zM115.0491 14.0449C114.6591 13.6549 114.0251 13.6549 113.6351 14.0449 113.2451 14.4359 113.2451 15.0689 113.6351 15.4589L114.8191 16.6419C115.0141 16.8369 115.2701 16.9349 115.5261 16.9349 115.7821 16.9349 116.0381 16.8369 116.2331 16.6419 116.6241 16.2509 116.6241 15.6189 116.2331 15.2279L115.0491 14.0449z"
                            }), (0, a.jsx)("rect", {
                                width: "40",
                                height: "25",
                                x: "68",
                                y: "22",
                                fill: "#999CF4",
                                fillRule: "nonzero",
                                rx: "3"
                            }), (0, a.jsx)("path", {
                                fill: "#999CF4",
                                fillRule: "nonzero",
                                d: "M90,46 L90,53.8100983 C90,54.362383 90.4477153,54.8100983 91,54.8100983 C91.2501917,54.8100983 91.4912948,54.7163131 91.6757246,54.5472524 L101,46 L90,46 Z",
                                transform: "matrix(-1 0 0 1 191 0)"
                            }), (0, a.jsxs)("g", {
                                fill: "#FFF",
                                fillRule: "nonzero",
                                opacity: ".902",
                                transform: "translate(78 32)",
                                children: [(0, a.jsx)("circle", {
                                    cx: "2.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "10.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "18.5",
                                    cy: "2.5",
                                    r: "2.5"
                                })]
                            }), (0, a.jsx)("rect", {
                                width: "40",
                                height: "25",
                                x: "13",
                                y: "9",
                                fill: "#5865f2",
                                fillRule: "nonzero",
                                rx: "3"
                            }), (0, a.jsx)("path", {
                                fill: "#5865f2",
                                fillRule: "nonzero",
                                d: "M20,33 L20,40.8100983 C20,41.362383 20.4477153,41.8100983 21,41.8100983 C21.2501917,41.8100983 21.4912948,41.7163131 21.6757246,41.5472524 L31,33 L20,33 Z"
                            }), (0, a.jsxs)("g", {
                                fill: "#FFF",
                                fillRule: "nonzero",
                                opacity: ".902",
                                transform: "translate(23 19)",
                                children: [(0, a.jsx)("circle", {
                                    cx: "2.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "10.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "18.5",
                                    cy: "2.5",
                                    r: "2.5"
                                })]
                            })]
                        })
                    })]
                })
            }