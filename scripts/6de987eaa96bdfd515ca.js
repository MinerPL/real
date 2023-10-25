(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19252"], {
        93902: function(e, t, a) {
            "use strict";
            e.exports = a.p + "de1981a6479d060d8ebd.png"
        },
        923702: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("920040"),
                l = a("773670"),
                i = a("641900"),
                r = a("15059"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: a,
                        sprites: s,
                        colors: o
                    } = e, [d, c] = l.useState(null), u = (0, i.useConfettiCannon)(a, d), [f, C] = l.useState(!1);
                    return l.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && u.isReady && !f && (e = e.map((a, n) => setTimeout(() => {
                            var a;
                            n === e.length - 1 && C(!0), u.createMultipleConfetti((a = t.getBoundingClientRect(), {
                                ...r.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: a.x,
                                        y: a.y
                                    },
                                    maxValue: {
                                        x: a.x + a.width,
                                        y: a.y + a.height / 2
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -100,
                                        y: -50
                                    },
                                    maxValue: {
                                        x: 100,
                                        y: -300
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 1e-4
                                }
                            }), 50)
                        }, 100 * n))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [u, t, f]), (0, n.jsx)(i.SpriteCanvas, {
                        ref: c,
                        sprites: null != s ? s : r.COMMON_CONFETTI_SPRITES,
                        colors: null != o ? o : r.COMMON_CONFETTI_COLORS,
                        spriteWidth: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: r.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        658756: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return R
                },
                default: function() {
                    return A
                }
            });
            var n = a("920040"),
                l = a("773670"),
                i = a("575482"),
                r = a.n(i),
                s = a("641900"),
                o = a("161179"),
                d = a.n(o),
                c = a("744196"),
                u = a("77078"),
                f = a("54239"),
                C = a("206230"),
                v = a("812204"),
                E = a("685665"),
                m = a("606292"),
                O = a("688318"),
                p = a("38766"),
                x = a("601095"),
                h = a("493390"),
                N = a("697218"),
                T = a("730297"),
                M = a("806410"),
                S = a("923702"),
                _ = a("716120"),
                I = a("408381"),
                L = a("57940"),
                g = a("782340"),
                j = a("484986"),
                y = a("53708");
            let R = e => {
                var t, a;
                let {
                    product: i,
                    onClose: r,
                    confettiTarget: s,
                    confettiCanvas: o,
                    category: R,
                    analyticsLocations: A
                } = e, {
                    confettiColors: D,
                    confettiSprites: w,
                    backgroundColors: B,
                    buttonColors: b
                } = (0, L.default)(R), F = (0, c.default)([N.default], () => {
                    let e = N.default.getCurrentUser();
                    return d(null != e, "User cannot be undefined"), e
                }), k = (0, c.default)([C.default], () => C.default.useReducedMotion), P = null !== (t = i.items.find(T.isAvatarDecorationRecord)) && void 0 !== t ? t : null, z = null !== (a = i.items.find(M.isProfileEffectRecord)) && void 0 !== a ? a : null, {
                    avatarDecorationSrc: H
                } = (0, O.default)({
                    user: F,
                    avatarDecorationOverride: P,
                    size: (0, m.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_120)
                }), U = l.useRef(null), {
                    analyticsLocations: V,
                    AnalyticsLocationProvider: Z
                } = (0, E.default)([...A, v.default.COLLECTIBLES_COLLECTED_MODAL]), G = (0, p.default)({
                    analyticsLocations: V
                });
                return null == P && null == z ? null : (0, n.jsxs)(Z, {
                    children: [(0, n.jsxs)("div", {
                        className: j.modalInner,
                        ref: U,
                        style: null != B ? {
                            background: (0, I.getBackgroundGradient)(B)
                        } : void 0,
                        children: [(0, n.jsxs)("div", {
                            className: j.bannerContainer,
                            children: [(0, n.jsx)(_.default, {
                                asset: R.banner,
                                size: 440,
                                className: j.decorationBanner
                            }), null != P && (0, n.jsx)(u.Avatar, {
                                size: u.AvatarSizes.SIZE_120,
                                src: y,
                                avatarDecoration: H,
                                className: j.avatarDecoration,
                                "aria-label": i.name
                            }), null != z && (0, n.jsx)("div", {
                                className: j.profileEffectShopPreview,
                                children: (0, n.jsx)(x.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == z ? void 0 : z.id
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: j.collectedInfoContainer,
                            children: [(0, n.jsxs)("div", {
                                className: j.collectedTextContainer,
                                children: [(0, n.jsx)(u.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: g.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: i.name
                                    })
                                }), (0, n.jsx)(u.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != z ? g.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : g.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, n.jsx)(u.Button, {
                                onClick: () => {
                                    if (r(), (0, f.popLayer)(), G(), null != P)(0, m.openAvatarDecorationModal)({
                                        initialSelectedDecoration: i.items.find(T.isAvatarDecorationRecord),
                                        analyticsLocations: V
                                    });
                                    else if (null != z)(0, h.openProfileEffectModal)({
                                        analyticsLocations: V,
                                        initialSelectedEffectID: null == z ? void 0 : z.id
                                    })
                                },
                                style: null != b ? {
                                    background: (0, I.getBackgroundGradient)(b, 90)
                                } : void 0,
                                children: g.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, n.jsx)(u.ModalCloseButton, {
                            onClick: r,
                            className: j.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !k && (0, n.jsx)(S.default, {
                        confettiTarget: null != s ? s : U.current,
                        confettiCanvas: o,
                        sprites: w,
                        colors: D
                    })]
                })
            };
            var A = e => {
                let {
                    transitionState: t,
                    product: a,
                    category: i,
                    onClose: o,
                    analyticsLocations: d
                } = e, c = l.useRef(new s.Environment), [f, C] = l.useState(null);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.ConfettiCanvas, {
                        ref: C,
                        className: j.confettiCanvas,
                        environment: c.current
                    }), (0, n.jsx)(u.ModalRoot, {
                        transitionState: t,
                        size: u.ModalSize.DYNAMIC,
                        children: (0, n.jsx)(u.ModalContent, {
                            className: r(j.modalInner, j.modalContentOverrides),
                            children: (0, n.jsx)(R, {
                                product: a,
                                category: i,
                                onClose: o,
                                confettiCanvas: f,
                                analyticsLocations: d
                            })
                        })
                    })]
                })
            }
        },
        601095: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("920040"),
                l = a("773670"),
                i = a("575482"),
                r = a.n(i),
                s = a("859498"),
                o = a("309501"),
                d = a("399510"),
                c = a("93902"),
                u = e => {
                    let {
                        profileEffectId: t,
                        isHovering: a,
                        forCollectedModal: i = !1,
                        isPurchased: u
                    } = e, f = i ? 250 : .1, [C, v] = l.useState(!0);
                    return (l.useEffect(() => {
                        if (!0 !== i) v(!1);
                        else {
                            let e = setTimeout(() => {
                                v(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, i]), null != t) ? (0, n.jsxs)("div", {
                        className: r(d.previewContainer, {
                            [d.previewContainerAnimation]: i
                        }),
                        children: [(0, n.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: i ? d.previewForCollected : d.preview,
                            "aria-hidden": !0
                        }), !C && (0, n.jsx)("div", {
                            className: u ? d.purchasedEffect : void 0,
                            children: (0, n.jsx)(o.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: i,
                                restartMethod: s.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: a,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        }
    }
]);