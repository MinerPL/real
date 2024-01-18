"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("383018"),
  r = n("679653"),
  o = n("474643"),
  u = n("247013"),
  d = n("88093"),
  c = n("778588"),
  f = n("957255"),
  h = n("27618"),
  C = n("697218"),
  p = n("659500"),
  m = n("412861"),
  E = n("160864"),
  g = n("527382"),
  S = n("49111"),
  A = n("782340"),
  _ = function(e) {
    let {
      className: t,
      style: n,
      channel: _,
      draftType: T
    } = e, [M, N] = a.useState(!0), I = (0, l.useStateFromStores)([c.default], () => c.default.hasLayers()), v = (0, l.useStateFromStores)([f.default], () => null != _ && f.default.can(S.Permissions.ATTACH_FILES, _), [_]), L = (0, l.useStateFromStores)([i.default], () => i.default.getActiveCommand(_.id)), x = null != L, R = _.getGuildId(), y = T === o.DraftType.FirstThreadMessage, D = (0, l.useStateFromStores)([C.default], () => {
      var e;
      return !0 == !(null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
    }), O = (0, l.useStateFromStores)([u.default], () => u.default.didAgree(R)), j = O && !D, P = a.useMemo(() => !I && (_.isPrivate() && !_.isManaged() || null != R && (!_.isNSFW() || j) && v && d.default.canChatInGuild(R)), [v, j, _, R, I]), b = y ? S.ChannelTypesSets.GUILD_THREADS_ONLY.has(_.type) ? A.default.Messages.UPLOAD_TO_NEW_POST : A.default.Messages.UPLOAD_TO_NEW_THREAD : M ? A.default.Messages.UPLOAD_TO.format({
      destination: (0, r.computeChannelName)(_, C.default, h.default, !0)
    }) : A.default.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
    return x || !P ? null : (0, s.jsx)(E.default, {
      className: t,
      style: n,
      title: b,
      description: y ? A.default.Messages.UPLOAD_AREA_NEW_THREAD_HELP : A.default.Messages.UPLOAD_AREA_HELP,
      icons: g.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: e => {
        if (x) return !1;
        P && null != _ && ((0, m.promptToUpload)(e, _, T, {
          requireConfirm: M,
          showLargeMessageDialog: !1
        }), p.ComponentDispatch.dispatchToLastSubscribed(S.ComponentActions.TEXTAREA_FOCUS))
      },
      onDragClear: () => N(!0),
      onDragOver: e => {
        if (x) return !1;
        !y && e.shiftKey === M && N(!e.shiftKey)
      }
    })
  }