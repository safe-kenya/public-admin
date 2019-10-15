import React, { Component } from 'react'
import Data from "../../utils/data"

import MessageView from './components/message'

class MessageList extends Component{
  state = {
    parents:[],
    selected:[],
    message:'',
    type:'sms'
  }

  componentDidMount(){
    const parents = Data.parents.list()
    this.setState({ parents })

    Data.parents.subscribe(parents => {
      this.setState(parents)
    })
  }

  onClickSwitch = type => {
    this.setState({ type })
  }

  onClickSend = async () => {
    const { type, selected, message } = this.state
    const ok = await Data.comms.send({ type, message, parents: selected })
    this.setState({ ok })
  }

  onChangeHandler = e => {
    this.setState({ message: e.target.value })
  }

  selectAll = () => {
    this.setState({ selected: this.state.parents.map(p => p.id)})
  }

  onSelect = (parent) => {
    this.setState((prevState, props) => {
      const { selected } = prevState
      const filteredSelected = selected.includes(parent.id) ? selected.filter(p => p !== parent.id) : [...selected, parent.id]
      return { selected: filteredSelected }
    })
  }

  render() {
    const { parents, selected } = this.state
    return (
      <div class="kt-portlet kt-portlet--height-fluid">
        <div class="kt-portlet__head kt-portlet__head--noborder">
          <div class="kt-portlet__head-label">
            <button className="btn btn-primary btn-pill" onClick={this.selectAll}>Select All</button>
          </div>
        </div>
        <div class="kt-portlet__body kt-portlet__body--fluid">
          <ul class="list-group list-group-flush col-md-4 col-sm-6">
            {parents.map(parent => {
              return <li
              className="list-group-item"
              style={{cursor:'pointer'}}>
                <label class="kt-checkbox">
								  <input onChange={() => this.onSelect(parent)} type="checkbox" checked={selected.includes(parent.id)}/> {parent.name}<span></span>
							  </label>
              </li>
            })}
					</ul>
          <div className="col-md-8">
            <MessageView onClickSwitch={this.onClickSwitch} onClickSend={this.onClickSend} onChange={this.onChangeHandler} />
          </div>
        </div>
      </div>)
  }
}

export default MessageList