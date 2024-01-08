            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("648911"),
                l = a("271938"),
                s = a("42887"),
                i = a("782340"),
                o = a("431024");

            function f(e) {
                let t = (0, r.useModalContext)(),
                    f = (0, u.useStateFromStores)([s.default], () => s.default.isVideoEnabled()),
                    c = (0, u.useStateFromStores)([l.default], () => l.default.getId() === e),
                    m = (0, d.default)();
                return (!f || m) && c ? (0, n.jsx)(r.MenuItem, {
                    id: "change-video-background",
                    label: (0, n.jsx)("div", {
                        className: o.item,
                        children: f ? i.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : i.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("381736").then(a.bind(a, "381736"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                videoEnabled: f
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }