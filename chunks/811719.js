            "use strict";
            n.r(t), n.d(t, {
                useOverlayTriggerState: function() {
                    return a
                }
            }), n("222007");
            var r = n("884691"),
                o = n("679750");

            function a(e) {
                let [t, n] = (0, o.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), a = (0, r.useCallback)(() => {
                    n(!0)
                }, [n]), i = (0, r.useCallback)(() => {
                    n(!1)
                }, [n]), s = (0, r.useCallback)(() => {
                    n(!t)
                }, [n, t]);
                return {
                    isOpen: t,
                    setOpen: n,
                    open: a,
                    close: i,
                    toggle: s
                }
            }