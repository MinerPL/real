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
var s = n("701909"),
  l = n("49111"),
  a = n("782340");

function i(e) {
  let {
    application: t,
    username: n,
    usernameHook: i = l.NOOP,
    applicationNameHook: r = l.NOOP
  } = e;
  return null != t ? a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: n,
    otherUsername: t.name,
    usernameHook: i,
    otherUsernameHook: r,
    helpCenterLink: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: n,
    usernameHook: i,
    helpCenterLink: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function r(e) {
  let {
    application: t,
    username: n,
    usernameHook: i = l.NOOP,
    applicationNameHook: r = l.NOOP
  } = e;
  return null != t ? a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: n,
    otherUsername: t.name,
    usernameHook: i,
    otherUsernameHook: r,
    helpCenterLink: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: n,
    usernameHook: i,
    helpCenterLink: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
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
  return null != t ? a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: n,
    otherUsername: t.name,
    usernameOnClick: i,
    otherUsernameOnClick: r,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
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
  return null != t ? a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: n,
    otherUsername: t.name,
    usernameOnClick: i,
    otherUsernameOnClick: r,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(l.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}