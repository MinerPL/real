            "use strict";
            n.r(t), n.d(t, {
                open: function() {
                    return s
                },
                close: function() {
                    return r
                },
                hide: function() {
                    return i
                },
                show: function() {
                    return l
                },
                moveTo: function() {
                    return u
                },
                updateRect: function() {
                    return o
                },
                switchPIPFocus: function() {
                    return d
                }
            });
            var a = n("913144");

            function s(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_OPEN",
                    id: e,
                    component: t,
                    props: n
                })
            }

            function r(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_CLOSE",
                    id: e
                })
            }

            function i(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_HIDE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_SHOW",
                    id: e
                })
            }

            function u(e, t) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_MOVE",
                    id: e,
                    position: t
                })
            }

            function o(e, t) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_UPDATE_RECT",
                    id: e,
                    rect: t
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW",
                    id: e
                })
            }