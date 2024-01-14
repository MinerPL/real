"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var l = s("37983");
s("884691");
var a = s("750485"),
  i = s("77078"),
  n = s("887657"),
  r = s("549586"),
  o = s("564875"),
  d = s("404158"),
  c = s("368874"),
  u = s("775032"),
  h = s("821586"),
  C = s("922832"),
  f = s("782340"),
  T = s("353530"),
  x = s("392963");
let p = {
    [C.TeenActionDisplayType.USER_INTERACTION]: (0, l.jsx)(h.default, {
      width: 18,
      height: 18
    }),
    [C.TeenActionDisplayType.USER_CALLED]: (0, l.jsx)(n.default, {
      width: 22,
      height: 22
    }),
    [C.TeenActionDisplayType.USER_ADD]: (0, l.jsx)(o.default, {
      className: T.personWavingIcon,
      width: 22,
      height: 22
    }),
    [C.TeenActionDisplayType.GUILD_ADD]: (0, l.jsx)(r.default, {
      width: 22,
      height: 22
    }),
    [C.TeenActionDisplayType.GUILD_INTERACTION]: (0, l.jsx)(d.default, {
      className: T.threadIcon,
      width: 22,
      height: 22
    })
  },
  A = e => {
    let {
      header: t,
      description: s,
      icon: n
    } = e;
    return (0, l.jsxs)(a.default, {
      className: T.row,
      grow: 0,
      children: [(0, l.jsx)("div", {
        className: T.iconContainer,
        children: n
      }), (0, l.jsxs)("div", {
        className: T.rowContent,
        children: [(0, l.jsx)(i.Text, {
          className: T.rowHeader,
          variant: "text-sm/bold",
          children: t
        }), (0, l.jsx)(i.Text, {
          variant: "text-xs/medium",
          children: s
        })]
      })]
    })
  };
var g = e => {
  let {
    transitionState: t,
    onClose: s
  } = e, n = (0, c.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, u.default)(), o = Array.from(C.ACTION_TO_TEXT.entries());
  return (0, l.jsxs)(i.ModalRoot, {
    transitionState: t,
    children: [(0, l.jsx)("img", {
      className: T.art,
      src: x,
      alt: f.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
    }), (0, l.jsx)(i.ModalContent, {
      className: T.content,
      children: (0, l.jsxs)(a.default, {
        direction: a.default.Direction.VERTICAL,
        align: a.default.Align.CENTER,
        children: [(0, l.jsx)(i.Heading, {
          className: T.header,
          color: "header-primary",
          variant: "heading-lg/semibold",
          children: (0, l.jsx)(i.HeadingLevel, {
            children: n
          })
        }), o.map(e => {
          let [t, s] = e;
          return (0, l.jsx)(A, {
            icon: p[t],
            header: s.tooltipHeader(),
            description: s.tooltipDescription(null != r ? r : void 0)
          }, t)
        })]
      })
    }), (0, l.jsx)(i.ModalFooter, {
      children: (0, l.jsx)(i.Button, {
        className: T.button,
        type: "button",
        color: i.Button.Colors.BRAND,
        onClick: s,
        children: f.default.Messages.GOT_IT
      })
    })]
  })
}