            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var a, l = n("37983"),
                s = n("884691"),
                i = n("917351"),
                r = n.n(i),
                u = n("118810"),
                o = n("77078"),
                d = n("272030"),
                c = n("699473"),
                f = n("42203"),
                h = n("782340"),
                p = n("821867");
            a = class extends s.PureComponent {
                render() {
                    let {
                        result: e,
                        listItemProps: t,
                        searchOffset: n,
                        index: a,
                        totalResults: s
                    } = this.props, i = r.find(e, e => e.isSearchHit);
                    if (null == i) return null;
                    let u = f.default.getChannel(i.channel_id);
                    if (null == u) return null;
                    let d = "search-result-".concat(i.id);
                    return (0, l.jsx)(o.FocusRing, {
                        ringTarget: this.hitRef,
                        ringClassName: p.searchResultFocusRing,
                        offset: 4,
                        children: (0, l.jsxs)("li", {
                            className: p.container,
                            ...t,
                            "aria-posinset": 1 + n + a,
                            "aria-setsize": s,
                            "aria-labelledby": d,
                            children: [(0, l.jsx)(o.Clickable, {
                                tabIndex: -1,
                                onClick: this.handleMessageClick,
                                innerRef: this.containerRef,
                                className: p.searchResult,
                                focusProps: {
                                    enabled: !1
                                },
                                children: (0, l.jsx)("div", {
                                    ref: this.hitRef,
                                    className: p.message,
                                    children: (0, l.jsx)(c.default, {
                                        id: d,
                                        message: i,
                                        channel: u,
                                        onContextMenu: e => this.handleContextMenu(e, i),
                                        animateAvatar: !1,
                                        subscribeToComponentDispatch: !1,
                                        trackAnnouncementViews: !0
                                    })
                                }, i.id)
                            }), (0, l.jsx)("div", {
                                className: p.buttonsContainer,
                                "aria-hidden": !0,
                                children: (0, l.jsx)(o.Clickable, {
                                    className: p.button,
                                    onClick: this.jumpTo,
                                    children: h.default.Messages.JUMP
                                })
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.containerRef = s.createRef(), this.hitRef = s.createRef(), this.handleContextMenu = (e, t) => {
                        let a = f.default.getChannel(t.channel_id);
                        null != a && (e.stopPropagation(), (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("13406").then(n.bind(n, "13406"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                message: t,
                                channel: a
                            })
                        }))
                    }, this.jumpTo = e => {
                        null != e && (e.preventDefault(), e.stopPropagation());
                        let {
                            onJump: t,
                            result: n
                        } = this.props, a = n.find(e => e.isSearchHit);
                        null != a && t(a)
                    }, this.handleMessageClick = e => {
                        if (function(e, t) {
                                var n;
                                let a = null === (n = window) || void 0 === n ? void 0 : n.getSelection();
                                if (null != a && !a.isCollapsed) return !0;
                                if (null == e || null == t) return !1;
                                for (;
                                    (0, u.isElement)(e) && e !== t;) {
                                    ;
                                    let {
                                        tagName: t
                                    } = e;
                                    if ("A" === t || "IMG" === t || "BUTTON" === t) return !0;
                                    e = e.parentNode
                                }
                                return !1
                            }(e.target, this.containerRef.current)) {
                            e.stopPropagation();
                            return
                        }
                        this.jumpTo(e)
                    }
                }
            }