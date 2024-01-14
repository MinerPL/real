"use strict";
s.r(t), s.d(t, {
  GuildSettingsOverviewNotice: function() {
    return eA
  },
  default: function() {
    return em
  }
}), s("222007"), s("843762");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("627445"),
  o = s.n(r),
  d = s("917351"),
  u = s.n(d),
  c = s("446674"),
  E = s("669491"),
  _ = s("819855"),
  T = s("77078"),
  I = s("45299"),
  S = s("734575"),
  N = s("841098"),
  g = s("812204"),
  f = s("716241"),
  A = s("685665"),
  L = s("320954"),
  m = s("679653"),
  C = s("419830"),
  O = s("578899"),
  h = s("298878"),
  R = s("634544"),
  D = s("836275"),
  M = s("379532"),
  G = s("677315"),
  x = s("146005"),
  p = s("843257"),
  U = s("139321"),
  v = s("597517"),
  j = s("424960"),
  P = s("656913"),
  y = s("694187"),
  b = s("608684"),
  B = s("42203"),
  F = s("245997"),
  H = s("525065"),
  V = s("957255"),
  k = s("27618"),
  w = s("697218"),
  Y = s("145131"),
  K = s("181114"),
  W = s("612434"),
  z = s("118503"),
  X = s("956089"),
  Z = s("315102"),
  J = s("568734"),
  Q = s("449008"),
  q = s("701909"),
  $ = s("592407"),
  ee = s("900938"),
  et = s("53948"),
  es = s("49111"),
  ea = s("944305"),
  en = s("75015"),
  el = s("453252"),
  ei = s("782340"),
  er = s("560427"),
  eo = s("482644"),
  ed = s("282725");
let eu = "NO_AFK_CHANNEL",
  ec = "NO_SYSTEM_CHANNEL",
  eE = "".concat(60),
  e_ = "".concat(300),
  eT = "".concat(900),
  eI = "".concat(1800),
  eS = "".concat(3600);

function eN(e) {
  return eg(e[0])
}

function eg(e) {
  if (null == e) return;
  let {
    label: t,
    channel: s,
    category: n
  } = e, l = (0, C.getChannelIconComponent)(s), i = null != n ? (0, m.computeChannelName)(n, w.default, k.default) : null;
  return (0, a.jsx)(W.default, {
    title: t,
    icon: l,
    subtitle: i
  })
}

