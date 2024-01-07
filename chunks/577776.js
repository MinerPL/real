            "use strict";
            n.r(t), n.d(t, {
                Text: function() {
                    return Text
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                a = n("917351"),
                o = n.n(a),
                l = n("669491"),
                u = n("691785"),
                c = n("339010");
            let d = Object.fromEntries(Object.keys(l.default.colors).map(e => [o.kebabCase(e), e])),
                Text = e => {
                    let t, {
                            variant: n,
                            tag: r = "div",
                            selectable: a = !1,
                            className: o,
                            lineClamp: f,
                            color: E,
                            tabularNumbers: h = !1,
                            ...p
                        } = e,
                        _ = "",
                        S = {};
                    if (null != f && (1 === f ? _ = u.lineClamp1 : (_ = u.lineClamp2Plus, S = {
                            lineClamp: f,
                            WebkitLineClamp: f
                        })), void 0 !== E) switch (E) {
                        case "none":
                            t = void 0;
                            break;
                        case "always-white":
                            t = "white";
                            break;
                        default:
                            var m;
                            t = null === (m = l.default.colors[d[E]]) || void 0 === m ? void 0 : m.css
                    }
                    let T = {
                        color: t,
                        ...S,
                        ...p.style
                    };
                    return (0, i.jsx)(r, {
                        className: s({
                            [u.defaultColor]: void 0 === E,
                            [u.selectable]: a,
                            [u.tabularNumbers]: h
                        }, _, c[n], o),
                        ...p,
                        style: Object.values(T).filter(Boolean).length > 0 ? T : void 0,
                        "data-text-variant": n
                    })
                }