            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("77078"),
                i = n("457108"),
                r = n("965153"),
                u = n("98352"),
                o = n("970366"),
                d = n("124969"),
                c = n("782340"),
                f = n("926622"),
                E = e => {
                    let {
                        location: t
                    } = e, n = (0, u.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [E, I] = a.useState(!1), [_, p] = a.useState(c.default.Messages.AUTHORIZING);
                    return a.useEffect(() => {
                        let e = async e => {
                            try {
                                let t = null != e ? await (0, r.submitReportSecondLook)(e) : void 0;
                                null != t ? p(c.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : p(c.default.Messages.REPORT_SECOND_LOOK_FAILURE_TITLE)
                            } catch (e) {
                                p(c.default.Messages.REPORT_SECOND_LOOK_FAILURE_TITLE)
                            } finally {
                                I(!1)
                            }
                        };
                        I(!0);
                        let n = (0, i.default)(t);
                        e(n), (0, o.trackAppUIViewed)("report_second_look")
                    }, [t]), n && (0, s.jsxs)(d.default, {
                        children: [(0, s.jsx)(d.Title, {
                            className: f.marginBottom8,
                            children: _
                        }), E && (0, s.jsx)(l.Spinner, {})]
                    })
                }