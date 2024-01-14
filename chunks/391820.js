"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("424973"), l("222007");
var a = l("37983"),
  s = l("884691"),
  n = l("446674"),
  i = l("77078"),
  r = l("641608"),
  c = l("98328"),
  u = l("993105"),
  o = l("50885"),
  d = l("782340"),
  h = l("335420");
let p = "select";
class f extends s.PureComponent {
  fetchAllDirectoryMetadata() {
    let {
      installationPaths: e
    } = this.props, t = e.map(e => {
      let {
        path: t
      } = e;
      return t
    }), {
      newInstallationPath: l
    } = this.state;
    for (let e of (null != l && t.push(l), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, r.fetchMetadata)(t), t)) this.fetchedMetadataPaths.add(e)
  }
  componentDidMount() {
    this.fetchAllDirectoryMetadata()
  }
  componentDidUpdate(e) {
    this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== e.requiredDiskKB || this.props.installationPathsMetadata !== e.installationPathsMetadata) && this.sendChange(this.props.value)
  }
  getOptions() {
    let {
      installationPaths: e
    } = this.props, {
      newInstallationPath: t
    } = this.state, l = e.map(e => {
      let {
        path: t,
        label: l
      } = e;
      return {
        value: t,
        label: this.renderLabel(t, l)
      }
    });
    return null != t && l.push({
      value: t,
      label: this.renderLabel(t)
    }), l.push({
      value: p,
      label: d.default.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
    }), l
  }
  hasEnoughDiskSpace(e) {
    let {
      requiredDiskKB: t,
      installationPathsMetadata: l
    } = this.props, a = null != l[e] ? l[e].availableKB : null;
    return null == t || null == a || t < a
  }
  sendChange(e) {
    let {
      installationPathsMetadata: t,
      onChange: l
    } = this.props, a = null != t[e] && !1 === t[e].hasPermission;
    l(e, a || !this.hasEnoughDiskSpace(e))
  }
  renderError() {
    let {
      value: e,
      installationPathsMetadata: t
    } = this.props, l = null != t[e] && !1 === t[e].hasPermission;
    return l ? (0, a.jsx)("div", {
      className: h.error,
      children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
    }) : this.hasEnoughDiskSpace(e) ? null : (0, a.jsx)("div", {
      className: h.error,
      children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
    })
  }
  renderLabel(e, t) {
    let {
      installationPathsMetadata: l
    } = this.props, a = null != t ? t : e;
    return null != l[e] && null != l[e].availableKB ? d.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
      path: a,
      size: (0, u.formatSize)(l[e].availableKB, {
        useKibibytes: !0
      })
    }) : a
  }
  render() {
    let {
      value: e,
      className: t,
      autoFocus: l
    } = this.props;
    return (0, a.jsxs)("div", {
      className: t,
      children: [(0, a.jsx)(i.FormTitle, {
        tag: "h5",
        children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
      }), (0, a.jsx)(i.SingleSelect, {
        autoFocus: l,
        options: this.getOptions(),
        value: e,
        onChange: this.handleChange
      }), this.renderError()]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      newInstallationPath: null
    }, this.fetchedMetadataPaths = new Set, this.handleChange = e => {
      e === p ? o.default.showOpenDialog(["openDirectory"]).then(e => {
        if (null != e && e.length > 0) {
          let t = e[0];
          this.setState({
            newInstallationPath: null != this.props.installationPaths.find(e => {
              let {
                path: l
              } = e;
              return l === t
            }) ? null : t
          }), this.sendChange(t)
        }
      }) : this.sendChange(e)
    }
  }
}
var I = n.default.connectStores([c.default], () => ({
  installationPaths: c.default.installationPaths,
  installationPathsMetadata: c.default.installationPathsMetadata
}))(f)