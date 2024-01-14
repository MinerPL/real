"use strict";
t.r(s), t.d(s, {
  default: function() {
    return eA
  }
}), t("794252"), t("222007"), t("808653"), t("424973");
var a = t("37983"),
  r = t("884691"),
  i = t("414456"),
  l = t.n(i),
  o = t("627445"),
  n = t.n(o),
  u = t("917351"),
  d = t.n(u),
  c = t("506838"),
  m = t("446674"),
  f = t("819855"),
  p = t("77078"),
  _ = t("913144"),
  E = t("583367"),
  C = t("79112"),
  I = t("841098"),
  A = t("206230"),
  T = t("449918"),
  L = t("788506"),
  x = t("858619"),
  N = t("865372"),
  S = t("41170"),
  M = t("506885"),
  j = t("217513"),
  g = t("289918"),
  h = t("430312"),
  R = t("305961"),
  U = t("697218"),
  P = t("625634"),
  v = t("476263"),
  y = t("754474"),
  O = t("118503"),
  b = t("216422"),
  k = t("258078"),
  w = t("599110"),
  V = t("315102"),
  z = t("701909"),
  D = t("50885"),
  G = t("296253"),
  W = t("279171"),
  Y = t("510928"),
  H = t("646718"),
  K = t("49111"),
  B = t("590456"),
  F = t("782340"),
  Z = t("702369"),
  q = t("297273"),
  J = t("571721"),
  Q = t("581798"),
  X = t("859018"),
  $ = t("136000"),
  ee = t("944059"),
  es = t("757561"),
  et = t("537525"),
  ea = t("502249"),
  er = t("682642"),
  ei = t("289194");
let el = D.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  eo = {
    boostItemVisual: $,
    emojiStickersVisual: ee,
    screenShareItemVisual: er,
    uploadsMessagesItemVisual: es,
    uploadsMessagesItemVisualV2: et,
    PL: ea,
    TR: ei
  },
  en = {
    boostItemVisual: q,
    emojiStickersVisual: J,
    screenShareItemVisual: er,
    uploadsMessagesItemVisual: Q,
    uploadsMessagesItemVisualV2: X,
    PL: ea,
    TR: ei
  };

function eu() {
  let e = (0, I.default)();
  return (0, f.isThemeDark)(e) ? en : eo
}

function ed(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: r
  } = e;
  return (0, a.jsxs)("div", {
    className: Z.whatYouLoseItem,
    children: [(0, a.jsxs)("div", {
      className: Z.whatYouLoseItemLeftColumn,
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, a.jsx)(p.Button, {
        look: p.Button.Looks.LINK,
        color: p.Button.Colors.LINK,
        size: p.Button.Sizes.NONE,
        className: Z.whatYouLoseItemLearnMore,
        onClick: t,
        children: F.default.Messages.LEARN_MORE
      })]
    }), (0, a.jsx)("div", {
      className: Z.whatYouLoseItemRightColumn,
      children: r()
    })]
  })
}

function ec(e) {
  let {
    ...s
  } = e, t = (0, I.default)(), {
    profileTheme: i
  } = r.useContext(h.UserProfileContext), l = (0, T.useThemedColorValue)(K.ThemeColor.INTERACTIVE_ACTIVE, null != i ? i : t);
  return (0, a.jsx)(b.default, {
    ...s,
    color: l.hex
  })
}

