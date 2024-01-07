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
                o = s("77078"),
                n = s("450911"),
                u = s("272030"),
                d = s("54239"),
                c = s("736964"),
                f = s("377114"),
                S = s("824794"),
                m = s("271938"),
                x = s("824563"),
                T = s("27618"),
                p = s("663745"),
                v = s("423487"),
                h = s("50885"),
                A = s("713135"),
                E = s("106435"),
                N = s("906889"),
                U = s("289918"),
                I = s("609734"),
                _ = s("590006"),
                j = s("717226"),
                C = s("590456"),
                y = s("49111"),
                g = s("843455"),
                M = s("782340"),
                P = s("734675");
            let O = o.AvatarSizes.SIZE_120,
                F = h.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

            function R(e) {
                let {
                    displayProfile: t,
                    user: h,
                    guildId: R,
                    channelId: B,
                    friendToken: D,
                    isStreaming: L,
                    hasProfileEffect: b,
                    onClose: k
                } = e, G = (0, r.useStateFromStores)([T.default], () => T.default.getRelationshipType(h.id)), w = (0, r.useStateFromStores)([x.default], () => x.default.isMobileOnline(h.id)), V = (0, r.useStateFromStores)([x.default], () => x.default.getStatus(h.id)), H = (0, r.useStateFromStores)([A.default], () => A.default.getUserProfile(h.id)), Y = (0, r.useStateFromStores)([m.default], () => m.default.getId() === h.id), {
                    profileTheme: z
                } = (0, N.default)(h, t), {
                    avatarSrc: Z,
                    eventHandlers: K,
                    avatarDecorationSrc: W
                } = (0, E.default)({
                    user: h,
                    size: O
                }), q = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(h, B), [h, B]);

                function J() {
                    k(), (0, d.popLayer)()
                }

                function Q() {
                    c.default.removeFriend(h.id, {
                        location: "User Profile"
                    })
                }

                function X(e) {
                    n.default.openPrivateChannel(h.id, !1, !1, e), J()
                }

                function $() {
                    try {
                        c.default.addRelationship({
                            userId: h.id,
                            context: {
                                location: "User Profile"
                            },
                            type: y.RelationshipTypes.BLOCKED
                        })
                    } catch (e) {
                        J()
                    }
                }

                function ee() {
                    let e = "@me" === R ? void 0 : R;
                    (0, f.showReportModalForUser)(h, e)
                }
                return (0, a.jsxs)("header", {
                    children: [(0, a.jsx)(U.default, {
                        displayProfile: t,
                        onClose: J,
                        user: h,
                        profileType: C.UserProfileTypes.MODAL,
                        hasProfileEffect: b
                    }), (0, a.jsxs)("div", {
                        className: P.header,
                        children: [(0, a.jsx)("div", {
                            ...K,
                            children: (0, a.jsx)(F, {
                                src: Z,
                                avatarDecoration: W,
                                size: O,
                                className: P.avatar,
                                status: q ? g.StatusTypes.UNKNOWN : L ? g.StatusTypes.STREAMING : V,
                                statusBackdropColor: (0, o.getStatusBackdropColor)(z),
                                isMobile: w,
                                statusTooltip: !0,
                                "aria-label": h.username
                            })
                        }), (0, a.jsxs)("div", {
                            className: P.headerTop,
                            children: [(null == H ? void 0 : H.profileFetchFailed) && !h.isClyde() ? (0, a.jsx)(o.Tooltip, {
                                text: M.default.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, a.jsx)(v.default, {
                                    ...e,
                                    className: P.warningCircleIcon,
                                    color: i.default.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, a.jsx)(_.default, {
                                user: h,
                                className: P.badgeList,
                                guildId: R,
                                size: _.BadgeSizes.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: _.BadgeSizes.SIZE_18
                            }), (0, a.jsxs)("div", {
                                className: P.relationshipButtons,
                                children: [(0, a.jsx)(I.default, {
                                    className: P.applicationInstallButton,
                                    application: null == H ? void 0 : H.application
                                }), (0, a.jsx)(j.default, {
                                    user: h,
                                    isCurrentUser: Y,
                                    relationshipType: G,
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
                                            J()
                                        }
                                    },
                                    onIgnoreFriend: function() {
                                        c.default.cancelFriendRequest(h.id, {
                                            location: "User Profile"
                                        })
                                    },
                                    onSendMessage: () => X("User Profile Modal - Send Message Button")
                                }), Y || h.isNonUserBot() ? null : (0, a.jsx)(o.Clickable, {
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
                                                relationshipType: G,
                                                onRemoveFriend: Q,
                                                onBlock: $,
                                                onReport: ee,
                                                onMessage: () => X("User Profile Modal - Context Menu"),
                                                user: h
                                            })
                                        })
                                    },
                                    children: (0, a.jsx)(p.default, {
                                        className: P.additionalActionsIcon
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }