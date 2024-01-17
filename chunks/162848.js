"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  i = n("77078"),
  a = n("446674"),
  u = n("265586"),
  o = n("606292"),
  d = n("688318"),
  c = n("635357"),
  f = n("184900"),
  p = n("845962"),
  E = n("506885"),
  S = n("697218"),
  h = n("153160"),
  m = n("426188"),
  I = n("49111"),
  _ = n("782340"),
  T = n("416465"),
  C = n("513002");
let x = e => {
    let {
      avatarDecoration: t
    } = e, n = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
      avatarDecorationSrc: r
    } = (0, d.default)({
      user: n,
      avatarDecorationOverride: t,
      size: (0, o.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40)
    });
    return (0, s.jsx)("img", {
      src: r,
      alt: t.label,
      className: T.avatarDecoration
    })
  },
  g = e => {
    var t;
    let {
      profileEffect: n
    } = e, r = (0, a.useStateFromStores)([p.default], () => p.default.getProfileEffectById(n.id)), {
      accessibilityLabel: l,
      thumbnailPreviewSrc: i,
      title: u
    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
    return (0, s.jsxs)("div", {
      className: T.profileEffectContainer,
      children: [(0, s.jsx)("img", {
        src: C,
        alt: l,
        className: T.profileEffectBackground
      }), (0, s.jsx)("img", {
        className: T.profileEffect,
        src: i,
        alt: u
      })]
    })
  };
var v = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: n,
    className: r
  } = e, {
    product: o
  } = (0, m.useFetchCollectiblesProduct)(t), {
    giftRecipient: d,
    giftRecipientError: p
  } = (0, c.useGiftContext)(), C = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser());
  if (null == o || null == n) return null;
  let [v] = o.items, A = null != d && d.id !== (null == C ? void 0 : C.id);
  return (0, s.jsxs)("div", {
    className: r,
    children: [(0, s.jsxs)("div", {
      className: T.previewTitleContainer,
      children: [(0, s.jsx)(i.FormTitle, {
        className: T.previewTitle,
        children: _.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), A && (0, s.jsx)(i.Popout, {
        preload: () => (0, E.default)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, s.jsx)(f.default, {
          ...e,
          user: d,
          pendingAvatar: d.getAvatarURL(null, (0, i.getAvatarSize)(i.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: v.type === u.CollectiblesItemType.AVATAR_DECORATION ? v : null,
          pendingProfileEffectId: v.type === u.CollectiblesItemType.PROFILE_EFFECT ? v.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: I.NOOP,
          onBannerChange: I.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, s.jsx)(i.Clickable, {
          ...e,
          className: T.previewLink,
          children: (0, s.jsx)(i.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: _.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)]
    }), (0, s.jsxs)("div", {
      className: l(T.previewContainer, {
        [T.previewContainerError]: null != p
      }),
      children: [v.type === u.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(x, {
        avatarDecoration: v
      }), v.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)(g, {
        profileEffect: v
      }), (0, s.jsxs)("div", {
        className: T.previewTextContainer,
        children: [(0, s.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: o.name
        }), (0, s.jsx)(i.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: v.type === u.CollectiblesItemType.AVATAR_DECORATION ? _.default.Messages.USER_SETTINGS_AVATAR_DECORATION : v.type === u.CollectiblesItemType.PROFILE_EFFECT ? _.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/semibold",
        children: (0, h.formatPrice)(n.amount, n.currency)
      })]
    }), null != p && (0, s.jsx)(i.Text, {
      className: T.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: p
    })]
  })
}