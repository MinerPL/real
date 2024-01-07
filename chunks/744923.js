            "use strict";
            n.r(t), n.d(t, {
                mount: function() {
                    return s
                },
                unmount: function() {
                    return i
                }
            });
            var a = n("913144");

            function s() {
                a.default.dispatch({
                    type: "NOW_PLAYING_MOUNTED"
                })
            }

            function i() {
                a.default.dispatch({
                    type: "NOW_PLAYING_UNMOUNTED"
                })
            }