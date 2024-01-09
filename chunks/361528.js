            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("394846"),
                i = n("446674"),
                r = n("77078"),
                o = n("982108"),
                u = n("91551"),
                d = n("491605"),
                c = n("327827"),
                f = a.memo(function(e) {
                    let {
                        message: t,
                        subtitle: n,
                        countdown: f,
                        buttonText: h,
                        buttonColor: C,
                        buttonSubmitting: p,
                        onButtonClick: m,
                        imageSrc: E,
                        animationSrc: g,
                        secondaryButtonText: S,
                        onSecondaryButtonClick: _,
                        children: A,
                        useReducedMotion: T = !1
                    } = e, M = (0, i.useStateFromStores)([o.default], () => o.default.getState().isMembersOpen);
                    if (l.isMobile && M) return null;
                    if (null == t) return (0, s.jsx)(s.Fragment, {
                        children: a.Children.only(A)
                    });
                    let I = null;
                    return null != E ? I = (0, s.jsx)("img", {
                        alt: "",
                        src: E,
                        className: c.image
                    }) : null != g && (I = (0, s.jsx)(d.default, {
                        importData: g,
                        shouldAnimate: !T,
                        className: c.animation
                    })), (0, s.jsxs)("div", {
                        className: c.wrapper,
                        children: [(0, s.jsxs)("div", {
                            className: c.content,
                            children: [I, (0, s.jsxs)("div", {
                                className: c.text,
                                children: [(0, s.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    className: c.title,
                                    children: t
                                }), null != n && (0, s.jsx)(r.Text, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: n
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: c.buttonContainer,
                            children: [null != S && (0, s.jsx)(r.Button, {
                                className: c.button,
                                size: r.Button.Sizes.SMALL,
                                onClick: _,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                submitting: p,
                                children: S
                            }), null != h && (0, s.jsx)(r.Button, {
                                className: c.button,
                                size: r.Button.Sizes.SMALL,
                                onClick: m,
                                submitting: p,
                                color: null != C ? C : r.Button.Colors.PRIMARY,
                                children: h
                            })]
                        }), null != f && (0, s.jsx)(u.default, {
                            className: c.countdown,
                            deadline: f
                        })]
                    })
                })