            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return i
                }
            });
            var t = a("37983");
            a("884691");
            var o = a("77078"),
                n = a("782340"),
                r = a("854659");

            function i(e) {
                let {
                    transitionState: s,
                    onClose: i
                } = e;
                return (0, t.jsxs)(o.ModalRoot, {
                    className: r.modal,
                    transitionState: s,
                    size: o.ModalSize.SMALL,
                    children: [(0, t.jsx)("img", {
                        "aria-hidden": !0,
                        alt: "",
                        src: a("39303"),
                        className: r.image
                    }), (0, t.jsxs)(o.ModalContent, {
                        className: r.content,
                        children: [(0, t.jsx)(o.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            className: r.text,
                            children: n.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_TITLE
                        }), (0, t.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: r.text,
                            children: n.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_SUBTITLE
                        }), (0, t.jsx)(o.Button, {
                            onClick: i,
                            color: o.Button.Colors.BRAND_NEW,
                            look: o.Button.Looks.FILLED,
                            children: n.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_CTA
                        })]
                    })]
                })
            }