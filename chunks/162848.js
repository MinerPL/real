            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            }), s("222007");
            var n = s("37983");
            s("884691");
            var r = s("414456"),
                l = s.n(r),
                i = s("77078"),
                a = s("446674"),
                u = s("265586"),
                o = s("606292"),
                d = s("688318"),
                c = s("635357"),
                f = s("184900"),
                S = s("845962"),
                E = s("506885"),
                I = s("697218"),
                p = s("153160"),
                _ = s("426188"),
                T = s("49111"),
                h = s("782340"),
                C = s("416465"),
                m = s("513002");
            let A = e => {
                    let {
                        avatarDecoration: t
                    } = e, s = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
                        avatarDecorationSrc: r
                    } = (0, d.default)({
                        user: s,
                        avatarDecorationOverride: t,
                        size: (0, o.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40)
                    });
                    return (0, n.jsx)("img", {
                        src: r,
                        alt: t.label,
                        className: C.avatarDecoration
                    })
                },
                N = e => {
                    var t;
                    let {
                        profileEffect: s
                    } = e, r = (0, a.useStateFromStores)([S.default], () => S.default.getProfileEffectById(s.id)), {
                        accessibilityLabel: l,
                        thumbnailPreviewSrc: i,
                        title: u
                    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
                    return (0, n.jsxs)("div", {
                        className: C.profileEffectContainer,
                        children: [(0, n.jsx)("img", {
                            src: m,
                            alt: l,
                            className: C.profileEffectBackground
                        }), (0, n.jsx)("img", {
                            className: C.profileEffect,
                            src: i,
                            alt: u
                        })]
                    })
                };
            var g = e => {
                let {
                    selectedSkuId: t,
                    selectedSkuPricePreview: s,
                    className: r
                } = e, {
                    product: o
                } = (0, _.useFetchCollectiblesProduct)(t), {
                    giftRecipient: d,
                    giftRecipientError: S
                } = (0, c.useGiftContext)(), m = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser());
                if (null == o || null == s) return null;
                let [g] = o.items, O = null != d && d.id !== (null == m ? void 0 : m.id);
                return (0, n.jsxs)("div", {
                    className: r,
                    children: [(0, n.jsxs)("div", {
                        className: C.previewTitleContainer,
                        children: [(0, n.jsx)(i.FormTitle, {
                            className: C.previewTitle,
                            children: h.default.Messages.COLLECTIBLES_GIFT_LABEL
                        }), O && (0, n.jsx)(i.Popout, {
                            preload: () => (0, E.default)(d.id, d.getAvatarURL(null, 80)),
                            renderPopout: e => (0, n.jsx)(f.default, {
                                ...e,
                                user: d,
                                pendingAvatar: d.getAvatarURL(null, (0, i.getAvatarSize)(i.AvatarSizes.SIZE_80)),
                                pendingAvatarDecoration: g.type === u.CollectiblesItemType.AVATAR_DECORATION ? g : null,
                                pendingProfileEffectId: g.type === u.CollectiblesItemType.PROFILE_EFFECT ? g.id : null,
                                canUsePremiumCustomization: !0,
                                onAvatarChange: T.NOOP,
                                onBannerChange: T.NOOP,
                                disabledInputs: !0
                            }),
                            align: "center",
                            position: "right",
                            children: e => (0, n.jsx)(i.Clickable, {
                                ...e,
                                className: C.previewLink,
                                children: (0, n.jsx)(i.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-link",
                                    children: h.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                                })
                            })
                        }, d.id)]
                    }), (0, n.jsxs)("div", {
                        className: l(C.previewContainer, {
                            [C.previewContainerError]: null != S
                        }),
                        children: [g.type === u.CollectiblesItemType.AVATAR_DECORATION && (0, n.jsx)(A, {
                            avatarDecoration: g
                        }), g.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, n.jsx)(N, {
                            profileEffect: g
                        }), (0, n.jsxs)("div", {
                            className: C.previewTextContainer,
                            children: [(0, n.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                children: o.name
                            }), (0, n.jsx)(i.Heading, {
                                variant: "heading-sm/medium",
                                color: "header-secondary",
                                children: g.type === u.CollectiblesItemType.AVATAR_DECORATION ? h.default.Messages.USER_SETTINGS_AVATAR_DECORATION : g.type === u.CollectiblesItemType.PROFILE_EFFECT ? h.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })]
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            children: (0, p.formatPrice)(s.amount, s.currency)
                        })]
                    }), null != S && (0, n.jsx)(i.Text, {
                        className: C.recipientError,
                        variant: "text-sm/normal",
                        color: "status-danger-background",
                        children: S
                    })]
                })
            }