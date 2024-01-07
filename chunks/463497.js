            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("545158"),
                s = l("599110"),
                r = l("412707"),
                c = l("49111"),
                o = l("782340"),
                d = l("960919"),
                u = l("196118");

            function p() {
                let e = (0, r.useApplicationDirectoryHistory)(e => e.guildId);
                return (0, i.jsxs)("div", {
                    className: d.container,
                    role: "contentinfo",
                    children: [(0, i.jsx)("img", {
                        className: d.image,
                        src: u,
                        alt: ""
                    }), (0, i.jsxs)("div", {
                        className: d.content,
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_HEADING
                        }), (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_BODY
                        })]
                    }), (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        onClick: function() {
                            s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                                cta: "new_to_apps",
                                current_page: r.ApplicationDirectoryViews.HOME,
                                guild_id: e
                            }), (0, n.default)("https://discord.com/blog/how-to-use-discord-apps")
                        },
                        className: d.button,
                        children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_CTA
                    })]
                })
            }