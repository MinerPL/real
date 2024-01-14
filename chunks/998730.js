"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("222007");
var n = l("37983"),
  r = l("884691"),
  a = l("446674"),
  o = l("77078"),
  s = l("679653"),
  u = l("42203"),
  i = l("923959"),
  c = l("27618"),
  d = l("697218"),
  A = l("476765"),
  L = l("462392"),
  C = l("782340"),
  _ = l("643286");
let f = e => {
  let {
    guildId: t,
    channel: l,
    onSelectChannel: r
  } = e, u = (0, a.useStateFromStoresArray)([i.default], () => i.default.getChannels(t)[i.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel()
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  }), [t]);
  return (0, n.jsx)(o.FormItem, {
    className: _.channelSelector,
    required: !0,
    children: (0, n.jsx)(o.SearchableSelect, {
      value: null == l ? void 0 : l.id,
      options: u.map(e => ({
        value: e.id,
        label: (0, s.computeChannelName)(e, d.default, c.default, !0)
      })),
      onChange: e => {
        let t = u.find(t => t.id === e);
        r(null != t ? t : void 0)
      },
      placeholder: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
    })
  })
};

function N(e) {
  let {
    action: t,
    triggerType: l,
    guildId: s,
    isEdit: i,
    onEditChannel: c,
    onClose: d,
    transitionState: N
  } = e, T = (0, A.useUID)(), [I, O] = r.useState(t.metadata.channelId), [h, E] = r.useState(null), M = (0, a.useStateFromStores)([u.default], () => u.default.getChannel(I), [I]), S = (0, L.getActionInfo)(t.type, t, l);
  if (null == S) return null;
  let {
    headerText: v
  } = S;
  return (0, n.jsxs)(o.ModalRoot, {
    transitionState: N,
    "aria-labelledby": T,
    size: o.ModalSize.SMALL,
    children: [(0, n.jsxs)(o.ModalContent, {
      className: _.actionContentContainer,
      children: [(0, n.jsx)(o.Heading, {
        id: T,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: _.header,
        children: v
      }), (0, n.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
      }), (0, n.jsx)(f, {
        guildId: s,
        channel: M,
        onSelectChannel: e => {
          null != e && O(e.id)
        }
      }), null != h ? (0, n.jsx)(o.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: h
      }) : (0, n.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
      })]
    }), (0, n.jsxs)(o.ModalFooter, {
      children: [(0, n.jsx)(o.Button, {
        onClick: () => {
          if (null == I) {
            E(C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
            return
          }
          c(I)
        },
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        children: i ? C.default.Messages.EDIT : C.default.Messages.SAVE
      }), (0, n.jsx)(o.Button, {
        onClick: () => {
          d()
        },
        color: o.Button.Colors.TRANSPARENT,
        look: o.Button.Looks.LINK,
        children: C.default.Messages.CANCEL
      })]
    })]
  })
}