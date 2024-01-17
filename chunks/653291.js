"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("917351"),
  d = n.n(u),
  c = n("866227"),
  f = n.n(c),
  h = n("868233"),
  E = n("446674"),
  m = n("77078"),
  p = n("378438"),
  g = n("425773"),
  S = n("76385"),
  N = n("955513"),
  _ = n("679653"),
  I = n("419830"),
  T = n("42203"),
  C = n("26989"),
  A = n("27618"),
  x = n("712611"),
  v = n("18494"),
  M = n("162771"),
  R = n("102985"),
  L = n("697218"),
  O = n("834179"),
  b = n("689476"),
  y = n("228220"),
  j = n("659500"),
  F = n("701909"),
  D = n("751520"),
  U = n("158998"),
  k = n("49111"),
  P = n("782340"),
  w = n("813069");
let G = f("2015-05-15").local(),
  B = (0, h.makeLazy)({
    createPromise: () => n.el("201959").then(n.bind(n, "201959")),
    webpackId: "201959"
  }),
  H = (e, t, n) => {
    var l, s, i;
    let {
      user: r,
      text: o
    } = n;
    if (null == r) return (0, a.jsx)("strong", {
      children: o
    });
    let u = L.default.getUser(r.id),
      d = T.default.getChannel(e),
      c = (null == d ? void 0 : d.isPrivate()) ? A.default.getNickname(r.id) : null,
      f = null !== (s = null !== (l = C.default.getNick(e, r.id)) && void 0 !== l ? l : c) && void 0 !== s ? s : U.default.getName(r),
      h = null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== i ? i : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
    return [(0, a.jsx)("img", {
      alt: "",
      className: w.displayAvatar,
      src: h
    }, "avatar-".concat(t, "-").concat(r.id)), (0, a.jsx)("span", {
      className: w.displayedNick,
      children: f
    }, "display-nick-".concat(t, "-").concat(r.id)), (0, a.jsx)("span", {
      className: w.displayUsername,
      children: U.default.getUserTag(r, {
        identifiable: R.default.enabled && R.default.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(r.id))]
  },
  V = (e, t, n) => {
    let {
      channel: l,
      text: s
    } = n;
    if (null == l) return (0, a.jsx)("strong", {
      children: s
    });
    let i = T.default.getChannel(l.parent_id),
      r = (0, I.getChannelIconComponent)(l);
    return (0, a.jsxs)("div", {
      className: w.resultChannel,
      children: [null != r ? (0, a.jsx)(r, {
        className: w.searchResultChannelIcon
      }) : null, (0, a.jsx)("strong", {
        children: (0, _.computeChannelName)(l, L.default, A.default)
      }), null != i ? (0, a.jsx)("span", {
        className: w.searchResultChannelCategory,
        children: (0, _.computeChannelName)(i, L.default, A.default)
      }) : null]
    })
  },
  Y = e => {
    let t, n, {
      id: l,
      searchId: s,
      result: r,
      group: o,
      className: u,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      onSelect: h,
      onFocus: E,
      showFilter: p,
      renderResult: g
    } = e;
    if (p) {
      var S, _;
      t = (0, a.jsx)("span", {
        className: w.filter,
        children: null !== (_ = null === (S = N.default[o]) || void 0 === S ? void 0 : S.key) && void 0 !== _ ? _ : "addme:"
      })
    }
    return n = null != g ? g(s, o, r) : (0, a.jsx)("strong", {
      children: r.text
    }), (0, a.jsxs)(m.Clickable, {
      tag: "li",
      className: i(w.option, u),
      onClick: h,
      onFocus: E,
      id: l,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      children: [t, n, (0, a.jsx)(b.default, {
        className: w.plusIcon
      })]
    })
  },
  z = e => (0, a.jsx)(Y, {
    ...e,
    className: w.user,
    renderResult: H
  }),
  K = {
    [k.SearchTokenTypes.FILTER_FROM]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_FROM,
      component: z
    },
    [k.SearchTokenTypes.FILTER_MENTIONS]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
      component: z
    },
    [k.SearchTokenTypes.FILTER_HAS]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_HAS
    },
    [k.SearchTokenTypes.FILTER_FILE_TYPE]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
    },
    [k.SearchTokenTypes.FILTER_IN]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
      component: e => (0, a.jsx)(Y, {
        ...e,
        renderResult: V
      })
    },
    [k.SearchAutocompleteGroups.DATES]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_DATES
    },
    [k.SearchAutocompleteGroups.HISTORY]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
      groupTip(e) {
        let {
          searchId: t
        } = e;
        return (0, a.jsx)(m.Tooltip, {
          text: P.default.Messages.SEARCH_CLEAR_HISTORY,
          position: "left",
          children: e => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = e;
            return (0, a.jsx)(m.Clickable, {
              onClick: () => (0, p.clearHistory)(t),
              onMouseEnter: n,
              onMouseLeave: l,
              className: w.searchClearHistory,
              title: P.default.Messages.SEARCH_CLEAR_HISTORY,
              "aria-label": P.default.Messages.SEARCH_CLEAR_HISTORY,
              children: (0, a.jsx)(y.default, {})
            })
          }
        })
      },
      component: function(e) {
        let {
          onSelect: t,
          onFocus: n,
          result: s,
          showFilter: r,
          searchId: o,
          renderResult: u,
          group: d,
          ...c
        } = e, f = "", h = l.useMemo(() => (function(e) {
          let t = D.tokenizeQuery(e).map((e, t, n) => D.filterHasAnswer(e, n[t + 1]) ? e : new S.Token(e.getFullMatch(), S.NON_TOKEN_TYPE));
          return t
        })(s.text), [s.text]), E = h.map(e => {
          let t = e.getFullMatch();
          if ("" === t.trim()) return null;
          let n = k.IS_SEARCH_FILTER_TOKEN.test(e.type),
            l = k.IS_SEARCH_ANSWER_TOKEN.test(e.type);
          return f += t, (0, a.jsx)("span", {
            className: i({
              [w.filter]: n,
              [w.answer]: l,
              [w.nonText]: !n && !l
            }),
            children: t
          }, e.type + t)
        });
        return (0, a.jsxs)(m.Clickable, {
          className: i(w.option, w.history),
          onClick: t,
          onFocus: n,
          ...c,
          "aria-label": P.default.Messages.SEARCH_FROM_SUGGESTIONS.format({
            suggestion: f
          }),
          children: [E, (0, a.jsx)(b.default, {
            className: w.plusIcon
          })]
        })
      }
    },
    [k.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
      titleText: () => P.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
      groupTip: () => (0, a.jsx)(m.Tooltip, {
        text: P.default.Messages.LEARN_MORE,
        position: "left",
        children: e => (0, a.jsx)("div", {
          className: w.searchLearnMore,
          ...e,
          children: (0, a.jsx)(m.Anchor, {
            href: F.default.getArticleURL(k.HelpdeskArticles.USING_SEARCH),
            title: P.default.Messages.LEARN_MORE,
            children: (0, a.jsx)(O.default, {})
          })
        })
      }),
      component: function(e) {
        var t;
        let {
          result: n,
          onSelect: l,
          onFocus: s,
          showFilter: r,
          searchId: o,
          ...u
        } = e, d = D.getSearchOptionAnswer(null !== (t = n.token) && void 0 !== t ? t : "");
        return (0, a.jsxs)(m.Clickable, {
          className: i(w.option, w.searchOption),
          onClick: l,
          onFocus: s,
          ...u,
          children: [(0, a.jsx)("span", {
            className: w.filter,
            children: n.text
          }), (0, a.jsx)("span", {
            className: i({
              [w.answer]: d
            }),
            children: d
          }), (0, a.jsx)(b.default, {
            className: w.plusIcon
          })]
        })
      }
    }
  };
