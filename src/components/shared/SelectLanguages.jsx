// REF: https://react-select.com/props

import React, { Component } from 'react';
import Select from 'react-select';
import all_languages from '../../utils/all_languages';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#22222A'
    })
};

class SelectLanguages extends Component {
    render() {
        return (
            <div>
                <h1>Select languages</h1>
                <div>
                    <h4>What is this file language? </h4>
                    <Select options={all_languages} styles={customStyles} />
                </div>
                <div>
                    <h4>What languages you want to support? </h4>
                    <Select
                        options={all_languages}
                        styles={customStyles}
                        isMulti
                        onChange={e => {
                            console.log(e);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default SelectLanguages;
