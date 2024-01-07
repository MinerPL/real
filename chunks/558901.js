            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("280214"),
                s = n("271938"),
                a = n("18494"),
                u = n("943551"),
                d = n("232268"),
                c = n("798592"),
                f = n("39141"),
                p = n("172858");

            function m(e) {
                var t, n;
                let {
                    editorHeight: l,
                    textValue: d
                } = e, f = i.useRef(d), m = (0, o.useChannelAutocompleteLayerPosition)({
                    editorHeight: l
                }), h = (0, c.default)(), E = (0, r.useStateFromStores)([u.default, s.default, a.default], () => {
                    var e;
                    return u.default.isComboing(s.default.getId(), null !== (e = a.default.getChannelId()) && void 0 !== e ? e : "")
                }), S = null !== (t = null == m ? void 0 : m.left) && void 0 !== t ? t : 0, g = (null !== (n = null == m ? void 0 : m.top) && void 0 !== n ? n : 0) - 16, C = i.useMemo(() => .05 > Math.random(), [0 === d.length]);
                return i.useEffect(() => {
                    0 !== d.length && d !== f.current && E && (h.fire(S, g, C ? {
                        sprite: p.DUCK_CONFETTI_SPRITE
                    } : null), f.current = d)
                }, [d, E, S, g, C, h]), null
            }

            function h(e) {
                return (0, l.jsx)(d.default, {
                    confettiLocation: f.ConfettiLocation.CHAT_INPUT,
                    children: (0, l.jsx)(m, {
                        ...e
                    })
                })
            }