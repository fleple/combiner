import React, { Component } from 'react'

import Option from './Option'
import questions from '../quiz/questions'

import { connect } from 'react-redux'
import { addRule } from '../actions'

class Options extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }

  handlerSkip = () => { this.setState({num: this.state.num + 1 }); }

  handlerClick = (rule) => {
    if(rule) {
      this.props.addRule(rule);
    }
    this.setState({
      num: ++this.state.num
    });
  }

  render() {
    let rule;
    if(questions[this.state.num] !== undefined) {
      rule = questions[this.state.num].rule;
    }

    return (
      <div>
        { questions.length === this.state.num ?
          <h2 className='complete-title'>Complete ~(^.^)~</h2> :
          <div className='options'>{ questions[this.state.num].options.map((e,index) => (
            <Option
              handlerClick={this.handlerClick}
              value={e.value}
              key={Date.now() + index}
              rule={rule}
              title={e.title}
              code={e.code}/>
            ))}
            <div className='option'>
              <h3 className='option-title' onClick={this.handlerSkip}>
                Skip the rule
              </h3>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default connect(null, { addRule })(Options);
