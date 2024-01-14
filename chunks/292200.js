"use strict";
n.r(t), n.d(t, {
  default: function() {
    return J
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("866227"),
  o = n.n(r),
  u = n("974667"),
  d = n("733724"),
  c = n("446674"),
  f = n("77078"),
  m = n("206230"),
  E = n("228944"),
  _ = n("201131"),
  h = n("928098"),
  p = n("702873"),
  I = n("537325"),
  T = n("95045"),
  g = n("909917"),
  C = n("380986"),
  S = n("969706"),
  A = n("957255"),
  N = n("697218"),
  M = n("79798"),
  v = n("36694"),
  x = n("907566"),
  O = n("561359"),
  L = n("228220"),
  R = n("759885"),
  y = n("843194"),
  P = n("93332"),
  D = n("304198"),
  j = n("387111"),
  U = n("158998"),
  b = n("250375"),
  G = n("49111"),
  B = n("988268"),
  k = n("903639"),
  w = n("894488"),
  H = n("782340"),
  F = n("180094");

function V(e) {
  let {
    children: t,
    className: n,
    compact: s
  } = e;
  return (0, a.jsx)("div", {
    className: i(F.footerContainer, n, {
      [F.compact]: s
    }),
    children: t
  })
}

function Y(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, a.jsx)("div", {
    className: i(F.annotationRow, n),
    children: t
  })
}

function W(e, t) {
  switch (e) {
    case E.AutomodAlertActionType.DELETE_USER_MESSAGE:
      return (0, a.jsx)(L.default, {
        width: 16,
        height: 16,
        className: F.alertActionIcon,
        ...t
      });
    case E.AutomodAlertActionType.SET_COMPLETED:
      return (0, a.jsx)(v.default, {
        width: 16,
        height: 16,
        className: i(F.alertActionIcon, F.alertActionSetCompletedIcon),
        ...t
      });
    case E.AutomodAlertActionType.SUBMIT_FEEDBACK:
      return (0, a.jsx)(x.default, {
        width: 16,
        height: 16,
        className: i(F.alertActionIcon),
        ...t
      });
    default:
      return null
  }
}

function K(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, s = (0, c.useStateFromStores)([N.default], () => N.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == s) return W(e, {});
    let l = function(e, t, n) {
      var a;
      let s = null !== (a = j.default.getNickname(n, null, t)) && void 0 !== a ? a : U.default.getUserTag(t),
        l = o(e.ts),
        i = "".concat(s, " ").concat(l.fromNow());
      try {
        let t = parseInt(e.actionType);
        switch (t) {
          case E.AutomodAlertActionType.DELETE_USER_MESSAGE:
            return H.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
              userName: s,
              timestamp: l.fromNow()
            });
          case E.AutomodAlertActionType.SET_COMPLETED:
            return H.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
              userName: s,
              timestamp: l.fromNow()
            });
          case E.AutomodAlertActionType.SUBMIT_FEEDBACK:
            return H.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
              userName: s,
              timestamp: l.fromNow()
            });
          default:
            return i
        }
      } catch (e) {
        return i
      }
    }(t, s, n);
    return (0, a.jsx)(f.Tooltip, {
      text: l,
      children: t => W(e, t)
    })
  } catch (e) {
    return null
  }
}

