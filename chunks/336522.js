            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                UPLOAD_ERROR_MODAL_KEY: function() {
                    return _
                },
                openUploadError: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("551042"),
                s = n("516256"),
                o = n("202664"),
                u = n("476765"),
                d = n("109036"),
                c = n("527382"),
                m = n("831839");

            function f(e) {
                let {
                    title: t,
                    help: n,
                    showPremiumUpsell: r,
                    transitionState: a,
                    icons: f,
                    fileSize: _,
                    onClose: E
                } = e, T = (0, u.useUID)(), I = null != f ? f : c.DEFAULT_FILE_UPLOAD_ICONS;
                return r ? (0, i.jsx)(o.default, {
                    transitionState: a,
                    onClose: E,
                    fileSize: _
                }) : (0, i.jsx)(s.ModalRoot, {
                    size: s.ModalSize.DYNAMIC,
                    "aria-labelledby": T,
                    transitionState: a,
                    children: (0, i.jsx)("div", {
                        className: l(m.uploadDropModal, m.error),
                        children: (0, i.jsxs)("div", {
                            className: m.inner,
                            children: [(0, i.jsx)(d.default, {
                                icons: I
                            }), (0, i.jsx)("div", {
                                id: T,
                                className: m.title,
                                children: t
                            }), (0, i.jsx)("div", {
                                className: m.instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            let _ = "UPLOAD_ERROR_MODAL_KEY";

            function E(e) {
                (0, a.openModal)(t => (0, i.jsx)(f, {
                    ...t,
                    ...e
                }), {
                    modalKey: _
                })
            }