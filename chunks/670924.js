            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("920636");
            let s = (e, t, n) => function(i) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function o(e, t, n) {
                return (0, i.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
                return (0, i.updateModal)(e, s(t, n, r))
            }