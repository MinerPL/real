"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  u = n.n(r),
  o = n("446674"),
  d = n("208620"),
  c = n("569808"),
  f = n("800932"),
  E = n("913645"),
  I = n("434824"),
  _ = n("473759"),
  p = n("165926"),
  h = n("970366"),
  N = n("42963"),
  m = n("271938"),
  T = n("476108"),
  g = n("124969"),
  A = n("65300"),
  S = n("291850"),
  C = n("598489"),
  v = n("860959"),
  x = n("49111"),
  R = n("579033"),
  L = n("56235"),
  O = n("149806"),
  M = n("53452"),
  D = n("782340"),
  P = n("40587"),
  j = n("926622");
o.default.initialize();
class U extends a.PureComponent {
  componentDidMount() {
    (0, h.trackAppUIViewed)("guildTemplate"), !M.IS_APP_COMPATIBLE_BROWSER && A.default.launch("discord://" + x.Routes.GUILD_TEMPLATE(this.props.code), () => void 0)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && E.default.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return M.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(g.Button, {
      className: j.marginTop40,
      onClick: t,
      children: e
    }) : (0, s.jsx)(g.IncompatibleBrowser, {
      className: j.marginTop40
    })
  }
  renderSpinner(e) {
    return (0, s.jsxs)(g.default, {
      children: [(0, s.jsx)(g.Title, {
        children: e
      }), (0, s.jsx)(g.AuthSpinner, {})]
    })
  }
  renderInvalidGuildTemplate() {
    return (0, s.jsxs)(g.default, {
      children: [(0, s.jsx)(g.Image, {
        src: n("653240"),
        className: j.marginBottom8
      }), (0, s.jsx)(g.Title, {
        className: i(j.marginTop8, j.marginBottom8),
        children: D.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
      }), (0, s.jsx)(g.SubTitle, {
        children: D.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
      }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  renderAppOpened() {
    return (0, s.jsxs)(g.default, {
      children: [(0, s.jsx)(g.Title, {
        className: j.marginBottom8,
        children: D.default.Messages.APP_OPENED_TITLE
      }), (0, s.jsx)(g.SubTitle, {
        children: D.default.Messages.APP_OPENED_BODY
      }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  renderAuthenticatedOrDownload() {
    let {
      guildTemplate: e
    } = this.props;
    return (u(null != e, "guild template must not be null"), e.state === R.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(g.default, {
      className: P.authBox,
      children: (0, s.jsx)(_.default, {
        guildTemplate: e
      })
    }) : (0, s.jsx)(b, {
      guildTemplate: e
    })
  }
  renderContinue() {
    return (0, s.jsxs)(g.default, {
      children: [(0, s.jsx)(g.Title, {
        children: D.default.Messages.APP_NOT_OPENED
      }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  render() {
    let {
      guildTemplate: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: a,
      location: l
    } = this.props;
    if (null == e) return this.renderSpinner(D.default.Messages.LOADING);
    if (t === x.NativeAppStates.OPEN) return this.renderAppOpened();
    if (t === x.NativeAppStates.OPENING) return this.renderSpinner(D.default.Messages.APP_OPENING);
    switch (e.state) {
      case R.GuildTemplateStates.RESOLVING:
        return this.renderSpinner(D.default.Messages.APP_OPENING);
      case R.GuildTemplateStates.RESOLVED:
        if (n || !M.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return (0, s.jsx)(S.default, {
          guildTemplate: e,
          transitionTo: a,
          location: l
        });
        else return (0, s.jsx)(v.default, {
          guildTemplate: e,
          transitionTo: a,
          location: l,
          onRegister: () => {
            (0, p.setNewUser)(L.NewUserTypes.ORGANIC_REGISTERED_GUILD_TEMPLATE), N.default.flowStart(O.FlowType.ORGANIC_GUILD_TEMPLATES, O.RegistrationSteps.NUF_STARTED)
          }
        });
      case R.GuildTemplateStates.EXPIRED:
        return this.renderInvalidGuildTemplate();
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), this.handleContinue = () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }
  }
}

function G(e) {
  let t = {
    guildTemplate: (0, o.useStateFromStores)([c.default], () => c.default.getGuildTemplate(e.code)),
    nativeAppState: (0, o.useStateFromStores)([d.default], () => d.default.getState(e.code)),
    authenticated: (0, o.useStateFromStores)([m.default], () => m.default.isAuthenticated()),
    defaultRoute: (0, o.useStateFromStores)([T.default], () => T.default.defaultRoute)
  };
  return (0, s.jsx)(U, {
    ...e,
    ...t
  })
}

function b(e) {
  let {
    guildTemplate: t
  } = e, {
    form: n,
    handleSubmit: a
  } = (0, f.default)(t, !1);
  N.default.flowStep(O.FlowType.ORGANIC_GUILD_TEMPLATES, O.CreateGuildSteps.GUILD_CREATE);
  let l = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(g.Title, {
      className: P.header,
      children: D.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
    }), n, (0, s.jsx)(g.Button, {
      className: P.createButton,
      onClick: a,
      children: D.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD
    })]
  });
  return (0, s.jsx)(C.default, {
    className: P.authBox,
    children: () => [(0, s.jsx)(I.default, {
      guildTemplate: t
    }, "template"), (0, s.jsx)("div", {
      className: P.formContainer,
      children: l
    }, "contents")]
  })
}