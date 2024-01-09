            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("884691");

            function s(e, t) {
                let i = n.useRef(e);
                n.useEffect(() => {
                    e.length > i.current.length && t(), i.current = e
                }, [e, t])
            }