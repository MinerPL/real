(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91434"], {
        2760: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            }), s("702976"), s("424973");
            var a = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("291373"),
                i = s("782340"),
                n = s("210466");

            function o(e) {
                let {
                    content: t,
                    heading: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: n.row,
                    children: [null != s ? (0, a.jsx)(l.Heading, {
                        className: n.heading,
                        variant: "text-sm/normal",
                        children: s
                    }) : null, (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t
                    })]
                })
            }

            function u(e) {
                let {
                    flags: t,
                    listScrollerStyle: s
                } = e, {
                    hasMessageContent: u,
                    hasGuildPresences: d,
                    hasGuildMembers: c
                } = (0, r.useBotDataAccess)({
                    flags: t
                });
                if (null == t) return null;
                let f = [];
                return u && f.push((0, a.jsx)(o, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                })), d && f.push((0, a.jsx)(o, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                })), c && f.push((0, a.jsx)(o, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                })), f.length > 0 && f.push((0, a.jsx)("div", {
                    className: n.divider,
                    children: (0, a.jsx)(l.FormDivider, {})
                })), f.push((0, a.jsx)(o, {
                    content: i.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
                    })
                })), (0, a.jsx)(l.ScrollerThin, {
                    className: s,
                    children: f
                })
            }
        },
        656416: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                n = s("463848"),
                o = s("373469"),
                u = s("824563"),
                d = s("49111"),
                c = s("260787"),
                f = s("568719");

            function S(e) {
                let {
                    user: t
                } = e, s = (0, r.useStateFromStores)([o.default], () => null != o.default.getAnyStreamForUser(t.id)), S = (0, r.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), m = l.useMemo(() => S.filter(e => e.type !== d.ActivityTypes.CUSTOM_STATUS), [S]), T = l.useMemo(() => s ? m.find(e => e.type === d.ActivityTypes.PLAYING) : null, [m, s]), x = l.useMemo(() => m.filter(e => e !== T), [T, m]);
                return (0, a.jsxs)(i.ScrollerThin, {
                    className: f.listScroller,
                    fade: !0,
                    children: [s ? (0, a.jsx)(n.default, {
                        type: n.UserActivityTypes.PROFILE_V2,
                        user: t,
                        source: "Profile Modal",
                        className: c.userProfileActivity,
                        activity: T,
                        actionColor: c.actionColor
                    }) : null, x.map(e => (0, a.jsx)(n.default, {
                        type: n.UserActivityTypes.PROFILE_V2,
                        activity: e,
                        user: t,
                        useStoreStream: !1,
                        source: "Profile Modal",
                        className: c.userProfileActivity,
                        actionColor: c.actionColor
                    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
                })
            }
        },
        821721: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("702976");
            var a = s("37983");
            s("884691");
            var l = s("446674"),
                r = s("2760"),
                i = s("713135"),
                n = s("568719");

            function o(e) {
                var t;
                let {
                    user: s
                } = e, o = null === (t = (0, l.useStateFromStores)([i.default], () => i.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
                return (0, a.jsx)(r.default, {
                    flags: null == o ? void 0 : o.flags,
                    listScrollerStyle: n.listScroller
                })
            }
        },
        869250: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                n = s("910330"),
                o = s("376556"),
                u = s("572943"),
                d = s("915639"),
                c = s("102985"),
                f = s("713135"),
                S = s("906889"),
                m = s("485422"),
                T = s("213736"),
                x = s("880114"),
                p = s("824140"),
                v = s("751906"),
                h = s("782340"),
                A = s("974991");

            function N(e) {
                var t;
                let {
                    user: s,
                    displayProfile: N,
                    autoFocusNote: U = !1,
                    scrollToConnections: _ = !1
                } = e, E = (0, u.usePlatformAllowed)({
                    forUserProfile: !0
                }), I = (0, r.useStateFromStores)([f.default], () => {
                    var e, t;
                    return null !== (t = null === (e = f.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
                }), j = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
                    profileTheme: C
                } = (0, S.default)(s, N), y = (0, r.useStateFromStores)([d.default], () => d.default.locale), g = l.useMemo(() => I.filter(e => {
                    let t = o.default.get(e.type);
                    return null != t && E(t)
                }), [I, E]), M = l.useRef(null);
                return (l.useLayoutEffect(() => {
                    if (_) {
                        var e;
                        null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView()
                    }
                }, [_]), j) ? (0, a.jsx)(v.default, {}) : (0, a.jsxs)(i.ScrollerThin, {
                    fade: !0,
                    className: A.infoScroller,
                    children: [(0, a.jsxs)("div", {
                        className: A.userInfoSection,
                        children: [(null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== "" && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: A.userInfoSectionHeader,
                                children: h.default.Messages.USER_PROFILE_ABOUT_ME
                            }), (0, a.jsx)(m.default, {
                                className: A.userInfoText,
                                userBio: null !== (t = null == N ? void 0 : N.bio) && void 0 !== t ? t : ""
                            })]
                        }), s.isClyde() && (0, a.jsx)(T.default, {
                            className: A.userInfoText,
                            isExpanded: !0
                        }), (0, a.jsx)(x.default, {
                            userId: s.id,
                            headingClassName: A.userInfoSectionHeader,
                            textClassName: A.userInfoText
                        }), (0, a.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: A.userInfoSectionHeader,
                            children: h.default.Messages.NOTE
                        }), (0, a.jsx)(n.default, {
                            userId: s.id,
                            autoFocus: U,
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
        },
        279286: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                n = s("901582"),
                o = s("252744"),
                u = s("750560"),
                d = s("502651"),
                c = s("812204"),
                f = s("685665"),
                S = s("635471"),
                m = s("373469"),
                T = s("271938"),
                x = s("824563"),
                p = s("697218"),
                v = s("713135"),
                h = s("217513"),
                A = s("641055"),
                N = s("430312"),
                U = s("481923"),
                _ = s("759210"),
                E = s("347550"),
                I = s("590456"),
                j = s("49111"),
                C = s("782340"),
                y = s("890963");

            function g(e) {
                let {
                    user: t,
                    isCurrentUser: s,
                    section: l,
                    setSection: n,
                    hasActivity: o
                } = e, u = (0, r.useStateFromStores)([v.default], () => {
                    var e, s;
                    return (null === (s = v.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
                });
                return (0, a.jsx)("div", {
                    className: y.tabBarContainer,
                    children: (0, a.jsxs)(i.TabBar, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: n,
                        className: y.tabBar,
                        children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: I.UserProfileSections.USER_INFO,
                            children: C.default.Messages.USER_INFO
                        }) : null, !t.bot && o ? (0, a.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: I.UserProfileSections.ACTIVITY,
                            children: C.default.Messages.USER_PROFILE_ACTIVITY
                        }) : null, s || t.isClyde() ? null : (0, a.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: I.UserProfileSections.MUTUAL_GUILDS,
                            children: C.default.Messages.MUTUAL_GUILDS
                        }), t.bot || s ? null : (0, a.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: I.UserProfileSections.MUTUAL_FRIENDS,
                            children: C.default.Messages.MUTUAL_FRIENDS
                        }), t.bot && u ? (0, a.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: I.UserProfileSections.BOT_DATA_ACCESS,
                            children: C.default.Messages.BOTS_DATA_ACCESS_TAB
                        }) : null]
                    })
                })
            }

            function M(e) {
                var t, s;
                let {
                    user: v,
                    guildId: M,
                    channelId: O,
                    friendToken: P,
                    autoFocusNote: F,
                    initialSection: R = I.UserProfileSections.USER_INFO,
                    transitionState: B,
                    onClose: D
                } = e, {
                    AnalyticsLocationProvider: L
                } = (0, f.default)(c.default.PROFILE_MODAL), b = null !== (t = (0, r.useStateFromStores)([p.default], () => p.default.getUser(v.id))) && void 0 !== t ? t : v, k = (0, h.default)(null !== (s = null == b ? void 0 : b.id) && void 0 !== s ? s : "");
                (0, u.useSubscribeGuildMembers)({
                    [M]: [b.id]
                });
                let w = (0, r.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(b.id)),
                    G = (0, r.useStateFromStores)([x.default], () => x.default.findActivity(b.id, e => e.type !== j.ActivityTypes.CUSTOM_STATUS)),
                    [H, Y] = l.useState(!1),
                    [z, V] = l.useState(b.isNonUserBot() && !b.isClyde() ? I.UserProfileSections.MUTUAL_GUILDS : R),
                    Z = (0, r.useStateFromStores)([T.default], () => T.default.getId() === b.id),
                    K = null != G || w,
                    W = !Z || K,
                    q = l.createRef(),
                    J = (0, o.default)(q);
                !K && z === I.UserProfileSections.ACTIVITY && V(I.UserProfileSections.USER_INFO);
                let Q = l.useCallback(e => {
                        Y(!0), V(e)
                    }, []),
                    X = null == k ? void 0 : k.profileEffectID;
                return (0, a.jsx)(L, {
                    children: (0, a.jsx)(n.default, {
                        section: j.AnalyticsSections.PROFILE_MODAL,
                        children: (0, a.jsxs)(i.ModalRoot, {
                            transitionState: B,
                            className: y.root,
                            "aria-label": C.default.Messages.USER_PROFILE_MODAL,
                            children: [(0, a.jsx)("div", {
                                ref: q,
                                children: (0, a.jsxs)(N.default, {
                                    user: b,
                                    profileType: I.UserProfileTypes.MODAL,
                                    children: [(0, a.jsx)("div", {
                                        className: y.topSection,
                                        children: (0, a.jsx)(_.default, {
                                            displayProfile: k,
                                            user: b,
                                            friendToken: P,
                                            onClose: D,
                                            isStreaming: (0, d.default)(G),
                                            guildId: M,
                                            channelId: O
                                        })
                                    }), (0, a.jsxs)(N.default.Inner, {
                                        children: [B === i.ModalTransitionState.ENTERED && (0, a.jsx)(A.default, {
                                            onTooltipClose: D
                                        }), (0, a.jsxs)("div", {
                                            className: y.body,
                                            children: [(0, a.jsx)(E.default, {
                                                user: b,
                                                displayProfile: k
                                            }), W ? (0, a.jsx)(g, {
                                                user: b,
                                                section: z === I.UserProfileSections.USER_INFO_CONNECTIONS ? I.UserProfileSections.USER_INFO : z,
                                                setSection: Q,
                                                hasActivity: K,
                                                isCurrentUser: Z
                                            }) : (0, a.jsx)("div", {
                                                className: y.divider
                                            }), (0, a.jsx)(U.default, {
                                                displayProfile: k,
                                                user: b,
                                                autoFocusNote: F && !H,
                                                selectedSection: z,
                                                onClose: D
                                            })]
                                        })]
                                    })]
                                })
                            }), null != X && (0, a.jsx)(S.default, {
                                profileEffectID: X,
                                bannerAdjustment: 0,
                                isHovering: J
                            })]
                        })
                    })
                })
            }
        },
        481923: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("656416"),
                r = s("821721"),
                i = s("869250"),
                n = s("69682"),
                o = s("446509"),
                u = s("590456");

            function d(e) {
                let {
                    displayProfile: t,
                    user: s,
                    selectedSection: d,
                    autoFocusNote: c,
                    onClose: f
                } = e;
                switch (d) {
                    case u.UserProfileSections.ACTIVITY:
                        return (0, a.jsx)(l.default, {
                            user: s
                        });
                    case u.UserProfileSections.MUTUAL_GUILDS:
                        return (0, a.jsx)(o.default, {
                            user: s,
                            onClose: f
                        });
                    case u.UserProfileSections.MUTUAL_FRIENDS:
                        return (0, a.jsx)(n.default, {
                            user: s,
                            onClose: f
                        });
                    case u.UserProfileSections.BOT_DATA_ACCESS:
                        return (0, a.jsx)(r.default, {
                            user: s
                        });
                    case u.UserProfileSections.USER_INFO_CONNECTIONS:
                    case u.UserProfileSections.USER_INFO:
                    default:
                        return (0, a.jsx)(i.default, {
                            displayProfile: t,
                            autoFocusNote: c,
                            user: s,
                            scrollToConnections: d === u.UserProfileSections.USER_INFO_CONNECTIONS
                        })
                }
            }
        },
        759210: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("669491"),
                n = s("77078"),
                o = s("450911"),
                u = s("272030"),
                d = s("54239"),
                c = s("736964"),
                f = s("377114"),
                S = s("824794"),
                m = s("271938"),
                T = s("824563"),
                x = s("27618"),
                p = s("663745"),
                v = s("423487"),
                h = s("50885"),
                A = s("713135"),
                N = s("106435"),
                U = s("906889"),
                _ = s("289918"),
                E = s("609734"),
                I = s("590006"),
                j = s("717226"),
                C = s("590456"),
                y = s("49111"),
                g = s("843455"),
                M = s("782340"),
                O = s("734675");
            let P = n.AvatarSizes.SIZE_120,
                F = h.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;

            function R(e) {
                let {
                    displayProfile: t,
                    user: h,
                    guildId: R,
                    channelId: B,
                    friendToken: D,
                    isStreaming: L,
                    onClose: b
                } = e, k = (0, r.useStateFromStores)([x.default], () => x.default.getRelationshipType(h.id)), w = (0, r.useStateFromStores)([T.default], () => T.default.isMobileOnline(h.id)), G = (0, r.useStateFromStores)([T.default], () => T.default.getStatus(h.id)), H = (0, r.useStateFromStores)([A.default], () => A.default.getUserProfile(h.id)), Y = (0, r.useStateFromStores)([m.default], () => m.default.getId() === h.id), {
                    profileTheme: z
                } = (0, U.default)(h, t), {
                    avatarSrc: V,
                    eventHandlers: Z,
                    avatarDecorationSrc: K
                } = (0, N.default)({
                    user: h,
                    size: P
                }), W = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(h, B), [h, B]);

                function q() {
                    b(), (0, d.popLayer)()
                }

                function J() {
                    c.default.removeFriend(h.id, {
                        location: "User Profile"
                    })
                }

                function Q(e) {
                    o.default.openPrivateChannel(h.id, !1, !1, e), q()
                }

                function X() {
                    try {
                        c.default.addRelationship({
                            userId: h.id,
                            context: {
                                location: "User Profile"
                            },
                            type: y.RelationshipTypes.BLOCKED
                        })
                    } catch (e) {
                        q()
                    }
                }

                function $() {
                    let e = "@me" === R ? void 0 : R;
                    (0, f.showReportModalForUser)(h, e)
                }
                return (0, a.jsxs)("header", {
                    children: [(0, a.jsx)(_.default, {
                        displayProfile: t,
                        onClose: q,
                        user: h,
                        profileType: C.UserProfileTypes.MODAL
                    }), (0, a.jsxs)("div", {
                        className: O.header,
                        children: [(0, a.jsx)("div", {
                            ...Z,
                            children: (0, a.jsx)(F, {
                                src: V,
                                avatarDecoration: K,
                                size: P,
                                className: O.avatar,
                                status: W ? g.StatusTypes.UNKNOWN : L ? g.StatusTypes.STREAMING : G,
                                statusBackdropColor: (0, n.getStatusBackdropColor)(z),
                                isMobile: w,
                                statusTooltip: !0,
                                "aria-label": h.username
                            })
                        }), (0, a.jsxs)("div", {
                            className: O.headerTop,
                            children: [(null == H ? void 0 : H.profileFetchFailed) && !h.isClyde() ? (0, a.jsx)(n.Tooltip, {
                                text: M.default.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, a.jsx)(v.default, {
                                    ...e,
                                    className: O.warningCircleIcon,
                                    color: i.default.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, a.jsx)(I.default, {
                                user: h,
                                className: O.badgeList,
                                guildId: R,
                                size: I.BadgeSizes.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: I.BadgeSizes.SIZE_18
                            }), (0, a.jsxs)("div", {
                                className: O.relationshipButtons,
                                children: [(0, a.jsx)(E.default, {
                                    className: O.applicationInstallButton,
                                    application: null == H ? void 0 : H.application
                                }), (0, a.jsx)(j.default, {
                                    user: h,
                                    isCurrentUser: Y,
                                    relationshipType: k,
                                    onAddFriend: function() {
                                        try {
                                            c.default.addRelationship({
                                                userId: h.id,
                                                context: {
                                                    location: "User Profile"
                                                },
                                                type: void 0,
                                                friendToken: D
                                            })
                                        } catch (e) {
                                            q()
                                        }
                                    },
                                    onIgnoreFriend: function() {
                                        c.default.cancelFriendRequest(h.id, {
                                            location: "User Profile"
                                        })
                                    },
                                    onSendMessage: () => Q("User Profile Modal - Send Message Button")
                                }), Y || h.isNonUserBot() ? null : (0, a.jsx)(n.Clickable, {
                                    focusProps: {
                                        offset: {
                                            left: 8
                                        }
                                    },
                                    onClick: function(e) {
                                        (0, u.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await s.el("487956").then(s.bind(s, "487956"));
                                            return t => (0, a.jsx)(e, {
                                                ...t,
                                                relationshipType: k,
                                                onRemoveFriend: J,
                                                onBlock: X,
                                                onReport: $,
                                                onMessage: () => Q("User Profile Modal - Context Menu"),
                                                user: h
                                            })
                                        })
                                    },
                                    children: (0, a.jsx)(p.default, {
                                        className: O.additionalActionsIcon
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        347550: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                i = s("446674"),
                n = s("77078"),
                o = s("145079"),
                u = s("775377"),
                d = s("824563"),
                c = s("158998"),
                f = s("49111"),
                S = s("782340"),
                m = s("811136");

            function T(e) {
                let {
                    user: t,
                    displayProfile: s
                } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), T = c.default.getName(t);
                return (0, a.jsxs)("div", {
                    className: m.container,
                    children: [null == T && (0, a.jsx)(o.default, {
                        user: t,
                        className: m.nameTag,
                        usernameClass: m.username,
                        discriminatorClass: m.discriminator
                    }), null != T && (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(n.Text, {
                            variant: "text-lg/semibold",
                            style: {
                                marginRight: "12px"
                            },
                            children: T
                        }), (0, a.jsx)(o.default, {
                            user: t,
                            forceUsername: !0,
                            usernameClass: m.discriminator,
                            discriminatorClass: m.discriminator,
                            className: r(m.nameTag, m.nameTagSmall)
                        })]
                    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, a.jsx)(n.Tooltip, {
                        text: S.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, a.jsx)(n.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: r(m.pronouns, m.nameTagSmall),
                            children: s.pronouns
                        })
                    }), null != l ? (0, a.jsx)("div", {
                        className: m.customStatusActivity,
                        children: (0, a.jsx)(n.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: m.customStatusText,
                            children: (0, a.jsx)(u.default, {
                                activity: l,
                                className: m.customStatus,
                                emojiClassName: m.customStatusEmoji,
                                soloEmojiClassName: m.customStatusSoloEmoji
                            })
                        })
                    }) : null]
                })
            }
        },
        751906: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("782340"),
                r = s("568719");

            function i() {
                return (0, a.jsxs)("div", {
                    className: r.empty,
                    children: [(0, a.jsx)("div", {
                        className: r.emptyIconStreamerMode
                    }), (0, a.jsx)("div", {
                        className: r.emptyText,
                        children: l.default.Messages.STREAMER_MODE_ENABLED
                    })]
                })
            }
        }
    }
]);