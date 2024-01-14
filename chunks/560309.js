"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("866227"),
  r = l.n(s),
  i = l("446674"),
  u = l("77078"),
  d = l("679653"),
  o = l("42203"),
  c = l("305961"),
  E = l("957255"),
  f = l("27618"),
  _ = l("697218"),
  I = l("718550"),
  T = l("368121"),
  N = l("944633"),
  h = l("228427"),
  v = l("697468"),
  m = l("398604"),
  S = l("334683"),
  g = l("799547"),
  C = l("776863"),
  x = l("613767"),
  p = l("841363"),
  A = l("306939"),
  O = l("745049"),
  R = l("49111"),
  M = l("782340"),
  L = l("869785");
let D = e => e === O.GuildScheduledEventEntityTypes.EXTERNAL,
  y = (e, t) => {
    let l = o.default.getChannel(e);
    if (null == l) return null;
    let a = l.type === R.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, x.isChannelPublic)(l, t),
      r = s ? T.default : N.default,
      i = s ? h.default : v.default;
    return (0, n.jsx)(a ? i : r, {
      height: 24,
      className: L.channelOptionIcon
    })
  },
  j = e => {
    let {
      guildId: t,
      channelType: l,
      channel: a,
      onSelectChannel: s,
      disabled: r,
      entityType: i
    } = e, o = l === R.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, i), E = (0, g.useGetEventChannelsByType)(t, l);
    return (0, n.jsxs)(u.FormItem, {
      title: o ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: L.options,
      disabled: r,
      required: !0,
      children: [(0, n.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: E.map(e => ({
          value: e.id,
          label: (0, d.computeChannelName)(e, _.default, f.default, !0)
        })),
        onChange: e => {
          let t = E.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => y(null == e ? void 0 : e.value, i),
        isDisabled: r
      }), !c && (0, n.jsx)(u.Text, {
        color: "header-secondary",
        className: L.channelPrivate,
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function V(e, t, l, n) {
  return t ? {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : l ? 0 === n && e !== O.GuildScheduledEventEntityTypes.EXTERNAL ? {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
  } : {
    disabled: !1,
    tooltipText: null
  } : {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
  }
}
let U = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  G = e => t => {
    var l;
    e({
      channelId: null !== (l = null == t ? void 0 : t.id) && void 0 !== l ? l : null
    })
  },
  P = (e, t) => l => {
    let {
      value: n
    } = l, a = {
      entityType: n,
      scheduledEndTime: void 0
    };
    if (D(n)) {
      var s;
      let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function H(e) {
  let {
    guildId: t,
    guildEvent: l,
    onChange: s,
    isFocusReady: r
  } = e, {
    entityType: d,
    channelId: c
  } = l, E = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), f = a.useRef(null);
  a.useEffect(() => {
    if (r && D(d)) {
      var e;
      null === (e = f.current) || void 0 === e || e.focus()
    }
  }, [r, d]);
  let _ = U(s),
    I = G(s),
    T = (0, p.getLocationFromEventData)(l),
    N = (0, p.getChannelTypeFromEntity)(d),
    h = (0, m.isGuildScheduledEventActive)(l);
  return null == d || d === O.GuildScheduledEventEntityTypes.NONE ? null : D(d) ? (0, n.jsx)(u.FormItem, {
    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: L.options,
    required: !0,
    children: (0, n.jsx)(u.TextInput, {
      className: L.textInput,
      onChange: _,
      placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: O.MAX_EVENT_LOCATION_LENGTH,
      value: null != T ? T : "",
      inputRef: f
    })
  }) : null == N ? null : (0, n.jsx)(j, {
    guildId: t,
    channelType: N,
    onSelectChannel: I,
    channel: E,
    entityType: d,
    disabled: h
  })
}

function B(e) {
  let {
    guildId: t,
    guildEvent: l,
    onChange: s
  } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, S.default)(t, void 0), o = (0, S.default)(t, R.ChannelTypes.GUILD_VOICE), E = (0, S.default)(t, R.ChannelTypes.GUILD_STAGE_VOICE), f = (0, g.useGetEventChannelsByType)(t, R.ChannelTypes.GUILD_VOICE), _ = (0, C.useChannelsUserCanStartStageIn)(r), N = null == r ? void 0 : r.hasFeature(R.GuildFeatures.COMMUNITY), v = (0, m.isGuildScheduledEventActive)(l), x = P(s, l), p = a.useMemo(() => {
    let e = [{
      name: M.default.Messages.VOICE_CHANNEL,
      value: O.GuildScheduledEventEntityTypes.VOICE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: T.default,
      ...V(O.GuildScheduledEventEntityTypes.VOICE, v, o, f.length)
    }, {
      name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: O.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: I.default,
      ...V(O.GuildScheduledEventEntityTypes.EXTERNAL, v, d, 0)
    }];
    return N ? [{
      name: M.default.Messages.STAGE_CHANNEL,
      value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: h.default,
      ...V(O.GuildScheduledEventEntityTypes.STAGE_INSTANCE, v, E, _.length)
    }, ...e] : e
  }, [d, o, E, N, f.length, _.length, v]);
  return (0, n.jsx)(u.RadioGroup, {
    value: l.entityType,
    options: p,
    onChange: x,
    className: L.options
  })
}

function b(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: s,
    onChange: r,
    isSlideReady: d = !1
  } = e, {
    entityType: o
  } = a, f = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), _ = (0, C.useChannelsUserCanStartStageIn)(f), I = (0, i.useStateFromStores)([E.default], () => E.default.can(R.Permissions.MANAGE_CHANNELS, f)), T = null == f ? void 0 : f.hasFeature(R.GuildFeatures.COMMUNITY), N = P(r, a), h = T && !D(o) && 0 === _.length && I && null != o;
  return (0, n.jsxs)("div", {
    className: L.container,
    children: [(0, n.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: L.header,
      children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, n.jsx)(u.Text, {
      color: "header-secondary",
      className: L.text,
      variant: "text-sm/normal",
      children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, n.jsx)(B, {
      guildId: t,
      guildEvent: a,
      onChange: r
    }), (0, n.jsx)(H, {
      guildId: t,
      guildEvent: a,
      isFocusReady: d,
      onChange: r
    }), h ? (0, n.jsx)(A.default, {
      onClick: () => {
        N({
          value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: M.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await l.el("581354").then(l.bind(l, "581354"));
          return l => (0, n.jsx)(e, {
            ...l,
            channelType: R.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}