function ef(e) {
  return {
    value: e.id,
    label: (0, m.computeChannelName)(e, w.default, k.default),
    channel: e,
    category: B.default.getChannel(e.parent_id)
  }
}
let eA = () => {
  let {
    guild: e,
    originalGuild: t,
    submitting: s,
    errors: l
  } = (0, c.useStateFromStoresObject)([ee.default], () => ee.default.getProps()), i = n.useMemo(() => (0, et.getSettingsErrorMessage)(l), [l]), r = n.useCallback(() => {
    if (null == e) return;
    let s = {
        name: e.name,
        icon: e.icon,
        splash: e.splash,
        afkChannelId: e.afkChannelId,
        afkTimeout: e.afkTimeout,
        systemChannelId: e.systemChannelId,
        safetyAlertsChannelId: e.safetyAlertsChannelId,
        verificationLevel: e.verificationLevel,
        defaultMessageNotifications: e.defaultMessageNotifications,
        explicitContentFilter: e.explicitContentFilter,
        description: e.description,
        banner: e.banner,
        systemChannelFlags: e.systemChannelFlags,
        publicUpdatesChannelId: e.publicUpdatesChannelId,
        premiumProgressBarEnabled: e.premiumProgressBarEnabled,
        homeHeader: e.homeHeader
      },
      a = (0, Q.areSetsEqual)(new Set(e.features), new Set(t.features));
    !a && (s.features = e.features), $.default.saveGuild(e.id, s)
  }, [e, t]), o = n.useCallback(() => {
    null != e && $.default.init(e.id)
  }, [e]);
  return (0, a.jsx)(I.default, {
    submitting: s,
    errorMessage: i,
    onSave: r,
    onReset: o
  })
};
class eL extends n.PureComponent {
  componentDidMount() {
    if (this.props.subsection === es.GuildSettingsSubsections.DISPLAY && null != this._displaySectionRef.current) {
      let e = this._displaySectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === es.GuildSettingsSubsections.INVITE && null != this._inviteSectionRef.current) {
      let e = this._inviteSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === es.GuildSettingsSubsections.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
      let e = this._notificationSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    }
  }
  handleNameChange(e) {
    $.default.updateGuild({
      name: e
    })
  }
  handleAFKChannelChange(e) {
    e === eu && (e = null), $.default.updateGuild({
      afkChannelId: e
    })
  }
  handleAFKTimeoutChange(e) {
    $.default.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }
  handleSystemChannelChange(e) {
    e === ec && (e = null), $.default.updateGuild({
      systemChannelId: e
    })
  }
  handleDefaultMessageNotificationsChange(e) {
    let {
      value: t
    } = e;
    $.default.updateGuild({
      defaultMessageNotifications: t
    })
  }
  handleSplashChange(e) {
    $.default.updateGuild({
      splash: e
    })
  }
  handleSystemChannelFlagsChange(e, t) {
    let {
      guild: s
    } = this.props, a = (0, J.setFlag)(s.systemChannelFlags, e, t);
    $.default.updateGuild({
      systemChannelFlags: a
    })
  }
  handlePremiumProgressBarEnabledChange(e) {
    $.default.updateGuild({
      premiumProgressBarEnabled: e
    })
  }
  handleChangeDescription(e) {
    $.default.updateGuild({
      description: e
    })
  }
  renderBaseSettings() {
    let {
      guild: e,
      errors: t,
      canManageGuild: s
    } = this.props;
    return (0, a.jsxs)(Y.default, {
      className: i(er.baseSection),
      children: [(0, a.jsxs)(Y.default, {
        basis: "50%",
        justify: Y.default.Justify.BETWEEN,
        children: [(0, a.jsxs)(Y.default.Child, {
          wrap: !0,
          children: [(0, a.jsx)(b.default, {
            showIcon: !0,
            name: e.name,
            image: e.icon,
            onChange: this.handleIconChange,
            disabled: !s,
            hint: ei.default.Messages.CHANGE_ICON,
            makeURL: t => Z.default.getGuildIconURL({
              id: e.id,
              icon: t,
              canAnimate: !0,
              size: 100
            }),
            className: i({
              [er.avatarUploader]: s,
              [er.avatarUploaderDisabled]: !s
            }),
            imageClassName: i(er.avatarUploaderInner, {
              [er.avatarUploaderInnerEmpty]: null == e.icon
            })
          }), null != t.icon ? (0, a.jsx)("div", {
            className: er.iconError,
            children: t.icon
          }) : null]
        }), (0, a.jsxs)(Y.default, {
          direction: Y.default.Direction.VERTICAL,
          align: Y.default.Align.START,
          style: {
            maxWidth: 180
          },
          children: [(0, a.jsx)(T.FormText, {
            type: T.FormTextTypes.DESCRIPTION,
            className: er.marginBottom8,
            children: ei.default.Messages.GUILD_SETTINGS_ICON_RECOMMEND
          }), (0, a.jsxs)(T.Button, {
            look: T.ButtonLooks.OUTLINED,
            color: T.ButtonColors.PRIMARY,
            disabled: !s,
            className: er.marginTop8,
            onClick: this.handleUploadImage,
            children: [ei.default.Messages.UPLOAD_IMAGE, (0, a.jsx)(y.default, {
              ref: this._imageInputRef,
              onChange: this.handleOpenImageCroppingModal,
              disabled: !s
            })]
          })]
        })]
      }), (0, a.jsx)(Y.default.Child, {
        basis: "50%",
        children: (0, a.jsx)(T.FormItem, {
          title: ei.default.Messages.FORM_LABEL_SERVER_NAME,
          className: er.marginBottom20,
          children: (0, a.jsx)(T.TextInput, {
            type: "text",
            disabled: !s,
            value: e.name,
            maxLength: 100,
            onChange: this.handleNameChange,
            error: t.name
          })
        })
      })]
    })
  }
  renderAFKSection() {
    var e;
    let {
      guild: t,
      canManageGuild: s,
      channels: n
    } = this.props, l = null != t.afkTimeout ? "".concat(t.afkTimeout) : null, i = null !== (e = t.afkChannelId) && void 0 !== e ? e : eu, r = [{
      value: eE,
      label: ei.default.Messages.DURATION_MINUTES.format({
        minutes: 1
      })
    }, {
      value: e_,
      label: ei.default.Messages.DURATION_MINUTES.format({
        minutes: 5
      })
    }, {
      value: eT,
      label: ei.default.Messages.DURATION_MINUTES.format({
        minutes: 15
      })
    }, {
      value: eI,
      label: ei.default.Messages.DURATION_MINUTES.format({
        minutes: 30
      })
    }, {
      value: eS,
      label: ei.default.Messages.DURATION_HOURS.format({
        hours: 1
      })
    }], o = u(n).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === es.ChannelTypes.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return ef(t)
    }).value();
    return o.unshift({
      value: eu,
      label: ei.default.Messages.NO_AFK_CHANNEL
    }), (0, a.jsxs)(T.FormSection, {
      className: er.divider,
      children: [(0, a.jsxs)(Y.default, {
        children: [(0, a.jsx)(Y.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(T.FormItem, {
            title: ei.default.Messages.FORM_LABEL_AFK_CHANNEL,
            children: (0, a.jsx)(T.SingleSelect, {
              value: i,
              options: o,
              onChange: this.handleAFKChannelChange,
              isDisabled: !s,
              renderOptionLabel: eg,
              renderOptionValue: eN
            })
          })
        }), (0, a.jsx)(Y.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(T.FormItem, {
            title: ei.default.Messages.FORM_LABEL_AFK_TIMEOUT,
            children: (0, a.jsx)(T.SingleSelect, {
              value: l,
              options: r,
              isDisabled: i === eu || !s,
              onChange: this.handleAFKTimeoutChange
            })
          })
        })]
      }), (0, a.jsx)(T.FormText, {
        className: er.marginTop8,
        type: T.FormTextTypes.DESCRIPTION,
        children: ei.default.Messages.FORM_HELP_AFK_CHANNEL
      })]
    })
  }
  renderJoinNotificationSection() {
    var e;
    let {
      guild: t,
      channels: s,
      canManageGuild: n,
      eligibleForDeadchatPrompt: l
    } = this.props, r = null !== (e = t.systemChannelId) && void 0 !== e ? e : ec, o = u(s).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === es.ChannelTypes.GUILD_TEXT
    }).map(e => {
      let {
        channel: t
      } = e;
      return ef(t)
    }).value();
    o.unshift({
      value: ec,
      label: ei.default.Messages.NO_SYSTEM_CHANNEL
    });
    let d = (0, p.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings)(t),
      c = d || (0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      E = d || (0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, a.jsxs)(T.FormSection, {
      className: er.divider,
      children: [(0, a.jsx)(T.FormTitle, {
        children: ei.default.Messages.FORM_LABEL_SYSTEM_CHANNEL
      }), (0, a.jsx)(T.SingleSelect, {
        value: r,
        options: o,
        isDisabled: !n,
        onChange: this.handleSystemChannelChange,
        renderOptionLabel: eg,
        renderOptionValue: eN
      }), (0, a.jsx)(T.FormText, {
        className: er.marginTop8,
        type: T.FormTextTypes.DESCRIPTION,
        children: ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL
      }), (0, a.jsx)(T.FormSwitch, {
        className: er.marginTop20,
        onChange: this.handleShowJoinsChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !n || r === ec,
        children: ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGES
      }), (0, a.jsx)(T.FormSwitch, {
        className: i(er.marginReset, er.marginTop20),
        onChange: this.handleShowJoinRepliesChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !n || r === ec,
        children: ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGE_REPLIES
      }), (0, a.jsx)(T.FormSwitch, {
        className: i(er.marginReset, er.marginTop20),
        onChange: this.handleShowSubscriptionsChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
        hideBorder: !0,
        disabled: !n || r === ec,
        children: ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTION_MESSAGES
      }), (0, a.jsx)(T.FormSwitch, {
        className: i(er.marginReset, er.marginTop20),
        onChange: this.handleShowGuildRemindersChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !n || r === ec,
        children: ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL_GUILD_REMINDERS
      }), c && (0, a.jsx)(T.FormSwitch, {
        className: i(er.marginReset, er.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
        value: !(0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !n || r === ec,
        children: ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGES
      }), E && (0, a.jsx)(T.FormSwitch, {
        className: i(er.marginReset, er.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !n || r === ec,
        children: ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGE_REPLIES
      }), l && (0, a.jsx)(T.FormSwitch, {
        className: i(er.marginReset, er.marginTop20),
        onChange: this.handleShowDeadchatPromptMessageChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, es.SystemChannelFlags.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
        hideBorder: !0,
        disabled: !n || r === ec,
        children: (0, a.jsxs)("div", {
          className: er.flexRow,
          children: [ei.default.Messages.FORM_HELP_SYSTEM_CHANNEL_DEADCHAT_PROMPT_MESSAGE, (0, a.jsx)(h.default, {})]
        })
      })]
    })
  }
  renderNotificationSection() {
    let {
      guild: e,
      canManageGuild: t,
      guildMemberCount: s
    } = this.props, n = [{
      name: ei.default.Messages.FORM_LABEL_ALL_MESSAGES,
      value: es.UserNotificationSettings.ALL_MESSAGES,
      desc: null != s && s >= es.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? ei.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATIONS_LARGE_GUILD_NOTIFY_ALL : null
    }, {
      name: ei.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
      value: es.UserNotificationSettings.ONLY_MENTIONS
    }];
    return (0, a.jsx)("div", {
      ref: this._notificationSectionRef,
      children: (0, a.jsxs)(T.FormSection, {
        className: er.divider,
        children: [(0, a.jsx)(T.FormTitle, {
          children: ei.default.Messages.FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS
        }), (0, a.jsx)(T.FormText, {
          type: T.FormTextTypes.DESCRIPTION,
          className: er.marginBottom20,
          children: ei.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO
        }), (0, a.jsx)(T.FormText, {
          type: T.FormTextTypes.DESCRIPTION,
          className: er.marginBottom20,
          children: ei.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_TIP
        }), (0, a.jsx)(T.RadioGroup, {
          options: n,
          value: e.defaultMessageNotifications,
          disabled: !t,
          onChange: this.handleDefaultMessageNotificationsChange
        })]
      })
    })
  }
  renderSummariesSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props, s = (0, S.canGuildUseConversationSummaries)(e, !1);
    return s ? (0, a.jsx)("div", {
      children: (0, a.jsx)(T.FormSection, {
        className: er.divider,
        children: (0, a.jsx)(T.FormSwitch, {
          className: i(er.marginTop8, er.marginBottom8),
          onChange: this.handleConversationSummariesToggle,
          value: e.hasFeature(es.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
          hideBorder: !0,
          note: ei.default.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
            helpdeskArticle: q.default.getArticleURL(es.HelpdeskArticles.CONVERSATION_SUMMARIES)
          }),
          disabled: !t,
          children: (0, a.jsxs)("div", {
            className: er.badgedItem,
            children: [ei.default.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE, (0, a.jsx)(X.TextBadge, {
              text: ei.default.Messages.BETA,
              color: E.default.unsafe_rawColors.BRAND_500.css,
              className: er.betaTag
            })]
          })
        })
      })
    }) : null
  }
  renderServerInviteBGSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props, s = e.hasFeature(es.GuildFeatures.INVITE_SPLASH), n = t && s, l = (0, a.jsx)(P.default, {
      image: e.splash,
      makeURL: t => null != t ? Z.default.getGuildSplashURL({
        id: e.id,
        splash: t
      }) : null,
      disabled: !n,
      onChange: this.handleSplashChange,
      hint: ei.default.Messages.CHANGE_SPLASH,
      enabled: n,
      maxFileSizeBytes: el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      onFileSizeError: () => (0, j.default)(el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
    });
    return (0, a.jsx)("div", {
      ref: this._inviteSectionRef,
      children: (0, a.jsx)(T.FormSection, {
        className: er.divider,
        children: (0, a.jsxs)(Y.default, {
          basis: "50%",
          direction: Y.default.Direction.HORIZONTAL,
          align: Y.default.Justify.START,
          children: [(0, a.jsxs)(Y.default.Child, {
            wrap: !0,
            basis: "50%",
            children: [(0, a.jsxs)(T.FormTitle, {
              className: er.flexFormTitle,
              children: [(0, a.jsx)("div", {
                children: ei.default.Messages.GUILD_SETTINGS_SERVER_INVITE_BACKGROUND
              }), (0, a.jsx)(R.default, {
                guild: e,
                guildFeature: es.GuildFeatures.INVITE_SPLASH,
                className: er.guildFeatureAvailabilityIndicator,
                onClick: this.handleInviteSplashUpsellIndicator
              })]
            }), (0, a.jsx)(T.FormText, {
              type: T.FormTextTypes.DESCRIPTION,
              className: er.marginBottom8,
              children: ei.default.Messages.GUILD_SETTINGS_SPLASH_DESCRIPTION
            }), (0, a.jsx)(T.FormText, {
              type: T.FormTextTypes.DESCRIPTION,
              children: ei.default.Messages.GUILD_SETTINGS_SPLASH_RECOMMEND.format({
                articleURL: q.default.getArticleURL(es.HelpdeskArticles.GUILD_INVITE_SPLASH)
              })
            }), s ? (0, a.jsxs)(T.Button, {
              disabled: !n,
              color: T.ButtonColors.BRAND_NEW,
              className: er.marginTop16,
              children: [ei.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(y.default, {
                disabled: !n,
                onChange: this.handleSplashChange,
                maxFileSizeBytes: el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                onFileSizeError: () => (0, j.default)(el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
              })]
            }) : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)]
          }), (0, a.jsx)(Y.default.Child, {
            wrap: !0,
            basis: "50%",
            children: s ? l : (0, a.jsx)(T.Clickable, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: er.upsell,
              onClick: this.handleInviteSplashUpsellUpload,
              children: l
            })
          })]
        })
      })
    })
  }
  renderHomeHeaderSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props, s = e.hasFeature(es.GuildFeatures.BANNER), n = (0, G.canSeeGuildHome)(e.id), l = t && n && s, {
      hasNewHeader: i
    } = x.GuildHomeHeaderRedesignExperiment.getCurrentConfig({
      guildId: e.id,
      location: "4b6c0f_1"
    });
    if (!n || !i) return null;
    let r = (0, a.jsx)(P.default, {
      image: e.homeHeader,
      makeURL: t => null != t ? Z.default.getGuildHomeHeaderURL({
        id: e.id,
        homeHeader: t
      }) : null,
      disabled: !l,
      onChange: this.handleHomeHeaderChange,
      hint: ei.default.Messages.CHANGE_HOME_HEADER,
      enabled: l,
      maxFileSizeBytes: el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      onFileSizeError: () => (0, j.default)(el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
    });
    return (0, a.jsx)(T.FormSection, {
      className: er.divider,
      children: (0, a.jsxs)(Y.default, {
        basis: "50%",
        direction: Y.default.Direction.HORIZONTAL,
        align: Y.default.Justify.START,
        children: [(0, a.jsxs)(Y.default.Child, {
          wrap: !0,
          basis: "50%",
          children: [(0, a.jsxs)(T.FormTitle, {
            className: er.flexFormTitle,
            children: [(0, a.jsx)("div", {
              children: ei.default.Messages.GUILD_SETTINGS_HOME_HEADER
            }), (0, a.jsx)(R.default, {
              guild: e,
              guildFeature: es.GuildFeatures.BANNER,
              className: er.guildFeatureAvailabilityIndicator,
              onClick: this.handleBannerUpsellIndicator
            })]
          }), (0, a.jsx)(T.FormText, {
            type: T.FormTextTypes.DESCRIPTION,
            className: er.marginBottom8,
            children: ei.default.Messages.GUILD_SETTINGS_HOME_HEADER_DESCRIPTION
          }), (0, a.jsx)(T.FormText, {
            type: T.FormTextTypes.DESCRIPTION,
            children: ei.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
          }), s ? (0, a.jsxs)(T.Button, {
            disabled: !l,
            color: T.ButtonColors.BRAND_NEW,
            className: er.marginTop16,
            children: [ei.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(y.default, {
              disabled: !l,
              onChange: this.handleHomeHeaderChange,
              maxFileSizeBytes: el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: () => (0, j.default)(el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
            })]
          }) : this.uploadBGUpsellButton(this.handleBannerUpsellButton)]
        }), (0, a.jsx)(Y.default.Child, {
          wrap: !0,
          basis: "50%",
          children: s ? r : (0, a.jsx)(T.Clickable, {
            "aria-hidden": !0,
            tabIndex: -1,
            className: er.upsell,
            onClick: this.handleBannerUpsellUpload,
            children: r
          })
        })]
      })
    })
  }
  renderBanner() {
    let {
      guild: e,
      canManageGuild: t,
      analyticsLocations: s
    } = this.props, n = e.hasFeature(es.GuildFeatures.BANNER), l = e.hasFeature(es.GuildFeatures.ANIMATED_BANNER), i = n && t, r = (0, a.jsx)(P.default, {
      image: e.banner,
      makeURL: t => null != t ? Z.default.getGuildBannerURL({
        id: e.id,
        banner: t
      }, l) : null,
      disabled: !i,
      onChange: this.handleBannerChange,
      hint: ei.default.Messages.CHANGE_SPLASH,
      onOpenImageSelectModal: () => eC(en.UploadTypes.GUILD_BANNER, el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES, this.handleBannerChange, !0, {
        page: es.AnalyticsPages.GUILD_SETTINGS,
        section: es.AnalyticsSections.GUILD_BANNER
      }, s),
      enabled: i
    }), o = (0, a.jsx)(T.Button, {
      disabled: !i,
      color: T.Button.Colors.BRAND_NEW,
      className: er.marginTop16,
      onClick: () => eC(en.UploadTypes.GUILD_BANNER, el.MAX_IMAGE_UPLOAD_FILESIZE_BYTES, this.handleBannerChange, !0, {
        page: es.AnalyticsPages.GUILD_SETTINGS,
        section: es.AnalyticsSections.GUILD_BANNER
      }, s),
      children: ei.default.Messages.UPLOAD_BACKGROUND
    });
    return (0, a.jsx)(T.FormSection, {
      className: er.divider,
      children: (0, a.jsxs)(Y.default, {
        basis: "50%",
        direction: Y.default.Direction.HORIZONTAL,
        align: Y.default.Justify.START,
        children: [(0, a.jsxs)(Y.default.Child, {
          wrap: !0,
          basis: "50%",
          children: [(0, a.jsxs)(T.FormTitle, {
            className: er.flexFormTitle,
            children: [(0, a.jsx)("div", {
              children: ei.default.Messages.FORM_LABEL_SERVER_BANNER
            }), (0, a.jsx)(R.default, {
              guild: e,
              guildFeature: es.GuildFeatures.BANNER,
              className: er.guildFeatureAvailabilityIndicator,
              onClick: this.handleBannerUpsellIndicator
            })]
          }), (0, a.jsx)(T.FormText, {
            type: T.FormTextTypes.DESCRIPTION,
            className: er.marginBottom8,
            children: ei.default.Messages.FORM_HELP_SERVER_BANNER
          }), (0, a.jsx)(T.FormText, {
            type: T.FormTextTypes.DESCRIPTION,
            children: ei.default.Messages.GUILD_SETTINGS_BANNER_RECOMMEND.format({
              articleURL: q.default.getArticleURL(es.HelpdeskArticles.GUILD_BANNER_SPLASH)
            })
          }), n ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)]
        }), (0, a.jsx)(Y.default.Child, {
          wrap: !0,
          basis: "50%",
          children: n ? r : (0, a.jsx)(T.Clickable, {
            "aria-hidden": !0,
            tabIndex: -1,
            className: er.upsell,
            onClick: this.handleBannerUpsellUpload,
            children: r
          })
        })]
      })
    })
  }
  renderProgressBar() {
    let {
      guild: e,
      canManageGuild: t,
      theme: s
    } = this.props;
    return (0, a.jsx)(T.FormSection, {
      children: (0, a.jsxs)(Y.default, {
        align: Y.default.Align.START,
        children: [(0, a.jsxs)(Y.default, {
          basis: "50%",
          direction: Y.default.Direction.VERTICAL,
          align: Y.default.Align.STRETCH,
          children: [(0, a.jsx)(T.FormSwitch, {
            className: i(er.marginTop8, er.marginBottom8),
            onChange: this.handlePremiumProgressBarEnabledChange,
            value: e.premiumProgressBarEnabled,
            hideBorder: !0,
            disabled: !t,
            children: ei.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_TITLE
          }), (0, a.jsx)(T.FormText, {
            type: T.FormTextTypes.DESCRIPTION,
            className: er.marginBottom8,
            children: ei.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_DESCRIPTION
          })]
        }), (0, a.jsx)(Y.default.Child, {
          wrap: !0,
          basis: "50%",
          children: (0, a.jsx)("img", {
            alt: ei.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_IMG_ALT,
            src: (0, _.isThemeLight)(s) ? ed : eo,
            className: er.progressBarImage
          })
        })]
      })
    })
  }
  renderDisplaySection() {
    return (0, a.jsx)("div", {
      ref: this._displaySectionRef,
      children: (0, a.jsxs)(T.FormSection, {
        title: ei.default.Messages.DISPLAY,
        tag: T.FormTitleTags.H1,
        className: er.divider,
        children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection(), this.renderHomeHeaderSection()]
      })
    })
  }
  render() {
    return (0, a.jsxs)(T.FormSection, {
      title: ei.default.Messages.SERVER_OVERVIEW,
      tag: T.FormTitleTags.H1,
      children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderNotificationSection(), this.renderDisplaySection()]
    })
  }
  constructor(...e) {
    super(...e), this._imageInputRef = n.createRef(), this._displaySectionRef = n.createRef(), this._inviteSectionRef = n.createRef(), this._notificationSectionRef = n.createRef(), this.handleIconChange = e => {
      $.default.updateGuild({
        icon: e
      })
    }, this.handleOpenImageCroppingModal = (e, t) => {
      (0, T.openModalLazy)(async () => {
        let {
          default: n
        } = await s.el("57015").then(s.bind(s, "57015"));
        return s => (0, a.jsx)(n, {
          onCrop: this.handleIconChange,
          imgURI: e,
          file: t,
          ...s
        })
      })
    }, this.handleUploadImage = e => {
      var t;
      e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue())
    }, this.handleShowJoinsChange = e => this.handleSystemChannelFlagsChange(es.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS, !e), this.handleShowSubscriptionsChange = e => this.handleSystemChannelFlagsChange(es.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), this.handleShowGuildRemindersChange = e => {
      this.handleSystemChannelFlagsChange(es.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e)
    }, this.handleShowJoinRepliesChange = e => this.handleSystemChannelFlagsChange(es.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), this.handleShowGuildRoleSubscriptionPurchaseMessages = e => {
      this.handleSystemChannelFlagsChange(es.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e)
    }, this.handleShowDeadchatPromptMessageChange = e => {
      this.handleSystemChannelFlagsChange(es.SystemChannelFlags.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e)
    }, this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange = e => {
      this.handleSystemChannelFlagsChange(es.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e)
    }, this.handleHomeHeaderChange = (e, t) => {
      if (null == e || void 0 === t) {
        $.default.updateGuild({
          homeHeader: null
        });
        return
      }(0, T.openModalLazy)(async () => {
        let {
          default: n
        } = await s.el("57015").then(s.bind(s, "57015"));
        return s => (0, a.jsx)(n, {
          imgURI: e,
          file: t,
          onCrop: e => $.default.updateGuild({
            homeHeader: e
          }),
          uploadType: en.UploadTypes.HOME_HEADER,
          ...s
        })
      })
    }, this.handleBannerChange = (e, t) => {
      let {
        guild: s,
        analyticsLocations: a
      } = this.props, n = null == t ? void 0 : t.type, l = {
        page: es.AnalyticsPages.GUILD_SETTINGS,
        section: es.AnalyticsSections.ANIMATED_GUILD_BANNER_UPSELL,
        object: "temp"
      };
      if (null != n && null != e) {
        if ("image/gif" !== n || s.hasFeature(es.GuildFeatures.ANIMATED_BANNER)) {
          if (!s.hasFeature(es.GuildFeatures.BANNER)) {
            l.object = es.AnalyticsObjects.IMAGE_CROPPING_MODAL, (0, D.openGuildBannerUpsellModal)({
              guild: s,
              analyticsLocations: a,
              analyticsLocation: l,
              banner: e,
              isGIF: !1
            });
            return
          }
        } else {
          l.object = es.AnalyticsObjects.GIF_CROPPING_MODAL, (0, D.openGuildBannerUpsellModal)({
            guild: s,
            analyticsLocations: a,
            analyticsLocation: l,
            banner: e,
            isGIF: !0
          });
          return
        }
      }
      $.default.updateGuild({
        banner: e
      })
    }, this.handleShowModalUpsell = (e, t, s, a) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: n,
        analyticsLocations: l
      } = this.props;
      (0, f.trackWithMetadata)(es.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: t,
          object: es.AnalyticsObjects.LEARN_MORE
        },
        guild_id: null == n ? void 0 : n.id,
        location_stack: l
      }), (0, M.default)({
        analyticsLocations: l,
        analyticsSourceLocation: {
          section: t,
          object: s,
          page: es.AnalyticsPages.GUILD_SETTINGS
        },
        guild: n,
        perks: a
      })
    }, this.handleInviteSplashUpsellIndicator = e => {
      this.handleShowModalUpsell(e, es.AnalyticsSections.GUILD_INVITE_BACKGROUND, es.AnalyticsObjects.BADGE, (0, ea.guildInviteUpsellPerks)())
    }, this.handleInviteSplashUpsellButton = e => {
      this.handleShowModalUpsell(e, es.AnalyticsSections.GUILD_INVITE_BACKGROUND, es.AnalyticsObjects.BUTTON_CTA, (0, ea.guildInviteUpsellPerks)())
    }, this.handleInviteSplashUpsellUpload = e => {
      this.handleShowModalUpsell(e, es.AnalyticsSections.GUILD_INVITE_BACKGROUND, es.AnalyticsObjects.UPLOAD_IMAGE, (0, ea.guildInviteUpsellPerks)())
    }, this.handleBannerUpsellIndicator = e => {
      this.handleShowModalUpsell(e, es.AnalyticsSections.GUILD_BANNER, es.AnalyticsObjects.BADGE, (0, ea.guildBannerUpsellPerks)())
    }, this.handleBannerUpsellButton = e => {
      this.handleShowModalUpsell(e, es.AnalyticsSections.GUILD_BANNER, es.AnalyticsObjects.BUTTON_CTA, (0, ea.guildBannerUpsellPerks)())
    }, this.handleBannerUpsellUpload = e => {
      this.handleShowModalUpsell(e, es.AnalyticsSections.GUILD_BANNER, es.AnalyticsObjects.UPLOAD_IMAGE, (0, ea.guildBannerUpsellPerks)())
    }, this.handleConversationSummariesToggle = e => {
      let {
        guild: t
      } = this.props, s = new Set(t.features);
      e ? s.add(es.GuildFeatures.SUMMARIES_ENABLED_BY_USER) : s.delete(es.GuildFeatures.SUMMARIES_ENABLED_BY_USER), $.default.updateGuild({
        features: s
      })
    }, this.uploadBGUpsellButton = e => (0, a.jsxs)(K.default, {
      color: T.Button.Colors.GREEN,
      className: i(er.marginTop16),
      innerClassName: er.upsellButton,
      onClick: e,
      children: [(0, a.jsx)(z.default, {
        height: 16,
        width: 16,
        className: er.premiumUpsellBadge
      }), " ", ei.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    })
  }
}

