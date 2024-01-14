"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  o = n("95410"),
  s = n("77078"),
  u = n("430568"),
  a = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  E = n("145106"),
  _ = n("385976"),
  h = n("42203"),
  I = n("923959"),
  p = n("27618"),
  S = n("697218"),
  C = n("882641"),
  T = n("145131"),
  N = n("476765"),
  v = n("593195"),
  m = n("991170"),
  g = n("59811"),
  A = n("310457"),
  L = n("805828"),
  R = n("49111"),
  U = n("958706"),
  O = n("782340"),
  P = n("306978"),
  M = e => {
    var t, n;
    let {
      guildId: M,
      welcomeChannel: w,
      transitionState: y,
      onSave: D,
      onClose: x
    } = e, b = (0, N.useUID)(), [G, V] = r.useState(null != w ? w.channel_id : null), [F, j] = r.useState(null != w ? w.description : ""), [H, k] = r.useState(null != w ? {
      id: w.emoji_id,
      name: w.emoji_name
    } : null), [B, Z] = r.useState(!1), W = (0, l.useStateFromStores)([_.default], () => (null == H ? void 0 : H.id) != null ? _.default.getUsableCustomEmojiById(H.id) : null), Y = (0, l.useStateFromStores)([I.default], () => I.default.getChannels(M)[I.GUILD_SELECTABLE_CHANNELS_KEY], [M]), z = (0, l.useStateFromStores)([g.default], () => g.default.get(M)), K = null !== (n = null == z ? void 0 : null === (t = z.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [J, q] = r.useState(!1);
    r.useEffect(() => {
      !o.default.get(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => q(!0), 300)
    }, []);
    let X = [];
    Y.forEach(e => {
      let {
        channel: t
      } = e;
      m.default.canEveryoneRole(R.Permissions.VIEW_CHANNEL, t) && ((null == w ? void 0 : w.channel_id) === t.id || !K.includes(t.id)) && X.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, S.default, p.default)
      })
    });
    let $ = () => {
        q(!1), x()
      },
      Q = r.useCallback(e => j(e), []),
      ee = e => {
        var t, n, i;
        if (null == e) {
          k(null);
          return
        }
        k(null != e.id ? {
          id: null !== (t = e.id) && void 0 !== t ? t : null,
          name: null !== (n = e.name) && void 0 !== n ? n : null
        } : {
          id: null,
          name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
        })
      },
      et = r.useCallback(() => {
        o.default.set(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), q(!1)
      }, []);
    return (0, i.jsx)(a.default, {
      page: R.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(s.ModalRoot, {
        transitionState: y,
        "aria-labelledby": b,
        children: [(0, i.jsxs)("div", {
          className: P.modalContents,
          children: [(0, i.jsx)(s.ModalCloseButton, {
            onClick: $,
            className: P.closeButton
          }), (0, i.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            id: b,
            children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(s.FormSection, {
            className: P.formGroup,
            children: [(0, i.jsx)(s.SearchableSelect, {
              options: X,
              onChange: e => V(e),
              value: G,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  r = h.default.getChannel(n),
                  l = null !== (t = (0, d.getChannelIconComponent)(r)) && void 0 !== t ? t : v.default;
                return (0, i.jsx)(l, {
                  className: P.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: P.formDescription,
              children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(s.FormSection, {
            className: P.formGroup,
            children: (0, i.jsx)(s.TextInput, {
              maxLength: 42,
              value: F,
              inputClassName: P.input,
              placeholder: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: Q
            })
          }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.FormSection, {
            className: P.formGroup,
            children: (0, i.jsxs)("div", {
              className: P.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: P.emojiTitleContainer,
                children: [(0, i.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(E.default, {
                hasSetEmoji: null != H,
                onClick: ee,
                children: (0, i.jsx)(s.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = I.default.getDefaultChannel(M);
                    return (0, i.jsx)(f.default, {
                      guildId: M,
                      closePopout: t,
                      onSelectEmoji: (e, n) => {
                        ee(e), n && (t(), null == e && $())
                      },
                      pickerIntention: U.EmojiIntention.COMMUNITY_CONTENT,
                      onNavigateAway: $,
                      channel: n
                    })
                  },
                  position: "left",
                  animation: s.Popout.Animation.NONE,
                  align: "bottom",
                  children: (e, t) => {
                    let {
                      isShown: n
                    } = t;
                    return (0, i.jsx)(s.TooltipContainer, {
                      color: s.TooltipColors.BRAND,
                      tooltipClassName: P.tooltip,
                      position: "left",
                      text: J ? O.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: J,
                      children: (0, i.jsx)(C.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: P.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != H && (null != H.id || null != H.name) ? () => (0, i.jsx)(u.default, {
                          className: P.emoji,
                          emojiId: H.id,
                          emojiName: H.name,
                          animated: !!(null == W ? void 0 : W.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, i.jsxs)(s.ModalFooter, {
          className: P.footer,
          justify: T.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(T.default, {
            grow: 0,
            align: T.default.Align.CENTER,
            children: [(0, i.jsx)(s.Button, {
              onClick: $,
              size: s.Button.Sizes.SMALL,
              look: s.Button.Looks.LINK,
              color: s.Button.Colors.PRIMARY,
              children: O.default.Messages.CANCEL
            }), (0, i.jsx)(s.Button, {
              onClick: () => {
                null != G && F.length > 0 && D({
                  channel_id: G,
                  description: F,
                  emoji_id: null == H ? void 0 : H.id,
                  emoji_name: null == H ? void 0 : H.name
                }), $()
              },
              disabled: null == G || 0 === F.length,
              children: O.default.Messages.SAVE
            })]
          }), null != w && (0, i.jsx)(s.Button, {
            onClick: () => {
              Z(!0)
            },
            size: s.Button.Sizes.MIN,
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.RED,
            children: O.default.Messages.REMOVE
          })]
        }), B && (0, i.jsx)(A.default, {
          onConfirm: () => {
            D(), $()
          },
          onCancel: () => Z(!1),
          channelId: G
        })]
      })
    })
  }