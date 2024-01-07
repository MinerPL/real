            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("669491"),
                i = n("292915"),
                a = n("77078"),
                u = n("389480"),
                o = n("191191"),
                c = n("782340"),
                d = n("895576");
            let f = [54, 8, 8, 8];

            function m(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [m, _] = r.useState(!1);

                function E(e) {
                    _(!1), null == t || t(e)
                }
                let I = e => (0, s.jsxs)("div", {
                    className: d.customGiftHeader,
                    children: [(0, s.jsxs)("div", {
                        className: d.customGiftHeaderText,
                        children: [(0, s.jsx)(a.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_SOUND
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, s.jsx)("div", {
                        className: d.searchAndSound,
                        children: e
                    })]
                });
                return (0, s.jsx)(a.Popout, {
                    shouldShow: m,
                    position: "bottom",
                    align: "left",
                    onRequestClose: () => _(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(a.Dialog, {
                            children: (0, s.jsx)(o.default, {
                                suppressPlaySound: !0,
                                shouldShowUpsell: !1,
                                guildId: null,
                                channel: null,
                                onClose: t,
                                onSelect: E,
                                analyticsSource: "gift soundboard",
                                soundButtonOverlay: u.SoundButtonOverlay.ADD,
                                listPadding: f,
                                renderHeader: I,
                                defaultSoundsOnly: !0
                            })
                        })
                    },
                    children: () => (0, s.jsx)(a.Clickable, {
                        className: d.sound,
                        onClick: () => _(!0),
                        children: null == n ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.SoundboardIcon, {
                                color: l.default.colors.WHITE,
                                className: d.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, s.jsx)(a.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: c.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(a.Text, {
                                className: d.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, s.jsx)(a.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: n.name
                            })]
                        })
                    })
                })
            }

            function _(e) {
                let {
                    sound: t,
                    onSelect: n
                } = e;
                return (0, s.jsx)("div", {
                    className: d.container,
                    children: (0, s.jsx)(m, {
                        onSelect: n,
                        sound: t
                    })
                })
            }