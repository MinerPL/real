            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                s = n("920636");
            let l = (e, t, n) => function(r) {
                return (0, i.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function o(e, t, n) {
                return (0, r.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, r.updateModal)(e, l(t, n, i))
            }