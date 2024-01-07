            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983"),
                i = r("884691"),
                a = r("308723");

            function l(e) {
                return i.forwardRef(function(t, r) {
                    let l = i.useRef();
                    return i.useImperativeHandle(r, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = l.current) || void 0 === e || e.onResize()
                        }
                    })), (0, n.jsx)(a.default, {
                        ref: l,
                        children: r => {
                            let {
                                width: i,
                                height: a
                            } = r;
                            return (0, n.jsx)(e, {
                                ...t,
                                width: i,
                                height: a
                            })
                        }
                    })
                })
            }