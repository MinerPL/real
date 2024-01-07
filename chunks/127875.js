            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                i = n("371621"),
                r = n("385887");

            function o(e, t, n) {
                l.useEffect(() => {
                    let l = i.ReactEditor.findDocumentOrShadowRoot(e),
                        o = l.defaultView;
                    if ((null == o ? void 0 : o.ResizeObserver) == null) return;
                    let s = r.EditorUtils.toDOMNode(e, e),
                        a = s.offsetHeight,
                        u = new o.ResizeObserver(() => {
                            let l = r.EditorUtils.toDOMNode(e, e).offsetHeight;
                            a !== l && (null != t.current && (t.current.style.height = "".concat(l, "px")), a = l, null == n || n(l))
                        });
                    return u.observe(s), () => u.disconnect()
                }, [t, e, n])
            }