            "use strict";
            n.r(t), n.d(t, {
                closeContextMenu: function() {
                    return a
                },
                openContextMenu: function() {
                    return o
                },
                openContextMenuLazy: function() {
                    return E
                }
            }), n("506083");
            var i = n("913144"),
                l = n("244201"),
                u = n("773336"),
                r = n("749866"),
                s = n("49111");

            function _(e) {
                i.default.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function a(e) {
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

            function o(e, t, n, i) {
                var a, o, E;
                if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
                let d = 0,
                    c = 0;
                if ("pageX" in e && (d = e.pageX, c = e.pageY), 0 === d && 0 === c) {
                    let t = null === (a = e.target) || void 0 === a ? void 0 : a.getBoundingClientRect(),
                        {
                            left: n = 0,
                            top: i = 0,
                            width: l = 0,
                            height: u = 0
                        } = null != t ? t : {};
                    d = n + l / 2, c = i + u / 2
                }
                let I = {
                    render: t,
                    renderLazy: i,
                    target: null !== (o = e.target) && void 0 !== o ? o : e.currentTarget,
                    rect: new DOMRect(d, c, 0, 0),
                    config: {
                        context: __OVERLAY__ ? s.AppContext.OVERLAY : null !== (E = (0, l.getCurrentlyInteractingAppContext)()) && void 0 !== E ? E : s.AppContext.APP,
                        ...n
                    }
                };
                if ((null == n ? void 0 : n.enableSpellCheck) && (0, u.isDesktop)()) {
                    let e = (0, r.addResultListener)(() => {
                        e(), _(I)
                    })
                } else e.preventDefault(), _(I)
            }

            function E(e, t, n) {
                o(e, void 0, n, t)
            }