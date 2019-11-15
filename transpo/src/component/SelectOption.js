import React from 'react';

function SelectOption(props){
    return (
        <select onChange={props.onChange}>
          {
            props.options.map((item,index) => {
                return (<option key={index} value={item.value}>{item.label}</option>)
            })
          }
        </select>
    );
}

export default SelectOption