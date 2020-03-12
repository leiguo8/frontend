import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Planitem from './Planitem';
import './Dashboard2.css';


export default class Planlist extends Component {

  render() {
      const plan = this.props.plans
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

      return (
          <div>
              {
                  plan.map((i) => {
                      return <Planitem value={i} />
                  })
              }
          </div>
      )
  }
}
