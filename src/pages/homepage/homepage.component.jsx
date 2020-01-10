import React from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';

import ProgressBarList from './../progress-bar-list/progress-bar-list.component';
import DropdownList from './../../components/drop-down/drop-down.component';
import ButtonList from './../button-list/button-list.component';

import './homepage.styles.scss';

class Homepage extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         barinfo: [],
    //         value: ''
    //     }
    // }

    // componentDidMount() {
    //     axios.get(`http://pb-api.herokuapp.com/bars`)
    //     .then(res => {
    //         const barinfo = res.data;
    //         this.setState({ barinfo });
    //     })
    // }

    // handleChange = (event) => {
    //     this.setState({value: event.target.value});
    // }
    
    // handleSubmit = (event) => {
    //     // this.setState({value: event.target.value});
    //     console.log('You selected: ' + this.state.value);
    //     event.preventDefault();
    // }

    render(){
        //const {bars, buttons, limit} = this.state.barinfo;
        const {bars, limit, buttons} = this.props;
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

const mapStateToProps = (state) => ({
    bars: state.bars
})

export default connect(mapStateToProps)(Homepage);