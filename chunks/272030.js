            "use strict";
            n.r(t), n.d(t, {
                closeContextMenu: function() {
                    return o
                },
                openContextMenu: function() {
                    return d
                },
                openContextMenuLazy: function() {
                    return c
                }
            }), n("506083");
            var i = n("913144"),
                l = n("244201"),
                u = n("773336"),
                r = n("749866"),
                s = n("49111");

            function a(e) {
                i.default.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function o(e) {
                {
                    let {
                        flushSync: t
                    } = n("817736");
                    t(() => {
                        i.default.wait(() => {
                            i.default.dispatch({
                                type: "CONTEXT_MENU_CLOSE"
                            }).finally(e)
                        })
                    })
                }
            }

            function d(e, t, n, i) {
                var o, d, c;
                if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
                let g = 0,
                    f = 0;
                if ("pageX" in e && (g = e.pageX, f = e.pageY), 0 === g && 0 === f) {
                    let t = null === (o = e.target) || void 0 === o ? void 0 : o.getBoundingClientRect(),
                        {
                            left: n = 0,
                            top: i = 0,
                            width: l = 0,
                            height: u = 0
                        } = null != t ? t : {};
                    g = n + l / 2, f = i + u / 2
                }
                let h = {
                    render: t,
                    renderLazy: i,
                    target: null !== (d = e.target) && void 0 !== d ? d : e.currentTarget,
                    rect: new DOMRect(g, f, 0, 0),
                    config: {
                        context: __OVERLAY__ ? s.AppContext.OVERLAY : null !== (c = (0, l.getCurrentlyInteractingAppContext)()) && void 0 !== c ? c : s.AppContext.APP,
                        ...n
                    }
                };
                if ((null == n ? void 0 : n.enableSpellCheck) && (0, u.isDesktop)()) {
                    let e = (0, r.addResultListener)(() => {
                        e(), a(h)
                    })
                } else e.preventDefault(), a(h)
            }

            function c(e, t, n) {
                d(e, void 0, n, t)
            }