            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("509043"),
                r = a("65597"),
                u = a("77078"),
                o = a("851387"),
                c = a("841098"),
                f = a("206230"),
                m = a("388491"),
                h = a("506885"),
                E = a("217513"),
                g = a("528438"),
                I = a("430312"),
                _ = a("305961"),
                x = a("697218"),
                v = a("928201"),
                S = a("387111"),
                C = a("158998"),
                N = a("590456"),
                p = a("933488");

            function T(e) {
                var t;
                let {
                    guildId: a,
                    welcomeMessage: s,
                    className: T
                } = e, A = (0, c.default)(), j = (0, r.default)([_.default], () => _.default.getGuild(a)), M = (0, r.default)([f.default], () => f.default.syncProfileThemeWithUserTheme), D = (0, r.default)([f.default], () => f.default.useReducedMotion), F = (0, r.default)([x.default], () => x.default.getUser(null == s ? void 0 : s.authorIds[0])), L = (0, r.default)([x.default], () => x.default.getCurrentUser()), R = (0, E.default)(null == F ? void 0 : F.id, a), [b] = (0, g.default)(F, R), G = M ? A : null !== (t = (0, m.getProfileTheme)(b)) && void 0 !== t ? t : A, y = (0, u.useToken)(u.tokens.colors.BACKGROUND_SECONDARY, G).hex(), O = n.useMemo(() => {
                    var e;
                    return null !== (e = null == s ? void 0 : s.authorIds) && void 0 !== e ? e : []
                }, [s]);
                n.useEffect(() => {
                    o.default.requestMembersById(a, O)
                }, [a, O]), n.useEffect(() => {
                    null != F && (0, h.default)(F.id, F.getAvatarURL(a, 48), {
                        guildId: a
                    })
                }, [F, a]);
                let H = (0, C.useName)(L);
                if (null == F || null == L || null == s) return null;
                let k = null != j && j.ownerId === F.id;
                return (0, l.jsx)("div", {
                    className: i(p.welcomeMessageContainer, T),
                    children: (0, l.jsxs)(I.default, {
                        className: p.welcomeMessageProfileContainer,
                        user: F,
                        guildId: a,
                        profileType: N.UserProfileTypes.CARD,
                        forceShowPremium: !0,
                        useDefaultClientTheme: !0,
                        children: [(0, l.jsx)("div", {
                            className: p.avatarBackground
                        }), D ? (0, l.jsx)(u.Avatar, {
                            src: F.getAvatarURL(a, 48),
                            size: u.AvatarSizes.SIZE_48,
                            className: p.avatar,
                            "aria-label": F.username
                        }) : (0, l.jsx)(u.AnimatedAvatar, {
                            src: F.getAvatarURL(a, 48),
                            size: u.AvatarSizes.SIZE_48,
                            className: p.avatar,
                            "aria-label": F.username
                        }), (0, l.jsx)("div", {
                            className: p.avatarBorder,
                            style: {
                                backgroundColor: null != b ? (0, d.int2rgba)(b, 1) : y
                            }
                        }), (0, l.jsxs)("div", {
                            className: p.welcomeMessageContent,
                            children: [(0, l.jsxs)("div", {
                                className: p.adminUsernameContainer,
                                children: [(0, l.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    children: S.default.getName(a, null, F)
                                }), k ? (0, l.jsx)(v.default, {
                                    className: p.ownerIcon
                                }) : null]
                            }), (0, l.jsx)(u.Text, {
                                variant: "text-md/medium",
                                children: function(e, t) {
                                    let a = e.split(/\[@username\]/g);
                                    return (0, l.jsx)("span", {
                                        children: a.map((e, n) => (0, l.jsxs)(l.Fragment, {
                                            children: [e, n < a.length - 1 ? (0, l.jsx)(u.Text, {
                                                tag: "span",
                                                variant: "text-md/semibold",
                                                children: "@".concat(t)
                                            }) : null]
                                        }))
                                    })
                                }(null == s ? void 0 : s.message, null != H ? H : L.username)
                            })]
                        })]
                    })
                })
            }