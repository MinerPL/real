"use strict";
n.r(e), n.d(e, {
  default: function() {
    return v
  }
}), n("222007");
var r, u, i = n("37983"),
  o = n("884691"),
  a = n("77078"),
  s = n("851387"),
  l = n("130037"),
  c = n("772280"),
  f = n("58608"),
  d = n("387111"),
  h = n("49111"),
  _ = n("782340"),
  E = n("676702");
(u = r || (r = {}))[u.INITIAL = 0] = "INITIAL", u[u.OTHER_REASON = 1] = "OTHER_REASON";

function p() {
  return [{
    value: 0,
    label: _.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
  }, {
    value: 1 * h.Durations.HOUR,
    label: _.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
  }, {
    value: 6 * h.Durations.HOUR,
    label: _.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
  }, {
    value: 12 * h.Durations.HOUR,
    label: _.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
  }, {
    value: 1 * h.Durations.DAY,
    label: _.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
  }, {
    value: 3 * h.Durations.DAY,
    label: _.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
  }, {
    value: 7 * h.Durations.DAY,
    label: _.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
  }]
}
let g = p()[1].value;

function v(t) {
  let {
    guildId: e,
    user: r,
    location: u,
    userIds: v,
    onBanMultiple: m,
    transitionState: M,
    onClose: A,
    canBulkBan: I = !1
  } = t, [S, b] = o.useState(g), [O, w] = o.useState(""), [N, R] = o.useState(0), [T, C] = o.useState(!1), x = (0, l.useTrackModerationAction)(e, {
    location: u,
    targetUserId: null == r ? void 0 : r.id,
    targets: v
  }), y = o.useCallback(() => {
    if (null != m) {
      let t = null != v && (null == v ? void 0 : v.size) > 0 && I;
      if (!t || T) return;
      if ("" === O.trim() && !T) {
        C(!0);
        return
      }
      m(e, [...v], S, O)
    } else {
      if (null == r) return;
      s.default.banUser(e, null == r ? void 0 : r.id, S, O)
    }
    x(l.ModerationActionType.BAN), A()
  }, [m, x, A, v, I, T, O, e, S, r]), L = o.useCallback(t => {
    b(t)
  }, []), k = o.useCallback(t => {
    let {
      value: e
    } = t;
    w(e), C(!1)
  }, []), D = o.useCallback(t => {
    w(t), T && C(!1)
  }, [T]), F = o.useCallback(() => {
    w(""), R(1)
  }, []), B = o.useCallback(() => {
    R(0)
  }, []), U = [{
    name: _.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
    value: _.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
  }, {
    name: _.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
    value: _.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
  }, {
    name: _.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
    value: _.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
  }], z = null != m && null != v ? _.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
    count: null == v ? void 0 : v.size
  }) : null == r ? "" : _.default.Messages.BAN_CONFIRM_TITLE.format({
    username: "@".concat(d.default.getName(e, null, r))
  });
  return (0, i.jsxs)(a.ModalRoot, {
    transitionState: M,
    children: [(0, i.jsx)(a.ModalHeader, {
      separator: !1,
      children: (0, i.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        children: z
      })
    }), (0, i.jsxs)(a.ModalContent, {
      className: E.modalContent,
      children: [(0, i.jsxs)(f.default, {
        autoPlay: !0,
        loop: !0,
        className: E.spacing,
        width: 400,
        children: [(0, i.jsx)("source", {
          src: n("430857"),
          type: "video/webm"
        }), (0, i.jsx)("source", {
          src: n("689223"),
          type: "video/mp4"
        }), (0, i.jsx)("img", {
          alt: "",
          src: n("429777")
        })]
      }), (0, i.jsxs)(a.FormItem, {
        title: _.default.Messages.FORM_LABEL_REASON_BAN,
        className: E.spacing,
        children: [T && (0, i.jsx)(a.FormErrorBlock, {
          className: E.error,
          children: _.default.Messages.BAN_REASON_REQUIRED_ERROR
        }), (0, i.jsx)(a.Sequencer, {
          steps: [0, 1],
          step: N,
          children: (t => {
            switch (N) {
              case 0:
                return (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(a.RadioGroup, {
                    value: O,
                    options: t,
                    onChange: k,
                    radioItemClassName: E.radioItemStyles
                  }), (0, i.jsxs)(a.Clickable, {
                    onClick: F,
                    className: E.banReasonOtherClickable,
                    children: [(0, i.jsx)(a.Text, {
                      variant: "text-md/medium",
                      color: "none",
                      children: _.default.Messages.OTHER
                    }), (0, i.jsx)(c.default, {
                      width: "16",
                      height: "16"
                    })]
                  })]
                });
              case 1:
                return (0, i.jsx)(a.TextArea, {
                  maxLength: h.MAX_REASON_LENGTH,
                  onChange: D,
                  value: O,
                  rows: 5,
                  autoFocus: !0
                })
            }
          })(U)
        })]
      }), (0, i.jsx)(a.FormItem, {
        title: _.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
        className: E.spacing,
        children: (0, i.jsx)(a.SingleSelect, {
          options: p(),
          value: S,
          onChange: L
        })
      })]
    }), (() => {
      switch (N) {
        case 0:
          return (0, i.jsxs)(a.ModalFooter, {
            className: E.footer,
            children: [(0, i.jsx)(a.Button, {
              type: "button",
              look: a.Button.Looks.LINK,
              color: a.Button.Colors.PRIMARY,
              onClick: A,
              children: _.default.Messages.CANCEL
            }), (0, i.jsx)(a.Button, {
              type: "submit",
              color: a.Button.Colors.RED,
              size: a.Button.Sizes.SMALL,
              onClick: y,
              children: _.default.Messages.BAN
            })]
          });
        case 1:
          return (0, i.jsxs)(a.ModalFooter, {
            className: E.footerStepped,
            children: [(0, i.jsx)(a.Button, {
              className: E.cancel,
              innerClassName: E.cancel,
              type: "button",
              look: a.Button.Looks.LINK,
              color: a.Button.Colors.PRIMARY,
              size: a.Button.Sizes.SMALL,
              onClick: B,
              children: _.default.Messages.BACK
            }), (0, i.jsx)(a.Button, {
              type: "submit",
              color: a.Button.Colors.RED,
              size: a.Button.Sizes.SMALL,
              onClick: y,
              children: _.default.Messages.BAN
            })]
          })
      }
    })()]
  })
}