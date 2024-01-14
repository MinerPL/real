"use strict";
i.r(t), i.d(t, {
  default: function() {
    return C
  }
}), i("222007");
var l = i("37983"),
  s = i("884691"),
  u = i("627445"),
  a = i.n(u),
  n = i("77078"),
  d = i("616265"),
  r = i("592407"),
  o = i("305961"),
  c = i("191814"),
  S = i("476765"),
  I = i("369123"),
  f = i("941489"),
  E = i("782340"),
  G = i("828517");

function T(e) {
  let {
    className: t,
    guildId: i,
    onChange: s,
    isGuildIncluded: u
  } = e, {
    options: a
  } = (0, f.default)({
    isGuildIncluded: u
  });
  return (0, l.jsx)(n.SearchableSelect, {
    className: t,
    onChange: s,
    value: i,
    options: a,
    placeholder: E.default.Messages.GUILD_SELECT
  })
}

function C(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: u,
    section: f,
    subsection: E
  } = e, C = (0, S.useUID)(), {
    canCreateGuild: p,
    createGuildCta: g,
    createGuildDescription: _,
    selectGuildCta: R,
    title: m,
    description: L,
    isGuildSupported: N
  } = (0, I.useGuildSettingsPickerFeature)(u), [b, M] = s.useState(), [O, h] = s.useState(!1), v = async () => {
    var e;
    h(!0);
    let t = await new Promise(e => {
      d.default.openCreateGuildModal({
        onSuccess: e
      })
    });
    await (e = t, new Promise(t => {
      o.default.addChangeListener(function i() {
        null != o.default.getGuild(e) && (o.default.removeChangeListener(i), t())
      })
    })), r.default.open(t, f, void 0, E), null == i || i()
  };
  return (0, l.jsxs)(n.ModalRoot, {
    transitionState: t,
    "aria-labelledby": C,
    children: [(0, l.jsxs)(n.ModalHeader, {
      className: G.modalHeader,
      separator: !1,
      children: [(0, l.jsx)(n.Heading, {
        id: C,
        variant: "heading-lg/medium",
        children: m
      }), (0, l.jsx)(n.ModalCloseButton, {
        onClick: i
      })]
    }), (0, l.jsxs)(n.ModalContent, {
      className: G.modalContent,
      children: [(0, l.jsx)(n.Text, {
        variant: "text-md/medium",
        children: L
      }), (0, l.jsx)(c.default, {
        size: 16
      }), (0, l.jsxs)("div", {
        className: G.guildSelection,
        children: [(0, l.jsx)("div", {
          className: G.guildSelectorContainer,
          children: (0, l.jsx)(T, {
            guildId: b,
            onChange: M,
            isGuildIncluded: N
          })
        }), (0, l.jsx)(n.Button, {
          onClick: () => {
            a(null != b, "Guild ID must not be null on click"), r.default.open(b, f, void 0, E), null == i || i()
          },
          disabled: null == b,
          children: R
        })]
      }), p && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.default, {
          size: 32
        }), (0, l.jsx)(n.Text, {
          variant: "text-md/medium",
          children: _
        }), (0, l.jsx)(c.default, {
          size: 8
        }), (0, l.jsx)(n.Button, {
          onClick: v,
          submitting: O,
          children: g
        })]
      })]
    })]
  })
}