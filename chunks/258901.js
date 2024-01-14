"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("907002"),
  u = n("77078"),
  d = n("430568"),
  c = n("252744"),
  f = n("788506"),
  h = n("86678"),
  p = n("867805"),
  m = n("986632"),
  E = n("252931"),
  C = n("882641"),
  g = n("476765"),
  S = n("837899"),
  _ = n("402671"),
  I = n("449008"),
  T = n("99795"),
  v = n("958706"),
  x = n("894282"),
  N = n("321353");
let A = v.EmojiIntention.CHAT,
  M = [p.default.getByName("thumbsup"), p.default.getByName("eyes"), p.default.getByName("laughing"), p.default.getByName("watermelon"), p.default.getByName("fork_and_knife"), p.default.getByName("yum")].filter(I.isNotNullish);

function R(e) {
  let {
    emoji: t,
    isDisabled: n = !1,
    onClick: s
  } = e, r = l.useRef(null), f = (0, c.default)(r);
  return (0, a.jsx)("span", {
    ref: r,
    children: (0, a.jsx)(u.Button, {
      onClick: s,
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      children: (0, a.jsx)(o.Spring, {
        config: C.EMOJI_BUTTON_SPRING_CONFIG,
        from: {
          value: 0
        },
        to: {
          value: f ? 1 : 0
        },
        children: e => {
          let {
            value: l
          } = e;
          return (0, a.jsx)(o.animated.div, {
            style: {
              transform: l.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, a.jsx)(d.default, {
              className: i(N.emoji, {
                [N.emojiItemDisabled]: n
              }),
              emojiId: t.id,
              emojiName: null == t ? void 0 : t.surrogates,
              animated: t.animated
            })
          })
        }
      })
    })
  })
}

function j(e) {
  let {
    otherAccessories: t,
    isEmojiPickerExpanded: n,
    onSetExpanded: l,
    onFocus: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [t, (0, a.jsx)(u.Clickable, {
      className: N.dropDownContainer,
      onClick: () => {
        l(!n), s()
      },
      children: (0, a.jsx)(S.default, {
        className: i(N.dropDown, {
          [N.dropDownOpen]: n
        })
      })
    })]
  })
}

function L(e) {
  let {
    channel: t,
    title: n,
    closePopout: s,
    onFocus: o,
    onSelectEmoji: d,
    onSelectDisabledEmoji: c,
    onExpandedToggle: p,
    emojiSearchProps: C,
    recentlyUsedEmojis: S,
    analyticsOverride: I
  } = e, L = (0, g.useUID)(), [O, y] = l.useState(!1), {
    viewAndUseEnabled: P
  } = (0, E.useInventoryGuildPacksUserExperiment)({
    autoTrackExposure: !1
  }), b = (0, f.useFrequentlyUsedEmojis)(t.guild_id), D = (0, r.uniqBy)([...b, ...M], "name").filter(e => !_.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: A,
    canViewAndUsePackEmoji: P
  })).slice(0, T.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT);
  null != S && S.length > 0 && D.splice(D.length - 1, 1, S[0]);
  let U = e => {
      y(e), null == p || p(e)
    },
    w = (e, t) => {
      if (null == e && t) {
        s();
        return
      }
      null != e && d(e);
      U(!t), t && m.EmojiPickerStore.setSearchPlaceholder(null)
    };
  return (0, a.jsxs)(u.Dialog, {
    "aria-labelledby": L,
    children: [(0, a.jsx)(u.HeadingLevel, {
      forceLevel: 2,
      children: (0, a.jsx)(u.HiddenVisually, {
        children: (0, a.jsx)(u.H, {
          id: L,
          children: n
        })
      })
    }), (0, a.jsxs)("div", {
      className: N.container,
      children: [(0, a.jsx)(h.default, {
        analyticsOverride: I,
        channel: t,
        className: i(N.animatedPicker, {
          [N.animatedPickerTall]: O
        }),
        headerClassName: i(N.emojiPickerHeader, {
          [N.emojiPickerHeaderExpanded]: O
        }),
        closePopout: s,
        onSelectEmoji: O ? w : () => {},
        shouldHidePickerActions: !O,
        wrapper: "div",
        pickerIntention: A,
        searchProps: {
          ...C,
          accessory: (0, a.jsx)(j, {
            otherAccessories: null == C ? void 0 : C.accessory,
            isEmojiPickerExpanded: O,
            onSetExpanded: U,
            onFocus: o
          }),
          onKeyDown: e => {
            null != e && e.key !== x.KeyboardKeysUpdated.TAB && (e.key !== x.KeyboardKeysUpdated.ENTER || e.shiftKey ? U(!0) : U(!O))
          }
        }
      }), (0, a.jsx)("div", {
        className: N.slotsContainer,
        children: (0, a.jsx)("div", {
          className: i(N.slots, N.slotsWide),
          children: D.map(e => {
            let n = _.default.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: v.EmojiIntention.CHAT,
              canViewAndUsePackEmoji: P
            });
            return (0, a.jsx)("div", {
              className: N.slot,
              children: (0, a.jsx)(u.TooltipContainer, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: N.tooltipContainer,
                color: u.Tooltip.Colors.BRAND,
                children: (0, a.jsx)(R, {
                  emoji: e,
                  isDisabled: n,
                  onClick: () => {
                    n ? null == c || c(e) : w(e, !0)
                  }
                })
              })
            }, e.name)
          })
        })
      })]
    })]
  })
}