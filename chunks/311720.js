            "use strict";
            n.r(t), n.d(t, {
                useFocusLock: function() {
                    return u
                },
                FocusLock: function() {
                    return c
                }
            });
            var i, r = n("884691"),
                o = n("965955"),
                s = n("446674"),
                l = n("206230");
            let a = null !== (i = document.getElementById("app-mount")) && void 0 !== i ? i : document;

            function u(e) {
                var t, n;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    u = (0, s.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled),
                    c = r.useRef(!1);
                return c.current = !u && (null === (t = i.returnRef) || void 0 === t ? void 0 : t.current) == null, (0, o.default)(e, {
                    ...i,
                    disableReturnRef: c,
                    attachTo: null !== (n = i.attachTo) && void 0 !== n ? n : a,
                    returnRef: i.returnRef
                })
            }

            function c(e) {
                return u(e.containerRef), e.children
            }