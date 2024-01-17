"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("404118"),
  o = n("649486"),
  u = n("236717"),
  d = n("945956"),
  c = n("195812"),
  f = n("733350"),
  E = n("664336"),
  h = n("868308"),
  _ = n("782340"),
  S = n("122693");
class T extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: !1
    } : null
  }
  handleDownloadApps() {
    (0, i.openModal)(e => (0, l.jsx)(o.default, {
      source: "Links",
      ...e
    }))
  }
  render() {
    switch (this.props.mode) {
      case "UPDATE_AVAILABLE":
        return (0, l.jsx)(E.Icon, {
          hideOnClick: !1,
          tooltip: _.default.Messages.UPDATE_AVAILABLE,
          foreground: S.downloadArrow,
          background: S.cloud,
          icon: f.default
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, l.jsx)(E.Icon, {
          tooltip: _.default.Messages.UPDATE_DOWNLOADED,
          foreground: S.updateIconForeground,
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
        title: _.default.Messages.UPDATE_DURING_CALL_TITLE,
        body: _.default.Messages.UPDATE_DURING_CALL_BODY,
        onConfirm: this.doUpdate,
        cancelText: _.default.Messages.CANCEL,
        confirmText: _.default.Messages.UPDATE_DURING_CALL_CONTINUE
      }) : this.doUpdate()
    }, this.doUpdate = () => {
      !this.state.clicked && (this.setState({
        clicked: !0
      }), (0, h.quitAndInstall)())
    }
  }
}
var N = s.default.connectStores([u.default], () => ({
  mode: u.default.getState()
}))(T)