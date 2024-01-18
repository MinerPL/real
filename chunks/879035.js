"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("404118"),
  o = n("649486"),
  u = n("236717"),
  d = n("945956"),
  c = n("195812"),
  f = n("733350"),
  h = n("664336"),
  E = n("868308"),
  m = n("782340"),
  p = n("122693");
class S extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: !1
    } : null
  }
  handleDownloadApps() {
    (0, i.openModal)(e => (0, a.jsx)(o.default, {
      source: "Links",
      ...e
    }))
  }
  render() {
    switch (this.props.mode) {
      case "UPDATE_AVAILABLE":
        return (0, a.jsx)(h.Icon, {
          hideOnClick: !1,
          tooltip: m.default.Messages.UPDATE_AVAILABLE,
          foreground: p.downloadArrow,
          background: p.cloud,
          icon: f.default
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, a.jsx)(h.Icon, {
          tooltip: m.default.Messages.UPDATE_DOWNLOADED,
          foreground: p.updateIconForeground,
          onClick: this.handleInstallDownload,
          icon: c.default
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), this.state = {
      memoizedMode: this.props.mode,
      clicked: !1
    }, this.handleInstallDownload = () => {
      d.default.isConnected() ? r.default.show({
        title: m.default.Messages.UPDATE_DURING_CALL_TITLE,
        body: m.default.Messages.UPDATE_DURING_CALL_BODY,
        onConfirm: this.doUpdate,
        cancelText: m.default.Messages.CANCEL,
        confirmText: m.default.Messages.UPDATE_DURING_CALL_CONTINUE
      }) : this.doUpdate()
    }, this.doUpdate = () => {
      !this.state.clicked && (this.setState({
        clicked: !0
      }), (0, E.quitAndInstall)())
    }
  }
}
var g = s.default.connectStores([u.default], () => ({
  mode: u.default.getState()
}))(S)