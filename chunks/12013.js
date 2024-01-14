"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
}), s("222007");
var a, n = s("37983"),
  l = s("884691"),
  i = s("77078"),
  r = s("6481"),
  o = s("782340"),
  d = s("283193");
a = class extends l.PureComponent {
  renderErrorMessage() {
    let {
      hasError: e
    } = this.state;
    return e ? (0, n.jsx)("div", {
      className: d.error,
      children: o.default.Messages.HYPESQUAD_LEAVE_ERROR
    }) : null
  }
  render() {
    let {
      isRequestPending: e
    } = this.state, {
      isHypeSquadOnlineMember: t
    } = this.props;
    return t ? (0, n.jsxs)("div", {
      className: d.leaveActionWrapper,
      children: [this.renderErrorMessage(), (0, n.jsxs)(i.Text, {
        variant: "text-sm/normal",
        children: [o.default.Messages.HYPESQUAD_LEAVE_PROMPT, (0, n.jsx)(i.Button, {
          className: d.leaveButton,
          color: i.Button.Colors.LINK,
          look: i.Button.Looks.LINK,
          onClick: this.handleLeaveHypeSquadClick,
          size: i.Button.Sizes.NONE,
          submitting: e,
          children: o.default.Messages.HYPESQUAD_LEAVE_ACTION
        })]
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), this.state = {
      isRequestPending: !1,
      hasError: !1
    }, this.handleLeaveHypeSquadError = () => {
      this.setState({
        hasError: !0
      })
    }, this.handleLeaveHypeSquadClick = () => {
      this.setState({
        isRequestPending: !0
      }, () => {
        r.default.leaveHypeSquadOnline().then(() => {
          this.setState({
            isRequestPending: !1
          })
        }).catch(() => {
          this.setState({
            hasError: !0,
            isRequestPending: !1
          })
        })
      })
    }
  }
}