class Q extends l.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: n,
      totalResults: a
    } = this.props, {
      mode: l
    } = n, {
      resultsState: s
    } = e;
    null != l.filter && null == s.mode.filter && a > 0 ? this.setSelectedIndex(0) : l.type === k.SearchPopoutModes.FILTER_ALL && s.mode.type !== l.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    }, () => this.props.onSelectedIndexChanged(e))
  }
  render() {
    let {
      selectedIndex: e
    } = this.state, {
      navId: t,
      resultsState: n,
      totalResults: l
    } = this.props;
    return (0, a.jsx)(g.default, {
      numResults: l,
      query: n.query,
      navId: t,
      hideQuery: !this.shouldShowSearchQuery(),
      focusedIndex: e,
      renderCustomResults: this.renderAutocompletes,
      renderInitialState: this.renderAutocompletes,
      onHighlightQuery: () => this.focusOption(-1),
      onSelectQuery: this.performSearch,
      renderNoResults: () => null
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.state = {
      dateHint: (0, N.getRandomDateShortcut)(),
      selectedIndex: -1
    }, this.handleDateChange = e => {
      this.setSearchQuery(e.format(k.SEARCH_DATE_FORMAT) + " ", !0)
    }, this.keepCurrentOptionSelected = (e, t) => {
      let {
        selectedIndex: n
      } = this.state, {
        resultsState: a,
        totalResults: l
      } = this.props, {
        mode: s,
        autocompletes: i
      } = a, {
        resultsState: r
      } = e;
      if (s.type !== r.mode.type) this.setSelectedIndex(-1);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== i.length)) {
        let e = D.getFlattenedStringArray(r.autocompletes, r.mode.type),
          n = e[t.selectedIndex - 1],
          a = D.getFlattenedStringArray(i, s.type),
          o = a.indexOf(n); - 1 !== o ? this.setSelectedIndex(o) : t.selectedIndex >= l && this.setSelectedIndex(l - 1)
      }
    }, this.focusNextOption = () => {
      this.focusOtherOption(1)
    }, this.focusPreviousOption = () => {
      this.focusOtherOption(-1)
    }, this.focusOtherOption = e => {
      let {
        selectedIndex: t
      } = this.state, {
        resultsState: n
      } = this.props;
      !D.showDatePicker(n.mode.filter) && this.focusOption(t + e)
    }, this.focusOption = e => {
      let t = e,
        {
          autocompletes: n
        } = this.props.resultsState,
        a = this.shouldShowSearchQuery();
      t < -1 || !a && t < 0 ? t = D.getTotalResults(n) - 1 : a && t >= D.getTotalResults(n) ? t = -1 : !a && t >= D.getTotalResults(n) && (t = 0), this.setSelectedIndex(t)
    }, this.selectOption = e => {
      let t = e;
      if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
      let {
        autocompletes: n,
        mode: a
      } = this.props.resultsState;
      if (D.showDatePicker(a.filter)) return;
      let l = D.getFlattenedStringArray(n, a.type);
      if (t >= l.length) return !1;
      let s = l[t],
        i = function(e) {
          let t = !0,
            n = e.trim();
          return d(N.default).forOwn(e => {
            "" !== e.key && null != e.key && n === e.key && (t = !1)
          }), t
        }(s);
      return this.setSearchQuery(s, i), !0
    }, this.setSearchQuery = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          mode: a,
          cursorScope: l
        } = t.props.resultsState,
        s = 0;
      null != a.token ? s = a.token.start : (null == l ? void 0 : l.currentToken) != null && (s = l.currentToken.end);
      let i = null != a.token ? a.token.end : s;
      j.ComponentDispatch.dispatch(k.ComponentActions.SET_SEARCH_QUERY, {
        query: e,
        anchor: s,
        focus: i,
        performSearch: n
      }), t.setSelectedIndex(-1)
    }, this.shouldShowSearchQuery = () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== k.SearchPopoutModes.FILTER && e.type !== k.SearchPopoutModes.EMPTY && !D.showDatePicker(e.filter)
    }, this.renderDatePicker = () => (0, a.jsxs)("div", {
      className: w.datePicker,
      children: [(0, a.jsx)(B, {
        onSelect: this.handleDateChange,
        maxDate: f().local(),
        minDate: G
      }), (0, a.jsxs)("div", {
        className: w.datePickerHint,
        children: [(0, a.jsxs)("span", {
          className: w.hint,
          children: [P.default.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
        }), (0, a.jsx)(m.Clickable, {
          tag: "span",
          className: w.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    }), this.handleHintClick = () => {
      this.setSearchQuery(this.state.dateHint, !0)
    }, this.performSearch = () => {
      j.ComponentDispatch.dispatch(k.ComponentActions.PERFORM_SEARCH)
    }, this.renderAutocompletes = () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchId: n
      } = this.props, {
        autocompletes: l,
        mode: s
      } = this.props.resultsState;
      if (D.showDatePicker(s.filter)) return this.renderDatePicker();
      let i = -1;
      return l.map(l => {
        var r, o, u;
        let d, c;
        if (null == l || 0 === l.results.length) return null;
        let f = null !== (r = K[l.group]) && void 0 !== r ? r : {};
        null != f.titleText && (c = "".concat(l.group, "-header"), d = (0, a.jsx)("div", {
          id: c,
          className: w.header,
          children: f.titleText()
        }));
        let h = null !== (o = f.groupTip) && void 0 !== o ? o : null,
          E = null != h ? (0, a.jsx)(h, {
            searchId: n
          }) : null,
          m = null !== (u = f.component) && void 0 !== u ? u : Y,
          p = s.type === k.SearchPopoutModes.FILTER_ALL;
        return (0, a.jsxs)("ul", {
          role: "group",
          "aria-labelledby": c,
          className: w.resultsGroup,
          children: [d, E, l.results.map(s => {
            var r, o;
            if (null == s || null == l) return null;
            i += 1;
            let u = e === i;
            return (0, a.jsx)(m, {
              searchId: n,
              group: null !== (r = s.group) && void 0 !== r ? r : l.group,
              result: s,
              showFilter: p,
              onSelect: this.selectOption.bind(null, i),
              onFocus: this.focusOption.bind(null, i),
              ...(0, g.getListboxOptionProps)(t, i, u)
            }, "".concat(l.group, "-").concat(s.text, "-").concat(null !== (o = s.key) && void 0 !== o ? o : ""))
          })]
        }, l.group)
      })
    }
  }
}
var W = l.forwardRef((e, t) => {
  let [n, l, s] = (0, E.useStateFromStoresArray)([M.default, v.default, x.default], () => {
    let e = M.default.getGuildId(),
      t = v.default.getChannelId(),
      n = null != e ? e : t;
    o(null != n, "SearchPopout.getStateFromStores - invalid searchId");
    let a = x.default.getState(n),
      l = D.getTotalResults(a.autocompletes);
    return [n, a, l]
  });
  return (0, a.jsx)(Q, {
    ...e,
    searchId: n,
    resultsState: l,
    totalResults: s,
    ref: t
  })
})