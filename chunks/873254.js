            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("648911"),
                d = n("271938"),
                s = n("42887"),
                r = n("782340"),
                o = n("431024");

            function c(e) {
                let t = (0, i.useModalContext)(),
                    c = (0, l.useStateFromStores)([s.default], () => s.default.isVideoEnabled()),
                    f = (0, l.useStateFromStores)([d.default], () => d.default.getId() === e),
                    _ = (0, u.default)();
                return (!c || _) && f ? (0, a.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: c ? r.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : r.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                videoEnabled: c
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }