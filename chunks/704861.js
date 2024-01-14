"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  r = s("55620"),
  l = s("440351"),
  i = s("782340"),
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
      children: (0, a.jsx)(l.default, {
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: i.default.Messages.MATURE_LISTING_TITLE.format({
          name: e
        }),
        description: i.default.Messages.MATURE_LISTING_DESCRIPTION,
        agreement: i.default.Messages.MATURE_LISTING_ACCEPT,
        disagreement: i.default.Messages.MATURE_LISTING_DECLINE
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleDisagree = () => {
      (0, r.matureDisagree)()
    }, this.handleAgree = () => {
      (0, r.matureAgree)()
    }
  }
}
var d = o