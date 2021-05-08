import "./App.css";
import React, { Component } from "react";
import Child from "./Compoenent/Child";
import image from "./image.jpg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//helloo ghaith i have made some changes
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName: "Ben Hassine Ghaith",
                bio: "Am 27 years old am a web developer",
                imgSrc: image,
                profession: "web developer",
            },

            show: false,
            date: new Date(),
        };
    }
    componentDidMount() {
        this.intervall = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
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
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                {this.state.show ? (
                    <Child
                        fullName={this.state.person.fullName}
                        bio={this.state.person.bio}
                        imgSrc={this.state.person.imgSrc}
                        profession={this.state.person.profession}
                    />
                ) : null}
            </div>
        );
    }
}
