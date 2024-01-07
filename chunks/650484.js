            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                l = n.n(s),
                o = n("627445"),
                u = n.n(o),
                a = n("817736"),
                c = n.n(a),
                d = n("77078"),
                f = n("642906"),
                E = n("990893");

            function _(e) {
                var t, n, s, o, a, c;
                let {
                    header: _,
                    isLargeModal: I,
                    stepProps: p
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: h,
                    stepConfigs: S,
                    setBodyNode: T,
                    setFooterNode: N,
                    setModalOverlayNode: C,
                    setReadySlideId: v
                } = (0, f.usePaymentContext)(), g = S.find(e => e.key === h);
                r.useEffect(() => {
                    C(null)
                }, [h, C]), u(null != g, "Unknown step for current payment flow.");
                let A = null !== (a = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== a && a,
                    R = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
                    m = void 0 !== I && I ? E.sliderBodyLarge : null == g ? void 0 : null === (s = g.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (c = null == g ? void 0 : null === (o = g.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === c || c ? _ : null, g.renderStep(p), null == h || A ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.ModalContent, {
                            className: l(E.body, R),
                            children: (0, i.jsx)(d.Slides, {
                                activeSlide: h,
                                centered: !1,
                                onSlideReady: e => v(e),
                                children: S.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: l(E.sliderBody, m),
                                        ref: e => T(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => N(e)
                        }), (0, i.jsx)("div", {
                            ref: e => C(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }