            "use strict";
            n.r(t), n.d(t, {
                InstantInviteSettingsPage: function() {
                    return E
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
                f = n("926622");
            let E = e => {
                let {
                    handleDone: t,
                    headerId: n,
                    modalState: i,
                    shouldHideTemporaryInviteToggle: E,
                    onGenerateNewLink: _,
                    onToggleTemporary: I,
                    onSelectMaxAge: h,
                    onSelectMaxUses: g,
                    guild: p
                } = e, m = (0, a.default)(), {
                    maxAge: N,
                    maxUses: S,
                    temporary: T
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
                                className: r(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
                                children: d.default.Messages.INVITE_SETTINGS_TITLE
                            })
                        })]
                    }), (0, l.jsx)(o.default, {
                        guildId: p.id,
                        shouldHideTemporaryInviteToggle: E,
                        maxAge: N,
                        maxUses: S,
                        temporary: T,
                        onToggleTemporary: I,
                        onSelectMaxAge: h,
                        onSelectMaxUses: g,
                        onGenerateNewLink: _
                    }), (0, l.jsx)(s.ModalFooter, {
                        className: c.settingsFooter,
                        children: (0, l.jsx)(u.default, {
                            guildId: null == p ? void 0 : p.id,
                            maxAge: N,
                            theme: m,
                            onConfirm: () => {
                                _(), t()
                            },
                            onDismiss: t
                        })
                    })]
                })
            }