import "./App.css";
import React, { Component } from "react";
import Child from "./Compoenent/Child";
import image from "./image.jpg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Ben Hassine Ghaith",
            bio: "Am 27 years old am a web developer",
            imgSrc: image,
            profession: "web developer",
            show: false,
            intervall: null,
            timer: 0,
        };
        this.setState({
            intervall: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });
            }, 1000),
        });
    }

    render() {
        return (
            <div className="App">
                <Button
                    variant="primary"
                    onClick={() => this.setState({ show: !this.state.show })}
                >
                    {this.state.show ? "Hide" : "Show"}
                </Button>
                {this.state.show ? (
                    <Child
                        fullName={this.state.fullName}
                        bio={this.state.bio}
                        imgSrc={this.state.imgSrc}
                        profession={this.state.profession}
                    />
                ) : null}
                <h1>{this.state.timer}</h1>
            </div>
        );
    }
}
