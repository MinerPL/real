"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  u = s("895530"),
  o = s("145131"),
  d = s("993105"),
  c = s("449008"),
  _ = s("773336"),
  E = s("75576"),
  I = s("49111"),
  T = s("782340"),
  f = s("502604");
let S = {
  [I.OperatingSystems.WINDOWS]: _.PlatformTypes.WINDOWS,
  [I.OperatingSystems.MACOS]: _.PlatformTypes.OSX,
  [I.OperatingSystems.LINUX]: _.PlatformTypes.LINUX
};
class R extends n.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: s,
      onClick: n
    } = this.props, l = s === E.PageSizes.LARGE;
    return (0, a.jsx)(r.Button, {
      size: l ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
      fullWidth: !l,
      color: e ? f.tabSelectedColor : f.tabNotSelectedColor,
      className: i({
        [f.tabPageLarge]: l,
        [f.tabPageSmall]: !l,
        [f.tabSelected]: e,
        [f.tabNotSelected]: !e
      }),
      onClick: n,
      children: t
    })
  }
}
let m = e => [{
  key: T.default.Messages.APPLICATION_STORE_SPECS_OS,
  value: e.operating_system_version
}, {
  key: T.default.Messages.APPLICATION_STORE_SPECS_CPU,
  value: e.cpu
}, {
  key: T.default.Messages.APPLICATION_STORE_SPECS_MEMORY,
  value: null != e.ram ? T.default.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
    size: (0, d.formatSize)(1e3 * e.ram, {
      showDecimalForGB: !1
    })
  }) : null
}, {
  key: T.default.Messages.APPLICATION_STORE_SPECS_VIDEO,
  value: e.gpu
}, {
  key: T.default.Messages.APPLICATION_STORE_SPECS_STORAGE,
  value: null != e.disk ? (0, d.formatSize)(1e3 * e.disk, {
    showDecimalForGB: !1
  }) : null
}, {
  key: T.default.Messages.APPLICATION_STORE_SPECS_SOUND,
  value: e.sound_card
}, {
  key: T.default.Messages.APPLICATION_STORE_SPECS_NETWORK,
  value: e.network
}, {
  key: T.default.Messages.APPLICATION_STORE_SPECS_NOTES,
  value: e.notes
}];
class p extends n.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      systemRequirements: s
    } = e, {
      selectedOperatingSystem: a
    } = t, n = Object.keys(s);
    return n.includes(a) ? null : {
      selectedOperatingSystem: n[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: t
    } = this.props, {
      selectedOperatingSystem: s
    } = this.state, n = Object.keys(t);
    return 1 === n.length ? null : (0, a.jsxs)(o.default, {
      className: f.tabs,
      children: [(0, a.jsx)("div", {
        className: f.separator
      }), n.map(t => (0, a.jsx)(R, {
        active: t === s,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case I.OperatingSystems.WINDOWS:
              return T.default.Messages.WINDOWS;
            case I.OperatingSystems.MACOS:
              return T.default.Messages.MACOS;
            case I.OperatingSystems.LINUX:
              return T.default.Messages.LINUX
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let s = m(e),
      n = s.map((e, t) => {
        let s = null != e.value ? e.value.trim() : null;
        return null == s || 0 === s.length ? null : (0, a.jsxs)("div", {
          className: f.requirement,
          children: [(0, a.jsxs)("span", {
            className: f.requirementKey,
            children: [e.key, ":"]
          }), s]
        }, t)
      }).filter(c.isNotNullish);
    return (0, a.jsxs)("div", {
      className: f.requirements,
      children: [(0, a.jsx)(u.default, {
        tag: "h4",
        children: t
      }), n]
    })
  }
  renderBody() {
    let {
      minimum: e,
      recommended: t
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return (0, a.jsxs)("div", {
      className: f.requirementsContainer,
      children: [this.renderRequirementsSection(e, T.default.Messages.APPLICATION_STORE_SPECS_MINIMUM), this.renderRequirementsSection(t, T.default.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)]
    })
  }
  render() {
    return (0, a.jsxs)("div", {
      className: this.props.className,
      children: [(0, a.jsx)(u.default, {
        children: T.default.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS
      }), this.renderTabs(), this.renderBody()]
    })
  }
  constructor(e) {
    super(e), this.handleSelectOperatingSystem = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    };
    let t = (0, _.getPlatform)(),
      s = Object.keys(e.systemRequirements),
      a = s[0];
    for (let e of s) S[e] === t && (a = e);
    this.state = {
      selectedOperatingSystem: a
    }
  }
}
var N = p