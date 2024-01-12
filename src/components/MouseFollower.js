import React from "react";
import "./MouseFollower.css";

class MouseFollower extends React.Component {
    state = {
        x: 0,
        y: 0
    };

    componentDidMount() {
        document.addEventListener("mousemove", this.handleMouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };

    render() {
        const { x, y } = this.state;

        return (
            <div className="MouseFollower">
                <div
                    className="x-ray"
                    style={{
                        left: `${x + 10}px`, // Adjust the left position with a small offset
                        top: `${y + 10}px` // Adjust the top position with a small offset
                    }}
                />
            </div>
        );

    }
}

export default MouseFollower;
