            "use strict";
            n.r(t), n.d(t, {
                focus: function() {
                    return E
                },
                hidden: function() {
                    return o
                },
                resized: function() {
                    return a
                },
                fullscreenChange: function() {
                    return _
                },
                init: function() {
                    return s
                },
                unload: function() {
                    return A
                }
            });
            var i = n("917351"),
                l = n("913144"),
                u = n("563680"),
                r = n("816454");

            function E(e, t) {
                l.default.dispatch({
                    type: "WINDOW_FOCUS",
                    windowId: (0, r.getWindowId)(e),
                    focused: t
                })
            }

            function o(e) {
                l.default.dispatch({
                    type: "WINDOW_HIDDEN",
                    windowId: (0, r.getWindowId)(e)
                })
            }
            let d = (0, i.memoize)(e => (0, i.debounce)((t, n) => {
                l.default.dispatch({
                    type: "WINDOW_RESIZED",
                    windowId: e,
                    width: t,
                    height: n
                })
            }, 100));

            function a(e) {
                let t = (0, r.getWindowId)(e),
                    n = d(t);
                n(e.innerWidth, e.innerHeight)
            }

            function _(e) {
                let t = (0, r.getWindowId)(e);
                l.default.dispatch({
                    type: "WINDOW_FULLSCREEN_CHANGE",
                    windowId: t,
                    isElementFullscreen: (0, u.isFullScreen)(null, e.document)
                })
            }

            function s(e) {
                let t = (0, r.getWindowId)(e),
                    n = e.document;
                l.default.dispatch({
                    type: "WINDOW_INIT",
                    windowId: t,
                    isElementFullscreen: (0, u.isFullScreen)(null, n),
                    focused: n.hasFocus(),
                    width: e.innerWidth,
                    height: e.innerHeight
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "WINDOW_UNLOAD",
                    windowId: (0, r.getWindowId)(e)
                })
            }