            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                },
                GuildSettingsIntegrationsNotice: function() {
                    return T
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("713841"),
                i = s("45299"),
                r = s("467733"),
                o = s("592407"),
                d = s("952943"),
                u = s("900938"),
                c = s("482391"),
                E = s("683830");

            function _(e) {
                let {
                    refToScroller: t
                } = e, s = (0, n.useStateFromStores)([u.default], () => u.default.getGuild()), {
                    section: l,
                    sectionId: i,
                    integrations: o,
                    editedIntegration: c,
                    webhooks: E,
                    editedWebhook: _,
                    isFetching: T,
                    errors: I
                } = (0, n.useStateFromStoresObject)([d.default], () => ({
                    editedIntegration: d.default.editedIntegration,
                    editedWebhook: d.default.editedWebhook,
                    errors: d.default.getErrors(),
                    integrations: d.default.integrations,
                    isFetching: d.default.isFetching(),
                    section: d.default.getSection(),
                    sectionId: d.default.getSectionId(),
                    webhooks: d.default.webhooks
                }));
                return null == s ? null : (0, a.jsx)(r.default, {
                    guild: s,
                    section: l,
                    sectionId: i,
                    integrations: o,
                    webhooks: E,
                    editedIntegration: c,
                    editedWebhook: _,
                    isFetching: T,
                    hasChanges: d.default.hasChanges,
                    errors: I,
                    refToScroller: t
                })
            }

            function T() {
                let {
                    guild: e,
                    submitting: t
                } = (0, n.useStateFromStoresObject)([u.default], () => ({
                    guild: u.default.getGuild(),
                    submitting: u.default.isSubmitting()
                }));
                return (0, a.jsx)(i.default, {
                    submitting: t,
                    onReset: () => {
                        l.default.init(), c.resetPermissions(), null != e && o.default.init(e.id)
                    },
                    onSave: () => {
                        if (null != e) {
                            if (null != d.default.editedIntegration) l.default.saveIntegration(e.id, d.default.editedIntegration);
                            else if (null != d.default.editedWebhook) l.default.saveWebhook(e.id, d.default.editedWebhook);
                            else if (null != d.default.editedCommandId) {
                                let t = d.default.getSectionId(),
                                    s = E.default.getEditedApplication();
                                if (null == t || null == s) return;
                                l.default.saveApplicationPermissions(t, e.id, Object.values(s))
                            }
                            u.default.hasChanges() && o.default.saveGuild(e.id, {
                                features: e.features
                            })
                        }
                    }
                })
            }