            "use strict";
            n.r(t), n.d(t, {
                InstantInviteSettingsPage: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                a = n("77078"),
                s = n("841098"),
                o = n("825691"),
                u = n("339485"),
                d = n("782340"),
                c = n("435808"),
                f = n("926622");
            let h = e => {
                let {
                    handleDone: t,
                    headerId: n,
                    modalState: i,
                    shouldHideTemporaryInviteToggle: h,
                    onGenerateNewLink: g,
                    onToggleTemporary: p,
                    onSelectMaxAge: m,
                    onSelectMaxUses: v,
                    guild: I
                } = e, E = (0, s.default)(), {
                    maxAge: _,
                    maxUses: T,
                    temporary: N
                } = i;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(a.ModalHeader, {
                        children: [(0, l.jsx)(a.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: t
                        }), (0, l.jsx)("div", {
                            className: c.headerContainer,
                            children: (0, l.jsx)(a.FormTitle, {
                                id: n,
                                tag: "h2",
                                className: r(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
                                children: d.default.Messages.INVITE_SETTINGS_TITLE
                            })
                        })]
                    }), (0, l.jsx)(o.default, {
                        guildId: I.id,
                        shouldHideTemporaryInviteToggle: h,
                        maxAge: _,
                        maxUses: T,
                        temporary: N,
                        onToggleTemporary: p,
                        onSelectMaxAge: m,
                        onSelectMaxUses: v,
                        onGenerateNewLink: g
                    }), (0, l.jsx)(a.ModalFooter, {
                        className: c.settingsFooter,
                        children: (0, l.jsx)(u.default, {
                            guildId: null == I ? void 0 : I.id,
                            maxAge: _,
                            theme: E,
                            onConfirm: () => {
                                g(), t()
                            },
                            onDismiss: t
                        })
                    })]
                })
            }