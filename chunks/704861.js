"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("55620"),
  i = s("440351"),
  r = s("782340"),
  u = s("76101");
class o extends n.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, a.jsx)("div", {
      className: u.matureListing,
      children: (0, a.jsx)(i.default, {
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: r.default.Messages.MATURE_LISTING_TITLE.format({
          name: e
        }),
        description: r.default.Messages.MATURE_LISTING_DESCRIPTION,
        agreement: r.default.Messages.MATURE_LISTING_ACCEPT,
        disagreement: r.default.Messages.MATURE_LISTING_DECLINE
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleDisagree = () => {
      (0, l.matureDisagree)()
    }, this.handleAgree = () => {
      (0, l.matureAgree)()
    }
  }
}
var d = o