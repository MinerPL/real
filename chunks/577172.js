            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("394846"),
                o = l("77078"),
                u = l("450911"),
                d = l("36341"),
                c = l("109264"),
                f = l("158998"),
                m = l("777003"),
                p = l("782340"),
                E = l("242379"),
                T = l("107680"),
                h = l("379539"),
                _ = l("714073"),
                S = l("980923"),
                I = l("779585"),
                g = l("900143"),
                A = l("923337");
            let v = [A, T, S, _, I, h, g];

            function C(e) {
                let {
                    userId: t
                } = e, [l, s] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    !l && s(!0)
                }, [l]), (0, n.jsx)("div", {
                    className: E.wumpusWrapper,
                    children: (0, n.jsxs)("div", {
                        className: i(E.wumpus, {
                            [E.wumpusShown]: l
                        }),
                        children: [(0, n.jsx)("img", {
                            className: E.wumpusImage,
                            alt: p.default.Messages.IMG_ALT_ICON.format({
                                name: p.default.Messages.WUMPUS
                            }),
                            src: function() {
                                let e = parseInt(t.slice(-6), 10);
                                return v[e % v.length]
                            }()
                        }), (0, n.jsx)("span", {
                            className: E.wumpusTooltip,
                            children: p.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
                        })]
                    })
                })
            }

            function N(e) {
                let {
                    user: t,
                    setNote: l,
                    canDM: a,
                    onClose: s,
                    inClydeProfilesExperiment: i = !1
                } = e;
                if (t.isNonUserBot() && !t.isClyde() || t.isClyde() && i || !a) return null;
                let T = a && (0, f.isNewUser)(t) && !t.bot;
                return (0, n.jsxs)(m.default, {
                    className: E.section,
                    lastSection: !0,
                    children: [T && a ? (0, n.jsx)(C, {
                        userId: t.id
                    }) : null, a && t.isClyde() ? (0, n.jsxs)(o.Button, {
                        className: E.messageClydeButton,
                        innerClassName: E.messageClydeButtonInner,
                        onClick: () => {
                            u.default.openPrivateChannel(t.id)
                        },
                        fullWidth: !0,
                        look: o.ButtonLooks.INVERTED,
                        children: [(0, n.jsx)(c.default, {
                            width: 16,
                            height: 16,
                            className: E.messageClydeButtonIcon
                        }), p.default.Messages.CLYDE_SEND_MESSAGE]
                    }) : null, a && !t.isClyde() ? (0, n.jsx)(d.default, {
                        className: E.messageInputContainer,
                        inputClassName: E.messageInput,
                        user: t,
                        onClose: () => null == s ? void 0 : s(),
                        autoFocus: !r.isMobile && !l
                    }) : null]
                })
            }