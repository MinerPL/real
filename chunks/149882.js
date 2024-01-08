            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("151426"),
                i = n("272030"),
                r = n("235145"),
                u = n("78581"),
                o = n("429829"),
                d = n("191191"),
                c = n("244390"),
                f = n("124824"),
                h = n("981913"),
                p = n("42887"),
                m = n("754576"),
                E = n("814711"),
                C = n("782340");

            function S(e) {
                let {
                    channel: t,
                    themeable: S
                } = e, g = t.getGuildId(), {
                    mute: _,
                    suppress: I
                } = (0, c.default)(t), T = (0, l.default)([p.default], () => p.default.isDeaf()), v = _ || I || T, x = (0, u.useSoundBoardDismissContentTypes)({
                    isSoundboardButtonDisabled: v
                }), [N, A] = (0, r.useGetDismissibleContent)(x);

                function M(e) {
                    null != g && (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("136137").then(n.bind(n, "136137"));
                        return t => (0, a.jsx)(e, {
                            guildId: g,
                            ...t
                        })
                    })
                }
                return (0, a.jsx)(E.default, {
                    renderPopout: e => {
                        let {
                            closePopout: n
                        } = e;
                        return (0, a.jsx)(f.default, {
                            children: (0, a.jsx)(d.default, {
                                guildId: g,
                                channel: t,
                                onClose: n,
                                gridNotice: N === s.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(o.CustomCallSoundUpsell, {
                                    onClose: n,
                                    markAsDismissed: A
                                }),
                                analyticsSource: "action bar button"
                            })
                        })
                    },
                    children: e => (0, a.jsx)(h.default, {
                        themeable: S,
                        label: function() {
                            if (_) return C.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
                            if (I) return C.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
                            if (T) return C.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED
                        }(),
                        iconComponent: m.default,
                        disabled: v,
                        onContextMenu: M,
                        ...e
                    })
                })
            }