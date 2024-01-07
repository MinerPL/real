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