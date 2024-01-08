            "use strict";
            let E, i;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("424973"), n("222007"), n("70102"), n("808653");
            var l, _, u = n("917351"),
                r = n.n(u),
                A = n("748820"),
                o = n("446674"),
                I = n("95410"),
                d = n("913144"),
                a = n("684849"),
                T = n("611310"),
                O = n("80687"),
                L = n("49111");
            (_ = l || (l = {})).REQUIRED = "REQUIRED", _.OPTIONAL = "OPTIONAL", _.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
            let s = "migrated",
                S = {
                    [L.OverlayWidgets.GUILDS]: {
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
                    [L.OverlayWidgets.TEXT]: {
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
                    [L.OverlayWidgets.VOICE]: {
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
                    [L.OverlayWidgets.GUILDS_TEXT]: {
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
                    [L.OverlayWidgets.LOBBY_VOICE]: {
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

            function N(e, t) {
                let n = i[e];
                if (null == n) return !1;
                let l = E[n.layoutId];
                return null != l && t(n, l)
            }

            function c(e) {
                var t;
                return null === (t = S[e]) || void 0 === t ? void 0 : t.defaultSettings
            }
            class D extends o.default.PersistedStore {
                initialize(e) {
                    null != e && null != e.layouts && null != e.widgets ? (E = function(e) {
                        let t = {};
                        return r.forEach(e, (e, n) => {
                            t[n] = new a.default(e)
                        }), t
                    }(e.layouts), i = function(e) {
                        let t = {};
                        return r.forEach(e, (e, n) => {
                            t[n] = new T.default(e)
                        }), t
                    }(e.widgets)) : (E = {}, i = {});
                    let t = !1,
                        n = [];
                    r.forEach(S, (e, t) => {
                        "REQUIRED" === e.layoutPolicy && n.push(t)
                    }), r.forEach(E, (e, l) => {
                        let _ = this.getWidgetsForLayout(l),
                            u = !1;
                        for (let e of n) {
                            let n = _.find(t => t.type === e);
                            if (null != n) continue;
                            u = t = !0;
                            let E = (0, A.v4)();
                            n = new T.default({
                                ...this.getWidgetDefaultSettings(e),
                                type: e,
                                id: E,
                                layoutId: l,
                                zIndex: _.length
                            }), _.push(n), i = {
                                ...i,
                                [E]: n
                            }
                        }
                        u && (e = e.set("widgets", _.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })), E = {
                            ...E,
                            [l]: e
                        })
                    }), r.forEach(i, (e, n) => {
                        let l = E[e.layoutId];
                        (null == l || 0 > l.widgets.indexOf(n)) && (i = {
                            ...i
                        }, delete i[n], t = !0)
                    }), t && (this.persist(), this.emitChange())
                }
                getState() {
                    return {
                        layouts: E,
                        widgets: i
                    }
                }
                getLayouts() {
                    return E
                }
                getLayout(e) {
                    return E[e]
                }
                getAllWidgets() {
                    return i
                }
                getWidget(e) {
                    return i[e]
                }
                getWidgetsForLayout(e) {
                    let t = this.getLayout(e);
                    return null == t ? [] : t.widgets.reduce((e, t) => {
                        let n = this.getWidget(t);
                        return null != n && e.push(n), e
                    }, [])
                }
                getWidgetConfig(e) {
                    return S[e]
                }
                getWidgetDefaultSettings(e) {
                    return c(e)
                }
                getWidgetType(e) {
                    let t = i[e];
                    return null != t ? t.type : ""
                }
                getRegisteredWidgets() {
                    return S
                }
                getDefaultLayout(e) {
                    let t = [];
                    return r.forEach(this.getRegisteredWidgets(), (n, E) => {
                        switch (n.layoutPolicy) {
                            case "REQUIRED":
                            case "OPTIONAL_DEFAULT":
                                t.push({
                                    ...n.defaultSettings,
                                    type: E,
                                    id: (0, A.v4)(),
                                    layoutId: e
                                })
                        }
                    }), t
                }
            }
            D.displayName = "LayoutStore", D.persistKey = "LayoutStore", D.migrations = [() => {
                let e = {
                        ...I.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: E,
                        v: i
                    } = e;
                if (5 === i && t) {
                    let e = [],
                        i = t.map(t => {
                            let i = null != n ? n[t] : null,
                                l = null != E ? E[t] : null,
                                _ = {
                                    id: t,
                                    layoutId: s,
                                    type: t,
                                    anchor: i || {
                                        top: -1,
                                        left: -1,
                                        bottom: null,
                                        right: null
                                    },
                                    size: l || {
                                        width: -1,
                                        height: -1
                                    },
                                    pinned: !0,
                                    zIndex: 0
                                };
                            return e.push([_.id, _]), _.id
                        });
                    return {
                        layouts: [
                            [s, {
                                id: s,
                                widgets: i
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
                } = e, E = new Set(Object.keys(L.OverlayWidgets)), i = Array.from(n).filter(e => {
                    let [t] = e;
                    return !E.has(t)
                }), l = Array.from(t).filter(e => {
                    let [t] = e;
                    return t !== s
                });
                return l.forEach(e => {
                    let [t, n] = e, E = null, l = null;
                    if (n.widgets.find(e => {
                            let n = i.find(n => {
                                let [E, i] = n;
                                return E === e && i.layoutId === t
                            });
                            return null != n && (null == l && n[1].type === L.OverlayWidgets.VOICE && (l = n[0]), null == E && n[1].type === L.OverlayWidgets.TEXT && (E = n[1].pinned), null != E && null != l || void 0)
                        }), E || null == l) return;
                    let _ = (0, A.v4)();
                    n.widgets = [l, _], i.push([_, {
                        ...c(L.OverlayWidgets.GUILDS_TEXT),
                        type: L.OverlayWidgets.GUILDS_TEXT,
                        id: _,
                        layoutId: t,
                        zIndex: 2
                    }])
                }), {
                    widgets: i,
                    layouts: l
                }
            }, e => {
                let {
                    layouts: t,
                    widgets: n
                } = e, E = t.reduce((e, t) => {
                    let [n, E] = t;
                    return e[n] = E, e
                }, {}), i = n.reduce((e, t) => {
                    let [n, E] = t;
                    return e[n] = E, e
                }, {});
                return {
                    layouts: E,
                    widgets: i
                }
            }];
            var C = new D(d.default, {
                LAYOUT_CREATE: function(e) {
                    let {
                        layoutId: t,
                        widgets: n,
                        defaultResolution: l
                    } = e;
                    if (null != E[t]) return !1;
                    let _ = [];
                    n.forEach((e, t) => {
                        let n = function(e) {
                                let t = E[s];
                                if (null != t)
                                    for (let n of t.widgets) {
                                        let t = i[n];
                                        if (null != t && t.type === e) return t
                                    }
                                return null
                            }(e.type),
                            u = {
                                ...e,
                                zIndex: t
                            };
                        "" === u.id && (u.id = (0, A.v4)()), null != n && (u.pinned = n.pinned, -1 !== n.anchor.left && (u.anchor = (0, O.getAnchorPercentageFromLayoutSize)(n.anchor, l)), -1 !== n.size.width && (u.size = (0, O.getSizePercentageFromSize)(n.size, l))), i = {
                            ...i,
                            [u.id]: new T.default(u)
                        }, _.push(u.id)
                    }), E = {
                        ...E,
                        [t]: new a.default({
                            id: t,
                            widgets: _
                        })
                    }
                },
                LAYOUT_SET_PINNED: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return N(t, (e, t) => {
                        (function(e) {
                            i = {
                                ...i,
                                [e.id]: e.set("pinned", !e.pinned)
                            }
                        })(e)
                    })
                },
                LAYOUT_UPDATE_WIDGET: function(e) {
                    let {
                        widgetId: t,
                        anchor: n,
                        size: E
                    } = e;
                    return N(t, (e, t) => (function(e, t, n) {
                        i = {
                            ...i,
                            [e.id]: e.merge({
                                anchor: t,
                                size: n
                            })
                        }
                    })(e, n, E))
                },
                LAYOUT_SET_TOP_WIDGET: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return N(t, (e, t) => (function(e, t) {
                        let n = function(e) {
                            let t = [];
                            return e.widgets.forEach(e => {
                                let n = i[e];
                                null != n && t.push(n)
                            }), t
                        }(e);
                        n.sort((e, t) => e.zIndex - t.zIndex);
                        let E = n.findIndex(e => e.id === t);
                        if (E === n.length - 1) return !1;
                        n.push(n.splice(E, 1)[0]);
                        for (let e = 0; e < n.length; e++) {
                            let t = n[e];
                            (function(e, t) {
                                i = {
                                    ...i,
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
                    i = {
                        ...i
                    }, delete i[t], r.forEach(E, (e, n) => {
                        if (n === s) return;
                        let i = e.widgets.indexOf(t);
                        if (i >= 0) {
                            let t = [...e.widgets];
                            t.splice(i, 1), E = {
                                ...E,
                                [n]: e.set("widgets", t)
                            }
                        }
                    })
                },
                LAYOUT_DELETE_ALL_WIDGETS: function(e) {
                    let {
                        layoutId: t
                    } = e, n = E[t];
                    if (null == n) return !1;
                    n.widgets.forEach(e => {
                        i = {
                            ...i
                        }, delete i[e]
                    }), E = {
                        ...E,
                        [n.id]: n.set("widgets", [])
                    }
                },
                LAYOUT_CREATE_WIDGETS: function(e) {
                    let {
                        widgetConfigs: t
                    } = e;
                    t.forEach(e => {
                        let t = new T.default(e),
                            n = E[t.layoutId];
                        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                        t = t.set("zIndex", n.widgets.length), i = {
                            ...i,
                            [t.id]: t
                        };
                        let l = [...n.widgets, t.id];
                        E = {
                            ...E,
                            [n.id]: n.set("widgets", l)
                        }
                    })
                }
            })