            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("713841"),
                r = l("679653"),
                o = l("27618"),
                d = l("697218"),
                u = l("280978"),
                c = l("87390"),
                f = l("49111"),
                m = l("782340"),
                I = l("808201");

            function T(e) {
                let {
                    webhooks: t,
                    selectableWebhookChannels: l,
                    lastCreatedWebhookId: T,
                    editedWebhook: N,
                    errors: E,
                    canNavigate: h
                } = e, g = a.useMemo(() => Object.values(l).map(e => ({
                    value: e.id,
                    label: (0, r.computeChannelName)(e, d.default, o.default, !0)
                })), [l]), p = a.useMemo(() => {
                    let e = {};
                    for (let n of t)
                        if (n.channel_id in e) e[n.channel_id].webhooks.push(n);
                        else {
                            let t = l[n.channel_id];
                            null != t && (e[n.channel_id] = {
                                channel: t,
                                webhooks: [n]
                            })
                        } return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name))
                }, [l, t]), S = a.useCallback(e => {
                    h() && (e === (null == N ? void 0 : N.id) ? i.default.stopEditingWebhook() : i.default.startEditingWebhook(e))
                }, [h, N]);
                return (0, n.jsx)("div", {
                    className: I.list,
                    children: p.map(e => {
                        let {
                            channel: t,
                            webhooks: l
                        } = e;
                        return function(e) {
                            let {
                                channel: t,
                                webhooks: l,
                                channelOptions: a,
                                lastCreatedWebhookId: i,
                                editedWebhook: T,
                                errors: N,
                                toggleWebhookExpand: E
                            } = e;
                            return (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(s.FormTitle, {
                                    className: I.groupHeader,
                                    children: m.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format({
                                        channelHook: () => (0, n.jsx)("span", {
                                            className: I.channelName,
                                            children: (0, r.computeChannelName)(t, d.default, o.default, !0)
                                        }, t.id)
                                    })
                                }), l.map(e => {
                                    var t;
                                    if (e.type === f.WebhookTypes.CHANNEL_FOLLOWER) return (0, n.jsx)(u.default, {
                                        webhook: e,
                                        editedWebhook: T,
                                        channelOptions: a,
                                        isExpanded: (null == T ? void 0 : T.id) === e.id,
                                        onToggleExpand: () => E(e.id),
                                        errors: N
                                    }, e.id);
                                    return (0, n.jsx)(c.default, {
                                        id: (t = e.id, "settings-integrations-webhook-".concat(t)),
                                        webhook: e,
                                        editedWebhook: T,
                                        channelOptions: a,
                                        isExpanded: (null == T ? void 0 : T.id) === e.id,
                                        isNew: i === e.id,
                                        onToggleExpand: () => E(e.id),
                                        errors: N
                                    }, e.id)
                                })]
                            }, t.id)
                        }({
                            channel: t,
                            webhooks: l,
                            channelOptions: g,
                            lastCreatedWebhookId: T,
                            editedWebhook: N,
                            errors: E,
                            toggleWebhookExpand: S
                        })
                    })
                })
            }