function em() {
  var e;
  let {
    guild: t,
    errors: s,
    submitting: l,
    subsection: i
  } = (0, c.useStateFromStoresObject)([ee.default], () => ee.default.getProps()), r = (0, N.default)(), {
    AnalyticsLocationProvider: d,
    analyticsLocations: u
  } = (0, A.default)(g.default.OVERVIEW);
  n.useEffect(() => {
    (0, v.hideHotspot)(U.HotspotLocations.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL)
  }, []);
  let E = (0, c.useStateFromStores)([F.default], () => F.default.getCategories(null == t ? void 0 : t.id)),
    _ = n.useMemo(() => (0, L.default)(E._categories, E), [E]),
    {
      canManageGuild: T,
      isGuildAdmin: I
    } = (0, c.useStateFromStoresObject)([V.default], () => ({
      canManageGuild: V.default.can(es.Permissions.MANAGE_GUILD, t),
      isGuildAdmin: V.default.can(es.Permissions.ADMINISTRATOR, t)
    })),
    S = (0, c.useStateFromStores)([H.default], () => H.default.getMemberCount(null == t ? void 0 : t.id)),
    f = (0, c.useStateFromStores)([w.default], () => w.default.getCurrentUser());
  o(null != f, "GuildSettingsOverview: currentUser cannot be undefined");
  let {
    enableDeadchat: m
  } = O.SimpleDeadchatPromptExperiment.useExperiment({
    guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
    location: "guild_settings"
  }, {
    disable: null == t,
    autoTrackExposure: !0
  });
  return null == t ? null : (0, a.jsx)(d, {
    children: (0, a.jsx)(eL, {
      channels: _,
      canManageGuild: T,
      isGuildAdmin: I,
      subsection: i,
      guild: t,
      errors: s,
      submitting: l,
      currentUser: f,
      guildMemberCount: S,
      theme: r,
      analyticsLocations: u,
      eligibleForDeadchatPrompt: m
    })
  })
}

function eC(e, t, n) {
  let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
    i = arguments.length > 4 ? arguments[4] : void 0,
    r = arguments.length > 5 ? arguments[5] : void 0;
  (0, T.openModalLazy)(async () => {
    let {
      default: o
    } = await s.el("420333").then(s.bind(s, "420333"));
    return s => (0, a.jsx)(o, {
      maxFileSizeBytes: t,
      onComplete: n,
      uploadType: e,
      showUpsellHeader: l,
      analyticsLocation: i,
      analyticsLocations: r,
      ...s
    })
  })
}