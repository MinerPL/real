"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("669491"),
  l = n("292915"),
  i = n("77078"),
  u = n("389480"),
  c = n("191191"),
  o = n("782340"),
  d = n("895576");
let f = [54, 8, 8, 8];

function m(e) {
  let {
    onSelect: t,
    sound: n
  } = e, [m, _] = r.useState(!1);

  function E(e) {
    _(!1), null == t || t(e)
  }
  let I = e => (0, s.jsxs)("div", {
    className: d.customGiftHeader,
    children: [(0, s.jsxs)("div", {
      className: d.customGiftHeaderText,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-md/bold",
        children: o.default.Messages.GIFT_SELECT_SOUND
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: o.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })]
    }), (0, s.jsx)("div", {
      className: d.searchAndSound,
      children: e
    })]
  });
  return (0, s.jsx)(i.Popout, {
    shouldShow: m,
    position: "bottom",
    align: "left",
    onRequestClose: () => _(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(i.Dialog, {
        children: (0, s.jsx)(c.default, {
          suppressPlaySound: !0,
          shouldShowUpsell: !1,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: E,
          analyticsSource: "gift soundboard",
          soundButtonOverlay: u.SoundButtonOverlay.ADD,
          listPadding: f,
          renderHeader: I,
          defaultSoundsOnly: !0
        })
      })
    },
    children: () => (0, s.jsx)(i.Clickable, {
      className: d.sound,
      onClick: () => _(!0),
      children: null == n ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(l.SoundboardIcon, {
          color: a.default.colors.WHITE,
          className: d.soundIcon,
          width: 14,
          height: 14
        }), (0, s.jsx)(i.Text, {
          className: d.text,
          variant: "text-sm/semibold",
          children: o.default.Messages.GIFT_SELECT_SOUND
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(i.Text, {
          className: d.textSelected,
          variant: "text-sm/semibold",
          children: n.emojiName
        }), (0, s.jsx)(i.Text, {
          className: d.text,
          variant: "text-sm/semibold",
          children: n.name
        })]
      })
    })
  })
}

function _(e) {
  let {
    sound: t,
    onSelect: n
  } = e;
  return (0, s.jsx)("div", {
    className: d.container,
    children: (0, s.jsx)(m, {
      onSelect: n,
      sound: t
    })
  })
}