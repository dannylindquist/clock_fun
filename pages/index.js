import React, { Component } from "react";
import Head from "../components/head";
import Container from '../components/container'
import Time from '../components/time'
import Styles from '../components/styles'

import moment from "moment";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      now: moment()
    };
  }
  componentDidMount() {
    this.timer = setInterval(
      () => {
        this.setState({
          now: moment()
        });
      },
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    var { now } = this.state;
    return (
        <Container>
          <Head />
          <Time now={now} />
          <Styles />
        </Container>
    );
  }
}
