            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("142833"),
                r = n("457108"),
                u = n("393414"),
                o = n("970366"),
                d = n("124969"),
                c = n("893552"),
                f = n("810621"),
                E = n("49111"),
                I = n("782340"),
                _ = n("255987");

            function p(e) {
                let {
                    location: t
                } = e, [p, h] = a.useState(!1), {
                    verifySuccess: N,
                    verifyErrors: m,
                    redirectGuildId: T
                } = (0, l.useStateFromStores)([c.default], () => c.default.getState());
                a.useEffect(() => {
                    let e = (0, r.default)(t);
                    i.default.verify(e), (0, o.trackAppUIViewed)("verify_hub_email")
                }, [t]);
                let g = () => {
                    (0, f.default)(T), h(!0)
                };
                return p ? (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.APP_OPENED_TITLE
                    }), (0, s.jsx)(d.SubTitle, {
                        className: _.subtitle,
                        children: I.default.Messages.APP_OPENED_BODY
                    }), (0, s.jsx)(d.Button, {
                        className: _.spacedButton,
                        onClick: () => (0, u.transitionTo)(E.Routes.CHANNEL(T)),
                        children: I.default.Messages.CONTINUE_TO_WEBAPP
                    })]
                }) : N ? (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Image, {
                        className: _.image,
                        src: n("176872")
                    }), (0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.VERIFICATION_VERIFIED
                    }), (0, s.jsx)(d.Button, {
                        onClick: g,
                        children: I.default.Messages.VERIFICATION_OPEN_DISCORD
                    })]
                }) : null != m ? (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Image, {
                        className: _.image,
                        src: n("768025")
                    }), (0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.VERFICATION_EXPIRED
                    }), (0, s.jsx)(d.SubTitle, {
                        className: _.subtitle,
                        children: I.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                    }), (0, s.jsx)(d.Button, {
                        onClick: g,
                        children: I.default.Messages.VERIFICATION_OPEN_DISCORD
                    })]
                }) : (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Image, {
                        className: _.image,
                        src: n("951536")
                    }), (0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.VERIFICATION_VERIFYING
                    }), (0, s.jsx)(d.SubTitle, {
                        className: _.subtitle,
                        children: I.default.Messages.ACTION_MAY_TAKE_A_MOMENT
                    }), (0, s.jsx)(d.Button, {
                        submitting: !0,
                        color: d.Button.Colors.PRIMARY
                    })]
                })
            }
            l.default.initialize()