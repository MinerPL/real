(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91434"], {
        2760: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return u
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("77078"),
                r = t("291373"),
                i = t("782340"),
                o = t("210466");

            function n(e) {
                let {
                    content: s,
                    heading: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: o.row,
                    children: [null != t ? (0, l.jsx)(a.Heading, {
                        className: o.heading,
                        variant: "text-sm/normal",
                        children: t
                    }) : null, (0, l.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: s
                    })]
                })
            }

            function u(e) {
                let {
                    flags: s,
                    listScrollerStyle: t
                } = e, {
                    hasMessageContent: u,
                    hasGuildPresences: d,
                    hasGuildMembers: c
                } = (0, r.useBotDataAccess)({
                    flags: s
                });
                if (null == s) return null;
                let f = [];
                return u && f.push((0, l.jsx)(n, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                })), d && f.push((0, l.jsx)(n, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                })), c && f.push((0, l.jsx)(n, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                })), f.length > 0 && f.push((0, l.jsx)("div", {
                    className: o.divider,
                    children: (0, l.jsx)(a.FormDivider, {})
                })), f.push((0, l.jsx)(n, {
                    content: i.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
                    })
                })), (0, l.jsx)(a.ScrollerThin, {
                    className: t,
                    children: f
                })
            }
        },
        656416: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return S
                }
            });
            var l = t("37983"),
                a = t("884691"),
                r = t("446674"),
                i = t("77078"),
                o = t("463848"),
                n = t("373469"),
                u = t("824563"),
                d = t("49111"),
                c = t("260787"),
                f = t("568719");

            function S(e) {
                let {
                    user: s
                } = e, t = (0, r.useStateFromStores)([n.default], () => null != n.default.getAnyStreamForUser(s.id)), S = (0, r.useStateFromStores)([u.default], () => u.default.getActivities(s.id)), m = a.useMemo(() => S.filter(e => e.type !== d.ActivityTypes.CUSTOM_STATUS), [S]), T = a.useMemo(() => t ? m.find(e => e.type === d.ActivityTypes.PLAYING) : null, [m, t]), E = a.useMemo(() => m.filter(e => e !== T), [T, m]);
                return (0, l.jsxs)(i.ScrollerThin, {
                    className: f.listScroller,
                    fade: !0,
                    children: [t ? (0, l.jsx)(o.default, {
                        type: o.UserActivityTypes.PROFILE_V2,
                        user: s,
                        source: "Profile Modal",
                        className: c.userProfileActivity,
                        activity: T,
                        actionColor: c.actionColor
                    }) : null, E.map(e => (0, l.jsx)(o.default, {
                        type: o.UserActivityTypes.PROFILE_V2,
                        activity: e,
                        user: s,
                        useStoreStream: !1,
                        source: "Profile Modal",
                        className: c.userProfileActivity,
                        actionColor: c.actionColor
                    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
                })
            }
        },
        821721: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return n
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("446674"),
                r = t("2760"),
                i = t("713135"),
                o = t("568719");

            function n(e) {
                var s;
                let {
                    user: t
                } = e, n = null === (s = (0, a.useStateFromStores)([i.default], () => i.default.getUserProfile(t.id))) || void 0 === s ? void 0 : s.application;
                return (0, l.jsx)(r.default, {
                    flags: null == n ? void 0 : n.flags,
                    listScrollerStyle: o.listScroller
                })
            }
        },
        717226: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return f
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("414456"),
                r = t.n(a),
                i = t("77078"),
                o = t("235275"),
                n = t("49111"),
                u = t("782340"),
                d = t("355718");

            function c(e) {
                let {
                    className: s,
                    ...t
                } = e;
                return (0, l.jsx)(i.Button, {
                    ...t,
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    className: r(d.actionButton, s)
                })
            }

            function f(e) {
                let {
                    isCurrentUser: s,
                    user: t,
                    relationshipType: a,
                    onAddFriend: r,
                    onIgnoreFriend: f,
                    onSendMessage: S
                } = e, m = (0, o.useIsDMsToClydeEnabled)();
                return s || a === n.RelationshipTypes.BLOCKED || t.isClyde() && !m ? null : a === n.RelationshipTypes.FRIEND || t.bot || t.isClyde() ? (0, l.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: S,
                    children: u.default.Messages.SEND_MESSAGE
                }) : a === n.RelationshipTypes.PENDING_OUTGOING ? (0, l.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: u.default.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : a === n.RelationshipTypes.PENDING_INCOMING ? (0, l.jsxs)("div", {
                    className: d.pendingIncoming,
                    children: [(0, l.jsx)(c, {
                        color: i.Button.Colors.GREEN,
                        onClick: r,
                        children: u.default.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, l.jsx)(c, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: f,
                        className: d.actionRightButton,
                        children: u.default.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, l.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: r,
                    children: u.default.Messages.ADD_FRIEND_BUTTON
                })
            }
        },
        869250: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return I
                }
            });
            var l = t("37983"),
                a = t("884691"),
                r = t("446674"),
                i = t("77078"),
                o = t("910330"),
                n = t("376556"),
                u = t("572943"),
                d = t("915639"),
                c = t("102985"),
                f = t("713135"),
                S = t("906889"),
                m = t("485422"),
                T = t("213736"),
                E = t("880114"),
                N = t("824140"),
                x = t("751906"),
                p = t("782340"),
                h = t("974991");

            function I(e) {
                var s, t;
                let {
                    user: I,
                    displayProfile: v,
                    autoFocusNote: _ = !1,
                    scrollToConnections: A = !1
                } = e, C = (0, u.usePlatformAllowed)({
                    forUserProfile: !0
                }), U = (0, r.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (s = null === (e = f.default.getUserProfile(I.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== s ? s : []
                }), j = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
                    profileTheme: y
                } = (0, S.default)(I, v), g = (0, r.useStateFromStores)([d.default], () => d.default.locale), M = a.useMemo(() => U.filter(e => {
                    let s = n.default.get(e.type);
                    return null != s && C(s)
                }), [U, C]), R = a.useRef(null);
                return (a.useLayoutEffect(() => {
                    if (A) {
                        var e;
                        null == R || null === (e = R.current) || void 0 === e || e.scrollIntoView()
                    }
                }, [A]), j) ? (0, l.jsx)(x.default, {}) : (0, l.jsxs)(i.ScrollerThin, {
                    fade: !0,
                    className: h.infoScroller,
                    children: [(0, l.jsxs)("div", {
                        className: h.userInfoSection,
                        children: [(null == v ? void 0 : v.bio) != null && (null == v ? void 0 : v.bio) !== "" && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: h.userInfoSectionHeader,
                                children: p.default.Messages.USER_PROFILE_ABOUT_ME
                            }), (0, l.jsx)(m.default, {
                                className: h.userInfoText,
                                userBio: null !== (t = null == v ? void 0 : v.bio) && void 0 !== t ? t : ""
                            })]
                        }), I.isClyde() && (0, l.jsx)(T.default, {
                            className: h.userInfoText,
                            isExpanded: !0
                        }), (0, l.jsx)(E.default, {
                            userId: I.id,
                            headingClassName: h.userInfoSectionHeader,
                            textClassName: h.userInfoText
                        }), (0, l.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: h.userInfoSectionHeader,
                            children: p.default.Messages.NOTE
                        }), (0, l.jsx)(o.default, {
                            userId: I.id,
                            autoFocus: _,
                            className: h.note
                        })]
                    }), (0, l.jsx)(N.ConnectedUserAccounts, {
                        ref: R,
                        connectedAccounts: M,
                        theme: y,
                        locale: g,
                        className: h.userInfoSection,
                        userId: I.id
                    })]
                })
            }
        },
        279286: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return M
                }
            });
            var l = t("37983"),
                a = t("884691"),
                r = t("446674"),
                i = t("77078"),
                o = t("901582"),
                n = t("252744"),
                u = t("750560"),
                d = t("502651"),
                c = t("812204"),
                f = t("685665"),
                S = t("635471"),
                m = t("373469"),
                T = t("271938"),
                E = t("824563"),
                N = t("697218"),
                x = t("713135"),
                p = t("217513"),
                h = t("641055"),
                I = t("430312"),
                v = t("481923"),
                _ = t("759210"),
                A = t("347550"),
                C = t("590456"),
                U = t("49111"),
                j = t("782340"),
                y = t("890963");

            function g(e) {
                let {
                    user: s,
                    isCurrentUser: t,
                    section: a,
                    setSection: o,
                    hasActivity: n
                } = e, u = (0, r.useStateFromStores)([x.default], () => {
                    var e, t;
                    return (null === (t = x.default.getUserProfile(s.id)) || void 0 === t ? void 0 : null === (e = t.application) || void 0 === e ? void 0 : e.id) != null
                });
                return (0, l.jsx)("div", {
                    className: y.tabBarContainer,
                    children: (0, l.jsxs)(i.TabBar, {
                        selectedItem: a,
                        type: "top",
                        onItemSelect: o,
                        className: y.tabBar,
                        children: [!s.isNonUserBot() || s.isClyde() ? (0, l.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: C.UserProfileSections.USER_INFO,
                            children: j.default.Messages.USER_INFO
                        }) : null, !s.bot && n ? (0, l.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: C.UserProfileSections.ACTIVITY,
                            children: j.default.Messages.USER_PROFILE_ACTIVITY
                        }) : null, t || s.isClyde() ? null : (0, l.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: C.UserProfileSections.MUTUAL_GUILDS,
                            children: j.default.Messages.MUTUAL_GUILDS
                        }), s.bot || t ? null : (0, l.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: C.UserProfileSections.MUTUAL_FRIENDS,
                            children: j.default.Messages.MUTUAL_FRIENDS
                        }), s.bot && u ? (0, l.jsx)(i.TabBar.Item, {
                            className: y.tabBarItem,
                            id: C.UserProfileSections.BOT_DATA_ACCESS,
                            children: j.default.Messages.BOTS_DATA_ACCESS_TAB
                        }) : null]
                    })
                })
            }

            function M(e) {
                var s, t;
                let {
                    user: x,
                    guildId: M,
                    channelId: R,
                    friendToken: O,
                    autoFocusNote: P,
                    initialSection: F = C.UserProfileSections.USER_INFO,
                    transitionState: B,
                    onClose: D
                } = e, {
                    AnalyticsLocationProvider: L
                } = (0, f.default)(c.default.PROFILE_MODAL), b = null !== (s = (0, r.useStateFromStores)([N.default], () => N.default.getUser(x.id))) && void 0 !== s ? s : x, G = (0, p.default)(null !== (t = null == b ? void 0 : b.id) && void 0 !== t ? t : "");
                (0, u.useSubscribeGuildMembers)({
                    [M]: [b.id]
                });
                let k = (0, r.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(b.id)),
                    w = (0, r.useStateFromStores)([E.default], () => E.default.findActivity(b.id, e => e.type !== U.ActivityTypes.CUSTOM_STATUS)),
                    [H, z] = a.useState(!1),
                    [Y, V] = a.useState(b.isNonUserBot() && !b.isClyde() ? C.UserProfileSections.MUTUAL_GUILDS : F),
                    K = (0, r.useStateFromStores)([T.default], () => T.default.getId() === b.id),
                    Z = null != w || k,
                    Q = a.createRef(),
                    W = (0, n.default)(Q);
                !Z && Y === C.UserProfileSections.ACTIVITY && V(C.UserProfileSections.USER_INFO);
                let q = a.useCallback(e => {
                        z(!0), V(e)
                    }, []),
                    J = null == G ? void 0 : G.profileEffectID;
                return (0, l.jsx)(L, {
                    children: (0, l.jsx)(o.default, {
                        section: U.AnalyticsSections.PROFILE_MODAL,
                        children: (0, l.jsxs)(i.ModalRoot, {
                            transitionState: B,
                            className: y.root,
                            "aria-label": j.default.Messages.USER_PROFILE_MODAL,
                            children: [(0, l.jsx)("div", {
                                ref: Q,
                                children: (0, l.jsxs)(I.default, {
                                    user: b,
                                    profileType: C.UserProfileTypes.MODAL,
                                    children: [(0, l.jsx)("div", {
                                        className: y.topSection,
                                        children: (0, l.jsx)(_.default, {
                                            displayProfile: G,
                                            user: b,
                                            friendToken: O,
                                            onClose: D,
                                            isStreaming: (0, d.default)(w),
                                            guildId: M,
                                            channelId: R
                                        })
                                    }), (0, l.jsxs)(I.default.Inner, {
                                        children: [B === i.ModalTransitionState.ENTERED && (0, l.jsx)(h.default, {
                                            onTooltipClose: D
                                        }), (0, l.jsxs)("div", {
                                            className: y.body,
                                            children: [(0, l.jsx)(A.default, {
                                                user: b,
                                                displayProfile: G
                                            }), !K || Z ? (0, l.jsx)(g, {
                                                user: b,
                                                section: Y === C.UserProfileSections.USER_INFO_CONNECTIONS ? C.UserProfileSections.USER_INFO : Y,
                                                setSection: q,
                                                hasActivity: Z,
                                                isCurrentUser: K
                                            }) : (0, l.jsx)("div", {
                                                className: y.divider
                                            }), (0, l.jsx)(v.default, {
                                                displayProfile: G,
                                                user: b,
                                                autoFocusNote: P && !H,
                                                selectedSection: Y,
                                                onClose: D
                                            })]
                                        })]
                                    })]
                                })
                            }), null != J && (0, l.jsx)(S.default, {
                                profileEffectID: J,
                                bannerAdjustment: 0,
                                isHovering: W
                            })]
                        })
                    })
                })
            }
        },
        481923: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("656416"),
                r = t("821721"),
                i = t("869250"),
                o = t("69682"),
                n = t("446509"),
                u = t("590456");

            function d(e) {
                let {
                    displayProfile: s,
                    user: t,
                    selectedSection: d,
                    autoFocusNote: c,
                    onClose: f
                } = e;
                switch (d) {
                    case u.UserProfileSections.ACTIVITY:
                        return (0, l.jsx)(a.default, {
                            user: t
                        });
                    case u.UserProfileSections.MUTUAL_GUILDS:
                        return (0, l.jsx)(n.default, {
                            user: t,
                            onClose: f
                        });
                    case u.UserProfileSections.MUTUAL_FRIENDS:
                        return (0, l.jsx)(o.default, {
                            user: t,
                            onClose: f
                        });
                    case u.UserProfileSections.BOT_DATA_ACCESS:
                        return (0, l.jsx)(r.default, {
                            user: t
                        });
                    case u.UserProfileSections.USER_INFO_CONNECTIONS:
                    case u.UserProfileSections.USER_INFO:
                    default:
                        return (0, l.jsx)(i.default, {
                            displayProfile: s,
                            autoFocusNote: c,
                            user: t,
                            scrollToConnections: d === u.UserProfileSections.USER_INFO_CONNECTIONS
                        })
                }
            }
        },
        759210: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return F
                }
            });
            var l = t("37983"),
                a = t("884691"),
                r = t("446674"),
                i = t("669491"),
                o = t("77078"),
                n = t("450911"),
                u = t("272030"),
                d = t("54239"),
                c = t("736964"),
                f = t("377114"),
                S = t("824794"),
                m = t("271938"),
                T = t("824563"),
                E = t("27618"),
                N = t("663745"),
                x = t("423487"),
                p = t("50885"),
                h = t("713135"),
                I = t("106435"),
                v = t("906889"),
                _ = t("289918"),
                A = t("609734"),
                C = t("590006"),
                U = t("717226"),
                j = t("590456"),
                y = t("49111"),
                g = t("843455"),
                M = t("782340"),
                R = t("734675");
            let O = o.AvatarSizes.SIZE_120,
                P = p.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

            function F(e) {
                let {
                    displayProfile: s,
                    user: p,
                    guildId: F,
                    channelId: B,
                    friendToken: D,
                    isStreaming: L,
                    onClose: b
                } = e, G = (0, r.useStateFromStores)([E.default], () => E.default.getRelationshipType(p.id)), k = (0, r.useStateFromStores)([T.default], () => T.default.isMobileOnline(p.id)), w = (0, r.useStateFromStores)([T.default], () => T.default.getStatus(p.id)), H = (0, r.useStateFromStores)([h.default], () => h.default.getUserProfile(p.id)), z = (0, r.useStateFromStores)([m.default], () => m.default.getId() === p.id), {
                    profileTheme: Y
                } = (0, v.default)(p, s), {
                    avatarSrc: V,
                    eventHandlers: K,
                    avatarDecorationSrc: Z
                } = (0, I.default)({
                    user: p,
                    size: O
                }), Q = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(p, B), [p, B]);

                function W() {
                    b(), (0, d.popLayer)()
                }

                function q() {
                    c.default.removeFriend(p.id, {
                        location: "User Profile"
                    })
                }

                function J(e) {
                    n.default.openPrivateChannel(p.id, !1, !1, e), W()
                }

                function X() {
                    try {
                        c.default.addRelationship({
                            userId: p.id,
                            context: {
                                location: "User Profile"
                            },
                            type: y.RelationshipTypes.BLOCKED
                        })
                    } catch (e) {
                        W()
                    }
                }

                function $() {
                    let e = "@me" === F ? void 0 : F;
                    (0, f.showReportModalForUser)(p, e)
                }
                return (0, l.jsxs)("header", {
                    children: [(0, l.jsx)(_.default, {
                        displayProfile: s,
                        onClose: W,
                        user: p,
                        profileType: j.UserProfileTypes.MODAL
                    }), (0, l.jsxs)("div", {
                        className: R.header,
                        children: [(0, l.jsx)("div", {
                            ...K,
                            children: (0, l.jsx)(P, {
                                src: V,
                                avatarDecoration: Z,
                                size: O,
                                className: R.avatar,
                                status: Q ? g.StatusTypes.UNKNOWN : L ? g.StatusTypes.STREAMING : w,
                                statusBackdropColor: (0, o.getStatusBackdropColor)(Y),
                                isMobile: k,
                                statusTooltip: !0,
                                "aria-label": p.username
                            })
                        }), (0, l.jsxs)("div", {
                            className: R.headerTop,
                            children: [(null == H ? void 0 : H.profileFetchFailed) && !p.isClyde() ? (0, l.jsx)(o.Tooltip, {
                                text: M.default.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, l.jsx)(x.default, {
                                    ...e,
                                    className: R.warningCircleIcon,
                                    color: i.default.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, l.jsx)(C.default, {
                                user: p,
                                className: R.badgeList,
                                guildId: F,
                                size: C.BadgeSizes.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: C.BadgeSizes.SIZE_18
                            }), (0, l.jsxs)("div", {
                                className: R.relationshipButtons,
                                children: [(0, l.jsx)(A.default, {
                                    className: R.applicationInstallButton,
                                    application: null == H ? void 0 : H.application
                                }), (0, l.jsx)(U.default, {
                                    user: p,
                                    isCurrentUser: z,
                                    relationshipType: G,
                                    onAddFriend: function() {
                                        try {
                                            c.default.addRelationship({
                                                userId: p.id,
                                                context: {
                                                    location: "User Profile"
                                                },
                                                type: void 0,
                                                friendToken: D
                                            })
                                        } catch (e) {
                                            W()
                                        }
                                    },
                                    onIgnoreFriend: function() {
                                        c.default.cancelFriendRequest(p.id, {
                                            location: "User Profile"
                                        })
                                    },
                                    onSendMessage: () => J("User Profile Modal - Send Message Button")
                                }), z || p.isNonUserBot() ? null : (0, l.jsx)(o.Clickable, {
                                    focusProps: {
                                        offset: {
                                            left: 8
                                        }
                                    },
                                    onClick: function(e) {
                                        (0, u.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await t.el("487956").then(t.bind(t, "487956"));
                                            return s => (0, l.jsx)(e, {
                                                ...s,
                                                relationshipType: G,
                                                onRemoveFriend: q,
                                                onBlock: X,
                                                onReport: $,
                                                onMessage: () => J("User Profile Modal - Context Menu"),
                                                user: p
                                            })
                                        })
                                    },
                                    children: (0, l.jsx)(N.default, {
                                        className: R.additionalActionsIcon
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        347550: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return T
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("414456"),
                r = t.n(a),
                i = t("446674"),
                o = t("77078"),
                n = t("145079"),
                u = t("775377"),
                d = t("824563"),
                c = t("158998"),
                f = t("49111"),
                S = t("782340"),
                m = t("811136");

            function T(e) {
                let {
                    user: s,
                    displayProfile: t
                } = e, a = (0, i.useStateFromStores)([d.default], () => d.default.findActivity(s.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), T = c.default.getName(s);
                return (0, l.jsxs)("div", {
                    className: m.container,
                    children: [null == T && (0, l.jsx)(n.default, {
                        user: s,
                        className: m.nameTag,
                        usernameClass: m.username,
                        discriminatorClass: m.discriminator
                    }), null != T && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(o.Text, {
                            variant: "text-lg/semibold",
                            style: {
                                marginRight: "12px"
                            },
                            children: T
                        }), (0, l.jsx)(n.default, {
                            user: s,
                            forceUsername: !0,
                            usernameClass: m.discriminator,
                            discriminatorClass: m.discriminator,
                            className: r(m.nameTag, m.nameTagSmall)
                        })]
                    }), (null == t ? void 0 : t.pronouns) != null && (null == t ? void 0 : t.pronouns) !== "" && (0, l.jsx)(o.Tooltip, {
                        text: S.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, l.jsx)(o.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: r(m.pronouns, m.nameTagSmall),
                            children: t.pronouns
                        })
                    }), null != a ? (0, l.jsx)("div", {
                        className: m.customStatusActivity,
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: m.customStatusText,
                            children: (0, l.jsx)(u.default, {
                                activity: a,
                                className: m.customStatus,
                                emojiClassName: m.customStatusEmoji,
                                soloEmojiClassName: m.customStatusSoloEmoji
                            })
                        })
                    }) : null]
                })
            }
        },
        751906: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return i
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("782340"),
                r = t("568719");

            function i() {
                return (0, l.jsxs)("div", {
                    className: r.empty,
                    children: [(0, l.jsx)("div", {
                        className: r.emptyIconStreamerMode
                    }), (0, l.jsx)("div", {
                        className: r.emptyText,
                        children: a.default.Messages.STREAMER_MODE_ENABLED
                    })]
                })
            }
        }
    }
]);