            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("635471"),
                i = n("824563"),
                r = n("289918"),
                o = n("590006"),
                u = n("935409"),
                d = n("590456"),
                c = n("327828"),
                f = e => {
                    let {
                        user: t,
                        displayProfile: n,
                        channel: f,
                        animateAssets: h,
                        forceShowPremiumBadge: p
                    } = e, m = t.isNonUserBot(), [E, C] = (0, l.useStateFromStoresArray)([i.default], () => [m ? null : i.default.getStatus(t.id), i.default.isMobileOnline(t.id)]), g = null == n ? void 0 : n.profileEffectId;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(r.default, {
                            user: t,
                            displayProfile: n,
                            profileType: d.UserProfileTypes.PANEL,
                            showPremiumBadgeUpsell: !0,
                            isHovering: p,
                            animateOnHover: !h
                        }), (0, a.jsx)(u.UserPopoutAvatar, {
                            user: t,
                            displayProfile: n,
                            status: E,
                            isMobile: C,
                            channelId: f.id,
                            disableUserProfileLink: !0,
                            hasBanner: (null == n ? void 0 : n.banner) != null,
                            profileType: d.UserProfileTypes.PANEL,
                            animateOnHover: !h
                        }), (0, a.jsx)("div", {
                            className: c.badgelistGroup,
                            children: (0, a.jsx)(o.default, {
                                className: c.badgeList,
                                user: t,
                                size: o.BadgeSizes.SIZE_22
                            })
                        }), null != g && (0, a.jsx)(s.default, {
                            profileEffectId: g,
                            maxLoops: 0,
                            resetOnHover: !0,
                            isHovering: p,
                            urlQueryString: "dm-view",
                            noBorderRadius: !0
                        })]
                    })
                }