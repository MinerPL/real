(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56122"], {
        101017: function(e, a, l) {
            "use strict";
            e.exports = l.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, a, l) {
            "use strict";
            e.exports = l.p + "829f8ef7dcf355fbe141.svg"
        },
        125632: function(e, a, l) {
            "use strict";
            e.exports = l.p + "1a008a52c770a5334da4.png"
        },
        591589: function(e, a, l) {
            "use strict";
            e.exports = l.p + "a97cf12e63e89483261f.png"
        },
        608684: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                ImageUploaderIcon: function() {
                    return h
                },
                default: function() {
                    return g
                }
            }), l("222007");
            var t = l("37983"),
                i = l("884691"),
                n = l("414456"),
                r = l.n(n),
                s = l("627445"),
                o = l.n(s),
                u = l("77078"),
                d = l("159885"),
                c = l("694187"),
                m = l("49111"),
                f = l("782340"),
                v = l("911686");

            function h(e) {
                let {
                    className: a,
                    icon: l = null
                } = e;
                return (0, t.jsx)("div", {
                    className: r(v.imageUploaderIcon, a),
                    children: l
                })
            }
            class p extends i.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let a, l, i, n;
                    let {
                        image: s,
                        hint: o,
                        name: p,
                        makeURL: g,
                        disabled: I,
                        onChange: x,
                        showIcon: S,
                        showIconDisabled: A,
                        className: U,
                        imageClassName: N,
                        iconClassName: T,
                        iconWrapperClassName: j,
                        icon: E,
                        hideSize: y,
                        imageStyle: C,
                        showRemoveButton: P,
                        maxFileSizeBytes: b,
                        onFileSizeError: M,
                        onOpenImageSelectModal: R,
                        "aria-label": _
                    } = this.props;
                    if (null != (a = null != s && /^data:/.test(s) ? s : g(s)) ? l = 'url("'.concat(a, '")') : null != p && (i = (0, t.jsx)("div", {
                            className: v.imageUploaderAcronym,
                            children: (0, d.getAcronym)(p)
                        })), I) return (0, t.jsx)("div", {
                        className: r(v.imageUploader, v.disabled, U),
                        children: (0, t.jsxs)("div", {
                            className: r(v.imageUploaderInner, N),
                            style: {
                                ...C,
                                backgroundImage: l
                            },
                            children: [i, A && (0, t.jsx)("div", {
                                className: r(v.imageUploaderIcon, v.imageUploaderIconDisabled, T),
                                children: E
                            })]
                        })
                    });
                    null != s ? n = (0, t.jsx)(u.Anchor, {
                        className: v.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !y && (n = (0, t.jsx)("small", {
                        className: v.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: m.AVATAR_SIZE
                        })
                    }));
                    let k = null !== (e = null != _ ? _ : o) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, t.jsxs)("div", {
                        className: r(v.imageUploader, U),
                        children: [(0, t.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, t.jsxs)("div", {
                                className: S ? r(v.imageUploaderIconWrapper, j) : void 0,
                                children: [(0, t.jsxs)("div", {
                                    className: r(v.imageUploaderInner, N),
                                    style: {
                                        ...C,
                                        backgroundImage: l
                                    },
                                    children: [(0, t.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: i
                                    }), null != R ? (0, t.jsx)(u.Clickable, {
                                        className: v.imageUploaderFileInput,
                                        "aria-label": k,
                                        onClick: R
                                    }) : (0, t.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: x,
                                        className: v.imageUploaderFileInput,
                                        "aria-label": k,
                                        tabIndex: 0,
                                        maxFileSizeBytes: b,
                                        onFileSizeError: M
                                    })]
                                }), null != o && (0, t.jsx)("div", {
                                    className: v.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), S && (0, t.jsx)(h, {
                                    className: T,
                                    icon: E
                                })]
                            })
                        }), P ? n : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = i.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            p.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var g = p
        },
        360871: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                FakeActivityCharacter: function() {
                    return t
                },
                default: function() {
                    return I
                }
            }), l("222007");
            var t, i, n = l("37983"),
                r = l("884691"),
                s = l("414456"),
                o = l.n(s),
                u = l("301165"),
                d = l("77078"),
                c = l("206230"),
                m = l("777003"),
                f = l("782340"),
                v = l("337778"),
                h = l("125632"),
                p = l("591589");
            (i = t || (t = {}))[i.WUMPUS = 0] = "WUMPUS", i[i.PHIBI = 1] = "PHIBI";
            let g = {
                0: v.activityCharacterWumpus,
                1: v.activityCharacterPhibi
            };
            var I = r.memo(function(e) {
                let {
                    activityName: a,
                    activityCharacter: l = 0,
                    showExampleButton: t = !1
                } = e, [i, s] = r.useState(0), [I, x] = (0, u.useSpring)(() => ({
                    from: {
                        rotate: "0deg"
                    },
                    config: {
                        tension: 1e3,
                        friction: 5
                    }
                })), S = r.useRef({
                    seconds: i,
                    jitter: async () => {
                        for (;;) {
                            var e;
                            let a = (e = S.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
                            x({
                                rotate: "-".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80)), x({
                                rotate: "".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80))
                        }
                    }
                });
                return r.useEffect(() => void(S.current.seconds = i)), r.useEffect(() => {
                    let e = setInterval(() => {
                        s(e => (5399 === e && S.current.jitter(), ++e))
                    }, 1e3);
                    return () => clearInterval(e)
                }, []), (0, n.jsxs)(m.default, {
                    lastSection: !0,
                    "aria-hidden": !0,
                    children: [(0, n.jsx)(d.Heading, {
                        className: v.fakeActivityTitle,
                        variant: "eyebrow",
                        children: f.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
                    }), (0, n.jsxs)("div", {
                        className: v.fakeActivityLayout,
                        children: [(0, n.jsx)("div", {
                            className: o(v.fakeActivityIcon, g[l]),
                            children: (0, n.jsx)(u.animated.img, {
                                className: v.fakeActivityPencil,
                                src: 0 === l ? p : h,
                                style: I
                            })
                        }), (0, n.jsxs)("div", {
                            className: v.fakeActivityContent,
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: null != a ? a : f.default.Messages.USER_SETTINGS_USER_PROFILE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: f.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
                                    renderTimeHook(e, a) {
                                        let l = i % 60,
                                            t = (i - l) / 60;
                                        return (0, n.jsxs)("span", {
                                            className: v.fakeActivityTimeValues,
                                            children: [t.toString().padStart(2, "0"), ":", l.toString().padStart(2, "0")]
                                        }, a)
                                    }
                                })
                            })]
                        })]
                    }), t && (0, n.jsx)(d.Button, {
                        className: v.button,
                        color: v.buttonColor,
                        size: d.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: f.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
                    })]
                })
            })
        },
        184900: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return ei
                }
            }), l("222007");
            var t = l("37983"),
                i = l("884691"),
                n = l("414456"),
                r = l.n(n),
                s = l("509043"),
                o = l("446674"),
                u = l("669491"),
                d = l("77078"),
                c = l("272030"),
                m = l("875212"),
                f = l("841098"),
                v = l("206230"),
                h = l("685665"),
                p = l("462274"),
                g = l("606292"),
                I = l("449918"),
                x = l("335031"),
                S = l("608684"),
                A = l("635471"),
                U = l("388491"),
                N = l("217513"),
                T = l("581295"),
                j = l("878569"),
                E = l("430312"),
                y = l("552243"),
                C = l("10532"),
                P = l("935409"),
                b = l("648149"),
                M = l("369869"),
                R = l("802279"),
                _ = l("465215"),
                k = l("491250"),
                w = l("106435"),
                B = l("845579"),
                O = l("26989"),
                z = l("824563"),
                L = l("102985"),
                F = l("471671"),
                D = l("275623"),
                G = l("832132"),
                W = l("315102"),
                H = l("719923"),
                V = l("158998"),
                Z = l("50885"),
                Y = l("360871"),
                q = l("771325"),
                K = l("453252"),
                X = l("49111"),
                J = l("75015"),
                Q = l("590456"),
                $ = l("782340"),
                ee = l("923843"),
                ea = l("231185");
            let el = Z.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
                et = (0, j.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: ee.avatarUploaderPremium,
                    premiumUserWithoutBanner: ee.avatarUploaderPremiumNoBanner,
                    default: ee.avatarUploaderNormal
                });

            function ei(e) {
                var a, n, j;
                let {
                    user: Z,
                    guild: ei,
                    canUsePremiumCustomization: en,
                    onUpsellClick: er,
                    onAvatarChange: es,
                    onBannerChange: eo,
                    pendingAccentColor: eu,
                    pendingBanner: ed,
                    pendingBio: ec,
                    pendingPronouns: em,
                    pendingAvatar: ef,
                    pendingAvatarDecoration: ev,
                    pendingNickname: eh,
                    pendingGlobalName: ep,
                    pendingThemeColors: eg,
                    avatarClassName: eI,
                    activityName: ex,
                    activityCharacter: eS,
                    isTryItOutFlow: eA = !1,
                    disabledInputs: eU = !1,
                    hideExampleButton: eN = !1,
                    hideFakeActivity: eT = !1,
                    hideBioSection: ej = !1,
                    forProfileEffectModal: eE = !1,
                    hideMemberStatusSection: ey = !0,
                    pendingProfileEffectID: eC,
                    bodyClassName: eP,
                    slideInAvatarDecoration: eb = !1
                } = e, eM = i.useRef(null), [eR, e_] = i.useState(!1), ek = B.GifAutoPlay.getSetting(), {
                    avatarDecorationSrc: ew,
                    avatarSrc: eB,
                    eventHandlers: eO
                } = (0, w.default)({
                    user: Z,
                    guildId: null == ei ? void 0 : ei.id,
                    avatarDecorationOverride: ev,
                    avatarOverride: ef,
                    size: d.AvatarSizes.SIZE_80,
                    showPending: !0
                }), ez = (0, N.default)(Z.id, null == ei ? void 0 : ei.id), eL = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eF = (0, f.default)(), eD = (0, o.useStateFromStores)([O.default], () => null == ei ? null : O.default.getMember(ei.id, Z.id)), eG = void 0 === ef ? Z.getAvatarURL(void 0, 80) : ef, eW = (0, p.default)(eG, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eH = null == ez ? void 0 : ez.getPreviewThemeColors(eg), eV = null !== (a = null == eH ? void 0 : eH[0]) && void 0 !== a ? a : null == ez ? void 0 : ez.primaryColor, eZ = eL ? eF : (0, U.getProfileTheme)(eV), eY = (0, x.default)(null !== (n = null != eu ? eu : eV) && void 0 !== n ? n : (0, s.hex2int)(eW)).hsl, eq = (0, o.useStateFromStores)([F.default], () => F.default.isFocused()), eK = null == ez ? void 0 : ez.getPreviewBanner(ed, ek ? eq : eR), eX = null != eK, eJ = (null == ez ? void 0 : ez.profileEffectID) != null, eQ = null !== (j = (0, q.getPreviewNickname)(eh, null == eD ? void 0 : eD.nick)) && void 0 !== j ? j : (0, q.getPreviewDisplayName)(ep, V.default.getName(Z)), [e$, e0] = (0, o.useStateFromStoresArray)([z.default], () => [z.default.findActivity(Z.id, e => e.type === X.ActivityTypes.CUSTOM_STATUS), z.default.getStatus(Z.id)]), e1 = (0, o.useStateFromStores)([L.default], () => L.default.hidePersonalInformation), e5 = (null == ez ? void 0 : ez.canUsePremiumProfileCustomization) || en, e8 = i.useCallback(() => {
                    var e, a;
                    null === (a = eM.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
                }, []), e2 = i.useCallback((e, a) => {
                    null == e || null == a ? es(null) : "image/gif" !== a.type || H.default.canUseAnimatedAvatar(Z) ? (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: es,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...l
                        })
                    }) : (0, d.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await l.el("805923").then(l.bind(l, "805923"));
                        return l => (0, t.jsx)(a, {
                            ...l,
                            imgURI: e,
                            onChangeAvatar: () => {
                                l.onClose(), e8()
                            }
                        })
                    })
                }, [Z, e8, es]), e3 = (e, a) => {
                    if (null == e || null == a) return eo(null);
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: eo,
                            uploadType: J.UploadTypes.BANNER,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...l
                        })
                    })
                };

                function e4() {
                    let e = null != eZ ? (0, d.getStatusBackdropColor)(eZ) : null;
                    return (0, t.jsxs)("div", {
                        className: ee.status,
                        children: [null != e && (null == ez ? void 0 : ez.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
                            className: ee.statusDotBackground,
                            style: {
                                backgroundColor: e,
                                opacity: (0, d.getStatusBackdropOpacity)(e0, e)
                            }
                        }), (0, t.jsx)("svg", {
                            className: ee.statusDot,
                            children: (0, t.jsx)("rect", {
                                height: "100%",
                                width: "100%",
                                fill: (0, I.getColor)((0, d.getStatusColor)(e0)),
                                mask: "url(#".concat((0, d.getStatusMask)(e0, !1), ")")
                            })
                        })]
                    })
                }
                let e6 = "ProfileCustomizationPreview";
                (0, m.useTriggerDebuggingAA)({
                    location: e6 + " auto on",
                    autoTrackExposure: !0
                }), (0, m.useTriggerDebuggingAA)({
                    location: e6 + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    analyticsLocations: e9
                } = (0, h.default)();
                i.useEffect(() => {
                    if (ek) return;
                    let e = null == ez ? void 0 : ez.getBannerURL({
                        canAnimate: !0,
                        size: 480
                    });
                    if (!W.isAnimatedImageURL(e)) return;
                    let a = new Image;
                    a.src = null != e ? e : ""
                }, [ez, ek]);
                let e7 = null == ei,
                    ae = null == ez ? void 0 : ez.profileEffectID;
                return (0, t.jsxs)(E.default, {
                    forceShowPremium: en,
                    user: Z,
                    guildId: null == ei ? void 0 : ei.id,
                    profileType: Q.UserProfileTypes.POPOUT,
                    pendingThemeColors: eg,
                    className: eE ? e5 ? ee.profileEffectsModalCustomizationPreviewWithTheme : ee.profileEffectsModalCustomizationPreviewWithoutTheme : e5 ? ee.profileCustomizationPreviewWithTheme : ee.profileCustomizationPreviewWithoutTheme,
                    children: [(0, t.jsx)(A.default, {
                        profileEffectID: void 0 !== eC ? eC : ae
                    }), (0, t.jsxs)(d.HeadingLevel, {
                        children: [(0, t.jsx)(T.default, {
                            profileType: Q.UserProfileTypes.POPOUT,
                            hasBanner: eX,
                            isPremium: en,
                            hasThemeColors: e5,
                            forProfileEffectModal: eE,
                            hasProfileEffect: eJ,
                            children: en ? (0, t.jsxs)("div", {
                                onMouseMove: () => e_(!0),
                                onMouseLeave: () => e_(!1),
                                children: [(0, t.jsx)(S.default, {
                                    className: ee.bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !en || eU,
                                    image: eK,
                                    makeURL: () => eK,
                                    onChange: e3,
                                    imageStyle: {
                                        backgroundColor: eY
                                    },
                                    imageClassName: r(eX ? ee.bannerUploaderInnerSquare : ee.bannerUploaderInnerSquareEmpty),
                                    hint: $.default.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: () => (0, q.handleOpenSelectImageModal)(J.UploadTypes.BANNER, null == eD ? void 0 : eD.guildId, eA, void 0),
                                    hideSize: !0,
                                    maxFileSizeBytes: K.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                    onFileSizeError: q.showFileSizeErrorModal
                                }), !ek && W.isAnimatedImageURL(eK) ? (0, t.jsx)(D.default, {
                                    className: ee.gifTag
                                }) : null]
                            }) : (0, t.jsx)("div", {
                                className: eJ ? ee.bannerUploaderInnerSquare : ee.bannerNormal,
                                style: {
                                    backgroundColor: eY
                                },
                                children: eU ? null : (0, t.jsx)(d.Clickable, {
                                    onClick: () => null == er ? void 0 : er({
                                        object: X.AnalyticsObjects.EDIT_PROFILE_BANNER
                                    }),
                                    className: ee.bannerNitroUpsell,
                                    children: (0, t.jsx)(d.Heading, {
                                        className: ee.bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: $.default.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), e7 ? function() {
                            let e = () => (0, q.handleOpenSelectImageModal)(J.UploadTypes.AVATAR, null == eD ? void 0 : eD.guildId, eA),
                                a = () => (0, g.openAvatarDecorationModal)({
                                    analyticsLocations: e9,
                                    isTryItOutFlow: eA
                                });
                            return (0, t.jsxs)(d.Clickable, {
                                ...eO,
                                "aria-disabled": eU,
                                onClick: eU ? void 0 : i => {
                                    (0, c.openContextMenuLazy)(i, async () => {
                                        let {
                                            default: i
                                        } = await l.el("609516").then(l.bind(l, "609516"));
                                        return () => (0, t.jsx)(i, {
                                            changeAvatarAction: e,
                                            changeDecorationAction: a
                                        })
                                    })
                                },
                                className: r(et({
                                    isPremium: en,
                                    hasBanner: eX,
                                    hasProfileEffect: eJ
                                }), {
                                    [ee.defaultCursor]: eU
                                }),
                                children: [(0, t.jsx)(el, {
                                    className: ee.avatarUploaderInner,
                                    src: eB,
                                    avatarDecoration: eb ? null : ew,
                                    size: d.AvatarSizes.SIZE_80,
                                    "aria-label": Z.username
                                }), eb && (0, t.jsx)(y.default, {
                                    initTranslate3d: "translate3d(-20px, -120px, 0)",
                                    children: (0, t.jsx)(el, {
                                        src: ea,
                                        avatarDecoration: ew,
                                        size: d.AvatarSizes.SIZE_80,
                                        status: X.StatusTypes.UNKNOWN,
                                        className: ee.tryingOutAvatarDecoration,
                                        "aria-hidden": !0
                                    })
                                }, ew), eU ? null : (0, t.jsx)("div", {
                                    className: ee.hoverIconWrapper,
                                    children: (0, t.jsx)(G.default, {
                                        className: ee.hoverIcon,
                                        color: "white"
                                    })
                                }), e4()]
                            })
                        }() : function() {
                            let e = null != eD && !en,
                                a = (0, t.jsxs)("div", {
                                    className: et({
                                        isPremium: en,
                                        hasBanner: eX,
                                        hasProfileEffect: eJ
                                    }),
                                    children: [(0, t.jsx)(S.default, {
                                        disabled: eU,
                                        ref: eM,
                                        showIcon: null == ew,
                                        hint: e ? $.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : $.default.Messages.CHANGE_AVATAR,
                                        showRemoveButton: !1,
                                        imageClassName: r(eI, ee.avatarUploaderInner),
                                        image: eB,
                                        onChange: e2,
                                        makeURL: () => eB,
                                        maxFileSizeBytes: K.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                        onFileSizeError: q.showFileSizeErrorModal,
                                        onOpenImageSelectModal: () => (0, q.handleOpenSelectImageModal)(J.UploadTypes.AVATAR, null == eD ? void 0 : eD.guildId, eA, void 0)
                                    }), null != ew && (0, t.jsx)("img", {
                                        className: ee.avatarDecoration,
                                        src: ew,
                                        alt: " ",
                                        "aria-hidden": !0
                                    }), e4()]
                                });
                            return e ? (0, t.jsx)(d.Clickable, {
                                onClickCapture: e => {
                                    e.stopPropagation(), null == er || er({
                                        object: X.AnalyticsObjects.AVATAR
                                    })
                                },
                                children: a
                            }) : a
                        }(), (0, t.jsx)(P.UserPopoutBadgeList, {
                            user: Z,
                            guildId: null == ei ? void 0 : ei.id,
                            isTryItOutFlow: eA,
                            forProfileEffectModal: eE
                        }), function() {
                            let e = null == ez ? void 0 : ez.getPreviewBio(ec);
                            return (0, t.jsxs)(E.default.Inner, {
                                className: r(ee.body, eP),
                                children: [(0, t.jsx)(k.default, {
                                    isTryItOut: eA,
                                    user: Z,
                                    nickname: null != eQ ? eQ : Z.username,
                                    pronouns: null != em ? em : null == ez ? void 0 : ez.pronouns,
                                    usernameIcon: (() => {
                                        let e = null != eD;
                                        if (!e) return;
                                        let a = null === ef;
                                        if (a) return;
                                        let l = null != eD.avatar || null != ef;
                                        if (l) return (0, t.jsx)(b.default, {
                                            user: Z,
                                            nickname: eQ
                                        })
                                    })()
                                }), !eE && (0, t.jsx)(R.default, {
                                    customStatusActivity: e$
                                }), (0, t.jsx)(C.default, {}), !ej && (0, t.jsx)(M.default, {
                                    isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
                                    guild: ei,
                                    bio: null == e ? void 0 : e.value,
                                    hidePersonalInformation: e1,
                                    lastSection: eT,
                                    lineClamp: eE ? 3 : void 0
                                }), !ey && (0, t.jsx)(_.default, {
                                    userId: Z.id,
                                    guild: ei,
                                    guildMember: eD
                                }), !eT && (0, t.jsx)(Y.default, {
                                    activityName: ex,
                                    activityCharacter: eS,
                                    showExampleButton: null == ei && !eN
                                })]
                            })
                        }()]
                    })]
                })
            }
        }
    }
]);