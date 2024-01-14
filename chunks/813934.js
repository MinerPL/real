"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  r = n("866227"),
  s = n.n(r),
  i = n("446674"),
  u = n("77078"),
  o = n("679653"),
  c = n("776863"),
  d = n("822516"),
  f = n("124163"),
  E = n("953143"),
  h = n("269596"),
  g = n("27618"),
  _ = n("697218"),
  S = n("228427"),
  v = n("599110"),
  R = n("887143"),
  m = n("834052"),
  C = n("151642"),
  N = n("29846"),
  T = n("837979"),
  p = n("49111"),
  I = n("745049"),
  x = n("533613"),
  L = n("782340"),
  A = n("529555");

function y(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: a
  } = e;
  return null == a ? null : (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(u.FormItem, {
      title: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
      className: A.channelSelectionFormItem,
      required: !0,
      children: (0, l.jsx)(u.SearchableSelect, {
        value: n.id,
        options: t.map(e => ({
          value: e.id,
          label: (0, o.computeChannelName)(e, _.default, g.default, !0)
        })),
        onChange: e => {
          let n = t.find(t => t.id === e);
          null != n && a(n)
        },
        renderOptionPrefix: () => (0, l.jsx)(S.default, {
          height: 24
        })
      })
    })
  })
}

function D(e) {
  var t, n, r, g, _, S, D, M;
  let {
    channel: j,
    guild: O,
    header: w,
    error: k,
    loading: G,
    onSave: U,
    onEventSave: B,
    onClose: P,
    onSelectChannel: V,
    isEvent: b = !1,
    defaultOptions: H,
    isSlideReady: Y = !0
  } = e, F = a.useMemo(() => m.default.getStageInstanceByChannel(j.id), [j.id]), [W, Z] = a.useState(null !== (n = null !== (t = null == H ? void 0 : H.topic) && void 0 !== t ? t : null == F ? void 0 : F.topic) && void 0 !== n ? n : ""), [K, z] = a.useState(null !== (r = null == H ? void 0 : H.description) && void 0 !== r ? r : ""), [q] = a.useState(b), [X, J] = a.useState(null !== (g = null == H ? void 0 : H.schedule) && void 0 !== g ? g : {
    startDate: (0, d.getInitialEventStartDate)()
  }), [Q, $] = a.useState(q && (null == H ? void 0 : H.schedule) != null), ee = (0, R.useCanSendStageStartNotification)(j), et = (0, R.useDefaultSendStartStageNotificationToggle)(j), en = null == F && ee && !q, [el, ea] = a.useState(en && et), er = (0, i.useStateFromStores)([h.default], () => h.default.hasHotspot(x.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), es = I.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [ei] = a.useState(null !== (S = null !== (_ = null == H ? void 0 : H.privacyLevel) && void 0 !== _ ? _ : null == F ? void 0 : F.privacy_level) && void 0 !== S ? S : es), [eu, eo] = a.useState(null == H ? void 0 : H.recurrenceRule), ec = (0, C.useStageBlockedUsersCount)(j.id), [ed, ef] = a.useState(!1), eE = (0, o.default)(j), eh = (0, c.useChannelsUserCanStartStageIn)(O), eg = null != V, e_ = eh.length > 1;
  a.useEffect(() => {
    v.default.track(p.AnalyticEvents.START_STAGE_OPENED, {
      stage_instance_id: null == F ? void 0 : F.id,
      can_start_public_stage: !1,
      guild_id: j.guild_id
    })
  }, []);
  let eS = e => {
    if (e.preventDefault(), ei === I.GuildScheduledEventPrivacyLevel.PUBLIC && W.length < 20 && !ed) {
      ef(!0);
      return
    }
    let t = {
      topic: W,
      privacyLevel: ei,
      sendStartNotification: el
    };
    if (q) {
      if (!Q) return;
      null == B || B({
        ...t,
        schedule: X,
        description: K,
        entityType: I.GuildScheduledEventEntityTypes.STAGE_INSTANCE
      });
      return
    }
    null == U || U(t)
  };
  let {
    color: ev,
    text: eR
  } = (D = F, M = ei, q ? {
    color: u.Button.Colors.BRAND,
    text: L.default.Messages.SCHEDULE_EVENT
  } : M === I.GuildScheduledEventPrivacyLevel.PUBLIC && (null == D ? void 0 : D.privacy_level) !== I.GuildScheduledEventPrivacyLevel.PUBLIC ? {
    color: u.Button.Colors.BRAND,
    text: L.default.Messages.CONTINUE
  } : null == D ? {
    color: u.Button.Colors.GREEN,
    text: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
    color: u.Button.Colors.BRAND,
    text: L.default.Messages.SAVE_CHANGES
  }), em = a.useRef(null);
  a.useEffect(() => {
    var e;
    Y && (null === (e = em.current) || void 0 === e || e.focus())
  }, [Y]);
  let eC = Q && null != X.startDate && X.startDate >= s();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.ModalContent, {
      className: A.modalContent,
      children: [w, (0, l.jsx)("div", {
        className: A.blockedUsersContainer,
        children: null == F && ec > 0 && (0, l.jsx)(N.BlockedUsersNotice, {
          channelId: j.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: eS,
        className: A.form,
        children: [(0, l.jsxs)(u.FormItem, {
          title: b ? L.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
          className: A.topicFormItem,
          required: !0,
          children: [(0, l.jsx)(u.TextInput, {
            className: A.textInput,
            onChange: e => Z(e),
            placeholder: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
            maxLength: T.MAX_STAGE_TOPIC_LENGTH,
            value: W,
            autoComplete: "off",
            inputRef: em
          }), ed && (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-warning",
            className: A.warning,
            children: L.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
          }), null != k ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: A.warning,
            children: k.getAnyErrorMessage()
          }) : null]
        }), eg && e_ ? (0, l.jsx)(y, {
          stageChannelsInGuild: eh,
          channel: j,
          onSelectChannel: V
        }) : null, q && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(E.default, {
            className: A.formItem,
            onScheduleChange: J,
            onRecurrenceChange: e => {
              let t = X.startDate;
              if (null == t) return;
              let n = (0, d.recurrenceOptionToRecurrenceRule)(e, t);
              eo(n)
            },
            schedule: X,
            recurrenceRule: eu,
            timeSelected: Q,
            onTimeChange: $
          }), null != X.startDate && X.startDate < s() ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: A.warning,
            children: L.default.Messages.GUILD_EVENT_PAST_START_DATE
          }) : null]
        }), b && (0, l.jsx)(u.FormItem, {
          title: L.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
          className: A.formItem,
          children: (0, l.jsx)(u.TextArea, {
            placeholder: L.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
            value: K,
            onChange: e => z(e),
            maxLength: I.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
          })
        }), en ? (0, l.jsx)(f.default, {
          sendStartNotification: el,
          setSendStartNotification: ea,
          showNotificationNewBadge: er
        }) : null, eg && !e_ ? (0, l.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: A.channelSelection,
          children: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
            stageName: eE,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: A.channelName,
              children: j.name
            }, t)
          })
        }) : null]
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        color: ev,
        onClick: eS,
        disabled: "" === W || null == ei || b && !eC,
        submitting: G,
        children: eR
      }), (0, l.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        className: A.cancelButton,
        onClick: P,
        children: L.default.Messages.CANCEL
      })]
    })]
  })
}