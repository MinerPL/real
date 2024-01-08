            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("627445"),
                s = n.n(l),
                i = n("917351"),
                r = n.n(i),
                o = n("5667"),
                u = n("49111"),
                d = n("782340"),
                c = n("591526"),
                f = n("21719"),
                h = n("117861");
            let p = null;

            function m(e) {
                let {
                    onDismiss: t,
                    onAccept: n,
                    popoutPosition: l,
                    gameConsoleAccounts: i
                } = e;
                s(i.length > 0, "Rendering ConsoleNUXTooltip without a game console account"), (null == p || null == i.find(e => e.type === p)) && (p = r.shuffle(i)[0].type);
                let m = null,
                    E = null;
                switch (p) {
                    case u.PlatformTypes.XBOX:
                        m = d.default.Messages.CONSOLE_NUX_TOOLTIP_BODY_XBOX, E = h;
                        break;
                    case u.PlatformTypes.PLAYSTATION:
                    case u.PlatformTypes.PLAYSTATION_STAGING:
                        m = d.default.Messages.CONSOLE_NUX_TOOLTIP_BODY_PS5, E = f
                }
                return (0, a.jsx)(o.default, {
                    header: d.default.Messages.CONSOLE_NUX_TOOLTIP_HEADER,
                    content: m,
                    asset: (0, a.jsx)("img", {
                        src: E,
                        alt: "",
                        className: c.art
                    }),
                    onClick: n,
                    onSecondaryClick: t,
                    markAsDismissed: t,
                    buttonCTA: d.default.Messages.CONSOLE_NUX_TOOLTIP_ACCEPT,
                    secondaryButtonCTA: d.default.Messages.CONSOLE_NUX_TOOLTIP_DISMISS,
                    caretPosition: "top" === l ? o.CaretPosition.BOTTOM_LEFT : o.CaretPosition.TOP_LEFT
                })
            }