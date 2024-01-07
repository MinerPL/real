            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                s = n("135230"),
                a = {
                    show(e) {
                        let {
                            title: t,
                            body: n,
                            confirmColor: a,
                            confirmText: o,
                            cancelText: l,
                            onConfirm: u,
                            onCancel: c,
                            onCloseCallback: d,
                            secondaryConfirmText: f,
                            onConfirmSecondary: E,
                            className: h,
                            titleClassName: p
                        } = e;
                        (0, r.openModal)(e => (0, i.jsx)(s.default, {
                            ...e,
                            title: t,
                            body: n,
                            confirmColor: a,
                            confirmText: o,
                            cancelText: l,
                            onConfirm: u,
                            onCancel: c,
                            secondaryConfirmText: f,
                            onConfirmSecondary: E,
                            className: h,
                            titleClassName: p
                        }), {
                            onCloseCallback: d
                        })
                    },
                    close() {}
                }