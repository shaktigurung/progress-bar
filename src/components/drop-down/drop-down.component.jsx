import React from 'react';
import ProtoType from 'prop-types';

import './drop-down.styles.scss';

class DropDownList extends React.Component {
    
      render() {
        const {bars} = this.props;
        if(bars) {
        return (
          <form onSubmit={this.props.handleSubmit}>
            <select value={this.props.value} onChange={this.props.handleChange}>
            {
                bars.map( bar => {
                    return <option key={bar.id} value={bar} > Progress bar: {bar} </option>
                })
            }
            </select>
            <input type="submit" value="Submit" />
          </form>
         
        );} else {
            return null;
        }
      }
}; 

DropDownList.protoTypes = {
    bars: ProtoType.array
}

export default DropDownList;