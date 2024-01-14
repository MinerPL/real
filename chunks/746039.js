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
    onClose: n
  } = e, i = (0, l.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()[0]), [s, d] = a.useState(i), [f, v] = a.useState(!1);
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
          guildId: s,
          onChange: function(e) {
            null != e && d(e.id)
          }
        })
      })]
    }), (0, r.jsx)(o.ModalContent, {
      className: S.modalContent,
      children: (0, r.jsx)(g, {
        guildId: s,
        hideMutedChannels: f
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
          value: f,
          onChange: (e, t) => v(t),
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
    hideMutedChannels: n
  } = e, o = (0, l.useStateFromStores)([d.default], () => d.default.getCategories(t)), s = (0, C.default)(o), u = a.useRef(null);
  return a.useEffect(() => {
    var e;
    null == u || null === (e = u.current) || void 0 === e || e.scroll({
      top: 0
    })
  }, [t]), (0, r.jsx)("div", {
    ref: u,
    children: s.map(e => e.type === i.ChannelTypes.GUILD_CATEGORY ? (0, r.jsx)(F, {
      name: e.name
    }, e.id) : (0, r.jsx)(x, {
      channel: e,
      hideMutedChannels: n
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
    hideMutedChannels: n
  } = e, a = (0, h.useFavorite)(t.id), i = (0, l.useStateFromStores)([f.default], () => f.default.isChannelMuted(t.guild_id, t.id));
  if (i && n) return null;
  let u = (0, s.getChannelIconComponent)(t);
  return (0, r.jsxs)("div", {
    className: S.channelRow,
    children: [(0, r.jsxs)("div", {
      className: S.channelName,
      children: [null != u && (0, r.jsx)("div", {
        className: S.channelIconContainer,
        children: (0, r.jsx)(u, {
          className: S.channelIcon,
          height: 20,
          width: 20
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "interactive-normal",
        children: t.name
      })]
    }), null != a ? (0, r.jsx)(I, {
      channelId: t.id
    }) : (0, r.jsx)(N, {
      channelId: t.id
    })]
  }, t.id)
}

function N(e) {
  let {
    channelId: t
  } = e;
  return (0, r.jsx)(o.Button, {
    look: o.ButtonLooks.OUTLINED,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.BRAND,
    onClick: function() {
      (0, v.addFavoriteChannel)(t)
    },
    children: m.default.Messages.ADD
  })
}

function I(e) {
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