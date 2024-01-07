            "use strict";
            s.r(t), s.d(t, {
                CAROUSEL_NEXT: function() {
                    return o
                },
                CAROUSEL_PREV: function() {
                    return d
                },
                MODAL_CAROUSEL_NEXT: function() {
                    return u
                },
                MODAL_CAROUSEL_PREV: function() {
                    return h
                },
                MODAL_CAROUSEL_CLOSE: function() {
                    return c
                }
            });
            var n = s("77078"),
                a = s("778588"),
                i = s("659500"),
                r = s("49111");
            let l = () => a.default.hasLayers() || (0, n.hasAnyModalOpen)(),
                o = {
                    binds: ["right"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (!l()) return i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_NEXT), !1
                    }
                },
                d = {
                    binds: ["left"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (!l()) return i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_PREV), !1
                    }
                },
                u = {
                    binds: ["right", "down", "space"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CAROUSEL_NEXT), !1)
                },
                h = {
                    binds: ["left", "up"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CAROUSEL_PREV), !1)
                },
                c = {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (i.ComponentDispatch.hasSubscribers(r.ComponentActions.MODAL_CLOSE)) return i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CLOSE), !1
                    }
                }