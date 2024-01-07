            "use strict";
            n.r(t), n.d(t, {
                useShowActivityIndicator: function() {
                    return s
                }
            });
            var a = n("446674"),
                l = n("191225");
            let s = () => {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getState().shouldShowNewActivityIndicator);
                return e
            }