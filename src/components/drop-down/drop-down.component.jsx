import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ProtoType from 'prop-types';

import './drop-down.styles.scss';

class DropDownList extends React.Component {
      render() {
        const {bars} = this.props;
        if(bars) {
        return (
          <form onSubmit={this.props.handleSubmit}>
            <div className="dropdownBar">
              <Field className="favoriteBar" name="favoriteBar" component="select" >
                {
                  bars.map( bar => {
                      return <option key={bar.id} value={bar}> Progress bar: {bar} </option>
                  })
                }
              </Field>
            </div>
          </form>
         
        )} else {
            return null;
        }
      }
}; 

DropDownList.protoTypes = {
    bars: ProtoType.array
}

export default reduxForm({
  form: 'dropdownForm'
})(DropDownList);