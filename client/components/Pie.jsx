import React from 'react'
import * as d3 from 'd3'
import Slice from './Slice'
// const scale = require('d3-scale')
// const layout = require('d3-shape')
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'

class Pie extends React.Component {
  constructor (props) {
    super(props)
    this.colorScale = d3.schemeCategory10
    this.renderSlice = this.renderSlice.bind(this)
    // this.data = [5, 2, 7, 1, 1, 3, 4, 9]
  }

  componentDidMount(){
    this.props.getPieData()
  }


  translate (x, y) {
    return `translate(${x}, ${y})`
  }

  render () {
    let { x, y, data} = this.props
    let pie = d3.pie()
    return (
      <g transform = { this.translate(x, y) }>
        { pie(data).map(this.renderSlice) }
      </g>
    )
  }

  renderSlice (value, i) {
    let { innerRadius, outerRadius, cornerRadius, padAngle, startAngle = 0, endAngle } = this.props
    return (
      <Slice key={i}
            innerRadius = { innerRadius }
            startAngle = { startAngle * value.data[1]}
            endAngle = { endAngle * value.data[1] + Math.PI *.7}
            outerRadius = { outerRadius }
            cornerRadius = { cornerRadius }
            padAngle = { padAngle }
            value = { value.data[1] }
            label = { value.data[0] }
            fill = { this.colorScale[i] } />
    )
  }
}

function mapStateToProps(store){
  return {
    //object w/ all user cards data
    cards: store.cardStates.cards,
    data: store.cardStates.data

  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    viewAllCards: Action.viewAllCards,
    getPieData: Action.getPieData
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Pie)

//INSERT INTO "Cards"(id, "rewardsAmt", user_id, category) VALUES ()

//DELETE FROM "Cards" WHERE "user_id" = "db1648a9-daef-4e0a-96bc-13026ad68373"
