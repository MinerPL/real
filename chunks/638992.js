            "use strict";
            n.r(t), n.d(t, {
                GuildSelector: function() {
                    return E
                },
                WebhookGuildChannelSelector: function() {
                    return f
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("316693"),
                s = n("605451"),
                r = n("774811"),
                u = n("577776"),
                o = n("8222"),
                d = n("49111"),
                c = n("782340"),
                _ = n("246097");

            function E(e) {
                let {
                    error: t,
                    selectedGuildId: n,
                    onGuildChange: a,
                    guilds: o,
                    disabled: E = !1
                } = e, f = o.filter(e => l.default.has(e.permissions, d.Permissions.MANAGE_GUILD)).map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, i.jsxs)("div", {
                    className: _.selectorGroup,
                    children: [(0, i.jsx)(s.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: _.sectionLabel,
                        children: c.default.Messages.OAUTH2_ADD_TO_GUILD
                    }), null != t && "" !== t ? (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: t
                    }) : null, (0, i.jsx)(r.SearchableSelect, {
                        wrapperClassName: _.wrapper,
                        className: _.select,
                        maxVisibleItems: 5,
                        value: n,
                        placeholder: c.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                        options: f,
                        onChange: e => {
                            a(e)
                        },
                        isDisabled: E
                    }), (0, i.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        className: _.label,
                        children: c.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
                    })]
                })
            }

            function f(e) {
                let {
                    selectedGuildId: t,
                    selectedChannelId: n,
                    onChannelChange: l,
                    error: d
                } = e, [E, f] = a.useState(null);
                a.useEffect(() => {
                    (async function e() {
                        if (null != t) {
                            let e = await (0, o.fetchChannels)(t);
                            f(e)
                        }
                    })()
                }, [t]), a.useEffect(() => {
                    null != E && null != n && null == E.find(e => e.id === n) && l(null)
                }, [E, l, n]);
                let h = (null != E ? E : []).map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return null == t ? null : (0, i.jsxs)("div", {
                    className: _.selectorGroup,
                    children: [(0, i.jsx)(s.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: _.sectionLabel,
                        children: c.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
                    }), null != d && "" !== d ? (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: d
                    }) : null, (0, i.jsx)(r.SearchableSelect, {
                        wrapperClassName: _.wrapper,
                        className: _.select,
                        maxVisibleItems: 5,
                        onChange: e => {
                            l(e)
                        },
                        placeholder: c.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                        value: n,
                        options: h
                    }), (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: _.label,
                        children: c.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
                    })]
                })
            }