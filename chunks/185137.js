"use strict";
E.r(_), E.d(_, {
  default: function() {
    return A
  }
}), E("222007");
var t = E("37983"),
  o = E("884691"),
  n = E("446674"),
  r = E("77078"),
  i = E("363658"),
  a = E("135230"),
  I = E("42887"),
  s = E("945956"),
  T = E("568307"),
  S = E("701909"),
  N = E("49111"),
  O = E("782340"),
  A = () => {
    let [e, _] = (0, n.useStateFromStoresArray)([T.default], () => [T.default.canShowAdminWarning, T.default.getVisibleGame()], []), E = (0, n.useStateFromStores)([s.default], () => s.default.isConnected(), []), A = (0, n.useStateFromStores)([I.default], () => I.default.getMode() === N.InputModes.PUSH_TO_TALK, []), R = null != _ && _.elevated && E && A && e, l = o.useRef(null);

    function L() {
      null !== l.current && ((0, r.closeModal)(l.current), l.current = null)
    }
    return o.useEffect(() => (R ? l.current = (0, r.openModal)(e => (0, t.jsx)(a.default, {
      title: O.default.Messages.PTT_PERMISSION_TITLE,
      body: O.default.Messages.PTT_PERMISSION_BODY.format({
        game: null == _ ? void 0 : _.name
      }),
      secondaryConfirmText: O.default.Messages.DONT_SHOW_AGAIN,
      onConfirmSecondary: () => i.default.clearPTTAdminWarning(),
      onConfirm: () => window.open(S.default.getArticleURL(N.HelpdeskArticles.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank"),
      confirmText: O.default.Messages.HELP_DESK,
      ...e
    })) : L(), () => {
      L()
    }), [_, R]), null
  }