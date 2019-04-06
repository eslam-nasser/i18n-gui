// REF: https://react-select.com/props

import React, { Component } from 'react';
import Select from 'react-select';
import languages from '../../utils/all_languages';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#22222A'
    })
};

class SelectLanguages extends Component {
    state = {
        default_language_selected: false
    };
    render() {
        return (
            <div>
                <h1>Select languages</h1>
                <div>
                    <h4>What is this file language? </h4>
                    <Select
                        options={languages.languages_as_array}
                        styles={customStyles}
                        onChange={e => {
                            this.props.handleLanguageSelect(e, 'default');
                            this.setState({
                                default_language_selected: true
                            });
                        }}
                    />
                </div>
                {this.state.default_language_selected && (
                    <div>
                        <h4>What languages you want to support? </h4>
                        <Select
                            options={languages.languages_as_array}
                            styles={customStyles}
                            isMulti
                            onChange={e => {
                                this.props.handleLanguageSelect(e);
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default SelectLanguages;
