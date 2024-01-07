            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                r = l("923959"),
                i = l("305961"),
                u = l("957255"),
                o = l("697218"),
                d = l("316133"),
                c = l("223913"),
                f = l("379385"),
                m = l("644169"),
                S = l("782340"),
                C = l("524939");

            function E(e) {
                let {
                    selectedChannelId: t,
                    guildId: l,
                    onChangeSelectedChannelId: E
                } = e, h = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()), _ = (0, a.useStateFromStores)([i.default, r.default, u.default], () => (0, c.getStreamEligibleChannels)(r.default.getChannels(l), i.default, u.default)), p = (0, a.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), g = _.map(e => {
                    var l;
                    return {
                        name: (0, n.jsx)(f.default, {
                            channel: e,
                            users: null === (l = p[e.id]) || void 0 === l ? void 0 : l.filter(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id !== (null == h ? void 0 : h.id)
                            }).map(e => {
                                let {
                                    user: t
                                } = e;
                                return t
                            }),
                            selected: e.id === t
                        }),
                        value: e.id
                    }
                });
                return (0, n.jsx)(m.default, {
                    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: C.channelSelectScrollerInner,
                    children: (0, n.jsx)(s.RadioGroup, {
                        options: g,
                        value: t,
                        itemInfoClassName: C.channelInfoWrapper,
                        itemTitleClassName: C.channelTitleWrapper,
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return E(t)
                        }
                    })
                })
            }