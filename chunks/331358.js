"use strict";
s.r(t), s.d(t, {
  usePerkCards: function() {
    return y
  }
});
var a = s("65597"),
  n = s("819855"),
  l = s("79112"),
  i = s("841098"),
  r = s("697218"),
  u = s("719923"),
  o = s("49111"),
  d = s("397336"),
  c = s("782340"),
  _ = s("737117"),
  E = s("550722"),
  I = s("113705"),
  T = s("743437"),
  f = s("404875"),
  S = s("118536"),
  R = s("411389"),
  m = s("840456"),
  p = s("720917"),
  N = s("982784"),
  A = s("19530"),
  g = s("215541"),
  P = s("663411"),
  C = s("126304"),
  O = s("674065"),
  M = s("771116"),
  h = s("309920"),
  L = s("578770"),
  x = s("761708"),
  v = s("224456"),
  U = s("656564"),
  b = s("124989"),
  j = s("14528"),
  D = s("443817"),
  G = s("759308");
let B = (e, t, s) => (0, n.isThemeDark)(e) ? t : s,
  y = e => {
    let {
      styles: t
    } = e, s = (0, i.default)(), n = (0, a.default)([r.default], () => {
      let e = r.default.getCurrentUser();
      return u.default.canUsePremiumProfileCustomization(e)
    }), y = c.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, k = {
      badge: {
        title: c.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: I,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: c.default.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: c.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: B(s, _, E),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: c.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
        className: t.clientThemesCard,
        imageSource: h,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: c.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
        imageSource: L,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: c.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
        imageSource: x,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: c.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
        description: e => {
          let t = () => {
            l.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: d.ProfileCustomizationScrollPositions.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return n ? c.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
            onCheckItOutClick: t
          }) : c.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
            onTryItOutClick: t
          })
        },
        imageSource: f,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: c.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
        imageSource: B(s, v, U),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: B(s, T, b),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: B(s, m, p),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: c.default.Messages.REMIXING_PERKS_CARD_TITLE,
        description: c.default.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: B(s, S, R),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: c.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: c.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: B(s, N, A),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: B(s, g, j),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: B(s, g, j),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: B(s, g, j),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: c.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: D,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: c.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION,
        imageSource: B(s, P, C),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: c.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: y
        }),
        description: c.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: y
        }),
        imageSource: G,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: c.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: B(s, O, M),
        imageClassName: t.videoBackgroundImage
      }
    };
    return k
  }