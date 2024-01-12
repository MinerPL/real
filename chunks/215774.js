            "use strict";
            n.r(t), n.d(t, {
                GuildPickerDropdown: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("782340"),
                s = n("336859");

            function u(e) {
                let {
                    selectedGuildId: t,
                    onGuildChange: n,
                    eligibleApplicationSubscriptionGuilds: u
                } = e, a = u.map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, r.jsx)(i.SearchableSelect, {
                    className: s.select,
                    maxVisibleItems: 5,
                    value: t,
                    placeholder: l.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
                    options: a,
                    onChange: e => {
                        n(e)
                    }
                })
            }