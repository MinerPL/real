            "use strict";
            n.r(t), n.d(t, {
                getPrivateChannelIntegrationAddedSystemMessageContent: function() {
                    return i
                },
                getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
                    return r
                },
                getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
                    return o
                },
                getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
                    return u
                }
            });
            var a = n("701909"),
                s = n("49111"),
                l = n("782340");

            function i(e) {
                let {
                    application: t,
                    username: n,
                    usernameHook: i = s.NOOP,
                    applicationNameHook: r = s.NOOP
                } = e;
                return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
                    username: n,
                    otherUsername: t.name,
                    usernameHook: i,
                    otherUsernameHook: r,
                    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
                    username: n,
                    usernameHook: i,
                    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                })
            }

            function r(e) {
                let {
                    application: t,
                    username: n,
                    usernameHook: i = s.NOOP,
                    applicationNameHook: r = s.NOOP
                } = e;
                return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
                    username: n,
                    otherUsername: t.name,
                    usernameHook: i,
                    otherUsernameHook: r,
                    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
                    username: n,
                    usernameHook: i,
                    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                })
            }

            function o(e) {
                let {
                    application: t,
                    username: n,
                    usernameOnClick: i,
                    applicationNameOnClick: r,
                    medium: o
                } = e;
                return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
                    username: n,
                    otherUsername: t.name,
                    usernameOnClick: i,
                    otherUsernameOnClick: r,
                    medium: o,
                    helpCenterLink: {
                        url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                    }
                }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
                    username: n,
                    usernameOnClick: i,
                    medium: o,
                    helpCenterLink: {
                        url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                    }
                })
            }

            function u(e) {
                let {
                    application: t,
                    username: n,
                    usernameOnClick: i,
                    applicationNameOnClick: r,
                    medium: o
                } = e;
                return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
                    username: n,
                    otherUsername: t.name,
                    usernameOnClick: i,
                    otherUsernameOnClick: r,
                    medium: o,
                    helpCenterLink: {
                        url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                    }
                }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
                    username: n,
                    usernameOnClick: i,
                    medium: o,
                    helpCenterLink: {
                        url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                    }
                })
            }