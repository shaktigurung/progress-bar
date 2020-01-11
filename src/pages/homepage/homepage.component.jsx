import React from 'react';
import {connect} from 'react-redux';
import {fetchBars} from './../../redux/bars/bars.actions';

import ProgressBarList from './../progress-bar-list/progress-bar-list.component';
import DropdownList from './../../components/drop-down/drop-down.component';
import ButtonList from './../button-list/button-list.component';

import './homepage.styles.scss';

class Homepage extends React.Component {

    componentDidMount() {
        const {fetchBars} = this.props;
        fetchBars();
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = (event) => {
        console.log('You selected: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        console.log(this.props.barsInfo);
        const {bars, limit, buttons} = this.props.barsInfo.bars;
        return (
            <div className='homepage'>
                <h2> Progress Bar Demo </h2>
                <ProgressBarList bars={bars} limit={limit}  />
                <div className="controls">
                    <DropdownList bars={bars} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <ButtonList buttons={buttons}  />
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => ({
   barsInfo: state.bars
});

const mapDispatchToProps = dispatch =>({
   fetchBars:() => dispatch(fetchBars())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);