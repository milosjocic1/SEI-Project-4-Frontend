import React, { Component } from 'react'
import Search from './components/Search'

export default class Home extends Component {
  render() {
    return (
      <div className='container component'>
        <Search></Search>
        <div>
            <div className='buy-sell-background'>
                <h1 className='buy-sell-title'>Buy and Sell Anything</h1> <br></br>
                <a href='/' className='buy-sell-btn'>How it works</a>
            </div>
        </div>
      </div>
    )
  }
}
