const scale = 600;

const CubeSide = ({
    height = 200,
    width = 200,
    styles
}) => {

    const defaultStyles = {
        backgroundColor: "rgba(100,100,100,0.5)",
        border: "2px solid black",
        position: "absolute",
        height: height,
        width: width
    }

    const addedStyles = Object.assign({}, defaultStyles, styles);

    return (
        <div
            style={addedStyles}
        />
    );

};

const Cube = ({
    left = 0,
    top = 0,
    size = 200
}) => {

    return (
        <div
            style={{
                height: size,
                width: size,
                position: "absolute",
                left: left,
                top: top
            }}
        >
            <CubeSide height={size} width={size} styles={{transform:"translateZ("+size/2+"px)"}} />
            <CubeSide height={size/2} width={size} styles={{transform:"rotateX(90deg) translateZ("+size/4+"px) translateY("+size/4+"px)"}} />
            <CubeSide height={size} width={size/2} styles={{transform:"rotateY(90deg) translateZ("+size/4*3+"px) translateX(-"+size/4+"px)"}} />
            <CubeSide height={size} width={size/2} styles={{transform:"rotateY(-90deg) translateZ("+size/4+"px) translateX("+size/4+"px)"}} />
            <CubeSide height={size/2} width={size} styles={{transform:"rotateX(-90deg) translateZ("+size/4*3+"px) translateY(-"+size/4+"px)"}} />
            <CubeSide height={size} width={size} styles={{transform:"rotateY(-180deg) translateZ(0)"}} />
        </div>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasScale: 0.75,
            perspectiveCanvas: scale*2,
            groundRotateX: 60,
            groundRotateY: 0,
            groundRotateZ: 30,
            groundScale: 1
        }
    }

    render() {
        return(
            <div>
                <div
                    id="frame"
                    style={{
                        backgroundColor: "white",
                        height: 480,
                        width: 640,
                        overflow: "hidden",
                        position: "relative"
                    }}
                >
                    <div
                        id="canvas"
                        style={{
                            height: 480,
                            width: 640,
                            perspective: `${this.state.perspectiveCanvas}px`,
                            position: "relative",
                            transform: `scale(${this.state.canvasScale})`
                        }}
                    >
                        <div
                            id="ground"
                            style={{
                                backgroundColor: "rgba(0,175,50,0.5)",
                                height: scale,
                                perspective: `${this.state.perspectiveCanvas}px`,
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                margin: "-300px 0 0 -300px",
                                width: scale,
                                transformStyle: "preserve-3d",
                                transform: `rotateX(${this.state.groundRotateX}deg) rotateY(${this.state.groundRotateY}deg) rotateZ(${this.state.groundRotateZ}deg) scale(${this.state.groundScale})`,
                                trasformOrigin: "0 0 0"
                            }}                
                        >
                                <Cube size={100} left={0} top={0} />
                                <Cube size={200} left={200} top={200} />
                                <Cube size={50} left={500} top={500} />
                        </div>
                    </div>
                </div>
                <div
                    className="controls"
                    style={{
                        backgroundColor: "white",
                        marginTop: 30,
                        padding: 30
                    }}
                >
                    <label>
                        <span>canvasScale</span>
                        <span style={{fontWeight: "bold", marginLeft: 5}}>{this.state.canvasScale}</span>
                        <input
                            type="range"
                            min="0.1"
                            max="4"
                            step="0.1"
                            value={this.state.canvasScale}
                            onChange={(event) => this.setState({canvasScale: event.target.value})}
                        />
                    </label>
                    <label>
                        <span>canvasPerspective</span>
                        <span style={{fontWeight: "bold", marginLeft: 5}}>{this.state.perspectiveCanvas}</span>
                        <input
                            type="range"
                            min="0"
                            max={scale*4}
                            step="100"
                            value={this.state.perspectiveCanvas}
                            onChange={(event) => this.setState({perspectiveCanvas: event.target.value})}
                        />
                    </label>
                    <label>
                        <span>groundScale</span>
                        <span style={{fontWeight: "bold", marginLeft: 5}}>{this.state.groundScale}</span>
                        <input
                            type="range"
                            min="0.1"
                            max="4"
                            step="0.1"
                            value={this.state.groundScale}
                            onChange={(event) => this.setState({groundScale: event.target.value})}
                        />
                    </label>
                    <label>
                        <span>groundRotateX</span>
                        <span style={{fontWeight: "bold", marginLeft: 5}}>{this.state.groundRotateX}</span>
                        <input
                            type="range"
                            min="-180"
                            max="180"
                            step="10"
                            value={this.state.groundRotateX}
                            onChange={(event) => this.setState({groundRotateX: event.target.value})}
                        />
                    </label>
                    <label>
                        <span>groundRotateY</span>
                        <span style={{fontWeight: "bold", marginLeft: 5}}>{this.state.groundRotateY}</span>
                        <input
                            type="range"
                            min="-180"
                            max="180"
                            step="10"
                            value={this.state.groundRotateY}
                            onChange={(event) => this.setState({groundRotateY: event.target.value})}
                        />
                    </label>
                    <label>
                        <span>groundRotateZ</span>
                        <span style={{fontWeight: "bold", marginLeft: 5}}>{this.state.groundRotateZ}</span>
                        <input
                            type="range"
                            min="-180"
                            max="180"
                            step="10"
                            value={this.state.groundRotateZ}
                            onChange={(event) => this.setState({groundRotateZ: event.target.value})}
                        />
                    </label>
                </div>
            </div>
        );
    }

}

let domContainer = document.querySelector('#domContainer');
ReactDOM.render(<App />, domContainer);