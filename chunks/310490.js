"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("222007"), s("843762");
var a = s("37983"),
  n = s("884691"),
  l = s("917351"),
  i = s.n(l),
  r = s("316693"),
  o = s("446674"),
  d = s("77078"),
  u = s("642950"),
  c = s("913801"),
  E = s("679653"),
  _ = s("923959"),
  T = s("957255"),
  I = s("27618"),
  S = s("102985"),
  N = s("697218"),
  g = s("592407"),
  f = s("900938"),
  A = s("49111"),
  L = s("782340"),
  m = s("686184");
let C = "NO_INSTANT_INVITE",
  O = r.default.combine(A.Permissions.VIEW_CHANNEL, A.Permissions.CREATE_INSTANT_INVITE);
class h extends n.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      widgetEnabled: s
    } = e, {
      widgetEnabledProp: a
    } = t;
    return s !== a ? {
      internalEnabled: s,
      widgetEnabledProp: s
    } : null
  }
  renderChannelSelect(e) {
    let {
      widgetChannelId: t
    } = this.props, s = _.default.getChannels(e.id), n = i([...s[_.GUILD_SELECTABLE_CHANNELS_KEY], ...s[_.GUILD_VOCAL_CHANNELS_KEY]]).filter(t => {
      let {
        channel: s
      } = t;
      return s.guild_id === e.id
    }).filter(e => {
      let {
        channel: s
      } = e;
      return s.id === t || T.default.can(O, s)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, E.computeChannelName)(t, N.default, I.default, !0)
      }
    }).value(), l = {
      value: C,
      label: L.default.Messages.NO_INSTANT_INVITE
    };
    n.unshift(l);
    let r = null != t ? t : l;
    return (0, a.jsxs)(d.FormItem, {
      title: L.default.Messages.FORM_LABEL_INSTANT_INVITE_CHANNEL,
      children: [(0, a.jsx)(d.SingleSelect, {
        className: m.spacing,
        options: n,
        value: r,
        onChange: this.handleChannelSelect
      }), (0, a.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        children: L.default.Messages.FORM_HELP_INSTANT_INVITE_CHANNEL
      })]
    })
  }
  renderAPIInfo(e) {
    let t = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/guilds/").concat(e.id, "/widget.json");
    return (0, a.jsxs)("div", {
      className: m.infoWrapper,
      children: [(0, a.jsx)(d.FormItem, {
        title: L.default.Messages.FORM_LABEL_SERVER_ID,
        className: m.infoItem,
        children: (0, a.jsx)(c.default, {
          value: e.id
        })
      }), (0, a.jsx)(d.FormItem, {
        title: L.default.Messages.FORM_LABEL_JSON_API,
        className: m.infoItem,
        children: (0, a.jsx)(c.default, {
          value: t
        })
      })]
    })
  }
  renderWidget(e) {
    let t = "".concat(location.protocol).concat(window.GLOBAL_ENV.WIDGET_ENDPOINT, "?id=").concat(e.id, "&theme=dark");
    return (0, a.jsx)("div", {
      children: (0, a.jsxs)("div", {
        className: m.infoWrapper,
        children: [(0, a.jsxs)(d.FormItem, {
          className: m.infoItem,
          title: L.default.Messages.FORM_LABEL_PREMADE_WIDGET,
          children: [(0, a.jsx)(c.default, {
            value: '<iframe src="'.concat(t, '" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>')
          }), (0, a.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            children: L.default.Messages.GUILD_SETTINGS_WIDGET_EMBED_HELP.format()
          })]
        }), (0, a.jsx)("img", {
          className: m.infoItem,
          "data-accessibility": "desaturate",
          alt: "",
          src: s("94944")
        })]
      })
    })
  }
  render() {
    let {
      guild: e
    } = this.props;
    return null == e ? null : this.props.hide ? (0, a.jsx)(u.default, {}) : (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: L.default.Messages.GUILD_SETTINGS_TITLE_SERVER_WIDGET,
      children: [this.renderToggle(), this.renderChannelSelect(e), (0, a.jsx)(d.FormDivider, {
        className: m.divider
      }), this.renderAPIInfo(e), (0, a.jsx)(d.FormDivider, {
        className: m.divider
      }), this.renderWidget(e)]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      internalEnabled: this.props.widgetEnabled,
      widgetEnabledProp: this.props.widgetEnabled
    }, this.renderToggle = () => (0, a.jsx)(d.FormSwitch, {
      className: m.spacing,
      value: this.state.internalEnabled,
      onChange: this.handleToggleWidget,
      children: L.default.Messages.GUILD_SETTINGS_WIDGET_ENABLE_WIDGET
    }), this.handleToggleWidget = e => {
      let {
        guild: t,
        widgetChannelId: s
      } = this.props;
      null != t && (this.setState({
        internalEnabled: e
      }), g.default.updateEmbed(t.id, e, s))
    }, this.handleChannelSelect = e => {
      let {
        guild: t,
        widgetEnabled: s
      } = this.props;
      null != t && g.default.updateEmbed(t.id, s, e !== C ? e : null)
    }
  }
}
var R = o.default.connectStores([f.default, S.default], () => {
  let {
    guild: e,
    embedChannelId: t,
    embedEnabled: s
  } = f.default.getProps();
  return {
    guild: e,
    widgetChannelId: t,
    widgetEnabled: s,
    hide: S.default.enabled
  }
})(h)