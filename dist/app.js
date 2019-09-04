var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scale = 600;

var CubeSide = function CubeSide(_ref) {
    var _ref$height = _ref.height,
        height = _ref$height === undefined ? 200 : _ref$height,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 200 : _ref$width,
        styles = _ref.styles;


    var defaultStyles = {
        backgroundColor: "rgba(100,100,100,0.5)",
        border: "2px solid black",
        position: "absolute",
        height: height,
        width: width
    };

    var addedStyles = Object.assign({}, defaultStyles, styles);

    return React.createElement("div", {
        style: addedStyles
    });
};

var Cube = function Cube(_ref2) {
    var _ref2$left = _ref2.left,
        left = _ref2$left === undefined ? 0 : _ref2$left,
        _ref2$top = _ref2.top,
        top = _ref2$top === undefined ? 0 : _ref2$top,
        _ref2$size = _ref2.size,
        size = _ref2$size === undefined ? 200 : _ref2$size;


    return React.createElement(
        "div",
        {
            style: {
                height: size,
                width: size,
                position: "absolute",
                left: left,
                top: top
            }
        },
        React.createElement(CubeSide, { height: size, width: size, styles: { transform: "translateZ(" + size / 2 + "px)" } }),
        React.createElement(CubeSide, { height: size / 2, width: size, styles: { transform: "rotateX(90deg) translateZ(" + size / 4 + "px) translateY(" + size / 4 + "px)" } }),
        React.createElement(CubeSide, { height: size, width: size / 2, styles: { transform: "rotateY(90deg) translateZ(" + size / 4 * 3 + "px) translateX(-" + size / 4 + "px)" } }),
        React.createElement(CubeSide, { height: size, width: size / 2, styles: { transform: "rotateY(-90deg) translateZ(" + size / 4 + "px) translateX(" + size / 4 + "px)" } }),
        React.createElement(CubeSide, { height: size / 2, width: size, styles: { transform: "rotateX(-90deg) translateZ(" + size / 4 * 3 + "px) translateY(-" + size / 4 + "px)" } }),
        React.createElement(CubeSide, { height: size, width: size, styles: { transform: "rotateY(-180deg) translateZ(0)" } })
    );
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            canvasScale: 0.75,
            perspectiveCanvas: scale * 2,
            groundRotateX: 60,
            groundRotateY: 0,
            groundRotateZ: 30,
            groundScale: 1
        };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        id: "frame",
                        style: {
                            backgroundColor: "white",
                            height: 480,
                            width: 640,
                            overflow: "hidden",
                            position: "relative"
                        }
                    },
                    React.createElement(
                        "div",
                        {
                            id: "canvas",
                            style: {
                                height: 480,
                                width: 640,
                                perspective: this.state.perspectiveCanvas + "px",
                                position: "relative",
                                transform: "scale(" + this.state.canvasScale + ")"
                            }
                        },
                        React.createElement(
                            "div",
                            {
                                id: "ground",
                                style: {
                                    backgroundColor: "rgba(0,175,50,0.5)",
                                    height: scale,
                                    perspective: this.state.perspectiveCanvas + "px",
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    margin: "-300px 0 0 -300px",
                                    width: scale,
                                    transformStyle: "preserve-3d",
                                    transform: "rotateX(" + this.state.groundRotateX + "deg) rotateY(" + this.state.groundRotateY + "deg) rotateZ(" + this.state.groundRotateZ + "deg) scale(" + this.state.groundScale + ")",
                                    trasformOrigin: "0 0 0"
                                }
                            },
                            React.createElement(Cube, { size: 100, left: 0, top: 0 }),
                            React.createElement(Cube, { size: 200, left: 200, top: 200 }),
                            React.createElement(Cube, { size: 50, left: 500, top: 500 })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    {
                        className: "controls",
                        style: {
                            backgroundColor: "white",
                            marginTop: 30,
                            padding: 30
                        }
                    },
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "canvasScale"
                        ),
                        React.createElement(
                            "span",
                            { style: { fontWeight: "bold", marginLeft: 5 } },
                            this.state.canvasScale
                        ),
                        React.createElement("input", {
                            type: "range",
                            min: "0.1",
                            max: "4",
                            step: "0.1",
                            value: this.state.canvasScale,
                            onChange: function onChange(event) {
                                return _this2.setState({ canvasScale: event.target.value });
                            }
                        })
                    ),
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "canvasPerspective"
                        ),
                        React.createElement(
                            "span",
                            { style: { fontWeight: "bold", marginLeft: 5 } },
                            this.state.perspectiveCanvas
                        ),
                        React.createElement("input", {
                            type: "range",
                            min: "0",
                            max: scale * 4,
                            step: "100",
                            value: this.state.perspectiveCanvas,
                            onChange: function onChange(event) {
                                return _this2.setState({ perspectiveCanvas: event.target.value });
                            }
                        })
                    ),
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "groundScale"
                        ),
                        React.createElement(
                            "span",
                            { style: { fontWeight: "bold", marginLeft: 5 } },
                            this.state.groundScale
                        ),
                        React.createElement("input", {
                            type: "range",
                            min: "0.1",
                            max: "4",
                            step: "0.1",
                            value: this.state.groundScale,
                            onChange: function onChange(event) {
                                return _this2.setState({ groundScale: event.target.value });
                            }
                        })
                    ),
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "groundRotateX"
                        ),
                        React.createElement(
                            "span",
                            { style: { fontWeight: "bold", marginLeft: 5 } },
                            this.state.groundRotateX
                        ),
                        React.createElement("input", {
                            type: "range",
                            min: "-180",
                            max: "180",
                            step: "10",
                            value: this.state.groundRotateX,
                            onChange: function onChange(event) {
                                return _this2.setState({ groundRotateX: event.target.value });
                            }
                        })
                    ),
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "groundRotateY"
                        ),
                        React.createElement(
                            "span",
                            { style: { fontWeight: "bold", marginLeft: 5 } },
                            this.state.groundRotateY
                        ),
                        React.createElement("input", {
                            type: "range",
                            min: "-180",
                            max: "180",
                            step: "10",
                            value: this.state.groundRotateY,
                            onChange: function onChange(event) {
                                return _this2.setState({ groundRotateY: event.target.value });
                            }
                        })
                    ),
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "groundRotateZ"
                        ),
                        React.createElement(
                            "span",
                            { style: { fontWeight: "bold", marginLeft: 5 } },
                            this.state.groundRotateZ
                        ),
                        React.createElement("input", {
                            type: "range",
                            min: "-180",
                            max: "180",
                            step: "10",
                            value: this.state.groundRotateZ,
                            onChange: function onChange(event) {
                                return _this2.setState({ groundRotateZ: event.target.value });
                            }
                        })
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var domContainer = document.querySelector('#domContainer');
ReactDOM.render(React.createElement(App, null), domContainer);