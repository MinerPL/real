"use strict";
a.r(t), a.d(t, {
  GuildLeaveConfirmModalContents: function() {
    return S
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  u = a.n(s),
  i = a("65597"),
  d = a("151426"),
  r = a("77078"),
  o = a("10641"),
  c = a("298878"),
  f = a("592407"),
  E = a("13162"),
  C = a("529932"),
  h = a("166465"),
  I = a("267567"),
  N = a("412745"),
  _ = a("393414"),
  m = a("476765"),
  v = a("216422"),
  g = a("599110"),
  M = a("49111"),
  p = a("365058"),
  L = a("782340"),
  A = a("866351");
let S = e => {
  let {
    guild: t,
    discoverableGuildData: s
  } = e, S = t.id, {
    isPremium: x,
    collectEnabled: T,
    hasReachedMaxPacksCollected: V
  } = (0, C.usePackCollectionData)({
    expressionSourceGuild: s
  }), O = (0, m.useUID)(), D = (0, i.default)([h.default], () => null != h.default.getPackByPackId({
    packId: t.id,
    allowDuplicateGuildPack: !0
  })), G = T && !D, [H, P] = n.useState(!1), b = async () => {
    let e = I.default.isLurking(S);
    await f.default.leaveGuild(S), H && (g.default.track(M.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
      type: N.EmojiPopoutType.ADD_PACK,
      inventory_pack_id: S,
      nonce: O
    }), await (0, E.collectPack)({
      packId: S
    })), e ? (0, _.transitionTo)(M.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(d.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("953750").then(a.bind(a, "953750"));
      return a => (0, l.jsx)(e, {
        ...a,
        guildId: S,
        guildName: t.name
      })
    })
  };
  return (0, l.jsxs)(r.ConfirmModal, {
    className: u(A.confirmModal, {
      [A.widthForAddPack]: G
    }),
    bodyClassName: u(A.confirmModalBody, {
      [A.widthForAddPack]: G
    }),
    header: L.default.Messages.LEAVE_SERVER_TITLE.format({
      name: t.name
    }),
    confirmText: t.hasFeature(M.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB : L.default.Messages.LEAVE_SERVER,
    cancelText: L.default.Messages.CANCEL,
    onConfirm: b,
    ...e,
    children: [(0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      children: t.hasFeature(M.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB_BODY.format({
        name: t.name
      }) : L.default.Messages.LEAVE_SERVER_BODY.format({
        name: t.name
      })
    }), G && (0, l.jsxs)("div", {
      className: A.addPackSection,
      children: [(0, l.jsxs)(r.FormSwitch, {
        className: A.addPackHeader,
        value: H,
        disabled: V,
        onChange: e => {
          P(e)
        },
        hideBorder: !0,
        children: [L.default.Messages.INVENTORY_ADD_PACK, " ", (0, l.jsx)(c.default, {
          className: A.betaTag,
          color: "white"
        })]
      }), (0, l.jsxs)(r.Text, {
        variant: "text-sm/medium",
        className: A.inventoryLeaveServerDescription,
        children: [(0, l.jsx)(v.default, {
          className: A.nitroWheel
        }), L.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
      }), V && !x && (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: A.maxPacksNoticeText,
        children: L.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
          maxFreePacks: p.INVENTORY_MAX_FREE_PACKS,
          maxPacks: p.INVENTORY_MAX_PACKS
        })
      })]
    })]
  })
}