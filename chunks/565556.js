"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("669491"),
  i = l("266491"),
  o = l("708253"),
  d = l("77078"),
  C = l("851387"),
  r = l("45299"),
  u = l("716241"),
  c = l("685665"),
  f = l("271938"),
  m = l("965397"),
  E = l("530346"),
  M = l("781896"),
  h = l("599110"),
  T = l("130037"),
  x = l("466818"),
  H = l("624663"),
  _ = l("49111"),
  A = l("782340"),
  L = l("275699");

function g(e) {
  var t;
  let {
    guildId: g
  } = e, {
    analyticsLocations: N
  } = (0, c.default)(), S = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : null, p = (0, x.useCanAccessBulkBanningFeature)(g, S), {
    selectedUserIds: v,
    clearSelection: R
  } = (0, H.default)(g), I = v.size > 0, j = async (e, t, l, a) => {
    try {
      let n = await C.default.banMultipleUsers(e, t, l, a);
      (0, d.showToast)((0, d.createToast)(A.default.Messages.BAN_MULTIPLE_SUCCESS_TOAST, d.ToastType.SUCCESS)), h.default.track(_.AnalyticEvents.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, u.collectGuildAnalyticsMetadata)(e),
        action_type: T.ModerationActionType.BAN,
        target_user_ids: [...v],
        mod_user_id: f.default.getId(),
        successful_user_ids: n.body.banned_users,
        location: S
      })
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(A.default.Messages.BAN_MULTIPLE_FAILED_TOAST, d.ToastType.FAILURE))
    }
    R()
  }, b = n.useCallback(() => {
    R()
  }, [R]), D = (0, a.jsxs)("span", {
    className: L.messageContainer,
    children: [(0, a.jsx)(M.default, {
      width: 24,
      height: 24,
      color: (0, o.useToken)(s.default.unsafe_rawColors.PRIMARY_500).hex()
    }), (0, a.jsx)(d.Text, {
      variant: "heading-md/bold",
      color: "text-normal",
      children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
        count: v.size
      })
    }), (0, a.jsx)(d.Button, {
      color: d.Button.Colors.LINK,
      look: d.Button.Looks.LINK,
      onClick: b,
      className: L.clearButton,
      children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
    })]
  }), O = (0, a.jsxs)("span", {
    className: L.buttonContainer,
    children: [(0, a.jsx)(E.default, {
      width: 20,
      height: 20
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/semibold",
      children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
    })]
  });
  return p ? (0, a.jsx)(i.default, {
    component: "div",
    className: L.saveNoticeContainer,
    children: I && (0, a.jsx)(m.default, {
      children: (0, a.jsx)(r.default, {
        onSave: () => {
          h.default.track(_.AnalyticEvents.BULK_MODERATION_ACTION_STARTED, {
            ...(0, u.collectGuildAnalyticsMetadata)(g),
            action_type: T.ModerationActionType.BAN,
            target_user_ids: [...v],
            mod_user_id: f.default.getId(),
            location: S
          }), (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("743506").then(l.bind(l, "743506"));
            return t => (0, a.jsx)(e, {
              ...t,
              guildId: g,
              canBulkBan: p,
              userIds: v,
              onBanMultiple: j
            })
          })
        },
        onSaveText: O,
        onSaveButtonColor: d.ButtonColors.RED,
        message: D
      })
    })
  }) : null
}