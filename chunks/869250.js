            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                o = s("910330"),
                n = s("376556"),
                u = s("572943"),
                d = s("915639"),
                c = s("102985"),
                f = s("713135"),
                S = s("906889"),
                m = s("485422"),
                x = s("213736"),
                T = s("880114"),
                p = s("824140"),
                v = s("751906"),
                h = s("782340"),
                A = s("974991");

            function E(e) {
                var t;
                let {
                    user: s,
                    displayProfile: E,
                    autoFocusNote: N = !1,
                    scrollToConnections: U = !1
                } = e, I = (0, u.usePlatformAllowed)({
                    forUserProfile: !0
                }), _ = (0, r.useStateFromStores)([f.default], () => {
                    var e, t;
                    return null !== (t = null === (e = f.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
                }), j = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
                    profileTheme: C
                } = (0, S.default)(s, E), y = (0, r.useStateFromStores)([d.default], () => d.default.locale), g = l.useMemo(() => _.filter(e => {
                    let t = n.default.get(e.type);
                    return null != t && I(t)
                }), [_, I]), M = l.useRef(null);
                return (l.useLayoutEffect(() => {
                    if (U) {
                        var e;
                        null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView()
                    }
                }, [U]), j) ? (0, a.jsx)(v.default, {}) : (0, a.jsxs)(i.ScrollerThin, {
                    fade: !0,
                    className: A.infoScroller,
                    children: [(0, a.jsxs)("div", {
                        className: A.userInfoSection,
                        children: [(null == E ? void 0 : E.bio) != null && (null == E ? void 0 : E.bio) !== "" && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: A.userInfoSectionHeader,
                                children: h.default.Messages.USER_PROFILE_ABOUT_ME
                            }), (0, a.jsx)(m.default, {
                                className: A.userInfoText,
                                userBio: null !== (t = null == E ? void 0 : E.bio) && void 0 !== t ? t : ""
                            })]
                        }), s.isClyde() && (0, a.jsx)(x.default, {
                            className: A.userInfoText,
                            isExpanded: !0
                        }), (0, a.jsx)(T.default, {
                            userId: s.id,
                            headingClassName: A.userInfoSectionHeader,
                            textClassName: A.userInfoText
                        }), (0, a.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: A.userInfoSectionHeader,
                            children: h.default.Messages.NOTE
                        }), (0, a.jsx)(o.default, {
                            userId: s.id,
                            autoFocus: N,
                            className: A.note
                        })]
                    }), (0, a.jsx)(p.ConnectedUserAccounts, {
                        ref: M,
                        connectedAccounts: g,
                        theme: C,
                        locale: y,
                        className: A.userInfoSection,
                        userId: s.id
                    })]
                })
            }