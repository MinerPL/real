            "use strict";
            n.r(t), n.d(t, {
                Anchor: function() {
                    return E
                }
            }), n("70102");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("247716"),
                l = n("227645"),
                u = n("718776"),
                c = n("143435"),
                d = n("315733"),
                f = n("167913");

            function E(e) {
                let {
                    href: t,
                    onClick: n,
                    className: s,
                    children: E,
                    rel: h,
                    target: p,
                    useDefaultUnderlineStyles: _ = !0,
                    title: S,
                    style: m,
                    focusProps: T,
                    ...g
                } = e;
                null != t && null == n && (n = c.designConfig.getDefaultLinkInterceptor(t));
                let I = r.useContext(o.BlockInteractionsContext),
                    C = {
                        className: a(f.anchor, {
                            [f.anchorUnderlineOnHover]: _
                        }, s),
                        href: t,
                        onClick: n,
                        rel: null != h ? h : void 0,
                        target: null != p ? p : void 0,
                        title: null != S ? S : void 0,
                        style: null != m ? m : void 0
                    };
                return (null != t && !(0, d.isSafeRedirect)(t) && (C.rel = "noreferrer noopener", C.target = "_blank"), I && delete C.href, null != n) ? (0, i.jsx)(l.Clickable, {
                    tag: "a",
                    ...g,
                    ...C,
                    onClick: n,
                    focusProps: T,
                    children: E
                }) : (0, i.jsx)(u.FocusRing, {
                    ...T,
                    children: (0, i.jsx)("a", {
                        ...g,
                        ...C,
                        children: E
                    })
                })
            }