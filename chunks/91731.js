            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("206230"),
                o = n("49111");

            function l(e, t, n) {
                var l, a, i, d, r, u, c, E;
                let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (a = null !== (l = t.key) && void 0 !== l ? l : _) && void 0 !== a ? a : "modal",
                    modal: e,
                    animation: null !== (i = t.animation) && void 0 !== i ? i : s.default.useReducedMotion ? o.ModalAnimation.FADE : o.ModalAnimation.SLIDE_UP,
                    shouldPersistUnderModals: null !== (d = t.shouldPersistUnderModals) && void 0 !== d && d,
                    props: n,
                    backdropStyle: null !== (r = t.backdropStyle) && void 0 !== r ? r : null,
                    backdropInstant: null !== (u = t.backdropInstant) && void 0 !== u && u,
                    disableAnimation: null !== (c = t.disableAnimation) && void 0 !== c && c,
                    closable: "boolean" != typeof t.closable || t.closable,
                    label: null !== (E = t.label) && void 0 !== E ? E : "",
                    callbacks: {}
                }
            }