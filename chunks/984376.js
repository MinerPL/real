            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("271938");

            function l(e) {
                return class extends n.Component {
                    componentDidMount() {
                        r.default.addChangeListener(this.onStoreChange)
                    }
                    componentWillUnmount() {
                        r.default.removeChangeListener(this.onStoreChange)
                    }
                    render() {
                        return (0, a.jsx)(e, {
                            ...this.props,
                            isAuthenticated: this.state.isAuthenticated
                        })
                    }
                    constructor(...e) {
                        super(...e), this.state = {
                            isAuthenticated: r.default.isAuthenticated()
                        }, this.onStoreChange = () => {
                            this.setState({
                                isAuthenticated: r.default.isAuthenticated()
                            })
                        }
                    }
                }
            }