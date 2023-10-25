(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40747"], {
        962429: function(t, e, n) {
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
        365444: function(t, e, n) {
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
            var u = n("732427"),
                r = n("866490"),
                o = n("246105")
        },
        732427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var u = n("773670");

            function r() {
                let [, t] = (0, u.useState)({});
                return (0, u.useCallback)(() => t({}), [])
            }
        },
        246105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("773670");
            let r = {};

            function o(t) {
                let e = (0, u.useRef)(r);
                return e.current === r && (e.current = t()), e.current
            }
        },
        866490: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var u = n("773670"),
                r = n("962429");
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
            var u = n("920040"),
                r = n("773670"),
                o = n("462567"),
                a = n("599110"),
                l = n("117362"),
                s = n("49111");
            class i extends r.Component {
                renderProvider(t) {
                    var e, n;
                    let {
                        section: r,
                        page: o,
                        object: l,
                        objectType: s,
                        children: i
                    } = this.props, c = this.mergeLocation(t.location, this.getLocation(o, r, l, s)), d = this.getContext(c, null !== (e = this._loadDate) && void 0 !== e ? e : t.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : t.loadId);
                    return (0, u.jsx)(a.AnalyticsContext.Provider, {
                        value: d,
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
                    super(t), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, l.cachedFunction)((t, e, n, u) => {
                        let r = {};
                        return null != t && (r.page = t), null != e && (r.section = e), null != n && (r.object = n), null != u && (r.objectType = u), r
                    }), this.mergeLocation = (0, l.cachedFunction)((t, e) => ({
                        ...t,
                        ...e
                    })), this.getContext = (0, l.cachedFunction)((t, e, n) => ({
                        location: t,
                        loadDate: e,
                        loadId: n
                    })), null != t.loadId ? this._loadId = t.loadId : t.root && (this._loadId = (0, o.v4)())
                }
            }
            i.Pages = s.AnalyticsPages, i.Sections = s.AnalyticsSections, i.Objects = s.AnalyticsObjects, i.ObjectTypes = s.AnalyticsObjectTypes, i.defaultProps = {
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
            var u = n("920040");
            n("773670");
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
            var u = n("920040");
            n("773670");
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
            var u = n("920040"),
                r = n("773670"),
                o = n("498225"),
                a = n("77078"),
                l = n("404118"),
                s = n("272030"),
                i = n("838446"),
                c = n("158534"),
                d = n("812204"),
                f = n("957255"),
                _ = n("50885"),
                O = n("520497"),
                h = n("112646"),
                D = n("846325"),
                g = n("49111"),
                p = n("782340"),
                b = (0, c.default)((0, i.default)(function(t) {
                    let {
                        soundGuild: e,
                        sound: i,
                        activeCallGuildId: c,
                        onSelect: d
                    } = t, g = function(t, e) {
                        let {
                            canManageGuildExpressions: l
                        } = (0, o.useStateFromStoresObject)([f.default], () => null == e ? {
                            canManageGuildExpressions: !1
                        } : f.default.getGuildPermissionProps(e), [e]), s = r.useCallback(() => {
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
                        return l ? (0, u.jsx)(a.MenuItem, {
                            id: "edit-soundboard-sound",
                            label: p.default.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                            action: s
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
                                l.default.show({
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
                    }(i), U = (0, h.default)(i, c);
                    return (0, u.jsx)(a.Menu, {
                        navId: "sound-button-context",
                        onClose: s.closeContextMenu,
                        "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: d,
                        children: (0, u.jsxs)(a.MenuGroup, {
                            children: [g, U, b]
                        })
                    })
                }, {
                    object: g.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.SOUNDBOARD_BUTTON])
        },
        112646: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var u = n("920040");
            n("773670");
            var r = n("498225"),
                o = n("77078"),
                a = n("685665"),
                l = n("697218"),
                s = n("476765"),
                i = n("78581"),
                c = n("846325"),
                d = n("782340");

            function f(t, e) {
                let {
                    analyticsLocations: n
                } = (0, a.default)(), f = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser()), _ = (0, s.useUID)(), O = (0, s.useUID)();
                return null != e && (0, i.canUseCustomCallSounds)(f, !1) ? (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(o.MenuItem, {
                        id: _,
                        label: d.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                        action: () => (0, i.updateCustomJoinSound)(e, t, n)
                    }), (0, u.jsx)(o.MenuItem, {
                        id: O,
                        label: d.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                        action: () => (0, i.updateCustomJoinSound)(c.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID, t, n)
                    })]
                }) : null
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return l
                },
                UID: function() {
                    return s
                }
            });
            var u = n("552473"),
                r = n.n(u),
                o = n("365444");
            let a = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(t)
                },
                l = () => (0, o.useLazyValue)(() => a()),
                s = t => {
                    let {
                        children: e
                    } = t;
                    return e(l())
                }
        }
    }
]);