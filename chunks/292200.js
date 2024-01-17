"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("866227"),
  o = n.n(r),
  u = n("974667"),
  d = n("733724"),
  c = n("446674"),
  f = n("77078"),
  E = n("206230"),
  _ = n("228944"),
  T = n("201131"),
  I = n("928098"),
  m = n("702873"),
  N = n("537325"),
  p = n("95045"),
  S = n("909917"),
  A = n("380986"),
  C = n("969706"),
  h = n("957255"),
  g = n("697218"),
  M = n("79798"),
  O = n("36694"),
  R = n("907566"),
  L = n("561359"),
  v = n("228220"),
  P = n("759885"),
  D = n("843194"),
  x = n("93332"),
  y = n("304198"),
  U = n("387111"),
  j = n("158998"),
  b = n("250375"),
  G = n("49111"),
  B = n("988268"),
  F = n("903639"),
  k = n("894488"),
  w = n("782340"),
  H = n("180094");

function V(e) {
  let {
    children: t,
    className: n,
    compact: l
  } = e;
  return (0, s.jsx)("div", {
    className: i(H.footerContainer, n, {
      [H.compact]: l
    }),
    children: t
  })
}

function Y(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, s.jsx)("div", {
    className: i(H.annotationRow, n),
    children: t
  })
}

function K(e, t) {
  switch (e) {
    case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
      return (0, s.jsx)(v.default, {
        width: 16,
        height: 16,
        className: H.alertActionIcon,
        ...t
      });
    case _.AutomodAlertActionType.SET_COMPLETED:
      return (0, s.jsx)(O.default, {
        width: 16,
        height: 16,
        className: i(H.alertActionIcon, H.alertActionSetCompletedIcon),
        ...t
      });
    case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
      return (0, s.jsx)(R.default, {
        width: 16,
        height: 16,
        className: i(H.alertActionIcon),
        ...t
      });
    default:
      return null
  }
}

function W(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, l = (0, c.useStateFromStores)([g.default], () => g.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == l) return K(e, {});
    let a = function(e, t, n) {
      var s;
      let l = null !== (s = U.default.getNickname(n, null, t)) && void 0 !== s ? s : j.default.getUserTag(t),
        a = o(e.ts),
        i = "".concat(l, " ").concat(a.fromNow());
      try {
        let t = parseInt(e.actionType);
        switch (t) {
          case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
            return w.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
              userName: l,
              timestamp: a.fromNow()
            });
          case _.AutomodAlertActionType.SET_COMPLETED:
            return w.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
              userName: l,
              timestamp: a.fromNow()
            });
          case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
            return w.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
              userName: l,
              timestamp: a.fromNow()
            });
          default:
            return i
        }
      } catch (e) {
        return i
      }
    }(t, l, n);
    return (0, s.jsx)(f.Tooltip, {
      text: a,
      children: t => K(e, t)
    })
  } catch (e) {
    return null
  }
}

