            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("77078"),
                u = l("487269"),
                C = l("537560"),
                s = l("782340"),
                d = l("813599");

            function i(e) {
                let {
                    channel: t,
                    onClose: l,
                    transitionState: i
                } = e;
                return n.useEffect(() => {
                    (0, u.trackThreadBrowserOpened)()
                }, []), (0, a.jsx)(r.ModalRoot, {
                    className: d.modal,
                    transitionState: i,
                    "aria-label": s.default.Messages.THREADS,
                    size: r.ModalSize.DYNAMIC,
                    children: (0, a.jsx)(C.default, {
                        className: d.browser,
                        channel: t,
                        onClose: l
                    })
                })
            }