"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var l, a, i = s("37983"),
  n = s("884691"),
  d = s("414456"),
  r = s.n(d),
  o = s("446674"),
  u = s("77078"),
  c = s("145131"),
  C = s("476263"),
  m = s("433487"),
  f = s("209397"),
  E = s("175703"),
  T = s("782340"),
  _ = s("653609"),
  x = s("631662"),
  I = s("529861");

function L(e) {
  let {
    guild: t,
    onClick: s
  } = e;
  return (0, i.jsxs)(u.Clickable, {
    className: _.clickableGuildRow,
    onClick: s,
    children: [(0, i.jsx)(C.default, {
      guild: t,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: _.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      className: _.arrow,
      alt: "",
      src: I
    })]
  })
}

function h(e) {
  let {
    directoryChannelId: t,
    guild: s
  } = e, l = (0, o.useStateFromStores)([f.default], () => f.default.getDirectoryEntry(t, s.id));
  return (0, i.jsxs)("div", {
    className: _.guildRow,
    children: [(0, i.jsx)(C.default, {
      guild: s,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: _.guildName,
      variant: "text-md/normal",
      children: s.name
    }), (0, i.jsx)(E.default, {
      entry: l,
      forceLightTheme: !0,
      children: e => (0, i.jsx)(m.default, {
        ...e,
        className: _.overflowIcon
      })
    })]
  })
}

function g(e) {
  let t, {
      directoryChannelId: s,
      onClose: l,
      onGuildChosen: a,
      handleChooseCreate: d,
      directoryGuildName: o,
      availableGuilds: C,
      addedGuilds: m,
      loading: f
    } = e,
    [E, I] = n.useState(0);
  return t = f ? (0, i.jsx)("div", {
    className: _.emptyContainer,
    children: (0, i.jsx)(u.Spinner, {})
  }) : 0 === E ? 0 === C.length ? (0, i.jsxs)("div", {
    className: _.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: x,
      alt: "",
      className: _.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: _.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: T.default.Messages.HUB_CHOOSE_GUILD_EMPTY
    })]
  }) : C.map(e => (0, i.jsx)(L, {
    guild: e,
    onClick: () => a(e)
  }, e.id)) : 0 === m.length ? (0, i.jsxs)("div", {
    className: _.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: x,
      alt: "",
      className: _.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: _.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: T.default.Messages.HUB_CHOOSE_GUILD_ADDED_EMPTY
    })]
  }) : m.map(e => (0, i.jsx)(h, {
    directoryChannelId: s,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(u.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: _.header,
      separator: !1,
      children: [null != l && (0, i.jsx)(u.ModalCloseButton, {
        className: _.closeButton,
        onClick: l
      }), (0, i.jsx)(u.Heading, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: T.default.Messages.HUB_CHOOSE_GUILD_TITLE.format({
          guildName: o
        })
      }), (0, i.jsx)(u.Text, {
        className: _.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: T.default.Messages.HUB_CHOOSE_GUILD_SUBTITLE
      }), (0, i.jsxs)(u.TabBar, {
        className: _.tabBar,
        selectedItem: E,
        onItemSelect: I,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(u.TabBar.Item, {
          className: r(_.tabBarItem, {
            [_.selectedTab]: 0 === E
          }),
          id: 0,
          children: T.default.Messages.HUB_CHOOSE_GUILD_CHOOSE_TAB
        }), (0, i.jsx)(u.TabBar.Item, {
          className: r(_.tabBarItem, {
            [_.selectedTab]: 1 === E
          }),
          id: 1,
          children: T.default.Messages.HUB_CHOOSE_GUILD_ADDED_TAB
        })]
      })]
    }), (0, i.jsx)(u.ModalContent, {
      className: _.guildList,
      paddingFix: !1,
      children: t
    }), (0, i.jsxs)(u.ModalFooter, {
      className: _.footer,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        className: _.footerTitle,
        children: T.default.Messages.HUB_CREATE_GUILD_LABEL
      }), (0, i.jsx)(u.Button, {
        className: _.footerButton,
        color: u.Button.Colors.PRIMARY,
        onClick: d,
        children: T.default.Messages.HUB_CREATE_GUILD_CTA
      })]
    })]
  })
}(a = l || (l = {}))[a.AVAILABLE = 0] = "AVAILABLE", a[a.ADDED = 1] = "ADDED"