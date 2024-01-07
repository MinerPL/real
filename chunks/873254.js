            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("648911"),
                s = n("271938"),
                u = n("42887"),
                o = n("782340"),
                d = n("431024");

            function c(e) {
                let t = (0, l.useModalContext)(),
                    c = (0, a.useStateFromStores)([u.default], () => u.default.isVideoEnabled()),
                    E = (0, a.useStateFromStores)([s.default], () => s.default.getId() === e),
                    f = (0, r.default)();
                return (!c || f) && E ? (0, i.jsx)(l.MenuItem, {
                    id: "change-video-background",
                    label: (0, i.jsx)("div", {
                        className: d.item,
                        children: c ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, i.jsx)(e, {
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