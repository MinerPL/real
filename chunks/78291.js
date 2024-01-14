"use strict";
a.r(t), a.d(t, {
  InventoryTryPacksFeaturedPack: function() {
    return j
  }
}), a("222007");
var s = a("37983");
a("884691");
var l = a("414456"),
  i = a.n(l),
  d = a("65597"),
  n = a("77078"),
  o = a("430568"),
  r = a("13162"),
  u = a("529932"),
  c = a("166465"),
  m = a("557562"),
  _ = a("412745"),
  f = a("697218"),
  E = a("580357"),
  N = a("476263"),
  T = a("587974"),
  I = a("599110"),
  h = a("719923"),
  C = a("49111"),
  x = a("782340"),
  A = a("367969");

function j(e) {
  let {
    featuredPack: t,
    alreadyAddedPackIds: a,
    headerId: l,
    autoFocused: j
  } = e, P = (0, u.useEmojiAndSourceGuild)({
    emojiId: t.featuredEmojiIds[0]
  }), R = (0, d.default)([f.default], () => (0, h.isPremium)(f.default.getCurrentUser())), g = (0, d.default)([c.default], () => c.default.getSortedPackIds().length >= (0, m.getMaxPacksForUserType)(R)), k = e => new Set(a).has(e), O = (e, t, a) => {
    I.default.track(C.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
      type: e,
      inventory_pack_id: t,
      nonce: a
    })
  };
  if (P.isFetching || null == P.expressionSourceGuild || null == P.expressionSourceGuild.emojis || P.hasJoinedEmojiSourceGuild) return null;
  let S = new Set(t.featuredEmojiIds),
    M = P.expressionSourceGuild.emojis.filter(e => S.has(e.id)),
    {
      expressionSourceGuild: p
    } = P;
  return (0, s.jsxs)("div", {
    className: i(A.featuredPack, {
      [A.dimmed]: g && !k(p.id)
    }),
    children: [(0, s.jsx)("div", {
      className: A.featuredPackGuildIcon,
      children: (0, s.jsx)(T.default, {
        mask: T.default.Masks.SQUIRCLE,
        width: 62,
        height: 62,
        className: A.guildIconContainer,
        children: (0, s.jsx)(N.default, {
          className: A.featuredPackGuildIconImage,
          size: N.default.Sizes.LARGER,
          guild: p
        })
      })
    }), (0, s.jsxs)(n.Text, {
      className: A.featuredPackTitle,
      variant: "text-sm/semibold",
      children: [(0, s.jsx)(E.default, {
        guild: p,
        className: A.featuredPackGuildBadge
      }), p.name]
    }), (0, s.jsx)("div", {
      className: A.featuredPackEmojiGrid,
      children: M.map(e => (0, s.jsx)("div", {
        className: A.featuredPackEmojiWrapper,
        children: (0, s.jsx)(o.default, {
          emojiId: e.id,
          emojiName: e.name,
          size: "jumbo"
        })
      }, e.id))
    }), (0, s.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: x.default.Messages.INVENTORY_TRY_PACKS_MORE_EMOJI.format({
        numberOfEmoji: P.expressionSourceGuild.emojis.length - M.length
      })
    }), (0, s.jsx)("div", {
      className: A.featuredPackFooter,
      children: k(p.id) ? (0, s.jsx)(n.Button, {
        autoFocus: j,
        color: n.ButtonColors.PRIMARY,
        className: A.featuredPackFooterButton,
        onClick: () => {
          (0, r.uncollectPack)({
            packId: p.id
          }), O(_.EmojiPopoutType.REMOVE_PACK, p.id, l)
        },
        children: (0, s.jsx)(n.Text, {
          color: "always-white",
          variant: "text-sm/normal",
          children: R ? x.default.Messages.INVENTORY_REMOVE_PACK : x.default.Messages.INVENTORY_REMOVE_FREE_PACK
        })
      }) : (0, s.jsx)(n.Button, {
        autoFocus: j,
        className: A.featuredPackFooterButton,
        disabled: g && !k(p.id),
        onClick: () => {
          (0, r.collectPack)({
            packId: p.id
          }), O(_.EmojiPopoutType.ADD_PACK, p.id, l)
        },
        children: (0, s.jsx)(n.Text, {
          color: "always-white",
          variant: "text-sm/normal",
          children: R ? x.default.Messages.INVENTORY_ADD_PACK : x.default.Messages.INVENTORY_ADD_FREE_PACK
        })
      })
    })]
  }, p.id)
}