            "use strict";
            n.r(t), n.d(t, {
                InstantInviteSettingsPage: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                a = n("841098"),
                o = n("825691"),
                u = n("339485"),
                d = n("782340"),
                c = n("435808"),
                E = n("926622");
            let _ = e => {
                let {
                    handleDone: t,
                    headerId: n,
                    modalState: i,
                    shouldHideTemporaryInviteToggle: _,
                    onGenerateNewLink: f,
                    onToggleTemporary: I,
                    onSelectMaxAge: h,
                    onSelectMaxUses: g,
                    guild: N
                } = e, T = (0, a.default)(), {
                    maxAge: A,
                    maxUses: p,
                    temporary: S
                } = i;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        children: [(0, l.jsx)(s.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: t
                        }), (0, l.jsx)("div", {
                            className: c.headerContainer,
                            children: (0, l.jsx)(s.FormTitle, {
                                id: n,
                                tag: "h2",
                                className: r(E.marginReset, c.headerCloseButtonSpacing, c.headerText),
                                children: d.default.Messages.INVITE_SETTINGS_TITLE
                            })
                        })]
                    }), (0, l.jsx)(o.default, {
                        guildId: N.id,
                        shouldHideTemporaryInviteToggle: _,
                        maxAge: A,
                        maxUses: p,
                        temporary: S,
                        onToggleTemporary: I,
                        onSelectMaxAge: h,
                        onSelectMaxUses: g,
                        onGenerateNewLink: f
                    }), (0, l.jsx)(s.ModalFooter, {
                        className: c.settingsFooter,
                        children: (0, l.jsx)(u.default, {
                            guildId: null == N ? void 0 : N.id,
                            maxAge: A,
                            theme: T,
                            onConfirm: () => {
                                f(), t()
                            },
                            onDismiss: t
                        })
                    })]
                })
            }