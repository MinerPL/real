            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            }), r("222007"), r("794252");
            var a = r("37983"),
                n = r("884691"),
                s = r("414456"),
                u = r.n(s),
                i = r("506838"),
                l = r("171210"),
                o = r("65597"),
                c = r("77078"),
                d = r("252744"),
                E = r("853987"),
                _ = r("426497"),
                f = r("491232"),
                C = r("743826"),
                I = r("216422"),
                A = r("468759"),
                S = r("600785"),
                p = r("956089"),
                h = r("719923"),
                m = r("643070"),
                T = r("688318"),
                L = r("782340"),
                O = r("654353");
            let v = () => 80,
                R = e => {
                    let {
                        children: t,
                        className: r,
                        onSelect: n,
                        isSelected: s = !1,
                        ...i
                    } = e;
                    return (0, a.jsx)(c.Clickable, {
                        className: u(O.decorationGridItem, s ? O.selected : void 0, r),
                        ...i,
                        onClick: n,
                        children: t
                    })
                },
                g = e => {
                    let {
                        user: t,
                        avatarDecoration: r,
                        innerRef: s,
                        section: u,
                        isSelected: i = !1,
                        ...c
                    } = e, C = (0, o.default)([E.default], () => {
                        let e = E.default.getProduct(r.skuId);
                        return (0, f.isPremiumCollectiblesProduct)(e)
                    }), A = (0, o.default)([_.default], () => _.default.isItemViewed(r)), v = h.default.canUseCollectibles(t), g = u === m.Section.PREMIUM_PURCHASE && !v, [N, D] = n.useState(i);
                    n.useEffect(() => {
                        i && D(!0)
                    }, [i]);
                    let P = n.useRef(null),
                        M = (0, d.default)(null != s ? s : P),
                        {
                            avatarDecorationSrc: y
                        } = (0, T.default)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !M
                        });
                    return (0, a.jsxs)(R, {
                        className: g ? O.decorationGridItemChurned : void 0,
                        innerRef: null != s ? s : P,
                        isSelected: i,
                        ...c,
                        children: [(0, a.jsx)("img", {
                            className: O.presetDecorationImg,
                            src: y,
                            alt: r.label
                        }), (() => {
                            let e = u === m.Section.PURCHASE || u === m.Section.PREMIUM_PURCHASE && v;
                            if (e) return null;
                            let t = !A && !i && !N;
                            return t ? (0, a.jsx)(p.PremiumBadge, {
                                className: O.newBadge,
                                text: (0, a.jsxs)("div", {
                                    className: O.newBadgeText,
                                    children: [(0, a.jsx)(S.default, {
                                        width: 12,
                                        height: 12
                                    }), L.default.Messages.NEW]
                                })
                            }) : (0, a.jsx)(p.IconBadge, {
                                icon: C ? () => (0, a.jsx)(I.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, a.jsx)(S.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: l.default.BACKGROUND_ACCENT,
                                className: O.iconBadge
                            })
                        })()]
                    })
                };
            var N = e => {
                let {
                    user: t,
                    pendingAvatarDecoration: r,
                    selectedAvatarDecorationRef: n,
                    onSelect: s,
                    onOpenShop: u
                } = e, l = (0, m.default)();
                return (0, a.jsx)(c.MasonryList, {
                    fade: !0,
                    className: O.list,
                    columns: 3,
                    sections: l.map(e => {
                        let {
                            items: t
                        } = e;
                        return t.length
                    }),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: (e, o, d, E) => {
                        let {
                            section: _,
                            items: f
                        } = l[e];
                        return (0, i.match)(f[o]).with(m.NONE_ITEM, () => (0, a.jsxs)(R, {
                            style: {
                                ...d
                            },
                            isSelected: null === r,
                            onSelect: () => s(null),
                            children: [(0, a.jsx)(A.default, {
                                className: O.notAllowedIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: L.default.Messages.NONE
                            })]
                        }, E)).with(m.SHOP_ITEM, () => (0, a.jsxs)(R, {
                            style: d,
                            onSelect: u,
                            children: [(0, a.jsx)(C.default, {
                                className: O.shopIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: L.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, E)).otherwise(e => {
                            let u = (null == r ? void 0 : r.id) === e.id;
                            return (0, a.jsx)(g, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: _,
                                innerRef: u ? n : void 0,
                                isSelected: u,
                                onSelect: () => s(e)
                            }, E)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = l[e];
                        return (0, a.jsx)("div", {
                            className: O.headings,
                            children: (0, a.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                children: (0, a.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: t
                                })
                            })
                        })
                    },
                    getSectionHeight: e => l[e].height,
                    getItemKey: (e, t) => l[e].items[t].id,
                    getItemHeight: v
                })
            }