            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("845579"),
                l = n("49111");

            function o(e, t) {
                i.AlwaysPreviewVideo.getSetting() ? (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === l.AppContext.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
                }) : null == e || e()
            }