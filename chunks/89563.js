"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("9759"),
  i = s("395635"),
  r = s("162236"),
  o = s("305961"),
  d = s("701909"),
  u = s("773336"),
  c = s("845579"),
  S = s("49111"),
  E = s("782340"),
  f = s("852003"),
  T = s("926622");

function m() {
  let e = c.ShowCurrentGame.useSetting(),
    t = c.DefaultGuildsActivityRestricted.useSetting(),
    s = u.isPlatformEmbedded ? E.default.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : E.default.Messages.SHOW_CURRENT_ACTIVITY_DESC,
    l = e => {
      c.DefaultGuildsActivityRestricted.updateSetting(e), ! function(e) {
        let t = () => {
          c.ActivityRestrictedGuilds.updateSetting(e ? Object.keys(o.default.getGuilds()) : [])
        };
        (0, n.openModal)(e => (0, a.jsx)(n.ConfirmModal, {
          header: E.default.Messages.USER_DM_SETTINGS_TITLE,
          confirmText: E.default.Messages.NO_TEXT,
          cancelText: E.default.Messages.YES_TEXT,
          onCancel: t,
          confirmButtonColor: n.Button.Colors.BRAND,
          ...e,
          children: (0, a.jsx)(n.Text, {
            variant: "text-md/normal",
            children: E.default.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
          })
        }))
      }(e)
    };
  return (0, a.jsxs)(n.FormSection, {
    className: T.marginBottom40,
    children: [(0, a.jsx)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      className: T.marginBottom8,
      children: E.default.Messages.ACTIVITY_STATUS
    }), (0, a.jsx)(n.FormSwitch, {
      value: e,
      onChange: e => c.ShowCurrentGame.updateSetting(e),
      note: s,
      children: E.default.Messages.SHOW_CURRENT_ACTIVITY
    }), (0, a.jsx)(n.FormSwitch, {
      value: !t,
      note: E.default.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({
        helpdeskArticle: d.default.getArticleURL(S.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
      }),
      onChange: e => l(!e),
      children: E.default.Messages.ACTIVITY_RESTRICTION_DEFAULT
    })]
  })
}

function _() {
  let e = c.AllowActivityPartyPrivacyFriends.useSetting(),
    t = c.AllowActivityPartyPrivacyVoiceChannel.useSetting();
  return (0, a.jsxs)(n.FormSection, {
    className: T.marginBottom40,
    children: [(0, a.jsx)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      className: T.marginBottom8,
      children: E.default.Messages.ACTIVITY_PARTY_PRIVACY
    }), (0, a.jsx)(n.FormSwitch, {
      value: e,
      note: E.default.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
      onChange: e => c.AllowActivityPartyPrivacyFriends.updateSetting(e),
      children: E.default.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
    }), (0, a.jsx)(n.FormSwitch, {
      value: t,
      note: E.default.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
      onChange: e => c.AllowActivityPartyPrivacyVoiceChannel.updateSetting(e),
      children: E.default.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
    })]
  })
}

function g() {
  return (0, a.jsxs)(n.FormSection, {
    className: T.marginBottom40,
    children: [(0, a.jsxs)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      className: T.marginBottom8,
      children: [E.default.Messages.BROADCASTING_SETTINGS, (0, a.jsx)(i.default, {
        className: f.betaTag
      })]
    }), (0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      className: T.marginBottom20,
      children: E.default.Messages.BROADCASTING_SETTINGS_DESCRIPTION
    }), (0, a.jsx)(n.FormItem, {
      children: (0, a.jsx)(n.Button, {
        onClick: () => (0, r.openBroadcastingPrivacySettingsModal)(),
        size: n.ButtonSizes.SMALL,
        children: E.default.Messages.BROADCASTING_SETTINGS_CTA
      })
    })]
  })
}

function h() {
  return (0, a.jsx)(n.FormSection, {
    className: T.marginBottom40,
    children: (0, a.jsx)(n.FormNotice, {
      type: n.FormNotice.Types.PRIMARY,
      body: E.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
        termsLink: S.MarketingURLs.TERMS,
        privacyLink: S.MarketingURLs.PRIVACY
      })
    })
  })
}

function I() {
  let {
    canBroadcast: e
  } = l.default.useExperiment({
    location: "user_settings_activity_privacy"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)(n.FormSection, {
    tag: n.FormTitleTags.H1,
    title: E.default.Messages.ACTIVITY_PRIVACY,
    children: [(0, a.jsx)(m, {}), (0, a.jsx)(_, {}), e && (0, a.jsx)(g, {}), (0, a.jsx)(h, {})]
  })
}