            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("917351"),
                a = i.n(s),
                l = i("446674"),
                r = i("77078"),
                d = i("320954"),
                o = i("679653"),
                u = i("419830"),
                c = i("233069"),
                S = i("42203"),
                h = i("245997"),
                g = i("27618"),
                N = i("697218"),
                f = i("612434"),
                _ = i("49111"),
                E = i("782340"),
                T = i("57317");
            let m = e => {
                let {
                    channel: {
                        type: t
                    }
                } = e;
                return (0, c.isGuildSelectableChannelType)(t) || t === _.ChannelTypes.GUILD_CATEGORY
            };

            function I(e) {
                var t;
                let {
                    guildId: i,
                    onSelected: s
                } = e;
                let {
                    channels: c,
                    categories: I
                } = (t = i, (0, l.useStateFromStoresObject)([h.default], () => {
                    let e = h.default.getCategories(t);
                    return {
                        channels: (0, d.default)(e._categories, e, m),
                        categories: e
                    }
                })), O = a(c).filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type !== _.ChannelTypes.GUILD_CATEGORY || null != I[t.id] && I[t.id].length > 0
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        value: t.id,
                        label: (0, o.computeChannelName)(t, N.default, g.default)
                    }
                }).value();
                return (0, n.jsxs)(r.FormItem, {
                    children: [(0, n.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        children: E.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                    }), (0, n.jsx)("div", {
                        className: T.input,
                        children: (0, n.jsx)(r.SearchableSelect, {
                            value: "",
                            onChange: s,
                            options: O,
                            renderOptionLabel: e => {
                                let t = S.default.getChannel(e.value);
                                if (null == t) return e.label;
                                let i = S.default.getChannel(t.parent_id),
                                    s = null != i ? i.name : null;
                                return (0, n.jsx)(f.default, {
                                    icon: (0, u.getChannelIconComponent)(t),
                                    title: e.label,
                                    subtitle: s
                                })
                            },
                            placeholder: E.default.Messages.SELECT_CHANNEL_OR_CATEGORY
                        })
                    })]
                })
            }