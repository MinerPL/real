            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("424973"), n("222007"), n("70102"), n("808653");
            var u, r, E = n("917351"),
                o = n.n(E),
                d = n("748820"),
                a = n("446674"),
                _ = n("95410"),
                s = n("913144"),
                A = n("684849"),
                c = n("611310"),
                O = n("80687"),
                I = n("49111");
            (r = u || (u = {})).REQUIRED = "REQUIRED", r.OPTIONAL = "OPTIONAL", r.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
            let T = "migrated",
                f = {
                    [I.OverlayWidgets.GUILDS]: {
                        minSize: {
                            width: 312,
                            height: 300
                        },
                        resizeX: !1,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL",
                        defaultSettings: {
                            anchor: {
                                left: .175,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: .65
                            },
                            pinned: !1
                        }
                    },
                    [I.OverlayWidgets.TEXT]: {
                        minSize: {
                            width: 430,
                            height: 300
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL",
                        defaultSettings: {
                            anchor: {
                                left: .26,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .565,
                                height: .65
                            },
                            pinned: !0
                        }
                    },
                    [I.OverlayWidgets.VOICE]: {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: "REQUIRED",
                        defaultSettings: {
                            anchor: {
                                left: .011,
                                top: .011,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    },
                    [I.OverlayWidgets.GUILDS_TEXT]: {
                        minSize: {
                            height: 300,
                            width: 610
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL_DEFAULT",
                        defaultSettings: {
                            anchor: {
                                left: .15,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .7,
                                height: .65
                            },
                            pinned: !1
                        }
                    },
                    [I.OverlayWidgets.LOBBY_VOICE]: {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: "REQUIRED",
                        defaultSettings: {
                            anchor: {
                                left: null,
                                top: .011,
                                bottom: null,
                                right: .011
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    }
                };

            function h(e, t) {
                let n = l[e];
                if (null == n) return !1;
                let u = i[n.layoutId];
                return null != u && t(n, u)
            }

            function L(e) {
                var t;
                return null === (t = f[e]) || void 0 === t ? void 0 : t.defaultSettings
            }
            class S extends a.default.PersistedStore {
                initialize(e) {
                    null != e && null != e.layouts && null != e.widgets ? (i = function(e) {
                        let t = {};
                        return o.forEach(e, (e, n) => {
                            t[n] = new A.default(e)
                        }), t
                    }(e.layouts), l = function(e) {
                        let t = {};
                        return o.forEach(e, (e, n) => {
                            t[n] = new c.default(e)
                        }), t
                    }(e.widgets)) : (i = {}, l = {});
                    let t = !1,
                        n = [];
                    o.forEach(f, (e, t) => {
                        "REQUIRED" === e.layoutPolicy && n.push(t)
                    }), o.forEach(i, (e, u) => {
                        let r = this.getWidgetsForLayout(u),
                            E = !1;
                        for (let e of n) {
                            let n = r.find(t => t.type === e);
                            if (null != n) continue;
                            E = t = !0;
                            let i = (0, d.v4)();
                            n = new c.default({
                                ...this.getWidgetDefaultSettings(e),
                                type: e,
                                id: i,
                                layoutId: u,
                                zIndex: r.length
                            }), r.push(n), l = {
                                ...l,
                                [i]: n
                            }
                        }
                        E && (e = e.set("widgets", r.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })), i = {
                            ...i,
                            [u]: e
                        })
                    }), o.forEach(l, (e, n) => {
                        let u = i[e.layoutId];
                        (null == u || 0 > u.widgets.indexOf(n)) && (l = {
                            ...l
                        }, delete l[n], t = !0)
                    }), t && (this.persist(), this.emitChange())
                }
                getState() {
                    return {
                        layouts: i,
                        widgets: l
                    }
                }
                getLayouts() {
                    return i
                }
                getLayout(e) {
                    return i[e]
                }
                getAllWidgets() {
                    return l
                }
                getWidget(e) {
                    return l[e]
                }
                getWidgetsForLayout(e) {
                    let t = this.getLayout(e);
                    return null == t ? [] : t.widgets.reduce((e, t) => {
                        let n = this.getWidget(t);
                        return null != n && e.push(n), e
                    }, [])
                }
                getWidgetConfig(e) {
                    return f[e]
                }
                getWidgetDefaultSettings(e) {
                    return L(e)
                }
                getWidgetType(e) {
                    let t = l[e];
                    return null != t ? t.type : ""
                }
                getRegisteredWidgets() {
                    return f
                }
                getDefaultLayout(e) {
                    let t = [];
                    return o.forEach(this.getRegisteredWidgets(), (n, i) => {
                        switch (n.layoutPolicy) {
                            case "REQUIRED":
                            case "OPTIONAL_DEFAULT":
                                t.push({
                                    ...n.defaultSettings,
                                    type: i,
                                    id: (0, d.v4)(),
                                    layoutId: e
                                })
                        }
                    }), t
                }
            }
            S.displayName = "LayoutStore", S.persistKey = "LayoutStore", S.migrations = [() => {
                let e = {
                        ..._.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: i,
                        v: l
                    } = e;
                if (5 === l && t) {
                    let e = [],
                        l = t.map(t => {
                            let l = null != n ? n[t] : null,
                                u = null != i ? i[t] : null,
                                r = {
                                    id: t,
                                    layoutId: T,
                                    type: t,
                                    anchor: l || {
                                        top: -1,
                                        left: -1,
                                        bottom: null,
                                        right: null
                                    },
                                    size: u || {
                                        width: -1,
                                        height: -1
                                    },
                                    pinned: !0,
                                    zIndex: 0
                                };
                            return e.push([r.id, r]), r.id
                        });
                    return {
                        layouts: [
                            [T, {
                                id: T,
                                widgets: l
                            }]
                        ],
                        widgets: e
                    }
                }
                return {
                    layouts: [],
                    widgets: []
                }
            }, e => {
                let {
                    layouts: t,
                    widgets: n
                } = e, i = new Set(Object.keys(I.OverlayWidgets)), l = Array.from(n).filter(e => {
                    let [t] = e;
                    return !i.has(t)
                }), u = Array.from(t).filter(e => {
                    let [t] = e;
                    return t !== T
                });
                return u.forEach(e => {
                    let [t, n] = e, i = null, u = null;
                    if (n.widgets.find(e => {
                            let n = l.find(n => {
                                let [i, l] = n;
                                return i === e && l.layoutId === t
                            });
                            return null != n && (null == u && n[1].type === I.OverlayWidgets.VOICE && (u = n[0]), null == i && n[1].type === I.OverlayWidgets.TEXT && (i = n[1].pinned), null != i && null != u || void 0)
                        }), i || null == u) return;
                    let r = (0, d.v4)();
                    n.widgets = [u, r], l.push([r, {
                        ...L(I.OverlayWidgets.GUILDS_TEXT),
                        type: I.OverlayWidgets.GUILDS_TEXT,
                        id: r,
                        layoutId: t,
                        zIndex: 2
                    }])
                }), {
                    widgets: l,
                    layouts: u
                }
            }, e => {
                let {
                    layouts: t,
                    widgets: n
                } = e, i = t.reduce((e, t) => {
                    let [n, i] = t;
                    return e[n] = i, e
                }, {}), l = n.reduce((e, t) => {
                    let [n, i] = t;
                    return e[n] = i, e
                }, {});
                return {
                    layouts: i,
                    widgets: l
                }
            }];
            var g = new S(s.default, {
                LAYOUT_CREATE: function(e) {
                    let {
                        layoutId: t,
                        widgets: n,
                        defaultResolution: u
                    } = e;
                    if (null != i[t]) return !1;
                    let r = [];
                    n.forEach((e, t) => {
                        let n = function(e) {
                                let t = i[T];
                                if (null != t)
                                    for (let n of t.widgets) {
                                        let t = l[n];
                                        if (null != t && t.type === e) return t
                                    }
                                return null
                            }(e.type),
                            E = {
                                ...e,
                                zIndex: t
                            };
                        "" === E.id && (E.id = (0, d.v4)()), null != n && (E.pinned = n.pinned, -1 !== n.anchor.left && (E.anchor = (0, O.getAnchorPercentageFromLayoutSize)(n.anchor, u)), -1 !== n.size.width && (E.size = (0, O.getSizePercentageFromSize)(n.size, u))), l = {
                            ...l,
                            [E.id]: new c.default(E)
                        }, r.push(E.id)
                    }), i = {
                        ...i,
                        [t]: new A.default({
                            id: t,
                            widgets: r
                        })
                    }
                },
                LAYOUT_SET_PINNED: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return h(t, (e, t) => {
                        (function(e) {
                            l = {
                                ...l,
                                [e.id]: e.set("pinned", !e.pinned)
                            }
                        })(e)
                    })
                },
                LAYOUT_UPDATE_WIDGET: function(e) {
                    let {
                        widgetId: t,
                        anchor: n,
                        size: i
                    } = e;
                    return h(t, (e, t) => (function(e, t, n) {
                        l = {
                            ...l,
                            [e.id]: e.merge({
                                anchor: t,
                                size: n
                            })
                        }
                    })(e, n, i))
                },
                LAYOUT_SET_TOP_WIDGET: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return h(t, (e, t) => (function(e, t) {
                        let n = function(e) {
                            let t = [];
                            return e.widgets.forEach(e => {
                                let n = l[e];
                                null != n && t.push(n)
                            }), t
                        }(e);
                        n.sort((e, t) => e.zIndex - t.zIndex);
                        let i = n.findIndex(e => e.id === t);
                        if (i === n.length - 1) return !1;
                        n.push(n.splice(i, 1)[0]);
                        for (let e = 0; e < n.length; e++) {
                            let t = n[e];
                            (function(e, t) {
                                l = {
                                    ...l,
                                    [e.id]: e.set("zIndex", t)
                                }
                            })(t, e)
                        }
                        return !0
                    })(t, e.id))
                },
                LAYOUT_DELETE_WIDGET: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    l = {
                        ...l
                    }, delete l[t], o.forEach(i, (e, n) => {
                        if (n === T) return;
                        let l = e.widgets.indexOf(t);
                        if (l >= 0) {
                            let t = [...e.widgets];
                            t.splice(l, 1), i = {
                                ...i,
                                [n]: e.set("widgets", t)
                            }
                        }
                    })
                },
                LAYOUT_DELETE_ALL_WIDGETS: function(e) {
                    let {
                        layoutId: t
                    } = e, n = i[t];
                    if (null == n) return !1;
                    n.widgets.forEach(e => {
                        l = {
                            ...l
                        }, delete l[e]
                    }), i = {
                        ...i,
                        [n.id]: n.set("widgets", [])
                    }
                },
                LAYOUT_CREATE_WIDGETS: function(e) {
                    let {
                        widgetConfigs: t
                    } = e;
                    t.forEach(e => {
                        let t = new c.default(e),
                            n = i[t.layoutId];
                        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                        t = t.set("zIndex", n.widgets.length), l = {
                            ...l,
                            [t.id]: t
                        };
                        let u = [...n.widgets, t.id];
                        i = {
                            ...i,
                            [n.id]: n.set("widgets", u)
                        }
                    })
                }
            })