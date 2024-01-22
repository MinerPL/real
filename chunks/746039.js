"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  i = n("298386"),
  l = n("446674"),
  o = n("77078"),
  s = n("419830"),
  u = n("185153"),
  d = n("245997"),
  c = n("677099"),
  f = n("282109"),
  v = n("200008"),
  h = n("986373"),
  C = n("514525"),
  m = n("782340"),
  S = n("968982");

function p(e) {
  let {
    transitionState: t,
    onClose: n,
    parentId: i
  } = e, s = (0, l.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()[0]), [d, f] = a.useState(s), [v, h] = a.useState(!1);
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: t,
    children: [(0, r.jsxs)(o.ModalHeader, {
      className: S.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: S.modalHeaderTitle,
        children: [(0, r.jsx)(o.Heading, {
          variant: "text-lg/semibold",
          children: m.default.Messages.FAVORITE_CHANNEL
        }), (0, r.jsx)(o.ModalCloseButton, {
          onClick: n
        })]
      }), (0, r.jsx)("div", {
        className: S.guildSelector,
        children: (0, r.jsx)(u.GuildSelector, {
          guildId: d,
          onChange: function(e) {
            null != e && f(e.id)
          }
        })
      })]
    }), (0, r.jsx)(o.ModalContent, {
      className: S.modalContent,
      children: (0, r.jsx)(g, {
        guildId: d,
        hideMutedChannels: v,
        parentId: i
      })
    }), (0, r.jsxs)(o.ModalFooter, {
      className: S.modalFooter,
      children: [(0, r.jsx)(o.Button, {
        className: S.goBackButton,
        look: o.ButtonLooks.BLANK,
        color: o.ButtonColors.PRIMARY,
        size: o.ButtonSizes.SMALL,
        onClick: n,
        children: m.default.Messages.GO_BACK
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(o.Checkbox, {
          type: o.Checkbox.Types.INVERTED,
          value: v,
          onChange: (e, t) => h(t),
          children: (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "interactive-normal",
            children: m.default.Messages.HIDE_MUTED_CHANNELS
          })
        })
      })]
    })]
  })
}

function g(e) {
  let {
    guildId: t,
    hideMutedChannels: n,
    parentId: o
  } = e, s = (0, l.useStateFromStores)([d.default], () => d.default.getCategories(t)), u = (0, C.default)(s), c = a.useRef(null);
  return a.useEffect(() => {
    var e;
    null == c || null === (e = c.current) || void 0 === e || e.scroll({
      top: 0
    })
  }, [t]), (0, r.jsx)("div", {
    ref: c,
    children: u.map(e => e.type === i.ChannelTypes.GUILD_CATEGORY ? (0, r.jsx)(F, {
      name: e.name
    }, e.id) : (0, r.jsx)(x, {
      channel: e,
      hideMutedChannels: n,
      parentId: o
    }, e.id))
  })
}

function F(e) {
  let {
    name: t
  } = e;
  return (0, r.jsx)(o.Text, {
    className: S.categoryRow,
    variant: "eyebrow",
    color: "interactive-normal",
    children: t
  })
}

function x(e) {
  let {
    channel: t,
    hideMutedChannels: n,
    parentId: a
  } = e, i = (0, h.useFavorite)(t.id), u = (0, l.useStateFromStores)([f.default], () => f.default.isChannelMuted(t.guild_id, t.id));
  if (u && n) return null;
  let d = (0, s.getChannelIconComponent)(t);
  return (0, r.jsxs)("div", {
    className: S.channelRow,
    children: [(0, r.jsxs)("div", {
      className: S.channelName,
      children: [null != d && (0, r.jsx)("div", {
        className: S.channelIconContainer,
        children: (0, r.jsx)(d, {
          className: S.channelIcon,
          height: 20,
          width: 20
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "interactive-normal",
        children: t.name
      })]
    }), null != i ? (0, r.jsx)(N, {
      channelId: t.id
    }) : (0, r.jsx)(I, {
      channelId: t.id,
      parentId: a
    })]
  }, t.id)
}

function I(e) {
  let {
    channelId: t,
    parentId: n
  } = e;
  return (0, r.jsx)(o.Button, {
    look: o.ButtonLooks.OUTLINED,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.BRAND,
    onClick: function() {
      (0, v.addFavoriteChannel)(t, n)
    },
    children: m.default.Messages.ADD
  })
}

function N(e) {
  let {
    channelId: t
  } = e;
  return (0, r.jsx)(o.Button, {
    look: o.ButtonLooks.FILLED,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.PRIMARY,
    onClick: function() {
      (0, v.removeFavoriteChannel)(t)
    },
    children: m.default.Messages.REMOVE
  })
}