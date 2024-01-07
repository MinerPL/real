            "use strict";
            s.r(t), s.d(t, {
                openChangelog: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                r = s("234222");

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !(!e && (0, n.hasAnyModalOpen)()) && (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await s.el("170935").then(s.bind(s, "170935"));
                    return t => (0, a.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: r.CHANGELOG_MODAL_KEY
                })
            }