function em(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: r
  } = e, i = (0, j.default)(s.id), l = (0, m.useStateFromStores)([A.default], () => A.default.useReducedMotion), o = t === H.PremiumTypes.TIER_1, n = (0, c.match)(null == i ? void 0 : i.premiumType).with(H.PremiumTypes.TIER_2, () => (0, a.jsxs)(h.default, {
    forceShowPremium: !0,
    user: s,
    profileType: B.UserProfileTypes.CANCEL_MODAL,
    className: Z.profileCard,
    children: [(0, a.jsx)("div", {
      className: Z.profileBanner,
      children: (0, a.jsx)(g.default, {
        displayProfile: i,
        user: s,
        allowEdit: !1,
        profileType: B.UserProfileTypes.CANCEL_MODAL
      })
    }), (0, a.jsx)(el, {
      className: Z.profileAvatar,
      src: s.getAvatarURL(void 0, (0, p.getAvatarSize)(p.AvatarSizes.SIZE_56), !l),
      size: p.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsx)(h.default.Inner, {
      className: Z.profileInner,
      children: (0, a.jsxs)("div", {
        className: Z.profileUserInfo,
        children: [(0, a.jsx)(y.default, {
          className: Z.profileNameTag,
          usernameClass: Z.profileNameTagUsername,
          name: s.toString()
        }), (0, a.jsx)(ec, {
          className: Z.profilePremiumIcon
        })]
      })
    })]
  })).otherwise(() => (0, a.jsxs)("div", {
    className: Z.profileCardTier1,
    children: [(0, a.jsx)(el, {
      className: Z.profileAvatarTier1,
      src: s.getAvatarURL(void 0, (0, p.getAvatarSize)(p.AvatarSizes.SIZE_56), !l),
      size: p.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsxs)("div", {
      className: Z.profileUserInfoTier1,
      children: [(0, a.jsx)(y.default, {
        className: Z.profileNameTag,
        usernameClass: Z.profileNameTagUsername,
        name: s.toString()
      }), (0, a.jsx)(b.default, {
        className: Z.profilePremiumIcon
      })]
    })]
  }));
  return (0, a.jsx)(ed, {
    description: o ? F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
    onLearnMore: () => {
      r(), C.default.open(K.UserSettingsSections.PROFILE_CUSTOMIZATION), w.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => n
  }, "profile-item")
}

function ef(e) {
  let {
    premiumType: s
  } = e, t = (0, m.useStateFromStores)([A.default], () => A.default.useReducedMotion), r = (0, L.useFrequentlyUsedEmojis)(null), i = r.filter(e => e.type === x.EmojiTypes.GUILD && (e.animated || null != e.guildId)).slice(0, 3), l = (0, m.useStateFromStoresArray)([N.default], () => N.default.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - i.length)), o = eu().emojiStickersVisual, n = s === H.PremiumTypes.TIER_1;
  return (0, a.jsx)(ed, {
    description: n ? F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
    onLearnMore: () => {
      window.open(z.default.getArticleURL(K.HelpdeskArticles.PREMIUM_DETAILS)), w.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != i && i.length > 0 || !n && null != l && l.length > 0 ? (0, a.jsxs)("div", {
      className: Z.emojiStickersPersonalizedContainer,
      children: [i.map(e => null == e.id ? e.url : V.default.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map(e => null != e ? (0, a.jsx)("img", {
        className: Z.personalizedEmoji,
        alt: "",
        src: e
      }) : null), n ? null : l.map(e => (0, a.jsx)(S.default, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: !1
      }, e.id))]
    }) : (0, a.jsx)("img", {
      className: Z.nonPersonalizedGraphic,
      alt: "",
      src: o
    })
  }, "emoji-stickers-item")
}

function ep(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  r.useEffect(() => _.default.wait(() => (0, E.fetchGuildBoostSlots)()), []);
  let i = (0, m.useStateFromStores)([A.default], () => A.default.useReducedMotion),
    [o, n] = (0, m.useStateFromStoresArray)([P.default, R.default], () => {
      let e = P.default.boostSlots,
        s = new Map;
      d(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != R.default.getGuild(e)) {
          var t;
          let a = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
          s.set(e, a + 1)
        }
      });
      let t = null,
        a = 0;
      return s.size > 0 && ([t, a] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [R.default.getGuild(t), a]
    }),
    u = null != o && n > 0,
    c = eu().boostItemVisual;
  return (0, a.jsx)(ed, {
    description: s === H.PremiumTypes.TIER_1 ? F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
    onLearnMore: () => {
      t(), C.default.open(K.UserSettingsSections.GUILD_BOOSTING), w.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => u ? (0, a.jsx)("div", {
      className: Z.boostCardContainer,
      children: (0, a.jsxs)("div", {
        className: Z.boostCard,
        children: [(0, a.jsx)(v.default, {
          guild: o,
          size: v.default.Sizes.MEDIUM,
          animate: !i,
          className: Z.boostCardIcon
        }), (0, a.jsxs)("div", {
          className: Z.boostCardInfo,
          children: [(0, a.jsx)(p.Text, {
            variant: "text-md/normal",
            className: l(Z.textSingleLineEllipsis, Z.boostCardTitle),
            children: o.name
          }), (0, a.jsxs)("div", {
            className: Z.boostCardSubtitle,
            children: [(0, a.jsx)(O.default, {
              className: Z.boostCardGem
            }), (0, a.jsx)(p.Text, {
              variant: "text-xs/normal",
              className: l(Z.textSingleLineEllipsis, Z.boostCardCount),
              children: F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                boostCount: n
              })
            })]
          })]
        })]
      })
    }) : (0, a.jsx)("img", {
      alt: "",
      src: c
    })
  }, "boost-item")
}
let e_ = () => {
  let e = eu().screenShareItemVisual;
  return (0, a.jsx)(ed, {
    description: F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
    onLearnMore: () => {
      window.open(z.default.getArticleURL(K.HelpdeskArticles.STREAM_QUALITY_SETTINGS)), w.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: e
    })
  }, "screen-share-item")
};

