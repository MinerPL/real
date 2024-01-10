            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("917351"),
                i = n("245749"),
                r = n.n(i),
                o = n("397485"),
                u = n("626334"),
                d = n("505989");
            let c = async e => {
                var t;
                let {
                    animationType: n,
                    animationId: a,
                    url: l,
                    shouldResize: i
                } = e, r = null !== (t = o.AnimationTypeToAnimations[n]) && void 0 !== t ? t : o.AnimationTypeToAnimations[u.VoiceChannelEffectAnimationType.BASIC], d = null != a && a < r.length ? r[a] : (0, s.sample)(r), c = JSON.parse(JSON.stringify(d));
                return c.assets[0].p = i ? await (0, o.getResizedEmojiData)(l) : l, c
            };

            function f(e) {
                let {
                    containerDimensions: t,
                    effect: n,
                    onComplete: s
                } = e, i = l.useRef(null);
                return l.useEffect(() => {
                    let e;
                    return !async function() {
                        if (null != i.current) {
                            let t = await c(n);
                            e = r.loadAnimation({
                                container: i.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMax slice"
                                }
                            }), n.animationType === u.VoiceChannelEffectAnimationType.PREMIUM && e.setSpeed(.8), e.addEventListener("complete", () => null == s ? void 0 : s(n.id))
                        }
                    }(), () => {
                        null == e || e.destroy()
                    }
                }, [s, n]), (0, a.jsx)("div", {
                    className: d.effect,
                    style: {
                        height: t.height,
                        width: t.width
                    },
                    ref: i
                })
            }