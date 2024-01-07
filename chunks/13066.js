            "use strict";
            i.r(t), i.d(t, {
                LurkerModeUpsellPopoutTypes: function() {
                    return a
                },
                default: function() {
                    return m
                }
            }), i("222007");
            var a, l, n = i("37983"),
                o = i("884691"),
                s = i("446674"),
                r = i("77078"),
                u = i("851387"),
                d = i("476765"),
                c = i("449008"),
                p = i("267567"),
                h = i("49111"),
                f = i("782340"),
                T = i("404637");
            (l = a || (a = {}))[l.CHAT = 0] = "CHAT", l[l.REACTIONS = 1] = "REACTIONS";
            var m = e => {
                let {
                    type: t,
                    guild: a,
                    closePopout: l,
                    ctaRef: m
                } = e, E = (0, d.useUID)(), [g, _] = o.useState(!1), R = (0, s.useStateFromStores)([p.default], () => p.default.isLurking(a.id), [a.id]);
                o.useEffect(() => {
                    g && !R && l()
                }, [g, R, l]);
                let I = null,
                    C = f.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case 0:
                        I = f.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case 1:
                        I = f.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, c.assertNever)(t)
                }
                if (null == I) return null;
                let O = async () => {
                    _(!0);
                    try {
                        await u.default.joinGuild(a.id, {
                            source: h.JoinGuildSources.CHAT_INPUT_BLOCKER
                        }), l()
                    } catch {
                        _(!1)
                    }
                };
                return (0, n.jsxs)(r.Dialog, {
                    className: T.container,
                    "aria-labelledby": E,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: T.image,
                        src: i("748301")
                    }), (0, n.jsxs)("div", {
                        className: T.content,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: E,
                            children: I
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C
                        }), (0, n.jsxs)("div", {
                            className: T.buttonContainer,
                            children: [(0, n.jsx)(r.Button, {
                                buttonRef: m,
                                onClick: O,
                                submitting: g,
                                children: f.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, n.jsx)(r.Button, {
                                onClick: l,
                                look: r.Button.Looks.BLANK,
                                className: T.cancel,
                                children: f.default.Messages.LURKER_MODE_POPOUT_CANCEL
                            })]
                        })]
                    })]
                })
            }