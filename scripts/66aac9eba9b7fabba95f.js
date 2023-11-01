(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32122"], {
        48174: function(t, e, n) {
            "use strict";

            function u(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return u.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var u = n("14716"),
                r = n("745510"),
                o = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var u = n("884691");

            function r() {
                let [, t] = (0, u.useState)({});
                return (0, u.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("884691");
            let r = {};

            function o(t) {
                let e = (0, u.useRef)(r);
                return e.current === r && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var u = n("884691"),
                r = n("48174");
            let o = [];

            function a(t, e) {
                let n = (0, u.useRef)(),
                    a = (0, u.useRef)(o);
                return a.current === o ? (n.current = t(), a.current = e) : !(0, r.default)(e, a.current) && (n.current = t(), a.current = e), n.current
            }
        },
        901582: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var u = n("37983"),
                r = n("884691"),
                o = n("748820"),
                a = n("599110"),
                s = n("117362"),
                l = n("49111");
            class i extends r.Component {
                renderProvider(t) {
                    var e, n;
                    let {
                        section: r,
                        page: o,
                        object: s,
                        objectType: l,
                        children: i
                    } = this.props, d = this.mergeLocation(t.location, this.getLocation(o, r, s, l)), c = this.getContext(d, null !== (e = this._loadDate) && void 0 !== e ? e : t.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : t.loadId);
                    return (0, u.jsx)(a.AnalyticsContext.Provider, {
                        value: c,
                        children: i
                    })
                }
                render() {
                    let {
                        context: t
                    } = this.props;
                    return null != t ? this.renderProvider(t) : (0, u.jsx)(a.AnalyticsContext.Consumer, {
                        children: t => this.renderProvider(t)
                    })
                }
                constructor(t) {
                    super(t), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, s.cachedFunction)((t, e, n, u) => {
                        let r = {};
                        return null != t && (r.page = t), null != e && (r.section = e), null != n && (r.object = n), null != u && (r.objectType = u), r
                    }), this.mergeLocation = (0, s.cachedFunction)((t, e) => ({
                        ...t,
                        ...e
                    })), this.getContext = (0, s.cachedFunction)((t, e, n) => ({
                        location: t,
                        loadDate: e,
                        loadId: n
                    })), null != t.loadId ? this._loadId = t.loadId : t.root && (this._loadId = (0, o.v4)())
                }
            }
            i.Pages = l.AnalyticsPages, i.Sections = l.AnalyticsSections, i.Objects = l.AnalyticsObjects, i.ObjectTypes = l.AnalyticsObjectTypes, i.defaultProps = {
                root: !1
            }
        },
        838446: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("901582");

            function o(t, e) {
                return function(n) {
                    return (0, u.jsx)(r.default, {
                        page: e.page,
                        section: e.section,
                        object: e.object,
                        objectType: e.objectType,
                        children: (0, u.jsx)(t, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("685665");

            function o(t, e) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: o
                    } = (0, r.default)(e);
                    return (0, u.jsx)(o, {
                        children: (0, u.jsx)(t, {
                            ...n
                        })
                    })
                }
            }
        },
        632507: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return b
                }
            });
            var u = n("37983"),
                r = n("884691"),
                o = n("446674"),
                a = n("77078"),
                s = n("404118"),
                l = n("272030"),
                i = n("838446"),
                d = n("158534"),
                c = n("812204"),
                f = n("957255"),
                _ = n("50885"),
                O = n("520497"),
                h = n("112646"),
                D = n("846325"),
                g = n("49111"),
                p = n("782340"),
                b = (0, d.default)((0, i.default)(function(t) {
                    let {
                        soundGuild: e,
                        sound: i,
                        activeCallGuildId: d,
                        onSelect: c
                    } = t, g = function(t, e) {
                        let {
                            canManageGuildExpressions: s
                        } = (0, o.useStateFromStoresObject)([f.default], () => null == e ? {
                            canManageGuildExpressions: !1
                        } : f.default.getGuildPermissionProps(e), [e]), l = r.useCallback(() => {
                            if ((null == e ? void 0 : e.id) == null) return null;
                            (0, a.openModalLazy)(async () => {
                                let {
                                    default: r
                                } = await n.el("823749").then(n.bind(n, "823749"));
                                return n => (0, u.jsx)(r, {
                                    ...n,
                                    existingSound: t,
                                    guildId: e.id
                                })
                            })
                        }, [e, t]);
                        return s ? (0, u.jsx)(a.MenuItem, {
                            id: "edit-soundboard-sound",
                            label: p.default.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                            action: l
                        }, "edit-soundboard-sound") : null
                    }(i, e), b = function(t) {
                        let {
                            soundId: e
                        } = t, n = r.useCallback(async () => {
                            try {
                                let t = await fetch((0, O.default)(e)),
                                    n = await t.blob(),
                                    u = function(t) {
                                        switch (t.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw Error("unable to determine file type")
                                        }
                                    }(n);
                                await _.default.saveFile((0, O.default)(e), "".concat(e, ".").concat(u))
                            } catch (t) {
                                s.default.show({
                                    title: p.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
                                    body: p.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
                                    confirmText: p.default.Messages.OKAY
                                })
                            }
                        }, [e]);
                        return t.guildId === D.DEFAULT_SOUND_GUILD_ID ? null : (0, u.jsx)(a.MenuItem, {
                            id: "download-soundboard-sound",
                            label: p.default.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
                            action: n
                        }, "download-soundboard-sound")
                    }(i), U = (0, h.default)(i, d);
                    return (0, u.jsx)(a.Menu, {
                        navId: "sound-button-context",
                        onClose: l.closeContextMenu,
                        "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: c,
                        children: (0, u.jsxs)(a.MenuGroup, {
                            children: [g, U, b]
                        })
                    })
                }, {
                    object: g.AnalyticsObjects.CONTEXT_MENU
                }), [c.default.CONTEXT_MENU, c.default.SOUNDBOARD_BUTTON])
        },
        112646: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("446674"),
                o = n("77078"),
                a = n("685665"),
                s = n("697218"),
                l = n("476765"),
                i = n("78581"),
                d = n("846325"),
                c = n("782340");

            function f(t, e) {
                let {
                    analyticsLocations: n
                } = (0, a.default)(), f = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()), _ = (0, l.useUID)(), O = (0, l.useUID)();
                return null != e && (0, i.canUseCustomCallSounds)(f, !1) ? (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(o.MenuItem, {
                        id: _,
                        label: c.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                        action: () => (0, i.updateCustomJoinSound)(e, t, n)
                    }), (0, u.jsx)(o.MenuItem, {
                        id: O,
                        label: c.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                        action: () => (0, i.updateCustomJoinSound)(d.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID, t, n)
                    })]
                }) : null
            }
        }
    }
]);