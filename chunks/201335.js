            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            }), l("222007");
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("125352"),
                c = l("769846"),
                o = l("77078"),
                d = l("749344"),
                u = l("599110"),
                p = l("599994"),
                m = l("682777"),
                _ = l("412707"),
                f = l("646186"),
                h = l("331793"),
                C = l("417152"),
                g = l("49111"),
                I = l("782340"),
                A = l("626783");

            function E(e) {
                let {
                    collectionTitle: t,
                    title: l,
                    description: a,
                    handleClick: n,
                    imageSrc: r,
                    ctaLabel: c,
                    ctaLink: d,
                    applicationId: u
                } = e, m = "936929561302675456" === u, _ = null == u ? (0, i.jsx)(o.Button, {
                    className: A.applicationCta,
                    onClick: n,
                    children: c
                }) : (0, i.jsx)(p.default, {
                    href: g.Routes.APPLICATION_DIRECTORY_PROFILE(u),
                    children: (0, i.jsx)(o.Button, {
                        className: A.applicationCta,
                        onClick: n,
                        children: c
                    })
                });
                return (0, i.jsxs)("div", {
                    className: A.card,
                    children: [(0, i.jsx)("div", {
                        className: A.textContainer,
                        children: (0, i.jsxs)("div", {
                            className: A.verticallyCenter,
                            children: [(0, i.jsx)(o.Text, {
                                className: A.collectionTitle,
                                tag: "span",
                                color: "header-secondary",
                                variant: "heading-deprecated-12/semibold",
                                children: t
                            }), (0, i.jsxs)(o.Heading, {
                                className: A.applicationName,
                                variant: "heading-xxl/medium",
                                children: [l, " ", m && (0, i.jsx)(h.default, {})]
                            }), (0, i.jsx)(o.Text, {
                                className: A.applicationDescription,
                                variant: "text-md/normal",
                                lineClamp: 3,
                                children: a
                            }), null == d ? _ : (0, i.jsx)(o.Anchor, {
                                onClick: n,
                                href: d,
                                className: s((0, o.getButtonStyle)({
                                    grow: !1
                                }), A.applicationCta),
                                children: c
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: A.imageContainer,
                        children: (0, i.jsx)("img", {
                            alt: l,
                            className: A.image,
                            src: r
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    collection: t,
                    collection: {
                        id: l,
                        title: n,
                        application_directory_collection_items: o
                    }
                } = e, p = (0, C.default)({
                    collection: t
                }), [h, v] = a.useState(), x = (0, _.useApplicationDirectoryHistory)(e => e.guildId);
                return a.useEffect(() => {
                    let e = null == p ? void 0 : p.current;
                    if (null == e) return;
                    let t = new ResizeObserver(() => {
                        let t = document.body.offsetWidth < parseFloat(c.default.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(c.default.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(c.default.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
                        v(e.offsetWidth / t)
                    });
                    return t.observe(document.body), () => {
                        t.disconnect()
                    }
                }, [p]), (0, i.jsx)("article", {
                    ref: p,
                    className: s({
                        [A.collectionBottomMargin]: o.length <= 1
                    }),
                    children: (0, i.jsx)(d.default, {
                        aspectRatio: h,
                        themedPagination: !0,
                        paginationClassName: A.paginationControls,
                        paginationArrowClassName: A.paginationArrow,
                        items: o,
                        onChangeItem: (e, t, i) => {
                            let {
                                application: a
                            } = e;
                            null != a && u.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
                                collection_id: l,
                                offset: i,
                                results: [a.id],
                                guild_id: x
                            })
                        },
                        renderItem: e => {
                            let {
                                id: t,
                                image_hash: a,
                                application: s,
                                type: c,
                                description: o,
                                title: d,
                                call_to_action_label: p,
                                call_to_action_url: _
                            } = e;
                            if (null == a) return;
                            let h = (0, m.getCollectionItemAssetUrl)({
                                itemId: t,
                                hash: a
                            });
                            if (c === r.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) {
                                var C, A;
                                return (0, i.jsx)(E, {
                                    collectionTitle: n,
                                    title: s.name,
                                    description: null !== (A = null === (C = s.directory_entry) || void 0 === C ? void 0 : C.short_description) && void 0 !== A ? A : s.description,
                                    handleClick: () => {
                                        u.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                            collection_id: l,
                                            application_id: s.id,
                                            guild_id: x,
                                            shown_mutual_guilds_count: void 0
                                        }), (0, f.goToApplication)({
                                            applicationId: s.id
                                        })
                                    },
                                    imageSrc: h,
                                    ctaLabel: I.default.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
                                    applicationId: s.id
                                })
                            }
                            if (c === r.ApplicationDirectoryCollectionItemType.LINK && null != d && null != _ && null != p) return (0, i.jsx)(E, {
                                collectionTitle: n,
                                title: d,
                                description: o,
                                handleClick: () => {
                                    u.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                        collection_id: l,
                                        link: _,
                                        guild_id: x,
                                        shown_mutual_guilds_count: void 0
                                    })
                                },
                                imageSrc: h,
                                ctaLabel: p,
                                ctaLink: _
                            })
                        }
                    })
                })
            }