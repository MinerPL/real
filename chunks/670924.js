            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                },
                updateModalProps: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("551042"),
                a = n("920636");
            let o = (e, t, n) => function(s) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...s
                })
            };

            function l(e, t, n) {
                return (0, s.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, r) {
                return (0, s.updateModal)(e, o(t, n, r))
            }