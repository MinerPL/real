            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return et
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                u = l("450911"),
                d = l("736964"),
                c = l("335189"),
                f = l("618017"),
                m = l("980215"),
                p = l("235767"),
                E = l("190045"),
                T = l("419806"),
                h = l("92274"),
                _ = l("373469"),
                S = l("271938"),
                I = l("42203"),
                g = l("26989"),
                A = l("957255"),
                v = l("27618"),
                C = l("102985"),
                N = l("987772"),
                y = l("164424"),
                O = l("387111"),
                M = l("158998"),
                x = l("713135"),
                R = l("765698"),
                L = l("906889"),
                P = l("717226"),
                b = l("10532"),
                D = l("648149"),
                U = l("915712"),
                j = l("261523"),
                F = l("369869"),
                w = l("545590"),
                G = l("972595"),
                k = l("316095"),
                B = l("802279"),
                Y = l("577172"),
                V = l("465215"),
                H = l("301998"),
                W = l("379657"),
                z = l("853780"),
                K = l("574191"),
                Z = l("491250"),
                X = l("453649"),
                J = l("49111"),
                Q = l("782340"),
                q = l("956330"),
                $ = l("477691"),
                ee = l("398664");

            function et(e) {
                var t, l, s;
                let {
                    activity: et,
                    customStatusActivity: el,
                    user: en,
                    displayProfile: ea,
                    guild: es,
                    guildMember: ei,
                    channelId: er,
                    onClose: eo,
                    setNote: eu = !1,
                    canDM: ed,
                    hideNote: ec = !1,
                    showCopiableUsername: ef = !1
                } = e, em = (0, r.useStateFromStores)([C.default], () => C.default.hidePersonalInformation), ep = (0, r.useStateFromStores)([x.default], () => {
                    var e;
                    return null === (e = x.default.getUserProfile(en.id)) || void 0 === e ? void 0 : e.application
                }), eE = (0, r.useStateFromStores)([_.default], () => null != _.default.getAnyStreamForUser(en.id)), eT = (0, X.useGetVoiceChannelInfoForVoiceActivitySection)(en.id, null == es ? void 0 : es.id), eh = !eE && null != eT, {
                    showVoiceActivityInProfile: e_
                } = R.VoiceActivityProfileExperiment.useExperiment({
                    location: "user popout"
                }, {
                    autoTrackExposure: eh
                }), [eS, eI] = a.useState(!1), [eg, eA] = a.useState(!1), ev = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(er)), eC = (0, r.useStateFromStores)([A.default], () => A.default.can(J.Permissions.USE_CLYDE_AI, ev)), {
                    profileTheme: eN
                } = (0, L.default)(en, ea), ey = a.useRef(null), [eO, eM] = a.useState(!0), ex = a.useCallback(() => {
                    let {
                        current: e
                    } = ey;
                    null != e && eM(0 === e.getScrollerState().scrollTop)
                }, []), eR = (0, f.canEditClydeAIProfile)(es), eL = (0, m.canUseCustomClydeProfiles)(es), eP = (0, r.useStateFromStores)([g.default], () => g.default.isMember(null == es ? void 0 : es.id, en.id));
                a.useLayoutEffect(() => {
                    var e;
                    let {
                        current: t
                    } = ey;
                    null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                        top: 0
                    }))
                }, []);
                let eb = (0, r.useStateFromStores)([v.default], () => v.default.getRelationshipType(en.id)),
                    eD = en.isNonUserBot() && !en.isClyde() || en.isClyde() && eL || !ed,
                    eU = !en.bot && !en.isClyde() && eb !== J.RelationshipTypes.BLOCKED,
                    {
                        moreAddFriend: ej,
                        messageButton: eF
                    } = h.AddFriendProminenceExperimentDesktop.useExperiment({
                        location: "user popout"
                    }, {
                        disable: !eU,
                        autoTrackExposure: !0
                    }),
                    ew = ej && eb !== J.RelationshipTypes.FRIEND,
                    eG = eF && !eD;
                if (en.isSystemUser()) return null;
                if (en.isNonUserBot() && !en.isClyde()) return (0, n.jsx)(Z.default, {
                    user: en,
                    nickname: null,
                    pronouns: null,
                    className: q.usernameSection,
                    lastSection: !0
                });
                let ek = null !== (t = O.default.getNickname(null == es ? void 0 : es.id, er, en)) && void 0 !== t ? t : M.default.getName(en);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(Z.default, {
                        className: q.usernameSection,
                        user: en,
                        nickname: ek,
                        pronouns: null == ea ? void 0 : ea.pronouns,
                        usernameIcon: en.hasAvatarForGuild(null == es ? void 0 : es.id) && (0, n.jsx)(D.default, {
                            user: en,
                            nickname: ek
                        }),
                        shouldCopyOnClick: ef
                    }), en.isClyde() ? (0, n.jsx)("div", {
                        className: q.lastEditedByContainer,
                        children: (0, n.jsx)(p.default, {
                            className: q.lastEditedByTag,
                            guildId: null == es ? void 0 : es.id
                        })
                    }) : null, (0, n.jsxs)(o.HeadingLevel, {
                        children: [(0, n.jsx)(B.default, {
                            className: q.customStatusSection,
                            customStatusActivity: el
                        }), (0, n.jsx)(b.default, {
                            className: q.divider
                        }), en.isClyde() && eR && null != es ? !eP && eL ? eC && !eg ? (0, n.jsx)(o.Button, {
                            className: q.editClydeButton,
                            innerClassName: q.editClydeButtonInner,
                            submitting: eS,
                            onClick: async () => {
                                eI(!0);
                                try {
                                    await (0, c.addClydeGuildMember)(es.id), eI(!1)
                                } catch (e) {
                                    eI(!1), eA(!0)
                                }
                            },
                            children: Q.default.Messages.CLYDE_ADD_CLYDE
                        }) : (0, n.jsxs)(o.Text, {
                            className: q.clydeErrorText,
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: [(0, n.jsx)("img", {
                                className: q.sadClyde,
                                src: ee,
                                alt: Q.default.Messages.SAD_CLYDE_ALT_TEXT
                            }), " ", Q.default.Messages.CANNOT_ADD_CLYDE]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(o.Button, {
                                className: q.editClydeButton,
                                innerClassName: q.editClydeButtonInner,
                                onClick: () => {
                                    null == eo || eo(), (0, E.default)(es.id)
                                },
                                children: [(0, n.jsx)(N.default, {
                                    className: q.pencilIcon
                                }), " ", Q.default.Messages.EDIT_CLYDE]
                            }), eL ? (0, n.jsxs)(o.Button, {
                                className: q.editClydeButton,
                                innerClassName: q.editClydeButtonInner,
                                color: o.ButtonColors.WHITE,
                                onClick: () => {
                                    null == eo || eo(), (0, T.default)(es.id)
                                },
                                children: [(0, n.jsx)(y.default, {
                                    className: q.pencilIcon
                                }), " ", Q.default.Messages.SHARE]
                            }) : null]
                        }) : null, (0, n.jsxs)(o.AdvancedScroller, {
                            className: i(q.scroller, {
                                [q.scrollerSeparator]: !eO
                            }),
                            onScroll: ex,
                            ref: ey,
                            children: [(0, n.jsx)(w.default, {
                                user: en,
                                guildId: null == es ? void 0 : es.id
                            }), (0, n.jsx)(F.default, {
                                isUsingGuildBio: null !== (l = null == ea ? void 0 : ea.isUsingGuildMemberBio()) && void 0 !== l && l,
                                bio: null == ea ? void 0 : ea.bio,
                                guild: es,
                                hidePersonalInformation: em
                            }), en.isClyde() ? (0, n.jsx)(G.default, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(V.default, {
                                    userId: en.id,
                                    guild: es,
                                    guildMember: ei
                                }), e_ && eh && (0, n.jsx)(X.default, {
                                    voiceChannel: eT.voiceChannel,
                                    voiceGuild: eT.voiceGuild,
                                    onClose: eo,
                                    color: $.buttonColor
                                }), (0, n.jsx)(U.default, {
                                    activity: et,
                                    user: en,
                                    guild: es,
                                    channelId: er,
                                    onClose: eo
                                }), (null == ep ? void 0 : ep.popularApplicationCommandIds) != null && null != ev ? (0, n.jsx)(W.default, {
                                    applicationId: ep.id,
                                    commandIds: ep.popularApplicationCommandIds,
                                    channel: ev,
                                    guildId: null == es ? void 0 : es.id,
                                    onClick: eo
                                }) : null, (0, n.jsx)(j.default, {
                                    user: en,
                                    guildId: null == es ? void 0 : es.id
                                }), (0, n.jsx)(K.default, {
                                    user: en,
                                    guild: es,
                                    guildMember: ei,
                                    showBorder: null !== (s = null == ea ? void 0 : ea.canEditThemes) && void 0 !== s && s
                                }), (0, n.jsx)(k.default, {
                                    userId: en.id,
                                    channelId: er,
                                    guild: es,
                                    onClose: eo,
                                    theme: eN
                                }), null != ep && void 0 !== er && (0, n.jsx)(z.default, {
                                    channelId: er,
                                    applicationId: ep.id
                                }), (0, n.jsx)(H.default, {
                                    user: en,
                                    setNote: eu,
                                    autoFocus: !ed,
                                    lastSection: !ed,
                                    hideNote: em || ec
                                })]
                            }), eG ? null : (0, n.jsx)(Y.default, {
                                user: en,
                                setNote: eu,
                                canDM: ed,
                                onClose: eo,
                                inClydeProfilesExperiment: eL
                            }), ew || eG ? (0, n.jsxs)("div", {
                                className: q.addFriendSection,
                                children: [ew ? (0, n.jsx)(P.default, {
                                    user: en,
                                    isCurrentUser: en.id === S.default.getId(),
                                    relationshipType: eb,
                                    onAddFriend: function() {
                                        d.default.addRelationship({
                                            userId: en.id,
                                            context: {
                                                location: "User Profile Popout"
                                            }
                                        })
                                    },
                                    onIgnoreFriend: function() {
                                        d.default.cancelFriendRequest(en.id, {
                                            location: "User Profile Popout"
                                        })
                                    },
                                    onSendMessage: () => {},
                                    addFriendText: Q.default.Messages.FRIENDS_SECTION_ADD_FRIEND
                                }) : null, eG ? (0, n.jsx)(o.Button, {
                                    size: o.Button.Sizes.SMALL,
                                    color: o.Button.Colors.PRIMARY,
                                    onClick: () => u.default.openPrivateChannel(en.id),
                                    children: Q.default.Messages.SEND_DM
                                }) : null]
                            }) : null]
                        })]
                    })]
                })
            }