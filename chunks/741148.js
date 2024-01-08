            "use strict";
            n.r(t), n.d(t, {
                focus: function() {
                    return u
                },
                hidden: function() {
                    return r
                },
                resized: function() {
                    return o
                },
                fullscreenChange: function() {
                    return I
                },
                init: function() {
                    return d
                },
                unload: function() {
                    return a
                }
            });
            var E = n("917351"),
                i = n("913144"),
                l = n("563680"),
                _ = n("816454");

            function u(e, t) {
                i.default.dispatch({
                    type: "WINDOW_FOCUS",
                    windowId: (0, _.getWindowId)(e),
                    focused: t
                })
            }

            function r(e) {
                i.default.dispatch({
                    type: "WINDOW_HIDDEN",
                    windowId: (0, _.getWindowId)(e)
                })
            }
            let A = (0, E.memoize)(e => (0, E.debounce)((t, n) => {
                i.default.dispatch({
                    type: "WINDOW_RESIZED",
                    windowId: e,
                    width: t,
                    height: n
                })
            }, 100));

            function o(e) {
                let t = (0, _.getWindowId)(e),
                    n = A(t);
                n(e.innerWidth, e.innerHeight)
            }

            function I(e) {
                let t = (0, _.getWindowId)(e);
                i.default.dispatch({
                    type: "WINDOW_FULLSCREEN_CHANGE",
                    windowId: t,
                    isElementFullscreen: (0, l.isFullScreen)(null, e.document)
                })
            }

            function d(e) {
                let t = (0, _.getWindowId)(e),
                    n = e.document;
                i.default.dispatch({
                    type: "WINDOW_INIT",
                    windowId: t,
                    isElementFullscreen: (0, l.isFullScreen)(null, n),
                    focused: n.hasFocus(),
                    width: e.innerWidth,
                    height: e.innerHeight
                })
            }

            function a(e) {
                i.default.dispatch({
                    type: "WINDOW_UNLOAD",
                    windowId: (0, _.getWindowId)(e)
                })
            }