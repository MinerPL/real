"use strict";
s.r(t), s.d(t, {
  GuildSettingsDiscoveryNotice: function() {
    return k
  },
  default: function() {
    return Y
  }
}), s("222007"), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("748820"),
  i = s("446674"),
  r = s("77078"),
  o = s("45299"),
  d = s("828116"),
  u = s("679653"),
  c = s("804578"),
  E = s("271889"),
  _ = s("75766"),
  T = s("758276"),
  I = s("453910"),
  S = s("283167"),
  N = s("868246"),
  g = s("324105"),
  f = s("385976"),
  A = s("407063"),
  L = s("694187"),
  m = s("608684"),
  C = s("446066"),
  O = s("459698"),
  h = s("923959"),
  R = s("957255"),
  D = s("27618"),
  M = s("697218"),
  G = s("414943"),
  x = s("315102"),
  p = s("794818"),
  U = s("592407"),
  v = s("900938"),
  j = s("26991"),
  P = s("796178"),
  y = s("237938"),
  b = s("53948"),
  B = s("49111"),
  F = s("447621"),
  H = s("782340"),
  V = s("15145");
let k = i.default.connectStores([v.default], () => {
  let {
    guild: e,
    originalGuild: t,
    submitting: s,
    guildMetadata: a
  } = v.default.getProps();
  return {
    guild: e,
    submitting: s,
    onReset() {
      null != e && U.default.init(e.id)
    },
    onSave() {
      null != e && ((0, T.trackDiscoverySettingsChange)(e, t), U.default.saveGuild(e.id, {
        features: e.features,
        discoverySplash: e.discoverySplash,
        description: e.description,
        safetyAlertsChannelId: e.safetyAlertsChannelId,
        rulesChannelId: e.rulesChannelId,
        preferredLocale: e.preferredLocale
      }), S.saveGuildMetadata({
        guildId: e.id,
        primaryCategoryId: a.primaryCategoryId,
        keywords: a.keywords,
        emojiDiscoverabilityEnabled: a.emojiDiscoverabilityEnabled,
        partnerActionedTimestamp: a.partnerActionedTimestamp,
        partnerApplicationTimestamp: a.partnerApplicationTimestamp,
        isPublished: a.isPublished,
        reasonsToJoin: a.reasonsToJoin,
        socialLinks: a.socialLinks,
        about: a.about
      }))
    }
  }
})(o.default);
class w extends n.PureComponent {
  async componentDidMount() {
    let {
      guild: e
    } = this.props;
    if (null != e) {
      (0, E.fetchDiscoveryChecklist)(e.id).then(() => {
        (0, c.trackGuildSettingsDiscoveryViewed)(e.id)
      }), S.maybeFetchGuildDiscoveryCategories(), S.fetchMetadataForGuild(e.id);
      let t = await (0, p.getDiscoverableGuild)(e.id);
      null != t && this.setState({
        discoverableGuild: t
      });
      let s = this.checkForLowerMemberCountReqEnabled(e);
      s && I.DiscoveryRequirementsM2Experiment.trackExposure({
        guildId: e.id,
        location: "006266_1"
      })
    }
  }
  renderDiscoverableSection() {
    let {
      guild: e,
      isGuildAdmin: t
    } = this.props;
    if (null == e) return;
    let s = e.hasFeature(B.GuildFeatures.DISCOVERABLE);
    return (0, a.jsxs)(r.FormSection, {
      className: V.twoColumnFormSection,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.FormTitle, {
          className: V.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: V.formDescription,
          children: H.default.Messages.FORM_HELP_ENABLE_DISCOVERABLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: V.formDescription,
          children: H.default.Messages.FORM_HELP_DISCOVERABLE_CHANGE_TIME
        }), (0, a.jsx)(r.Tooltip, {
          text: t ? null : H.default.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY,
          children: e => (0, a.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: this.handleToggleDiscovery,
            color: s ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
            hover: s ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
            disabled: !t,
            ...e,
            children: s ? H.default.Messages.GUILD_SETTINGS_DISABLE_DISCOVERABLE : H.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
          })
        })]
      }), (0, a.jsx)(g.default, {
        className: V.guildCard,
        loading: null == e,
        guild: e
      })]
    })
  }
  renderCoverImageSection() {
    let {
      guild: e,
      errors: t,
      canManageGuild: s
    } = this.props;
    if (null != e) return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(r.FormSection, {
        className: V.twoColumnFormSection,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(r.FormTitle, {
            className: V.formTitle,
            children: H.default.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
          }), (0, a.jsx)(r.FormText, {
            type: r.FormTextTypes.DESCRIPTION,
            className: V.formDescription,
            children: H.default.Messages.FORM_HELP_DISCOVERY_COVER_IMAGE
          }), (0, a.jsxs)(r.Button, {
            size: r.Button.Sizes.SMALL,
            color: r.Button.Colors.PRIMARY,
            hover: r.Button.Colors.PRIMARY,
            children: [H.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(L.default, {
              disabled: !s,
              onChange: this.handleSplashChange
            })]
          })]
        }), (0, a.jsx)("div", {
          className: V.imageUploaderWrapper,
          children: (0, a.jsx)(m.default, {
            image: e.discoverySplash,
            makeURL: t => x.default.getGuildDiscoverySplashURL({
              id: e.id,
              splash: t,
              size: 512 * (0, A.getDevicePixelRatio)()
            }),
            disabled: !s,
            onChange: this.handleSplashChange,
            hint: H.default.Messages.CHANGE_SPLASH,
            imageClassName: V.imageUploaderInnerSquare,
            hideSize: !0
          })
        })]
      }), (null == t ? void 0 : t.discovery_splash) != null ? (0, a.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: t.discovery_splash
      }) : null]
    })
  }
  renderEmojiDiscoverabilitySection() {
    var e;
    let {
      canManageGuild: t,
      guildMetadata: s,
      guild: n
    } = this.props, {
      discoverableGuild: i
    } = this.state, {
      emojiDiscoverabilityEnabled: o
    } = s, d = i;
    if (null == d && null != n) {
      let e = f.default.getGuildEmoji(n.id);
      d = {
        ...n,
        premiumSubscriptionCount: null == n ? void 0 : n.premiumSubscriberCount,
        emojis: e,
        emojiCount: e.length,
        presenceCount: 1234,
        memberCount: 1234
      }
    }
    let u = null != d ? C.default.createFromDiscoverableGuild(d) : null,
      c = null == d ? void 0 : null === (e = d.emojis) || void 0 === e ? void 0 : e[0],
      E = null != c ? {
        name: c.require_colons ? ":".concat(c.name, ":") : c.name,
        emojiId: c.id,
        animated: c.animated,
        jumboable: !0
      } : {};
    return (0, a.jsxs)(r.FormSection, {
      className: V.twoColumnFormSection,
      children: [(0, a.jsxs)("div", {
        className: V.formColumnLeft,
        children: [(0, a.jsx)(r.FormTitle, {
          className: V.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_TITLE
        }), (0, a.jsx)(r.FormText, {
          className: V.description,
          type: r.FormTextTypes.DESCRIPTION,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DESCRIPTION
        }), (0, a.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          color: o ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
          hover: o ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
          disabled: !t,
          onClick: this.handleToggleEmojiDiscoverability,
          children: o ? H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DISABLE : H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_ENABLE
        })]
      }), null != u && u.isDiscoverable() && (0, a.jsx)(O.CustomGuildEmojiPopout, {
        expressionSourceGuild: u,
        node: E,
        closePopout: B.NOOP,
        nonce: (0, l.v4)(),
        demoMode: !0
      })]
    })
  }
  renderLocaleSelector() {
    let {
      guild: e,
      canManageGuild: t,
      localeOptions: s
    } = this.props;
    if (null != e) return (0, a.jsxs)(r.FormSection, {
      className: V.twoColumnFormSection,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.FormTitle, {
          className: V.formTitle,
          children: H.default.Messages.FORM_LABEL_SERVER_LANGUAGE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: V.formDescription,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_LOCALE_HELP
        })]
      }), (0, a.jsx)("div", {
        className: V.formSelect,
        children: (0, a.jsx)(r.SingleSelect, {
          value: e.preferredLocale,
          options: s,
          onChange: this.handleLocaleChange,
          isDisabled: !t
        })
      })]
    })
  }
  renderCategoriesSection() {
    let {
      canManageGuild: e,
      guildMetadata: t,
      primaryCategoryOptions: s,
      errors: n,
      guild: l
    } = this.props;
    if (null != l) return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(r.FormSection, {
        children: [(0, a.jsx)(r.FormTitle, {
          className: V.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_TITLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: V.description,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_DESCRIPTION
        })]
      }), (0, a.jsx)(G.default, {
        value: t.primaryCategoryId === F.DEFAULT_DISCOVERY_CATEGORY_ID ? null : t.primaryCategoryId,
        placeholder: H.default.Messages.SELECT,
        options: s,
        onChange: this.handlePrimaryCategoryChange,
        disabled: !e,
        searchable: !0,
        clearable: !0
      }), (0, a.jsxs)(r.FormSection, {
        className: V.noDividerFormSection,
        children: [(0, a.jsx)(r.FormTitle, {
          className: V.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
        }), (0, a.jsx)(j.default, {
          guild: l,
          guildMetadata: t
        })]
      }), (null == n ? void 0 : n.category) != null ? (0, a.jsx)(r.Text, {
        color: "text-danger",
        className: V.error,
        variant: "text-sm/normal",
        children: n.category
      }) : null]
    })
  }
  renderKeywordsSection() {
    let {
      canManageGuild: e,
      guildMetadata: t,
      errors: s
    } = this.props;
    return (0, a.jsxs)(r.FormSection, {
      children: [(0, a.jsx)(r.FormTitle, {
        className: V.formTitle,
        children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_TITLE
      }), (0, a.jsx)(r.FormText, {
        className: V.description,
        type: r.FormTextTypes.DESCRIPTION,
        children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_DESCRIPTION.format()
      }), (0, a.jsx)(d.default, {
        tags: t.keywords,
        onRemoveTag: this.handleRemoveKeyword,
        onAddTag: this.handleAddKeyword,
        maxTags: b.MAX_KEYWORDS,
        maxTaxLength: b.MAX_KEYWORD_LENGTH,
        disabled: !e
      }), (null == s ? void 0 : s.keywords) != null ? (0, a.jsx)(r.Text, {
        color: "text-danger",
        className: V.error,
        variant: "text-sm/normal",
        children: s.keywords
      }) : null]
    })
  }
  render() {
    let {
      guild: e,
      discoveryChecklist: t,
      isGuildAdmin: s
    } = this.props;
    if (null == e || null == t) return null;
    let n = (0, T.getSettingsView)(e, t);
    switch (n) {
      case T.DiscoverySettingsViews.INTRO:
        return (0, a.jsx)(y.default, {
          guild: e,
          onEnableDiscovery: this.handleEnableDiscovery,
          isGuildAdmin: s
        });
      case T.DiscoverySettingsViews.DISQUALIFIED:
        return (0, a.jsx)(P.default, {
          guild: e
        });
      case T.DiscoverySettingsViews.SETTINGS:
        return (0, a.jsxs)(r.FormSection, {
          className: V.discoverySettings,
          title: H.default.Messages.DISCOVERY,
          tag: r.FormTitleTags.H1,
          children: [this.renderDiscoverableSection(), (0, a.jsx)(r.FormDivider, {
            className: V.divider
          }), this.renderCoverImageSection(), (0, a.jsx)(r.FormDivider, {
            className: V.divider
          }), this.renderEmojiDiscoverabilitySection(), (0, a.jsx)(r.FormDivider, {
            className: V.divider
          }), this.renderCategoriesSection(), (0, a.jsx)(r.FormDivider, {
            className: V.divider
          }), this.renderKeywordsSection(), (0, a.jsx)(r.FormDivider, {
            className: V.divider
          }), this.renderLocaleSelector()]
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), this.state = {
      discoverableGuild: null
    }, this.checkForLowerMemberCountReqEnabled = e => {
      let {
        isGuildAdmin: t
      } = this.props, s = e.hasFeature(B.GuildFeatures.COMMUNITY), {
        enableLowerMemberCountReq: a
      } = I.DiscoveryRequirementsM2Experiment.getCurrentConfig({
        guildId: e.id,
        location: "006266_2"
      }, {
        disable: !(t && s),
        autoTrackExposure: !1
      });
      return a
    }, this.handleToggleDiscovery = () => {
      let {
        guild: e
      } = this.props;
      if (null == e) return;
      let t = new Set(e.features);
      e.hasFeature(B.GuildFeatures.DISCOVERABLE) ? t.delete(B.GuildFeatures.DISCOVERABLE) : t.add(B.GuildFeatures.DISCOVERABLE), U.default.updateGuild({
        features: t
      })
    }, this.handleEnableDiscovery = async () => {
      let e = await (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("941089").then(s.bind(s, "941089"));
        return t => {
          let {
            ...s
          } = t;
          return (0, a.jsx)(e, {
            ...s
          })
        }
      }, {
        onCloseRequest: () => {
          null != e && (0, r.closeModal)(e)
        }
      })
    }, this.handleSplashChange = e => {
      U.default.updateGuild({
        discoverySplash: e
      })
    }, this.handleLocaleChange = e => {
      U.default.updateGuild({
        preferredLocale: e
      })
    }, this.handlePrimaryCategoryChange = e => {
      var t;
      let {
        guild: s
      } = this.props;
      (null == s ? void 0 : s.id) != null && S.updateGuildPrimaryCategory(null == s ? void 0 : s.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : F.DEFAULT_DISCOVERY_CATEGORY_ID)
    }, this.handleRemoveKeyword = e => {
      let {
        guild: t,
        guildMetadata: s
      } = this.props;
      if ((null == t ? void 0 : t.id) == null) return;
      let a = [...s.keywords];
      a.splice(e, 1), S.updateGuildKeywords(t.id, a)
    }, this.handleAddKeyword = e => {
      let {
        guild: t,
        guildMetadata: s
      } = this.props, {
        keywords: a
      } = s;
      if ((null == t ? void 0 : t.id) != null) !(a.length >= b.MAX_KEYWORDS) && S.updateGuildKeywords(t.id, [...a, e])
    }, this.handleToggleEmojiDiscoverability = () => {
      let {
        guild: e,
        guildMetadata: t
      } = this.props, {
        emojiDiscoverabilityEnabled: s
      } = t;
      (null == e ? void 0 : e.id) != null && S.updateGuildEmojiDiscoverabilityEnabled(e.id, !s)
    }
  }
}
var Y = i.default.connectStores([v.default, R.default, _.default, h.default, N.default, M.default, D.default], () => {
  let {
    guild: e,
    errors: t,
    submitting: s,
    guildMetadata: a
  } = v.default.getProps(), n = R.default.can(B.Permissions.MANAGE_GUILD, e), l = R.default.can(B.Permissions.ADMINISTRATOR, e), i = null != e ? _.default.getDiscoveryChecklist(e.id) : null, r = null != e ? h.default.getChannels(e.id) : null, o = [];
  null != r && r[0, h.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
    let {
      channel: t
    } = e;
    t.type === B.ChannelTypes.GUILD_TEXT && o.push({
      value: t.id,
      label: (0, u.computeChannelName)(t, M.default, D.default, !0)
    })
  });
  let d = N.default.getPrimaryCategories().map(e => {
      let {
        categoryId: t,
        name: s
      } = e;
      return {
        value: t,
        label: s
      }
    }),
    c = (0, F.calculateLocaleOptions)();
  return {
    guild: e,
    errors: t,
    submitting: s,
    discoveryChecklist: i,
    selectableChannels: o,
    canManageGuild: n,
    isGuildAdmin: l,
    guildMetadata: a,
    primaryCategoryOptions: d,
    localeOptions: c
  }
})(w)