            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("476042"),
                o = n("974667"),
                u = n("65597"),
                d = n("862337"),
                c = n("77078"),
                f = n("450911"),
                h = n("272030"),
                C = n("452804"),
                p = n("393414"),
                m = n("239380"),
                E = n("26989"),
                g = n("677099"),
                I = n("15738"),
                S = n("956089"),
                _ = n("108189"),
                N = n("674644"),
                T = n("945317"),
                A = n("472942"),
                L = n("423080"),
                v = n("492950"),
                x = n("610898"),
                R = n("255991"),
                M = n("49111"),
                O = n("782340"),
                y = n("789978");
            let D = {
                analyticsSource: {
                    page: M.AnalyticsPages.GUILD_CHANNEL,
                    section: M.AnalyticsSections.CHANNEL_LIST,
                    object: M.AnalyticsObjects.CHANNEL
                }
            };

            function b(e, t) {
                (0, h.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("374705").then(n.bind(n, "374705"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        guild: t
                    })
                })
            }
            var j = a.memo(function(e) {
                var t, n, s, h, M;
                let {
                    guildNode: j,
                    setRef: G,
                    onDragStart: U,
                    onDragEnd: P,
                    route: w,
                    guild: F,
                    animatable: B,
                    selected: V = !1,
                    unread: H = !1,
                    mediaState: k,
                    unavailable: Y = !1,
                    badge: K = 0,
                    contextMenu: W = b,
                    draggable: Z = !1,
                    sorting: z = !1,
                    preloadOnClick: Q = !0,
                    guildJoinRequestStatus: X
                } = e, {
                    id: q,
                    parentId: J
                } = j, $ = null !== (t = e.upperBadge) && void 0 !== t ? t : Y ? (0, R.renderUnavailableBadge)() : null != k ? (0, R.renderMediaBadge)(k) : void 0, ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
                null == ee && K > 0 ? ee = null !== (s = (0, R.renderMentionBadge)(K)) && void 0 !== s ? s : void 0 : null == ee && null != X && (ee = null !== (h = (0, R.renderGuildJoinRequestBadge)({
                    guildJoinRequestStatus: X
                })) && void 0 !== h ? h : void 0);
                let et = null !== (M = e.lowerBadgeWidth) && void 0 !== M ? M : (0, S.getBadgeWidthForValue)(K),
                    [{
                        dragging: en
                    }, el] = (0, r.useDrag)({
                        type: N.GuildsNodeType.GUILD,
                        item: () => (requestAnimationFrame(() => {
                            null == U || U()
                        }), {
                            type: j.type,
                            nodeId: j.id
                        }),
                        end() {
                            null == P || P(), (0, C.saveGuildFolders)(g.default.getCompatibleGuildFolders())
                        },
                        collect: e => ({
                            dragging: e.isDragging()
                        })
                    }),
                    ea = (0, o.useTreeItem)(null != q ? q : ""),
                    [es, ei] = a.useState(!1),
                    er = !z && es,
                    [eo, eu] = a.useState(!1),
                    [ed, ec] = a.useState(!1),
                    [ef] = a.useState(() => new d.DelayedCall(70, () => ec(!0)));
                a.useEffect(() => () => ef.cancel(), [ef]);
                let eh = a.useCallback(() => {
                        if (null != w) {
                            (0, p.transitionTo)(w, {
                                state: D
                            });
                            return
                        }(0, m.transitionToGuild)(q, {
                            state: D
                        })
                    }, [q, w]),
                    eC = a.useCallback(() => {
                        if (null != w || null == F || Y || !Q) return;
                        let e = (0, m.getChannelIdForGuildTransition)(F.id);
                        null != e && f.default.preload(F.id, e)
                    }, [w, F, Y, Q]),
                    ep = (0, u.default)([E.default], () => E.default.isCurrentUserGuest(q)),
                    em = a.useCallback(e => {
                        null != F && !ep && W(e, F)
                    }, [F, W, ep]),
                    eE = a.useCallback(e => {
                        if ("ArrowLeft" === e.key && null != J) {
                            var t;
                            null === (t = document.querySelector("[aria-owns=folder-items-".concat(J, "]"))) || void 0 === t || t.focus()
                        }
                    }, [J]),
                    eg = a.useCallback(e => {
                        if (e) {
                            ef.delay();
                            return
                        }
                        ef.cancel(), ec(!1)
                    }, [ef]),
                    eI = a.useCallback(e => {
                        null == G || G(q, e)
                    }, [q, G]);
                if (null == F) return null;
                let eS = ed || eo ? (0, l.jsx)(T.default, {
                        guild: F,
                        show: ed,
                        active: V,
                        onAnimationStart: function() {
                            eu(ed)
                        },
                        onAnimationRest: function() {
                            ed || eu(!1)
                        }
                    }) : (0, l.jsx)(_.default, {
                        ariaLabel: O.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                            guildName: F.toString(),
                            mentions: K
                        }),
                        name: F.toString(),
                        onClick: eh,
                        onMouseEnter: function() {
                            z || ei(!0)
                        },
                        onMouseLeave: function() {
                            z || ei(!1)
                        },
                        onMouseDown: eC,
                        onContextMenu: em,
                        onKeyDown: eE,
                        icon: F.getIconURL(96, er && B),
                        selected: V || er,
                        ...ea,
                        role: "treeitem"
                    }),
                    e_ = en ? (0, l.jsx)(A.PlaceholderDropTarget, {
                        children: (0, l.jsx)(v.default, {})
                    }) : (0, l.jsx)("div", {
                        ref: Z ? el : void 0,
                        "data-dnd-name": F.toString(),
                        className: i(y.blobContainer, {
                            [y.sorting]: z,
                            [y.wobble]: ed,
                            [y.selected]: ed || V
                        }),
                        children: (0, l.jsx)(c.BlobMask, {
                            selected: ed || V || er,
                            upperBadge: $,
                            lowerBadge: ee,
                            lowerBadgeWidth: et,
                            children: eS
                        })
                    });
                return (0, l.jsxs)(x.ListItem, {
                    ref: eI,
                    children: [(0, l.jsx)(I.default, {
                        hovered: !en && er,
                        selected: !en && V,
                        unread: !en && H,
                        className: y.pill
                    }), (0, l.jsx)(L.default, {
                        guild: F,
                        disabled: z,
                        children: e_
                    }), Z ? (0, l.jsx)(A.default, {
                        name: F.name,
                        targetNode: j,
                        onDragOverChanged: eg
                    }) : null]
                })
            })