function z(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, l = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, s.jsx)("div", {
    className: H.alertActionsIconContainer,
    children: l.map(e => (0, s.jsx)(W, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}

function Z(e) {
  let {
    id: t,
    compact: n,
    message: a,
    channel: r
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: g,
      onMouseLeave: O
    }
  } = (0, b.useAutomodAvatar)(!0), {
    onFocus: R,
    ...v
  } = (0, u.useListItem)(null != t ? t : ""), {
    isFocused: U,
    handleFocus: j,
    handleBlur: K
  } = (0, A.useFocusInside)(R), W = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), Z = (0, c.useStateFromStores)([h.default], () => h.default.can(G.Permissions.MANAGE_MESSAGES, r), [r]), {
    ruleName: J,
    embedChannel: Q,
    decisionId: X,
    keywordMatchedContent: q,
    keyword: $,
    content: ee,
    flaggedMessageId: et,
    timeoutDuration: en,
    decisionReason: es,
    alertActionsExecution: el,
    quarantineType: ea
  } = (0, T.default)(a), ei = l.useMemo(() => (0, p.renderAutomodMessageMarkup)(ee, q, r.id), [ee, q, r]), {
    selected: er,
    ...eo
  } = function(e, t) {
    let {
      popouts: n,
      selected: s,
      setPopout: a
    } = (0, C.default)(e.id, k.DEFAULT_POPOUTS), {
      usernameProfile: i,
      avatarProfile: r
    } = n, o = (0, A.useContextMenuUser)(e.author.id, t.id), u = (0, A.useContextMenuModerateUser)(e.author.id, t.id, e.id), d = (0, A.useClickMessageAuthorUsername)(e, t, i, a), c = (0, A.useClickMessageAuthorAvatar)(r, a), f = l.useCallback(() => a({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [a]);
    return {
      selected: s,
      onContextMenu: o,
      onContextMenuModerateUser: u,
      onClickUsername: d,
      onClickAvatar: c,
      onPopoutRequestClose: f,
      renderPopout: S.default,
      showAvatarPopout: r,
      showUsernamePopout: i
    }
  }(a, r), eu = l.useCallback(() => {
    (0, I.openSubmitFeedback)(a.id, ee, X, r)
  }, [a.id, ee, X, r]), ed = l.useCallback(e => {
    null != et && null != Q && (e.stopPropagation(), e.preventDefault(), (0, N.default)(G.Routes.CHANNEL(null == Q ? void 0 : Q.guild_id, null == Q ? void 0 : Q.id, et)))
  }, [Q, et]), ec = l.useCallback(() => {
    (0, m.executeAlertAction)(a.id, r, _.AutomodAlertActionType.DELETE_USER_MESSAGE)
  }, [r, a.id]), ef = l.useMemo(() => (0, T.getActionHeaderText)(a, Q, () => (0, s.jsx)("div", {
    className: H.channelNameContainer,
    children: (0, s.jsx)(P.default, {
      channel: Q,
      className: H.channelName,
      openChatWithoutConnecting: !0
    })
  })), [a, Q]), eE = (0, F.getFriendlyDurationString)(Number(en)), e_ = null != es, eT = Z && null != et && (null == el || !el.actions.hasOwnProperty(_.AutomodAlertActionType.DELETE_USER_MESSAGE));
  return (0, s.jsx)("div", {
    onMouseEnter: g,
    onMouseLeave: O,
    children: (0, s.jsx)(y.default, {
      className: i(H.mainContainer, {
        [H.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(b.AutomodAvatar, {
        src: o
      }),
      iconContainerClassName: H.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: i(H.content, {
          [H.compact]: n
        }),
        children: [(0, s.jsx)(x.BaseMessageHeader, {
          message: a,
          messageClassname: H.spanCorrection,
          className: i(H.usernameContainer, H.spanCorrection, {
            [H.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: H.spanCorrection,
            children: [(0, s.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: H.username,
              children: w.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(M.default, {
              type: B.BotTagTypes.SYSTEM_DM,
              className: H.systemTag
            }), (0, s.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: H.spanCorrection,
              children: ef
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: i(H.messageContent, {
            [H.compact]: n
          }),
          children: (0, s.jsx)(D.default, {
            ...v,
            message: a,
            channel: Q,
            content: ei,
            compact: n,
            withFooter: !0,
            hideTimestamp: !0,
            className: i(H.embedCard, {
              [H.compact]: n,
              [H.selected]: er || W && U,
              [H.isClickable]: null != et && null != Q
            }),
            childrenAccessories: (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("div", {
                className: H.centeredRowContainer,
                children: [null != $ && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                      keyword: $
                    })
                  }), (0, s.jsx)("div", {
                    className: i(H.dot, H.dotMargin)
                  })]
                }), null != J && (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                    ruleName: J
                  })
                }), null != eE && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i(H.dot, H.dotMargin)
                  }), (0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: H.footerText,
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                      duration: eE
                    })
                  })]
                }), null != ea && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i(H.dot, H.dotMargin)
                  }), (0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: H.titleCase,
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({
                      reason: (0, T.getQuarantineReasonString)(ea)
                    })
                  })]
                })]
              }), e_ ? (0, s.jsx)(Y, {
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  tag: "span",
                  children: es
                })
              }) : null]
            }),
            popoutProps: eo,
            zalgo: !0,
            onFocus: j,
            onBlur: K,
            onClick: ed
          })
        }), (0, s.jsx)(V, {
          compact: n,
          children: (0, s.jsxs)("div", {
            className: i(H.centeredRowContainer, H.buttonContainer, {
              [H.compact]: n
            }),
            children: [(0, s.jsx)(f.Button, {
              onClick: e => {
                var t;
                null === (t = eo.onContextMenuModerateUser) || void 0 === t || t.call(eo, e)
              },
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: H.buttonStyle,
              children: (0, s.jsxs)("div", {
                className: H.footerAction,
                children: [(0, s.jsx)(L.default, {
                  width: 16,
                  height: 16,
                  color: d.default.BLUE_345,
                  className: H.footerIcon
                }), (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: w.default.Messages.ACTIONS
                })]
              })
            }), (0, s.jsx)("div", {
              className: H.dot
            }), (0, s.jsx)(f.Button, {
              onClick: eu,
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: H.buttonStyle,
              children: (0, s.jsx)("div", {
                className: H.footerAction,
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: w.default.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }), eT ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: H.dot
              }), (0, s.jsx)(f.Button, {
                onClick: ec,
                color: f.Button.Colors.LINK,
                look: f.Button.Looks.LINK,
                size: f.Button.Sizes.SMALL,
                className: H.buttonStyle,
                children: (0, s.jsx)("div", {
                  className: H.footerAction,
                  children: (0, s.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "text-link",
                    children: w.default.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                  })
                })
              })]
            }) : null, null != el ? (0, s.jsx)(z, {
              alertActionsExecution: el,
              guildId: r.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}