function eE(e) {
  let {
    premiumType: s
  } = e, t = eu().uploadsMessagesItemVisual;
  return (0, a.jsx)(ed, {
    description: s === H.PremiumTypes.TIER_2 ? F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : F.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
    onLearnMore: () => {
      window.open(z.default.getArticleURL(K.HelpdeskArticles.PREMIUM_DETAILS)), w.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: t
    })
  }, "uploads-item")
}
let eC = e => {
  let {
    country: s
  } = e, t = eu(), r = "PL" === s ? t.PL : t.TR;
  return (0, a.jsx)(ed, {
    description: ("PL" === s ? F.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : F.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
    onLearnMore: () => {
      window.open(z.default.getArticleURL(K.HelpdeskArticles.LOCALIZED_PRICING)), w.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "grandfathered_prices"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: r
    })
  }, "grandfathered-prices-item")
};

function eI(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: i,
    isDowngrade: l = !1
  } = e, o = (0, G.default)(), u = (0, W.useShouldShowLegacyPricingNotice)(), d = r.useMemo(() => {
    let e = [];
    switch (u && (n(null != o, "Subscription billing country should not be null"), e.push((0, a.jsx)(eC, {
        country: o
      }))), t) {
      case H.PremiumTypes.TIER_0:
        e.push((0, a.jsx)(ef, {
          premiumType: t
        }), (0, a.jsx)(eE, {
          premiumType: t
        }));
        break;
      case H.PremiumTypes.TIER_1:
        l ? e.push((0, a.jsx)(em, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(e_, {}), (0, a.jsx)(ep, {
          premiumType: t,
          onClose: i
        })) : e.push((0, a.jsx)(em, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(ef, {
          premiumType: t
        }), (0, a.jsx)(e_, {}), (0, a.jsx)(eE, {
          premiumType: t
        }), (0, a.jsx)(ep, {
          premiumType: t,
          onClose: i
        }));
        break;
      case H.PremiumTypes.TIER_2:
        l ? e.push((0, a.jsx)(em, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(ep, {
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(e_, {})) : e.push((0, a.jsx)(em, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(ef, {
          premiumType: t
        }), (0, a.jsx)(ep, {
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(e_, {}), (0, a.jsx)(eE, {
          premiumType: t
        }))
    }
    return e
  }, [t, s, i, l, u, o]);
  return (0, a.jsx)("div", {
    className: Z.whatYouLoseItemContainer,
    children: d
  })
}
var eA = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: i,
    footer: l,
    stickyFooter: o,
    onClose: u,
    isDowngrade: d = !1
  } = e, c = (0, m.useStateFromStores)([U.default], () => {
    let e = U.default.getCurrentUser();
    return n(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  return r.useEffect(() => {
    (0, M.default)(c.id, c.getAvatarURL(null, 80))
  }, [c]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(Y.default, {
      premiumType: s,
      onClose: u
    }), (0, a.jsxs)(p.ModalContent, {
      className: Z.body,
      children: [(0, a.jsx)(k.default, {
        size: k.default.Sizes.SIZE_24,
        className: Z.title,
        children: t
      }), (0, a.jsx)(p.Text, {
        variant: "text-md/normal",
        className: Z.subtitle,
        children: i
      }), (0, a.jsx)(eI, {
        currentUser: c,
        premiumType: s,
        onClose: u,
        isDowngrade: d
      }), !o && l]
    }), o && (0, a.jsx)(p.ModalFooter, {
      children: l
    })]
  })
}