import React from 'react';
import {connect} from 'react-redux';
import {fetchBars} from './../../redux/bars/bars.actions';

import ProgressBarList from './../progress-bar-list/progress-bar-list.component';
import DropdownList from './../../components/drop-down/drop-down.component';
//import ButtonList from './../button-list/button-list.component';

import './homepage.styles.scss';

class HomePage extends React.Component {

    componentDidMount() {
        const {fetchBars} = this.props;
        fetchBars();
    }

    render(){
        //console.log(this.props);
        const {bars, limit} = this.props.barsInfo.bars;
        return (
            <div className='homepage'>
                <h2> Progress Bar Demo </h2>
                <div className="controls">
                    <DropdownList bars={bars} limit={limit} />
                </div>
                <ProgressBarList />
            </div>
        );
    }
} 

const mapStateToProps = state => ({
   barsInfo: state.bars,
   form: state.form
});

const mapDispatchToProps = dispatch =>({
   fetchBars:() => dispatch(fetchBars())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);