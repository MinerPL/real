            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("679653"),
                r = s("42203"),
                o = s("27618"),
                d = s("697218"),
                u = s("462392"),
                c = s("782340"),
                E = s("245225");

            function _(e) {
                var t;
                let {
                    action: s,
                    triggerType: _,
                    toggled: T,
                    onToggleAction: I
                } = e, S = e => () => I(e), N = (0, u.getActionInfo)(s.type, s, _), g = null === (t = s.metadata) || void 0 === t ? void 0 : t.channelId, f = (0, n.useStateFromStores)([d.default, o.default, r.default], () => {
                    let e = r.default.getChannel(g);
                    if (null == e) return null;
                    let t = (0, i.computeChannelName)(e, d.default, o.default);
                    return t
                }, [g]);
                if (null == N) return null;
                let {
                    headerText: A,
                    descriptionText: L,
                    icon: m
                } = N;
                return (0, a.jsxs)("div", {
                    className: E.actionContainer,
                    children: [(0, a.jsx)("div", {
                        className: E.actionIconContainer,
                        children: (0, a.jsx)(m, {
                            width: 24,
                            height: 24,
                            className: E.actionIcon
                        })
                    }), (0, a.jsxs)("div", {
                        className: E.actionTextContainer,
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-sm/semibold",
                            children: A
                        }), (0, a.jsx)(l.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/medium",
                            children: L
                        }), T && (0, a.jsxs)(l.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [null != f && c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_EDIT_HELPER.format({
                                channelName: f
                            }), (0, a.jsx)(l.Clickable, {
                                onClick: S(!0),
                                className: E.editChannel,
                                tag: "span",
                                role: "link",
                                children: c.default.Messages.EDIT_CHANNEL
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)(l.Checkbox, {
                            type: l.Checkbox.Types.INVERTED,
                            value: T,
                            onChange: S(!1),
                            className: E.actionCheckbox
                        })
                    })]
                })
            }