(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40747"], {
        979897: function(e, t, n) {
            e = n.nmd(e), n("854508");
            var r = r || function(e) {
                "use strict";
                if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                    var t = e.document,
                        n = function() {
                            return e.URL || e.webkitURL || e
                        },
                        r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        o = "download" in r,
                        u = function(e) {
                            var t = new MouseEvent("click");
                            e.dispatchEvent(t)
                        },
                        a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                        i = e.webkitRequestFileSystem,
                        s = e.requestFileSystem || i || e.mozRequestFileSystem,
                        c = function(t) {
                            (e.setImmediate || e.setTimeout)(function() {
                                throw t
                            }, 0)
                        },
                        l = "application/octet-stream",
                        d = 0,
                        f = function(e) {
                            setTimeout(function() {
                                "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                            }, 4e4)
                        },
                        p = function(e, t, n) {
                            for (var r = (t = [].concat(t)).length; r--;) {
                                var o = e["on" + t[r]];
                                if ("function" == typeof o) try {
                                    o.call(e, n || e)
                                } catch (e) {
                                    c(e)
                                }
                            }
                        },
                        h = function(e) {
                            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
                                type: e.type
                            }) : e
                        },
                        O = function(t, c, O) {
                            !O && (t = h(t));
                            var v, g, S = this,
                                D = t.type,
                                b = !1,
                                y = function() {
                                    p(S, "writestart progress write writeend".split(" "))
                                },
                                _ = function() {
                                    if (g && a && "undefined" != typeof FileReader) {
                                        var r = new FileReader;
                                        r.onloadend = function() {
                                            var e = r.result;
                                            g.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), S.readyState = S.DONE, y()
                                        }, r.readAsDataURL(t), S.readyState = S.INIT;
                                        return
                                    }(b || !v) && (v = n().createObjectURL(t)), g ? g.location.href = v : void 0 === e.open(v, "_blank") && a && (e.location.href = v), S.readyState = S.DONE, y(), f(v)
                                },
                                N = function(e) {
                                    return function() {
                                        if (S.readyState !== S.DONE) return e.apply(this, arguments)
                                    }
                                },
                                m = {
                                    create: !0,
                                    exclusive: !1
                                };
                            if (S.readyState = S.INIT, !c && (c = "download"), o) {
                                v = n().createObjectURL(t), setTimeout(function() {
                                    r.href = v, r.download = c, u(r), y(), f(v), S.readyState = S.DONE
                                });
                                return
                            }
                            if (e.chrome && D && D !== l && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, l), b = !0), i && "download" !== c && (c += ".download"), (D === l || i) && (g = e), !s) {
                                _();
                                return
                            }
                            d += t.size, s(e.TEMPORARY, d, N(function(e) {
                                e.root.getDirectory("saved", m, N(function(e) {
                                    var n = function() {
                                        e.getFile(c, m, N(function(e) {
                                            e.createWriter(N(function(n) {
                                                n.onwriteend = function(t) {
                                                    g.location.href = e.toURL(), S.readyState = S.DONE, p(S, "writeend", t), f(e)
                                                }, n.onerror = function() {
                                                    var e = n.error;
                                                    e.code !== e.ABORT_ERR && _()
                                                }, "writestart progress write abort".split(" ").forEach(function(e) {
                                                    n["on" + e] = S["on" + e]
                                                }), n.write(t), S.abort = function() {
                                                    n.abort(), S.readyState = S.DONE
                                                }, S.readyState = S.WRITING
                                            }), _)
                                        }), _)
                                    };
                                    e.getFile(c, {
                                        create: !1
                                    }, N(function(e) {
                                        e.remove(), n()
                                    }), N(function(e) {
                                        e.code === e.NOT_FOUND_ERR ? n() : _()
                                    }))
                                }), _)
                            }), _)
                        },
                        v = O.prototype;
                    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
                        return !n && (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download")
                    } : (v.abort = function() {
                        this.readyState = this.DONE, p(this, "abort")
                    }, v.readyState = v.INIT = 0, v.WRITING = 1, v.DONE = 2, v.error = v.onwritestart = v.onprogress = v.onwrite = v.onabort = v.onerror = v.onwriteend = null, function(e, t, n) {
                        return new O(e, t, n)
                    })
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            void 0 !== e && e.exports ? e.exports.saveAs = r : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
                return r
            })
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var r = n("14716"),
                o = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var r = n("884691");

            function o() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let o = {};

            function u(e) {
                let t = (0, r.useRef)(o);
                return t.current === o && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                o = n("48174");
            let u = [];

            function a(e, t) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(u);
                return a.current === u ? (n.current = e(), a.current = t) : !(0, o.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        901582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r, o, u = n("37983"),
                a = n("884691"),
                i = n("748820"),
                s = n("599110"),
                c = n("117362"),
                l = n("49111");
            (r = class extends a.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: r,
                        page: o,
                        object: a,
                        objectType: i,
                        children: c
                    } = this.props, l = this.mergeLocation(e.location, this.getLocation(o, r, a, i)), d = this.getContext(l, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, u.jsx)(s.AnalyticsContext.Provider, {
                        value: d,
                        children: c
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, u.jsx)(s.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, c.cachedFunction)((e, t, n, r) => {
                        let o = {};
                        return null != e && (o.page = e), null != t && (o.section = t), null != n && (o.object = n), null != r && (o.objectType = r), o
                    }), this.mergeLocation = (0, c.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, c.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, i.v4)())
                }
            }).Pages = l.AnalyticsPages, r.Sections = l.AnalyticsSections, r.Objects = l.AnalyticsObjects, r.ObjectTypes = l.AnalyticsObjectTypes, r.defaultProps = {
                root: !1
            }, o = r
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("901582");

            function u(e, t) {
                return function(n) {
                    return (0, r.jsx)(o.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, r.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("685665");

            function u(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: u
                    } = (0, o.default)(t);
                    return (0, r.jsx)(u, {
                        children: (0, r.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        632507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("70102");
            var r = n("37983"),
                o = n("884691"),
                u = n("979897"),
                a = n("446674"),
                i = n("77078"),
                s = n("404118"),
                c = n("272030"),
                l = n("838446"),
                d = n("158534"),
                f = n("812204"),
                p = n("957255"),
                h = n("773336"),
                O = n("50885"),
                v = n("520497"),
                g = n("112646"),
                S = n("846325"),
                D = n("49111"),
                b = n("782340"),
                y = (0, d.default)((0, l.default)(function(e) {
                    let {
                        soundGuild: t,
                        sound: l,
                        activeCallGuildId: d,
                        onSelect: f
                    } = e, D = function(e, t) {
                        let {
                            canManageGuildExpressions: u
                        } = (0, a.useStateFromStoresObject)([p.default], () => null == t ? {
                            canManageGuildExpressions: !1
                        } : p.default.getGuildPermissionProps(t), [t]), s = o.useCallback(() => {
                            if ((null == t ? void 0 : t.id) == null) return null;
                            (0, i.openModalLazy)(async () => {
                                let {
                                    default: o
                                } = await n.el("823749").then(n.bind(n, "823749"));
                                return n => (0, r.jsx)(o, {
                                    ...n,
                                    existingSound: e,
                                    guildId: t.id
                                })
                            })
                        }, [t, e]);
                        return u ? (0, r.jsx)(i.MenuItem, {
                            id: "edit-soundboard-sound",
                            label: b.default.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                            action: s
                        }, "edit-soundboard-sound") : null
                    }(l, t), y = function(e) {
                        let {
                            soundId: t
                        } = e, n = o.useCallback(async () => {
                            try {
                                let e = (0, v.default)(t),
                                    n = await fetch(e),
                                    r = await n.blob(),
                                    o = function(e) {
                                        switch (e.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw Error("unable to determine file type")
                                        }
                                    }(r),
                                    a = "".concat(t, ".").concat(o);
                                h.isPlatformEmbedded ? await O.default.saveFile(e, a) : (0, u.saveAs)(r, a)
                            } catch (e) {
                                s.default.show({
                                    title: b.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
                                    body: b.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
                                    confirmText: b.default.Messages.OKAY
                                })
                            }
                        }, [t]);
                        return e.guildId === S.DEFAULT_SOUND_GUILD_ID ? null : (0, r.jsx)(i.MenuItem, {
                            id: "download-soundboard-sound",
                            label: b.default.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
                            action: n
                        }, "download-soundboard-sound")
                    }(l), _ = (0, g.default)(l, d);
                    return (0, r.jsx)(i.Menu, {
                        navId: "sound-button-context",
                        onClose: c.closeContextMenu,
                        "aria-label": b.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: f,
                        children: (0, r.jsxs)(i.MenuGroup, {
                            children: [D, _, y]
                        })
                    })
                }, {
                    object: D.AnalyticsObjects.CONTEXT_MENU
                }), [f.default.CONTEXT_MENU, f.default.SOUNDBOARD_BUTTON])
        },
        112646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("446674"),
                u = n("77078"),
                a = n("685665"),
                i = n("697218"),
                s = n("476765"),
                c = n("78581"),
                l = n("846325"),
                d = n("782340");

            function f(e, t) {
                let {
                    analyticsLocations: n
                } = (0, a.default)(), f = (0, o.useStateFromStores)([i.default], () => i.default.getCurrentUser()), p = (0, s.useUID)(), h = (0, s.useUID)();
                return null != t && (0, c.canUseCustomCallSounds)(f, !1) ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.MenuItem, {
                        id: p,
                        label: d.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                        action: () => (0, c.updateCustomJoinSound)(t, e, n)
                    }), (0, r.jsx)(u.MenuItem, {
                        id: h,
                        label: d.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                        action: () => (0, c.updateCustomJoinSound)(l.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID, e, n)
                    })]
                }) : null
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return i
                },
                UID: function() {
                    return s
                }
            });
            var r = n("995008"),
                o = n.n(r),
                u = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o(e)
                },
                i = () => (0, u.useLazyValue)(() => a()),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return t(i())
                }
        }
    }
]);