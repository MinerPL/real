            "use strict";
            l.r(t), l.d(t, {
                useDismissibleContentGroup: function() {
                    return d
                },
                default: function() {
                    return c
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("65597"),
                i = l("901165"),
                r = l("495226"),
                o = l("235145"),
                u = l("994428");

            function d(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = (0, s.default)([i.default], () => !!__OVERLAY__ && i.default.isInstanceUILocked()),
                    [d, c] = (0, o.useGetDismissibleContent)(e, t, n),
                    f = !l && null != d && !r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
                return a.useEffect(() => () => {
                    f && c(u.ContentDismissActionType.AUTO_DISMISS)
                }, [f, c]), [d, c]
            }

            function c(e) {
                let {
                    contentTypes: t,
                    children: l,
                    groupName: a,
                    bypassAutoDismiss: s
                } = e, [i, r] = d(t, a, s);
                return (0, n.jsx)(n.Fragment, {
                    children: l({
                        visibleContent: i,
                        markAsDismissed: r
                    })
                })
            }