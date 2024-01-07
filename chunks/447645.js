            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                c = n("75015"),
                d = n("782340"),
                f = n("359223");
            let h = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function E(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: i,
                    sectionTitle: E,
                    changeAvatarButtonText: C,
                    guildId: p,
                    className: _,
                    disabled: v = !1,
                    isTryItOutFlow: m = !1,
                    forcedDivider: R,
                    withHighlight: I = !1
                } = e, g = I ? a.default : s.Button;
                return (0, l.jsx)(u.default, {
                    className: _,
                    title: E,
                    errors: n,
                    disabled: v,
                    forcedDivider: R,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(g, {
                            className: r({
                                [f.buttonHighlighted]: I
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.AVATAR, p, m, m ? h : void 0),
                            children: null != C ? C : d.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, l.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => i(null),
                            children: null != p ? d.default.Messages.USER_SETTINGS_RESET_AVATAR : d.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }