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
            });
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
                        onChange: S,
                        showIcon: x,
                        showIconDisabled: U,
                        className: A,
                        imageClassName: N,
                        iconClassName: T,
                        iconWrapperClassName: E,
                        icon: j,
                        hideSize: y,
                        imageStyle: C,
                        showRemoveButton: P,
                        maxFileSizeBytes: M,
                        onFileSizeError: b,
                        onOpenImageSelectModal: R,
                        "aria-label": _
                    } = this.props;
                    if (null != (a = null != s && /^data:/.test(s) ? s : g(s)) ? l = 'url("'.concat(a, '")') : null != p && (i = (0, t.jsx)("div", {
                            className: v.imageUploaderAcronym,
                            children: (0, d.getAcronym)(p)
                        })), I) return (0, t.jsx)("div", {
                        className: r(v.imageUploader, v.disabled, A),
                        children: (0, t.jsxs)("div", {
                            className: r(v.imageUploaderInner, N),
                            style: {
                                ...C,
                                backgroundImage: l
                            },
                            children: [i, U && (0, t.jsx)("div", {
                                className: r(v.imageUploaderIcon, v.imageUploaderIconDisabled, T),
                                children: j
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
                        className: r(v.imageUploader, A),
                        children: [(0, t.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, t.jsxs)("div", {
                                className: x ? r(v.imageUploaderIconWrapper, E) : void 0,
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
                                        onChange: S,
                                        className: v.imageUploaderFileInput,
                                        "aria-label": k,
                                        tabIndex: 0,
                                        maxFileSizeBytes: M,
                                        onFileSizeError: b
                                    })]
                                }), null != o && (0, t.jsx)("div", {
                                    className: v.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), x && (0, t.jsx)(h, {
                                    className: T,
                                    icon: j
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
                    return i
                },
                default: function() {
                    return I
                }
            });
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
            (t = i || (i = {}))[t.WUMPUS = 0] = "WUMPUS", t[t.PHIBI = 1] = "PHIBI";
            let g = {
                [i.WUMPUS]: v.activityCharacterWumpus,
                [i.PHIBI]: v.activityCharacterPhibi
            };
            var I = r.memo(function(e) {
                let {
                    activityName: a,
                    activityCharacter: l = i.WUMPUS,
                    showExampleButton: t = !1
                } = e, [s, I] = r.useState(0), [S, x] = (0, u.useSpring)(() => ({
                    from: {
                        rotate: "0deg"
                    },
                    config: {
                        tension: 1e3,
                        friction: 5
                    }
                })), U = r.useRef({
                    seconds: s,
                    jitter: async () => {
                        for (;;) {
                            var e;
                            let a = (e = U.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
                            x({
                                rotate: "-".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80)), x({
                                rotate: "".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80))
                        }
                    }
                });
                r.useEffect(() => void(U.current.seconds = s)), r.useEffect(() => {
                    let e = setInterval(() => {
                        I(e => (5399 === e && U.current.jitter(), ++e))
                    }, 1e3);
                    return () => clearInterval(e)
                }, []);
                let A = l === i.WUMPUS ? p : h;
                return (0, n.jsxs)(m.default, {
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
                                src: A,
                                style: S
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
                                        let l = s % 60,
                                            t = (s - l) / 60;
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
                    return ea
                }
            });
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
                S = l("335031"),
                x = l("608684"),
                U = l("635471"),
                A = l("388491"),
                N = l("217513"),
                T = l("581295"),
                E = l("878569"),
                j = l("430312"),
                y = l("10532"),
                C = l("935409"),
                P = l("648149"),
                M = l("369869"),
                b = l("802279"),
                R = l("491250"),
                _ = l("106435"),
                k = l("845579"),
                w = l("26989"),
                B = l("824563"),
                O = l("102985"),
                z = l("471671"),
                L = l("275623"),
                F = l("832132"),
                D = l("315102"),
                W = l("719923"),
                G = l("158998"),
                H = l("50885"),
                V = l("360871"),
                Z = l("771325"),
                Y = l("453252"),
                q = l("49111"),
                X = l("75015"),
                K = l("590456"),
                J = l("782340"),
                Q = l("923843");
            let $ = H.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
                ee = (0, E.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: Q.avatarUploaderPremium,
                    premiumUserWithoutBanner: Q.avatarUploaderPremiumNoBanner,
                    default: Q.avatarUploaderNormal
                });

            function ea(e) {
                var a, n, E;
                let {
                    user: H,
                    guild: ea,
                    canUsePremiumCustomization: el,
                    onUpsellClick: et,
                    onAvatarChange: ei,
                    onBannerChange: en,
                    pendingAccentColor: er,
                    pendingBanner: es,
                    pendingBio: eo,
                    pendingPronouns: eu,
                    pendingAvatar: ed,
                    pendingAvatarDecoration: ec,
                    pendingNickname: em,
                    pendingGlobalName: ef,
                    pendingThemeColors: ev,
                    avatarClassName: eh,
                    activityName: ep,
                    activityCharacter: eg,
                    isTryItOutFlow: eI = !1,
                    disabledInputs: eS = !1,
                    hideExampleButton: ex = !1,
                    hideFakeActivity: eU = !1,
                    hideBioSection: eA = !1,
                    forProfileEffectModal: eN = !1,
                    pendingProfileEffectID: eT,
                    bodyClassName: eE
                } = e, ej = i.useRef(null), [ey, eC] = i.useState(!1), eP = k.GifAutoPlay.getSetting(), {
                    avatarDecorationSrc: eM,
                    avatarSrc: eb,
                    eventHandlers: eR
                } = (0, _.default)({
                    user: H,
                    guildId: null == ea ? void 0 : ea.id,
                    avatarDecorationOverride: ec,
                    avatarOverride: ed,
                    size: d.AvatarSizes.SIZE_80,
                    showPending: !0
                }), e_ = (0, N.default)(H.id, null == ea ? void 0 : ea.id), ek = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), ew = (0, f.default)(), eB = (0, o.useStateFromStores)([w.default], () => null == ea ? null : w.default.getMember(ea.id, H.id)), eO = void 0 === ed ? H.getAvatarURL(void 0, 80) : ed, ez = (0, p.default)(eO, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eL = null == e_ ? void 0 : e_.getPreviewThemeColors(ev), eF = null !== (a = null == eL ? void 0 : eL[0]) && void 0 !== a ? a : null == e_ ? void 0 : e_.primaryColor, eD = ek ? ew : (0, A.getProfileTheme)(eF), eW = (0, S.default)(null !== (n = null != er ? er : eF) && void 0 !== n ? n : (0, s.hex2int)(ez)).hsl, eG = (0, o.useStateFromStores)([z.default], () => z.default.isFocused()), eH = eP ? eG : ey, eV = null == e_ ? void 0 : e_.getPreviewBanner(es, eH), eZ = null != eV, eY = (null == e_ ? void 0 : e_.profileEffectID) != null, eq = null !== (E = (0, Z.getPreviewNickname)(em, null == eB ? void 0 : eB.nick)) && void 0 !== E ? E : (0, Z.getPreviewDisplayName)(ef, G.default.getName(H)), [eX, eK] = (0, o.useStateFromStoresArray)([B.default], () => [B.default.findActivity(H.id, e => e.type === q.ActivityTypes.CUSTOM_STATUS), B.default.getStatus(H.id)]), eJ = (0, o.useStateFromStores)([O.default], () => O.default.hidePersonalInformation), eQ = (null == e_ ? void 0 : e_.canUsePremiumProfileCustomization) || el, e$ = i.useCallback(() => {
                    var e, a;
                    null === (a = ej.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
                }, []), e0 = i.useCallback((e, a) => {
                    null == e || null == a ? ei(null) : "image/gif" !== a.type || W.default.canUseAnimatedAvatar(H) ? (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: ei,
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
                                l.onClose(), e$()
                            }
                        })
                    })
                }, [H, e$, ei]), e1 = (e, a) => {
                    if (null == e || null == a) return en(null);
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: en,
                            uploadType: X.UploadTypes.BANNER,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...l
                        })
                    })
                };

                function e8() {
                    let e = null != eD ? (0, d.getStatusBackdropColor)(eD) : null;
                    return (0, t.jsxs)("div", {
                        className: Q.status,
                        children: [null != e && (null == e_ ? void 0 : e_.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
                            className: Q.statusDotBackground,
                            style: {
                                backgroundColor: e,
                                opacity: (0, d.getStatusBackdropOpacity)(eK, e)
                            }
                        }), (0, t.jsx)("svg", {
                            className: Q.statusDot,
                            children: (0, t.jsx)("rect", {
                                height: "100%",
                                width: "100%",
                                fill: (0, I.getColor)((0, d.getStatusColor)(eK)),
                                mask: "url(#".concat((0, d.getStatusMask)(eK, !1), ")")
                            })
                        })]
                    })
                }
                let e5 = "ProfileCustomizationPreview";
                (0, m.useTriggerDebuggingAA)({
                    location: e5 + " auto on",
                    autoTrackExposure: !0
                }), (0, m.useTriggerDebuggingAA)({
                    location: e5 + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    analyticsLocations: e3
                } = (0, h.default)();
                i.useEffect(() => {
                    if (eP) return;
                    let e = null == e_ ? void 0 : e_.getBannerURL({
                        canAnimate: !0,
                        size: 480
                    });
                    if (!D.isAnimatedImageURL(e)) return;
                    let a = new Image;
                    a.src = null != e ? e : ""
                }, [e_, eP]);
                let e2 = null == ea,
                    e6 = null == e_ ? void 0 : e_.profileEffectID;
                return (0, t.jsxs)(j.default, {
                    forceShowPremium: el,
                    user: H,
                    guildId: null == ea ? void 0 : ea.id,
                    profileType: K.UserProfileTypes.POPOUT,
                    pendingThemeColors: ev,
                    className: eN ? eQ ? Q.profileEffectsModalCustomizationPreviewWithTheme : Q.profileEffectsModalCustomizationPreviewWithoutTheme : eQ ? Q.profileCustomizationPreviewWithTheme : Q.profileCustomizationPreviewWithoutTheme,
                    children: [(0, t.jsx)(U.default, {
                        profileEffectID: void 0 !== eT ? eT : e6
                    }), (0, t.jsxs)(d.HeadingLevel, {
                        children: [(0, t.jsx)(T.default, {
                            profileType: K.UserProfileTypes.POPOUT,
                            hasBanner: eZ,
                            isPremium: el,
                            hasThemeColors: eQ,
                            forProfileEffectModal: eN,
                            hasProfileEffect: eY,
                            children: el ? (0, t.jsxs)("div", {
                                onMouseMove: () => eC(!0),
                                onMouseLeave: () => eC(!1),
                                children: [(0, t.jsx)(x.default, {
                                    className: Q.bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !el || eS,
                                    image: eV,
                                    makeURL: () => eV,
                                    onChange: e1,
                                    imageStyle: {
                                        backgroundColor: eW
                                    },
                                    imageClassName: r(eZ ? Q.bannerUploaderInnerSquare : Q.bannerUploaderInnerSquareEmpty),
                                    hint: J.default.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: () => (0, Z.handleOpenSelectImageModal)(X.UploadTypes.BANNER, null == eB ? void 0 : eB.guildId, eI, void 0),
                                    hideSize: !0,
                                    maxFileSizeBytes: Y.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                    onFileSizeError: Z.showFileSizeErrorModal
                                }), !eP && D.isAnimatedImageURL(eV) ? (0, t.jsx)(L.default, {
                                    className: Q.gifTag
                                }) : null]
                            }) : (0, t.jsx)("div", {
                                className: eY ? Q.bannerUploaderInnerSquare : Q.bannerNormal,
                                style: {
                                    backgroundColor: eW
                                },
                                children: eS ? null : (0, t.jsx)(d.Clickable, {
                                    onClick: () => null == et ? void 0 : et({
                                        object: q.AnalyticsObjects.EDIT_PROFILE_BANNER
                                    }),
                                    className: Q.bannerNitroUpsell,
                                    children: (0, t.jsx)(d.Heading, {
                                        className: Q.bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: J.default.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), e2 ? function() {
                            let e = () => (0, Z.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eB ? void 0 : eB.guildId, eI),
                                a = () => (0, g.openAvatarDecorationModal)({
                                    analyticsLocations: e3,
                                    isTryItOutFlow: eI
                                });
                            return (0, t.jsxs)(d.Clickable, {
                                ...eR,
                                "aria-disabled": eS,
                                onClick: eS ? void 0 : i => {
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
                                className: r(ee({
                                    isPremium: el,
                                    hasBanner: eZ,
                                    hasProfileEffect: eY
                                }), {
                                    [Q.defaultCursor]: eS
                                }),
                                children: [(0, t.jsx)($, {
                                    className: Q.avatarUploaderInner,
                                    src: eb,
                                    avatarDecoration: eM,
                                    size: d.AvatarSizes.SIZE_80,
                                    "aria-label": H.username
                                }), eS ? null : (0, t.jsx)("div", {
                                    className: Q.hoverIconWrapper,
                                    children: (0, t.jsx)(F.default, {
                                        className: Q.hoverIcon,
                                        color: "white"
                                    })
                                }), e8()]
                            })
                        }() : function() {
                            let e = null != eB && !el,
                                a = (0, t.jsxs)("div", {
                                    className: ee({
                                        isPremium: el,
                                        hasBanner: eZ,
                                        hasProfileEffect: eY
                                    }),
                                    children: [(0, t.jsx)(x.default, {
                                        disabled: eS,
                                        ref: ej,
                                        showIcon: null == eM,
                                        hint: e ? J.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : J.default.Messages.CHANGE_AVATAR,
                                        showRemoveButton: !1,
                                        imageClassName: r(eh, Q.avatarUploaderInner),
                                        image: eb,
                                        onChange: e0,
                                        makeURL: () => eb,
                                        maxFileSizeBytes: Y.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                        onFileSizeError: Z.showFileSizeErrorModal,
                                        onOpenImageSelectModal: () => (0, Z.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eB ? void 0 : eB.guildId, eI, void 0)
                                    }), null != eM && (0, t.jsx)("img", {
                                        className: Q.avatarDecoration,
                                        src: eM,
                                        alt: " ",
                                        "aria-hidden": !0
                                    }), e8()]
                                });
                            return e ? (0, t.jsx)(d.Clickable, {
                                onClickCapture: e => {
                                    e.stopPropagation(), null == et || et({
                                        object: q.AnalyticsObjects.AVATAR
                                    })
                                },
                                children: a
                            }) : a
                        }(), (0, t.jsx)(C.UserPopoutBadgeList, {
                            user: H,
                            guildId: null == ea ? void 0 : ea.id,
                            isTryItOutFlow: eI,
                            forProfileEffectModal: eN
                        }), function() {
                            let e = null == e_ ? void 0 : e_.getPreviewBio(eo);
                            return (0, t.jsxs)(j.default.Inner, {
                                className: r(Q.body, eE),
                                children: [(0, t.jsx)(R.default, {
                                    isTryItOut: eI,
                                    user: H,
                                    nickname: null != eq ? eq : H.username,
                                    pronouns: null != eu ? eu : null == e_ ? void 0 : e_.pronouns,
                                    usernameIcon: (() => {
                                        let e = null != eB;
                                        if (!e) return;
                                        let a = null === ed;
                                        if (a) return;
                                        let l = null != eB.avatar || null != ed;
                                        if (l) return (0, t.jsx)(P.default, {
                                            user: H,
                                            nickname: eq
                                        })
                                    })()
                                }), !eN && (0, t.jsx)(b.default, {
                                    customStatusActivity: eX
                                }), (0, t.jsx)(y.default, {}), !eA && (0, t.jsx)(M.default, {
                                    isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
                                    guild: ea,
                                    bio: null == e ? void 0 : e.value,
                                    hidePersonalInformation: eJ,
                                    lastSection: eU,
                                    lineClamp: eN ? 3 : void 0
                                }), !eU && (0, t.jsx)(V.default, {
                                    activityName: ep,
                                    activityCharacter: eg,
                                    showExampleButton: null == ea && !ex
                                })]
                            })
                        }()]
                    })]
                })
            }
        }
    }
]);