
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 12

  state = {
    progress: 0
  }
  setProgress =(progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color='#f11946' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} />
          <Switch>
          <Route exact path="/">
              <News setProgress= {this.setProgress} key="Business" pageSize={this.pageSize} country={'in'} category={'business'} />
            </Route>
            <Route exact path="/Business">
              <News setProgress= {this.setProgress} key="Business" pageSize={this.pageSize} country={'in'} category={'business'} />
            </Route>
            <Route exact path="/Science">
              <News setProgress= {this.setProgress} key="Science" pageSize={this.pageSize} country={'in'} category={'science'} />
            </Route>
            <Route exact path="/Entertainment">
              <News setProgress= {this.setProgress} key="Entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'} />
            </Route>
            <Route exact path="/General">
              <News setProgress= {this.setProgress} key="/General" pageSize={this.pageSize} country={'in'} category={'general'} />
            </Route>
            <Route exact path="/Health">
              <News setProgress= {this.setProgress} key="Health" pageSize={this.pageSize} country={'in'} category={'health'} />
            </Route>
            <Route exact path="/Sports">
              <News setProgress= {this.setProgress} key="Sports" pageSize={this.pageSize} country={'in'} category={'sports'} />
            </Route>
            <Route exact path="/Technology">
              <News setProgress= {this.setProgress} key="Technology" pageSize={this.pageSize} country={'in'} category={'technology'} />
            </Route>

          </Switch>
        </Router>
      </div>
    )
  }
}
