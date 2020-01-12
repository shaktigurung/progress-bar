import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import ProgressFiller from './../progress-filler/progress-filler.component';
import ButtonList from './../../pages/button-list/button-list.component';

import './progress-bar.styles.scss';

class ProgressBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            percentage: this.props.percentage
        }
    }

    handleClick = (value) => {
      this.setState({
          percentage: this.state.percentage + value
      })
    }

    checkValue = (min, value, max ) => {
        return Math.min(Math.max(min, value), max);
    }
   
    render(){
        const {limit, buttons } = this.props;
        const {percentage} = this.state;
        return (
            <div className='progress-bar-container'>
                <label> Progress bar {percentage} </label>
                <p> {percentage >= 100 ? "You went over the limit" : "" } </p>
                <div className='progress-bar' style={{width:`${limit}px`}} >
                    <ProgressFiller percentage={this.checkValue(0, percentage, 100)} />
                </div>
                <div className='buttons'>
                    <ButtonList buttons={buttons} handleClick={this.handleClick} />
                </div>
            </div>
        )
    }
} 

ProgressBar.propsTypes = {
    percentage: PropTypes.number
}

const mapStateToProps = state => ({
    selectedBar: state.form.dropdownForm,
})
   
export default connect(mapStateToProps)(ProgressBar);