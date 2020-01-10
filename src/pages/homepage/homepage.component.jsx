import React from 'react';
import axios from 'axios';

import ProgressBarList from './../progress-bar-list/progress-bar-list.component';
//import DropdownList from './../../components/drop-down/drop-down.component';
import ButtonList from './../button-list/button-list.component';

import './homepage.styles.scss';

class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            barinfo: []
        }
    }

    componentDidMount() {
        axios.get(`http://pb-api.herokuapp.com/bars`)
        .then(res => {
            const barinfo = res.data;
            this.setState({ barinfo });
        })
    }

    render(){
        const {bars, buttons, limit} = this.state.barinfo;
        console.log(this.state.barinfo);
        return (
            <div className='homepage'>
                <ProgressBarList bars={bars} limit={limit} />
                <ButtonList buttons={buttons} />
            </div>
        );
    }

} 

export default Homepage;