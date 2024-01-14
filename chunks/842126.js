"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  }
}), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("77078"),
  o = i("612039"),
  u = i("858619"),
  c = i("575226"),
  d = i("986632"),
  f = i("592407"),
  E = i("872173"),
  m = i("351825"),
  I = i("642032"),
  p = i("83017"),
  g = i("458604"),
  _ = i("115279"),
  S = i("49111"),
  h = i("782340"),
  C = i("465439"),
  T = e => {
    let {
      emojiDescriptors: t,
      emojiSize: i,
      onSelect: s,
      onInspect: T,
      surrogateCodePoint: N,
      getEmojiItemProps: A,
      getEmojiRowProps: y,
      isScrolling: v,
      isUsingKeyboardNavigation: j,
      rowIndex: R,
      allowAnimatedEmoji: O,
      showEmojiFavoriteTooltip: M,
      channelGuildId: x,
      category: P,
      selectedItemClassName: L,
      messageId: D,
      isBurstReaction: b
    } = e, U = d.EmojiPickerStore.getState(), [w, G] = l.useState(U.inspectedExpressionPosition), [k, F] = (0, o.default)(null, 300), V = l.useRef(null);
    l.useEffect(() => d.EmojiPickerStore.useStore.subscribe(e => G(e), e => e.inspectedExpressionPosition), []), l.useEffect(() => {
      E.FrecencyUserSettingsActionCreators.loadIfNecessary()
    }, []);
    let K = i === _.EmojiSize.LARGE,
      H = i === _.EmojiSize.MEDIUM,
      B = e => {
        let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
        switch (e.type) {
          case p.EmojiGridItemTypes.CREATE_EMOJI: {
            let {
              visibleRowIndex: i,
              columnIndex: o
            } = e, u = w.rowIndex === i && w.columnIndex === o, c = t => {
              t.stopPropagation(), !v.current && !j.current && (s(e, {
                isFinalSelection: !0,
                toggleFavorite: !1
              }), f.default.open(e.guildId, S.GuildSettingsSections.EMOJI))
            }, d = () => {
              !v.current && !j.current && T(e)
            };
            return function() {
              var e;
              let {
                onMouseEnter: i,
                onMouseLeave: s
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                ref: f,
                tabIndex: E,
                onFocus: I,
                ...p
              } = null !== (e = A(o, R)) && void 0 !== e ? e : {};
              return (0, l.createElement)("li", {
                ...p,
                key: t
              }, (0, n.jsx)(r.FocusRing, {
                children: (0, n.jsx)("button", {
                  "aria-label": h.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  ref: f,
                  className: a(C.emojiItem, {
                    [C.emojiItemLarge]: K,
                    [C.emojiItemMedium]: H,
                    [C.emojiItemSelected]: u,
                    [null != L ? L : ""]: u,
                    [C.showPulse]: k === t
                  }),
                  onFocus: null != I ? I : d,
                  onMouseOver: d,
                  onMouseEnter: i,
                  onMouseLeave: s,
                  onClick: c,
                  tabIndex: E,
                  children: (0, n.jsx)(m.default, {
                    className: C.icon,
                    foreground: C.icon,
                    width: 24,
                    height: 24
                  })
                })
              }))
            }()
          }
          case p.EmojiGridItemTypes.EMOJI: {
            var i;
            let {
              columnIndex: l,
              visibleRowIndex: a
            } = e, r = w.rowIndex === a && w.columnIndex === l;
            return (0, n.jsx)(g.default, {
              rowIndex: R,
              descriptor: e,
              emojiItemKey: t,
              isInspected: r,
              isScrolling: v,
              isUsingKeyboardNavigation: j,
              surrogateCodePoint: N,
              allowAnimatedEmoji: O,
              selectedItemClassName: L,
              onSelect: s,
              onInspect: T,
              channelGuildId: x,
              getEmojiItemProps: A,
              isMediumSize: H,
              isLargeSize: K,
              pulseItemKey: k,
              setPulseItemKey: F,
              showEmojiFavoriteTooltip: M,
              messageId: D,
              isBurstReaction: b,
              rowPosition: null == V ? void 0 : null === (i = V.current) || void 0 === i ? void 0 : i.getBoundingClientRect()
            }, t)
          }
        }
      },
      J = e => (0, n.jsx)("ul", {
        ...y(R),
        className: a(C.emojiListRow, {
          [C.emojiListRowLargeSize]: K,
          [C.emojiListRowMediumSize]: H
        }),
        ref: V,
        children: e.map(B)
      });
    if (P !== _.EmojiCategoryTypes.TOP_GUILD_EMOJI) return J(t);
    let W = t.filter(e => e.subCategory === _.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !c.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
      z = t.filter(e => e.subCategory === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && c.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === z.length ? J(t) : (0, n.jsxs)("div", {
      className: C.topEmojiSectionContainer,
      children: [(0, n.jsx)("div", {
        className: a(C.topEmojiContainer, {
          [C.noEmojis]: 0 === W.length
        }),
        children: J(W)
      }), (0, n.jsxs)("div", {
        className: C.newlyAddedHighlightContainer,
        children: [(0, n.jsx)("div", {
          className: a(C.newlyAddedHighlight, {
            [C.oneItem]: 1 === z.length,
            [C.alignRight]: W.length > 0
          }),
          children: J(z)
        }), (0, n.jsxs)("div", {
          className: a(C.newlyAddedBadge, {
            [C.newlyAddedBadgeLarge]: K,
            [C.newlyAddedBadgeMedium]: H,
            [C.alignRight]: W.length > 0
          }),
          children: [(0, n.jsx)(I.default, {
            foreground: C.newlyAddedBadgeStar
          }), (0, n.jsx)(r.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: h.default.Messages.NEW
          })]
        })]
      })]
    })
  }