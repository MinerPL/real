(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14033"], {
        136394: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return u
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("281071"),
                c = t("77078"),
                s = t("272030"),
                i = t("782340");

            function u(e) {
                let {
                    attachmentUrl: n,
                    attachmentName: t,
                    onSelect: u
                } = e;
                return (0, a.jsx)(c.Menu, {
                    navId: "attachment-link-context",
                    onClose: s.closeContextMenu,
                    onSelect: u,
                    "aria-label": i.default.Messages.LINK_OPTIONS,
                    children: (0, a.jsxs)(c.MenuGroup, {
                        children: [(0, a.jsx)(c.MenuItem, {
                            id: "attachment-link-copy-link",
                            label: i.default.Messages.COPY_LINK,
                            action: () => {
                                (0, l.copy)(null != n ? n : "")
                            }
                        }), (0, a.jsx)(c.MenuItem, {
                            id: "attachment-link-copy-name",
                            label: i.default.Messages.COPY_TEXT,
                            action: () => {
                                (0, l.copy)(null != t ? t : "")
                            }
                        })]
                    }, "attachment-link-actions")
                })
            }
        }
    }
]);