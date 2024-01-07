            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                PaymentPortalBody: function() {
                    return p
                },
                PaymentPortalFooter: function() {
                    return I
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("627445"),
                u = n.n(s),
                a = n("817736"),
                c = n.n(a),
                d = n("77078"),
                f = n("642906"),
                E = n("990893");

            function _(e) {
                var t, n, r, s, a, c;
                let {
                    header: _,
                    isLargeModal: p,
                    stepProps: I
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
                    step: S,
                    stepConfigs: h,
                    setBodyNode: T,
                    setFooterNode: N,
                    setModalOverlayNode: C,
                    setReadySlideId: v
                } = (0, f.usePaymentContext)(), g = h.find(e => e.key === S);
                l.useEffect(() => {
                    C(null)
                }, [S, C]), u(null != g, "Unknown step for current payment flow.");
                let m = null !== (a = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== a && a,
                    A = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
                    L = void 0 !== p && p ? E.sliderBodyLarge : null == g ? void 0 : null === (r = g.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (c = null == g ? void 0 : null === (s = g.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === c || c ? _ : null, g.renderStep(I), null == S || m ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.ModalContent, {
                            className: o(E.body, A),
                            children: (0, i.jsx)(d.Slides, {
                                activeSlide: S,
                                centered: !1,
                                onSlideReady: e => v(e),
                                children: h.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: o(E.sliderBody, L),
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

            function p(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }