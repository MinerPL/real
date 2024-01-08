            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("65597"),
                l = n("151426"),
                r = n("77078"),
                o = n("272030"),
                u = n("812204"),
                d = n("685665"),
                c = n("235145"),
                E = n("244390"),
                f = n("42887"),
                _ = n("754576"),
                h = n("78581"),
                C = n("429829"),
                I = n("191191"),
                T = n("994428"),
                S = n("782340");

            function N(e) {
                let {
                    channel: t,
                    iconClassName: N,
                    className: A,
                    innerClassName: m,
                    ...p
                } = e, {
                    mute: g,
                    suppress: R
                } = (0, E.default)(t), O = (0, i.default)([f.default], () => f.default.isDeaf()), L = g || R || O, [v, M] = s.useState(!1), P = t.getGuildId(), D = (0, h.useSoundBoardDismissContentTypes)({
                    isSoundboardButtonDisabled: L
                }), [y, x] = (0, c.useGetDismissibleContent)(D), {
                    AnalyticsLocationProvider: b
                } = (0, d.default)(u.default.SOUNDBOARD_BUTTON);

                function U(e) {
                    null != P && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("136137").then(n.bind(n, "136137"));
                        return t => (0, a.jsx)(e, {
                            guildId: P,
                            ...t
                        })
                    })
                }
                let G = e => (0, a.jsx)(r.Popout, {
                    shouldShow: v,
                    position: "top",
                    onRequestClose: () => M(!1),
                    renderPopout: e => {
                        let {
                            closePopout: n
                        } = e;
                        return (0, a.jsx)(I.default, {
                            guildId: P,
                            channel: t,
                            onClose: n,
                            gridNotice: y === l.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(C.CustomCallSoundUpsell, {
                                onClose: n,
                                markAsDismissed: x
                            }),
                            analyticsSource: "rtc panel"
                        })
                    },
                    children: t => (0, a.jsx)("div", {
                        children: (0, a.jsx)(r.Button, {
                            ...e,
                            ...t,
                            className: A,
                            wrapperClassName: A,
                            innerClassName: m,
                            disabled: L,
                            onClick: () => {
                                var t, n;
                                null == n || n(), null != y && y !== l.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && x(T.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), M(!v)
                            },
                            onContextMenu: U,
                            fullWidth: !0,
                            size: r.Button.Sizes.SMALL,
                            ...p,
                            children: (0, a.jsx)(_.default, {
                                className: N
                            })
                        })
                    })
                });
                return (0, a.jsx)(b, {
                    children: (0, a.jsx)(r.Tooltip, {
                        text: function() {
                            if (g) return S.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
                            if (R) return S.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
                            if (O) return S.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
                            return S.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
                        }(),
                        children: e => G(e)
                    })
                })
            }