            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("70102");
            var o = n("37983"),
                r = n("884691"),
                a = n("979897"),
                i = n("446674"),
                u = n("77078"),
                s = n("404118"),
                d = n("272030"),
                l = n("838446"),
                c = n("158534"),
                f = n("812204"),
                p = n("957255"),
                O = n("773336"),
                h = n("50885"),
                D = n("520497"),
                S = n("112646"),
                v = n("846325"),
                _ = n("49111"),
                g = n("782340"),
                y = (0, c.default)((0, l.default)(function(e) {
                    let {
                        soundGuild: t,
                        sound: l,
                        activeCallGuildId: c,
                        onSelect: f
                    } = e, _ = function(e, t) {
                        let {
                            canManageGuildExpressions: a
                        } = (0, i.useStateFromStoresObject)([p.default], () => null == t ? {
                            canManageGuildExpressions: !1
                        } : p.default.getGuildPermissionProps(t), [t]), s = r.useCallback(() => {
                            if ((null == t ? void 0 : t.id) == null) return null;
                            (0, u.openModalLazy)(async () => {
                                let {
                                    default: r
                                } = await n.el("823749").then(n.bind(n, "823749"));
                                return n => (0, o.jsx)(r, {
                                    ...n,
                                    existingSound: e,
                                    guildId: t.id
                                })
                            })
                        }, [t, e]);
                        return a ? (0, o.jsx)(u.MenuItem, {
                            id: "edit-soundboard-sound",
                            label: g.default.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                            action: s
                        }, "edit-soundboard-sound") : null
                    }(l, t), y = function(e) {
                        let {
                            soundId: t
                        } = e, n = r.useCallback(async () => {
                            try {
                                let e = (0, D.default)(t),
                                    n = await fetch(e),
                                    o = await n.blob(),
                                    r = function(e) {
                                        switch (e.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw Error("unable to determine file type")
                                        }
                                    }(o),
                                    i = "".concat(t, ".").concat(r);
                                O.isPlatformEmbedded ? await h.default.saveFile(e, i) : (0, a.saveAs)(o, i)
                            } catch (e) {
                                s.default.show({
                                    title: g.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
                                    body: g.default.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
                                    confirmText: g.default.Messages.OKAY
                                })
                            }
                        }, [t]);
                        return e.guildId === v.DEFAULT_SOUND_GUILD_ID ? null : (0, o.jsx)(u.MenuItem, {
                            id: "download-soundboard-sound",
                            label: g.default.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
                            action: n
                        }, "download-soundboard-sound")
                    }(l), b = (0, S.default)(l, c);
                    return (0, o.jsx)(u.Menu, {
                        navId: "sound-button-context",
                        onClose: d.closeContextMenu,
                        "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: f,
                        children: (0, o.jsxs)(u.MenuGroup, {
                            children: [_, b, y]
                        })
                    })
                }, {
                    object: _.AnalyticsObjects.CONTEXT_MENU
                }), [f.default.CONTEXT_MENU, f.default.SOUNDBOARD_BUTTON])