function z(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, s = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, a.jsx)("div", {
    className: F.alertActionsIconContainer,
    children: s.map(e => (0, a.jsx)(K, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}

function J(e) {
  let {
    id: t,
    compact: n,
    message: l,
    channel: r
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: N,
      onMouseLeave: v
    }
  } = (0, b.useAutomodAvatar)(!0), {
    onFocus: x,
    ...L
  } = (0, u.useListItem)(null != t ? t : ""), {
    isFocused: j,
    handleFocus: U,
    handleBlur: W
  } = (0, C.useFocusInside)(x), K = (0, c.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), J = (0, c.useStateFromStores)([A.default], () => A.default.can(G.Permissions.MANAGE_MESSAGES, r), [r]), {
    ruleName: Z,
    embedChannel: X,
    decisionId: q,
    keywordMatchedContent: Q,
    keyword: $,
    content: ee,
    flaggedMessageId: et,
    timeoutDuration: en,
    decisionReason: ea,
    alertActionsExecution: es,
    quarantineType: el
  } = (0, _.default)(l), ei = s.useMemo(() => (0, T.renderAutomodMessageMarkup)(ee, Q, r.id), [ee, Q, r]), {
    selected: er,
    ...eo
  } = function(e, t) {
    let {
      popouts: n,
      selected: a,
      setPopout: l
    } = (0, S.default)(e.id, w.DEFAULT_POPOUTS), {
      usernameProfile: i,
      avatarProfile: r
    } = n, o = (0, C.useContextMenuUser)(e.author.id, t.id), u = (0, C.useContextMenuModerateUser)(e.author.id, t.id, e.id), d = (0, C.useClickMessageAuthorUsername)(e, t, i, l), c = (0, C.useClickMessageAuthorAvatar)(r, l), f = s.useCallback(() => l({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [l]);
    return {
      selected: a,
      onContextMenu: o,
      onContextMenuModerateUser: u,
      onClickUsername: d,
      onClickAvatar: c,
      onPopoutRequestClose: f,
      renderPopout: g.default,
      showAvatarPopout: r,
      showUsernamePopout: i
    }
  }(l, r), eu = s.useCallback(() => {
    (0, h.openSubmitFeedback)(l.id, ee, q, r)
  }, [l.id, ee, q, r]), ed = s.useCallback(e => {
    null != et && null != X && (e.stopPropagation(), e.preventDefault(), (0, I.default)(G.Routes.CHANNEL(null == X ? void 0 : X.guild_id, null == X ? void 0 : X.id, et)))
  }, [X, et]), ec = s.useCallback(() => {
    (0, p.executeAlertAction)(l.id, r, E.AutomodAlertActionType.DELETE_USER_MESSAGE)
  }, [r, l.id]), ef = s.useMemo(() => (0, _.getActionHeaderText)(l, X, () => (0, a.jsx)("div", {
    className: F.channelNameContainer,
    children: (0, a.jsx)(R.default, {
      channel: X,
      className: F.channelName,
      openChatWithoutConnecting: !0
    })
  })), [l, X]), em = (0, k.getFriendlyDurationString)(Number(en)), eE = null != ea, e_ = J && null != et && (null == es || !es.actions.hasOwnProperty(E.AutomodAlertActionType.DELETE_USER_MESSAGE));
  return (0, a.jsx)("div", {
    onMouseEnter: N,
    onMouseLeave: v,
    children: (0, a.jsx)(D.default, {
      className: i(F.mainContainer, {
        [F.compact]: n
      }),
      iconNode: n ? null : (0, a.jsx)(b.AutomodAvatar, {
        src: o
      }),
      iconContainerClassName: F.iconContainer,
      compact: n,
      children: (0, a.jsxs)("div", {
        className: i(F.content, {
          [F.compact]: n
        }),
        children: [(0, a.jsx)(P.BaseMessageHeader, {
          message: l,
          messageClassname: F.spanCorrection,
          className: i(F.usernameContainer, F.spanCorrection, {
            [F.compact]: n
          }),
          username: (0, a.jsxs)("div", {
            className: F.spanCorrection,
            children: [(0, a.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: F.username,
              children: H.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, a.jsx)(M.default, {
              type: B.BotTagTypes.SYSTEM_DM,
              className: F.systemTag
            }), (0, a.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: F.spanCorrection,
              children: ef
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, a.jsx)("div", {
          className: i(F.messageContent, {
            [F.compact]: n
          }),
          children: (0, a.jsx)(y.default, {
            ...L,
            message: l,
            channel: X,
            content: ei,
            compact: n,
            withFooter: !0,
            hideTimestamp: !0,
            className: i(F.embedCard, {
              [F.compact]: n,
              [F.selected]: er || K && j,
              [F.isClickable]: null != et && null != X
            }),
            childrenAccessories: (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("div", {
                className: F.centeredRowContainer,
                children: [null != $ && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                      keyword: $
                    })
                  }), (0, a.jsx)("div", {
                    className: i(F.dot, F.dotMargin)
                  })]
                }), null != Z && (0, a.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                    ruleName: Z
                  })
                }), null != em && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("div", {
                    className: i(F.dot, F.dotMargin)
                  }), (0, a.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: F.footerText,
                    children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                      duration: em
                    })
                  })]
                }), null != el && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("div", {
                    className: i(F.dot, F.dotMargin)
                  }), (0, a.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: F.titleCase,
                    children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({
                      reason: (0, _.getQuarantineReasonString)(el)
                    })
                  })]
                })]
              }), eE ? (0, a.jsx)(Y, {
                children: (0, a.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  tag: "span",
                  children: ea
                })
              }) : null]
            }),
            popoutProps: eo,
            zalgo: !0,
            onFocus: U,
            onBlur: W,
            onClick: ed
          })
        }), (0, a.jsx)(V, {
          compact: n,
          children: (0, a.jsxs)("div", {
            className: i(F.centeredRowContainer, F.buttonContainer, {
              [F.compact]: n
            }),
            children: [(0, a.jsx)(f.Button, {
              onClick: e => {
                var t;
                null === (t = eo.onContextMenuModerateUser) || void 0 === t || t.call(eo, e)
              },
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: F.buttonStyle,
              children: (0, a.jsxs)("div", {
                className: F.footerAction,
                children: [(0, a.jsx)(O.default, {
                  width: 16,
                  height: 16,
                  color: d.default.BLUE_345,
                  className: F.footerIcon
                }), (0, a.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: H.default.Messages.ACTIONS
                })]
              })
            }), (0, a.jsx)("div", {
              className: F.dot
            }), (0, a.jsx)(f.Button, {
              onClick: eu,
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: F.buttonStyle,
              children: (0, a.jsx)("div", {
                className: F.footerAction,
                children: (0, a.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: H.default.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }), e_ ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", {
                className: F.dot
              }), (0, a.jsx)(f.Button, {
                onClick: ec,
                color: f.Button.Colors.LINK,
                look: f.Button.Looks.LINK,
                size: f.Button.Sizes.SMALL,
                className: F.buttonStyle,
                children: (0, a.jsx)("div", {
                  className: F.footerAction,
                  children: (0, a.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "text-link",
                    children: H.default.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                  })
                })
              })]
            }) : null, null != es ? (0, a.jsx)(z, {
              alertActionsExecution: es,
              guildId: r.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}