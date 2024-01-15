"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("77078"),
  u = n("656913"),
  o = n("694187"),
  d = n("151642"),
  c = n("29846"),
  E = n("398604"),
  f = n("189443"),
  _ = n("822516"),
  I = n("93550"),
  h = n("953143"),
  T = n("745049"),
  N = n("75015"),
  v = n("837979"),
  m = n("782340"),
  S = n("505376");

function g(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: i
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(r.FormItem, {
    title: m.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: S.formItem,
    children: [(0, l.jsx)(r.Tooltip, {
      text: (0, l.jsx)(r.Text, {
        className: S.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
      shouldShow: !i,
      children: e => (0, l.jsx)("div", {
        ...e,
        children: (0, l.jsx)(r.Checkbox, {
          type: r.Checkbox.Types.INVERTED,
          disabled: !i,
          value: a,
          onChange: (e, t) => s(t),
          children: (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: m.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(r.Text, {
      className: S.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: m.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
    })]
  }) : null
}

function C(e) {
  let {
    guildEvent: t,
    guildEventId: s,
    guildId: C,
    editBroadcastInfoData: p,
    error: x,
    validationErrorMessage: R,
    onChange: A,
    canSetFocus: O = !1
  } = e, {
    entityType: L,
    channelId: M,
    description: D,
    name: y,
    image: U,
    scheduledEndTime: V,
    scheduledStartTime: j,
    recurrenceRule: P
  } = t, G = (0, d.useStageBlockedUsersCount)(M), H = null != t && (0, E.isGuildScheduledEventActive)(t), b = a.useMemo(() => {
    let e = (0, _.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: i(j)
    }
  }, [t, j]), [B, F] = a.useState(null), w = a.useRef(null);
  a.useEffect(() => {
    if (O) {
      var e;
      null === (e = w.current) || void 0 === e || e.focus()
    }
  }, [O]);
  let k = e => {
      A({
        image: e
      })
    },
    Y = (e, t) => {
      if (null == e || void 0 === t) {
        k(null);
        return
      }(0, r.openModalLazy)(async () => {
        let {
          default: a
        } = await n.el("57015").then(n.bind(n, "57015"));
        return n => (0, l.jsx)(a, {
          imgURI: e,
          file: t,
          onCrop: k,
          uploadType: N.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...n
        })
      })
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: S.blockedUsersContainer,
      children: null != M && !H && G > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: M
      })
    }), (0, l.jsxs)("div", {
      className: S.form,
      children: [(0, l.jsxs)(r.FormItem, {
        title: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: S.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(r.TextInput, {
          className: S.textInput,
          onChange: e => {
            A({
              name: e
            })
          },
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: v.MAX_STAGE_TOPIC_LENGTH,
          value: y,
          autoComplete: "off",
          inputRef: w
        }), null != x ? (0, l.jsx)(r.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: S.warning,
          children: x.getAnyErrorMessage()
        }) : null]
      }), (0, l.jsx)(h.default, {
        className: S.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == n ? void 0 : n.toISOString()
          };
          null != t && null != V && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != B && (l.recurrenceRule = (0, _.recurrenceOptionToRecurrenceRule)(B, t)), A(l)
        },
        onRecurrenceChange: e => {
          let t = b.startDate;
          if (null == t) return;
          let n = (0, _.recurrenceOptionToRecurrenceRule)(e, t);
          A({
            recurrenceRule: n
          }), F(e)
        },
        schedule: b,
        recurrenceRule: P,
        showEndDate: L === T.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: L === T.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: H,
        guildId: C
      }), null != R ? (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: S.warning,
        children: R
      }) : null, (0, l.jsx)(r.FormItem, {
        title: m.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: S.formItem,
        children: (0, l.jsx)(r.TextArea, {
          className: S.descriptionInput,
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: D,
          onChange: e => {
            A({
              description: e
            })
          },
          maxLength: T.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(r.FormItem, {
        title: m.default.Messages.GUILD_EVENT_IMAGE,
        className: S.formItem,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: S.addImageHint,
          children: m.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != U ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: S.imagePreview,
            iconWrapperClassName: S.imagePreviewInner,
            image: U,
            makeURL: e => {
              if (null == e) return null;
              if (null != C) {
                var n;
                return null !== (n = (0, I.default)((0, f.convertToFakeGuildEvent)(t, C, s))) && void 0 !== n ? n : null
              }
            },
            onChange: Y,
            hint: m.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: () => k(null),
            children: m.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(r.Button, {
          size: r.Button.Sizes.SMALL,
          children: [m.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(o.default, {
            onChange: Y
          })]
        })]
      }), (0, l.jsx)(g, {
        editBroadcastInfoData: p
      })]
    })]
  })
}