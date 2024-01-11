            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("446674"),
                u = s("1017"),
                o = s("102985"),
                d = s("697218"),
                c = s("71010"),
                _ = s("552712"),
                E = s("698041"),
                I = s("764206"),
                f = s("271560"),
                T = s("760936"),
                S = s("697092"),
                R = s("782340"),
                p = s("825704");
            class A extends n.Component {
                renderReasons(e, t, s) {
                    return 0 === e.length && 0 === t.length ? null : (0, a.jsx)("div", {
                        className: p.section,
                        children: (0, a.jsxs)("div", {
                            className: p.sectionContent,
                            children: [e.map(e => (0, a.jsx)("div", {
                                className: p.unit,
                                children: (0, a.jsx)(T.default, {
                                    reason: e,
                                    hidePersonalInformation: s
                                })
                            }, e.type)), t.map(e => (0, a.jsx)("div", {
                                className: p.unit,
                                children: (0, a.jsx)(I.default, {
                                    reason: e
                                })
                            }, e.type))]
                        })
                    })
                }
                getReviewToRender() {
                    let {
                        storeListing: e
                    } = this.props;
                    return null != e.staffNotes ? {
                        type: S.default.Types.STAFF_NOTES,
                        staffNotes: e.staffNotes
                    } : null
                }
                render() {
                    let {
                        socialReasons: e,
                        nonSocialReasons: t,
                        storeListing: s,
                        hidePersonalInformation: n,
                        className: r
                    } = this.props;
                    if (0 === e.length && 0 === t.length && null == s.staffNotes) return null;
                    let i = this.getReviewToRender();
                    return (0, a.jsxs)("div", {
                        className: l(p.root, r),
                        children: [(0, a.jsx)("div", {
                            className: p.header,
                            children: R.default.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
                        }), this.renderReasons(e, t, n), null != i ? (0, a.jsx)(S.default, {
                            data: i,
                            className: p.review
                        }) : null]
                    })
                }
            }
            var m = i.default.connectStores([_.default, d.default, E.default, u.default, c.default, o.default], e => {
                let {
                    sku: t
                } = e;
                return {
                    socialReasons: (0, f.getSocialRecommendationReasons)(t.id, _.default, d.default, u.default, c.default),
                    nonSocialReasons: (0, f.getNonSocialRecommendationReasons)(t.id, _.default, E.default),
                    hidePersonalInformation: o.default.hidePersonalInformation
                }
            })(A)