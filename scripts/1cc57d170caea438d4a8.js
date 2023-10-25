(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75603"], {
        125632: function(e, a, t) {
            "use strict";
            e.exports = t.p + "1a008a52c770a5334da4.png"
        },
        591589: function(e, a, t) {
            "use strict";
            e.exports = t.p + "a97cf12e63e89483261f.png"
        },
        360871: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                FakeActivityCharacter: function() {
                    return i
                },
                default: function() {
                    return S
                }
            });
            var l, i, n = t("920040"),
                r = t("773670"),
                o = t("575482"),
                s = t.n(o),
                u = t("623829"),
                d = t("77078"),
                c = t("206230"),
                f = t("777003"),
                m = t("782340"),
                v = t("384563"),
                g = t("125632"),
                p = t("591589");
            (l = i || (i = {}))[l.WUMPUS = 0] = "WUMPUS", l[l.PHIBI = 1] = "PHIBI";
            let h = {
                [i.WUMPUS]: v.activityCharacterWumpus,
                [i.PHIBI]: v.activityCharacterPhibi
            };
            var S = r.memo(function(e) {
                let {
                    activityName: a,
                    activityCharacter: t = i.WUMPUS,
                    showExampleButton: l = !1
                } = e, [o, S] = r.useState(0), [I, A] = (0, u.useSpring)(() => ({
                    from: {
                        rotate: "0deg"
                    },
                    config: {
                        tension: 1e3,
                        friction: 5
                    }
                })), T = r.useRef({
                    seconds: o,
                    jitter: async () => {
                        for (;;) {
                            var e;
                            let a = (e = T.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
                            A({
                                rotate: "-".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80)), A({
                                rotate: "".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80))
                        }
                    }
                });
                r.useEffect(() => void(T.current.seconds = o)), r.useEffect(() => {
                    let e = setInterval(() => {
                        S(e => (5399 === e && T.current.jitter(), ++e))
                    }, 1e3);
                    return () => clearInterval(e)
                }, []);
                let U = t === i.WUMPUS ? p : g;
                return (0, n.jsxs)(f.default, {
                    lastSection: !0,
                    "aria-hidden": !0,
                    children: [(0, n.jsx)(d.Heading, {
                        className: v.fakeActivityTitle,
                        variant: "eyebrow",
                        children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
                    }), (0, n.jsxs)("div", {
                        className: v.fakeActivityLayout,
                        children: [(0, n.jsx)("div", {
                            className: s(v.fakeActivityIcon, h[t]),
                            children: (0, n.jsx)(u.animated.img, {
                                className: v.fakeActivityPencil,
                                src: U,
                                style: I
                            })
                        }), (0, n.jsxs)("div", {
                            className: v.fakeActivityContent,
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: null != a ? a : m.default.Messages.USER_SETTINGS_USER_PROFILE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
                                    renderTimeHook(e, a) {
                                        let t = o % 60,
                                            l = (o - t) / 60;
                                        return (0, n.jsxs)("span", {
                                            className: v.fakeActivityTimeValues,
                                            children: [l.toString().padStart(2, "0"), ":", t.toString().padStart(2, "0")]
                                        }, a)
                                    }
                                })
                            })]
                        })]
                    }), l && (0, n.jsx)(d.Button, {
                        className: v.button,
                        color: v.buttonColor,
                        size: d.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
                    })]
                })
            })
        },
        184900: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return ea
                }
            });
            var l = t("920040"),
                i = t("773670"),
                n = t("575482"),
                r = t.n(n),
                o = t("253824"),
                s = t("498225"),
                u = t("912557"),
                d = t("77078"),
                c = t("272030"),
                f = t("875212"),
                m = t("841098"),
                v = t("206230"),
                g = t("685665"),
                p = t("462274"),
                h = t("606292"),
                S = t("449918"),
                I = t("335031"),
                A = t("608684"),
                T = t("309501"),
                U = t("388491"),
                E = t("217513"),
                P = t("581295"),
                x = t("878569"),
                y = t("430312"),
                N = t("10532"),
                C = t("935409"),
                j = t("648149"),
                M = t("369869"),
                b = t("802279"),
                _ = t("491250"),
                w = t("106435"),
                R = t("845579"),
                k = t("26989"),
                B = t("824563"),
                O = t("102985"),
                L = t("471671"),
                z = t("275623"),
                F = t("832132"),
                D = t("315102"),
                W = t("719923"),
                G = t("158998"),
                H = t("50885"),
                V = t("360871"),
                Z = t("771325"),
                Y = t("453252"),
                q = t("49111"),
                X = t("75015"),
                K = t("590456"),
                J = t("782340"),
                Q = t("510308");
            let $ = H.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
                ee = (0, x.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: Q.avatarUploaderPremium,
                    premiumUserWithoutBanner: Q.avatarUploaderPremiumNoBanner,
                    default: Q.avatarUploaderNormal
                });

            function ea(e) {
                var a, n, x;
                let {
                    user: H,
                    guild: ea,
                    canUsePremiumCustomization: et,
                    onUpsellClick: el,
                    onAvatarChange: ei,
                    onBannerChange: en,
                    pendingAccentColor: er,
                    pendingBanner: eo,
                    pendingBio: es,
                    pendingPronouns: eu,
                    pendingAvatar: ed,
                    pendingAvatarDecoration: ec,
                    pendingNickname: ef,
                    pendingGlobalName: em,
                    pendingThemeColors: ev,
                    avatarClassName: eg,
                    activityName: ep,
                    activityCharacter: eh,
                    isTryItOutFlow: eS = !1,
                    disabledInputs: eI = !1,
                    hideExampleButton: eA = !1,
                    hideFakeActivity: eT = !1,
                    hideBioSection: eU = !1,
                    forProfileEffectModal: eE = !1,
                    pendingProfileEffectID: eP,
                    bodyClassName: ex
                } = e, ey = i.useRef(null), [eN, eC] = i.useState(!1), ej = R.GifAutoPlay.getSetting(), {
                    avatarDecorationSrc: eM,
                    avatarSrc: eb,
                    eventHandlers: e_
                } = (0, w.default)({
                    user: H,
                    guildId: null == ea ? void 0 : ea.id,
                    avatarDecorationOverride: ec,
                    avatarOverride: ed,
                    size: d.AvatarSizes.SIZE_80,
                    showPending: !0
                }), ew = (0, E.default)(H.id, null == ea ? void 0 : ea.id), eR = (0, s.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), ek = (0, m.default)(), eB = (0, s.useStateFromStores)([k.default], () => null == ea ? null : k.default.getMember(ea.id, H.id)), eO = void 0 === ed ? H.getAvatarURL(void 0, 80) : ed, eL = (0, p.default)(eO, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), ez = null == ew ? void 0 : ew.getPreviewThemeColors(ev), eF = null !== (a = null == ez ? void 0 : ez[0]) && void 0 !== a ? a : null == ew ? void 0 : ew.primaryColor, eD = eR ? ek : (0, U.getProfileTheme)(eF), eW = (0, I.default)(null !== (n = null != er ? er : eF) && void 0 !== n ? n : (0, o.hex2int)(eL)).hsl, eG = (0, s.useStateFromStores)([L.default], () => L.default.isFocused()), eH = ej ? eG : eN, eV = null == ew ? void 0 : ew.getPreviewBanner(eo, eH), eZ = null != eV, eY = (null == ew ? void 0 : ew.profileEffectID) != null, eq = null !== (x = (0, Z.getPreviewNickname)(ef, null == eB ? void 0 : eB.nick)) && void 0 !== x ? x : (0, Z.getPreviewDisplayName)(em, G.default.getName(H)), [eX, eK] = (0, s.useStateFromStoresArray)([B.default], () => [B.default.findActivity(H.id, e => e.type === q.ActivityTypes.CUSTOM_STATUS), B.default.getStatus(H.id)]), eJ = (0, s.useStateFromStores)([O.default], () => O.default.hidePersonalInformation), eQ = (null == ew ? void 0 : ew.canUsePremiumProfileCustomization) || et, e$ = i.useCallback(() => {
                    var e, a;
                    null === (a = ey.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
                }, []), e0 = i.useCallback((e, a) => {
                    null == e || null == a ? ei(null) : "image/gif" !== a.type || W.default.canUseAnimatedAvatar(H) ? (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await t.el("57015").then(t.bind(t, "57015"));
                        return t => (0, l.jsx)(i, {
                            onCrop: ei,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...t
                        })
                    }) : (0, d.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await t.el("805923").then(t.bind(t, "805923"));
                        return t => (0, l.jsx)(a, {
                            ...t,
                            imgURI: e,
                            onChangeAvatar: () => {
                                t.onClose(), e$()
                            }
                        })
                    })
                }, [H, e$, ei]), e1 = (e, a) => {
                    if (null == e || null == a) return en(null);
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await t.el("57015").then(t.bind(t, "57015"));
                        return t => (0, l.jsx)(i, {
                            onCrop: en,
                            uploadType: X.UploadTypes.BANNER,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...t
                        })
                    })
                };

                function e5() {
                    let e = null != eD ? (0, d.getStatusBackdropColor)(eD) : null;
                    return (0, l.jsxs)("div", {
                        className: Q.status,
                        children: [null != e && (null == ew ? void 0 : ew.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
                            className: Q.statusDotBackground,
                            style: {
                                backgroundColor: e,
                                opacity: (0, d.getStatusBackdropOpacity)(eK, e)
                            }
                        }), (0, l.jsx)("svg", {
                            className: Q.statusDot,
                            children: (0, l.jsx)("rect", {
                                height: "100%",
                                width: "100%",
                                fill: (0, S.getColor)((0, d.getStatusColor)(eK)),
                                mask: "url(#".concat((0, d.getStatusMask)(eK, !1), ")")
                            })
                        })]
                    })
                }
                let e2 = "ProfileCustomizationPreview";
                (0, f.useTriggerDebuggingAA)({
                    location: e2 + " auto on",
                    autoTrackExposure: !0
                }), (0, f.useTriggerDebuggingAA)({
                    location: e2 + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    analyticsLocations: e8
                } = (0, g.default)();
                i.useEffect(() => {
                    if (ej) return;
                    let e = null == ew ? void 0 : ew.getBannerURL({
                        canAnimate: !0,
                        size: 480
                    });
                    if (!D.isAnimatedImageURL(e)) return;
                    let a = new Image;
                    a.src = null != e ? e : ""
                }, [ew, ej]);
                let e3 = null == ea,
                    e9 = null == ew ? void 0 : ew.profileEffectID;
                return (0, l.jsxs)(y.default, {
                    forceShowPremium: et,
                    user: H,
                    guildId: null == ea ? void 0 : ea.id,
                    profileType: K.UserProfileTypes.POPOUT,
                    pendingThemeColors: ev,
                    className: eE ? eQ ? Q.profileEffectsModalCustomizationPreviewWithTheme : Q.profileEffectsModalCustomizationPreviewWithoutTheme : eQ ? Q.profileCustomizationPreviewWithTheme : Q.profileCustomizationPreviewWithoutTheme,
                    children: [(0, l.jsx)(T.default, {
                        profileEffectID: void 0 !== eP ? eP : e9
                    }), (0, l.jsxs)(d.HeadingLevel, {
                        children: [(0, l.jsx)(P.default, {
                            profileType: K.UserProfileTypes.POPOUT,
                            hasBanner: eZ,
                            isPremium: et,
                            hasThemeColors: eQ,
                            forProfileEffectModal: eE,
                            hasProfileEffect: eY,
                            children: et ? (0, l.jsxs)("div", {
                                onMouseMove: () => eC(!0),
                                onMouseLeave: () => eC(!1),
                                children: [(0, l.jsx)(A.default, {
                                    className: Q.bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !et || eI,
                                    image: eV,
                                    makeURL: () => eV,
                                    onChange: e1,
                                    imageStyle: {
                                        backgroundColor: eW
                                    },
                                    imageClassName: r(eZ ? Q.bannerUploaderInnerSquare : Q.bannerUploaderInnerSquareEmpty),
                                    hint: J.default.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: () => (0, Z.handleOpenSelectImageModal)(X.UploadTypes.BANNER, null == eB ? void 0 : eB.guildId, eS, void 0),
                                    hideSize: !0,
                                    maxFileSizeBytes: Y.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                    onFileSizeError: Z.showFileSizeErrorModal
                                }), !ej && D.isAnimatedImageURL(eV) ? (0, l.jsx)(z.default, {
                                    className: Q.gifTag
                                }) : null]
                            }) : (0, l.jsx)("div", {
                                className: eY ? Q.bannerUploaderInnerSquare : Q.bannerNormal,
                                style: {
                                    backgroundColor: eW
                                },
                                children: eI ? null : (0, l.jsx)(d.Clickable, {
                                    onClick: () => null == el ? void 0 : el({
                                        object: q.AnalyticsObjects.EDIT_PROFILE_BANNER
                                    }),
                                    className: Q.bannerNitroUpsell,
                                    children: (0, l.jsx)(d.Heading, {
                                        className: Q.bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: J.default.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), e3 ? function() {
                            let e = () => (0, Z.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eB ? void 0 : eB.guildId, eS),
                                a = () => (0, h.openAvatarDecorationModal)({
                                    analyticsLocations: e8,
                                    isTryItOutFlow: eS
                                });
                            return (0, l.jsxs)(d.Clickable, {
                                ...e_,
                                "aria-disabled": eI,
                                onClick: eI ? void 0 : i => {
                                    (0, c.openContextMenuLazy)(i, async () => {
                                        let {
                                            default: i
                                        } = await t.el("609516").then(t.bind(t, "609516"));
                                        return () => (0, l.jsx)(i, {
                                            changeAvatarAction: e,
                                            changeDecorationAction: a
                                        })
                                    })
                                },
                                className: r(ee({
                                    isPremium: et,
                                    hasBanner: eZ,
                                    hasProfileEffect: eY
                                }), {
                                    [Q.defaultCursor]: eI
                                }),
                                children: [(0, l.jsx)($, {
                                    className: Q.avatarUploaderInner,
                                    src: eb,
                                    avatarDecoration: eM,
                                    size: d.AvatarSizes.SIZE_80,
                                    "aria-label": H.username
                                }), eI ? null : (0, l.jsx)("div", {
                                    className: Q.hoverIconWrapper,
                                    children: (0, l.jsx)(F.default, {
                                        className: Q.hoverIcon,
                                        color: "white"
                                    })
                                }), e5()]
                            })
                        }() : function() {
                            let e = null != eB && !et,
                                a = (0, l.jsxs)("div", {
                                    className: ee({
                                        isPremium: et,
                                        hasBanner: eZ,
                                        hasProfileEffect: eY
                                    }),
                                    children: [(0, l.jsx)(A.default, {
                                        disabled: eI,
                                        ref: ey,
                                        showIcon: null == eM,
                                        hint: e ? J.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : J.default.Messages.CHANGE_AVATAR,
                                        showRemoveButton: !1,
                                        imageClassName: r(eg, Q.avatarUploaderInner),
                                        image: eb,
                                        onChange: e0,
                                        makeURL: () => eb,
                                        maxFileSizeBytes: Y.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                        onFileSizeError: Z.showFileSizeErrorModal,
                                        onOpenImageSelectModal: () => (0, Z.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eB ? void 0 : eB.guildId, eS, void 0)
                                    }), null != eM && (0, l.jsx)("img", {
                                        className: Q.avatarDecoration,
                                        src: eM,
                                        alt: " ",
                                        "aria-hidden": !0
                                    }), e5()]
                                });
                            return e ? (0, l.jsx)(d.Clickable, {
                                onClickCapture: e => {
                                    e.stopPropagation(), null == el || el({
                                        object: q.AnalyticsObjects.AVATAR
                                    })
                                },
                                children: a
                            }) : a
                        }(), (0, l.jsx)(C.UserPopoutBadgeList, {
                            user: H,
                            guildId: null == ea ? void 0 : ea.id,
                            isTryItOutFlow: eS,
                            forProfileEffectModal: eE
                        }), function() {
                            let e = null == ew ? void 0 : ew.getPreviewBio(es);
                            return (0, l.jsxs)(y.default.Inner, {
                                className: r(Q.body, ex),
                                children: [(0, l.jsx)(_.default, {
                                    isTryItOut: eS,
                                    user: H,
                                    nickname: null != eq ? eq : H.username,
                                    pronouns: null != eu ? eu : null == ew ? void 0 : ew.pronouns,
                                    usernameIcon: (() => {
                                        let e = null != eB;
                                        if (!e) return;
                                        let a = null === ed;
                                        if (a) return;
                                        let t = null != eB.avatar || null != ed;
                                        if (t) return (0, l.jsx)(j.default, {
                                            user: H,
                                            nickname: eq
                                        })
                                    })()
                                }), !eE && (0, l.jsx)(b.default, {
                                    customStatusActivity: eX
                                }), (0, l.jsx)(N.default, {}), !eU && (0, l.jsx)(M.default, {
                                    isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
                                    guild: ea,
                                    bio: null == e ? void 0 : e.value,
                                    hidePersonalInformation: eJ,
                                    lastSection: eT,
                                    lineClamp: eE ? 3 : void 0
                                }), !eT && (0, l.jsx)(V.default, {
                                    activityName: ep,
                                    activityCharacter: eh,
                                    showExampleButton: null == ea && !eA
                                })]
                            })
                        }()]
                    })]
                })
            }
        }
    }
]);