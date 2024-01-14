"use strict";
s.r(t), s.d(t, {
  GuildAuditLogSearch: function() {
    return S
  }
}), s("222007"), s("781738");
var a = s("37983"),
  n = s("884691"),
  l = s("98159"),
  i = s("77078"),
  r = s("137223"),
  o = s("76385"),
  d = s("955513"),
  u = s("172483"),
  c = s("891152"),
  E = s("202752"),
  _ = s("751520"),
  T = s("782340"),
  I = s("110846");
s("525840");

function S(e) {
  let {
    className: t
  } = e;
  n.useEffect(() => {
    _.clearTokenCache()
  }, []);
  let [s, S] = n.useState({
    editorState: E.createEmptyEditorState([])
  }), {
    editorState: N
  } = s, [g, f] = n.useState(!0), A = null, L = e => {
    S(t => ({
      ...t,
      editorState: e
    }))
  }, m = e => {
    let t = _.tokenizeQuery(E.getFirstTextBlock(e)).filter(e => e.type !== o.default.NON_TOKEN_TYPE);
    return E.applyTokensAsEntities(t, e, d.default)
  }, C = () => {}, O = () => {
    null != A && Promise.resolve().then(() => null == A ? void 0 : A.focus())
  }, h = () => {
    null == A || A.blur()
  }, R = e => {
    A = e
  }, D = () => {
    f(!0)
  }, M = () => {
    f(!1), null != N && E.isEmpty(N) && C()
  }, G = e => {
    if (null == N) return;
    let t = E.getFirstTextBlock(N);
    if (t.length >= 512) return !0;
    let s = N;
    return s = E.updateContent(e, s), L(s = m(s = E.truncateContent(s, 512))), !g && f(!0), !0
  }, x = e => (e.preventDefault(), !0), p = e => {
    if (e = null != e ? e.replace(/\n/g, "") : "", null == N) return;
    let t = N;
    return t = E.updateContent(e, t), t = m(t = E.truncateContent(t, 512)), !g && f(!0), L(t), !0
  }, U = null != N && E.getFirstTextBlock(N).length > 0;
  return (0, a.jsx)("div", {
    className: t,
    children: (0, a.jsxs)("div", {
      className: I.search,
      children: [(0, a.jsxs)("div", {
        className: I.searchBar,
        children: [(0, a.jsx)(l.Editor, {
          ref: R,
          onBlur: M,
          onFocus: D,
          handleReturn: x,
          handleBeforeInput: G,
          handlePastedText: p,
          placeholder: T.default.Messages.SEARCH,
          editorState: N,
          onChange: L,
          role: "combobox",
          ariaLabel: T.default.Messages.SEARCH
        }), (0, a.jsx)(r.SearchBarIcon, {
          onClear: e => {
            if (null == N) return;
            e.preventDefault(), e.stopPropagation();
            let t = E.getFirstTextBlock(N);
            if ("" === t) {
              O();
              return
            }
            let s = N;
            L(s = E.truncateContent(s, 0)), !g && Promise.resolve().then(() => h())
          },
          hasContent: U,
          className: I.searchIcon
        }), (0, a.jsxs)(i.Button, {
          look: i.Button.Looks.BLANK,
          className: I.filter,
          innerClassName: I.filterButton,
          onClick: () => {},
          children: [T.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_FILTER, (0, a.jsx)(u.default, {
            className: I.filterIcon,
            width: 16,
            height: 16
          })]
        })]
      }), (0, a.jsxs)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        className: I.sort,
        innerClassName: I.sortButton,
        size: i.Button.Sizes.SMALL,
        onClick: () => {},
        children: [T.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SORT, (0, a.jsx)(c.default, {
          className: I.sortIcon,
          width: 16,
          height: 16
        })]
      })]
    })
  })
}