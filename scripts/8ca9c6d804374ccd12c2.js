(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26594"], {
        597035: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("77078"),
                o = s("272030"),
                d = s("154867"),
                u = s("239448"),
                i = s("782340");

            function r(e) {
                let {
                    onSelect: t,
                    backgroundOption: s,
                    optionIsInUse: r
                } = e;
                return (0, n.jsx)(a.Menu, {
                    navId: "video-background-context",
                    onClose: o.closeContextMenu,
                    onSelect: t,
                    "aria-label": i.default.Messages.VIDEO_BACKGROUND_CONTEXT_MENU_LABEL,
                    children: (0, n.jsx)(a.MenuItem, {
                        id: "remove",
                        action: () => {
                            (0, u.isCustomBackgroundOption)(s) && ((0, d.deleteVideoFilterAsset)(s), (0, u.trackBackgroundOptionDeleted)(s))
                        },
                        label: (0, u.isCustomBackgroundOption)(s) ? r ? i.default.Messages.VIDEO_BACKGROUND_CANNOT_REMOVE_SELECTED : i.default.Messages.VIDEO_BACKGROUND_REMOVE : i.default.Messages.VIDEO_BACKGROUND_CANNOT_REMOVE_DEFAULT,
                        disabled: !(0, u.isCustomBackgroundOption)(s) || r,
                        color: "danger"
                    })
                })
            }
        }
    }
]);