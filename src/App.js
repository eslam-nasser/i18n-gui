import React, { Component } from 'react';
// import styled from 'styled-components';
import './assets/css/style.css';
import { Nav, DropdownArea } from './components/shared';
import Editor from './components/screens/Editor';
import { recursivelyAddIds } from './utils/recursivelyHandleIds';
import readSingleFile from './utils/readSingleFile';
import findNestedObjectByID from './utils/findNestedObjectByID';
import SelectLanguages from './components/shared/SelectLanguages';

class App extends Component {
    state = {
        data: null,
        is_data_loaded: false,
        is_languages_selected: false,
        is_download_btn_shown: false,
        selected_languages: []
    };

    componentWillMount() {
        const localData = localStorage.getItem('i18n_gui_file_data');
        const localSelectedLanguages = localStorage.getItem(
            'i18n_gui_selected_languages'
        );
        if (localData && localSelectedLanguages) {
            this.setState({
                data: JSON.parse(localData),
                selected_languages: JSON.parse(localSelectedLanguages),
                is_data_loaded: true,
                is_languages_selected: true
            });
        }
    }

    handleDrop = file => {
        readSingleFile(file, data => {
            // adding ids
            data = recursivelyAddIds(data);

            this.setState({ is_data_loaded: true, data });
        });
    };

    updateItem(e) {
        const id = e.target.getAttribute('data-group-id');
        const key = e.target.getAttribute('data-key');
        const lang = e.target.getAttribute('data-lang');
        const newValue = e.target.value;

        if (this.state.data[lang]) {
            const query = findNestedObjectByID(this.state.data[lang], 'id', id);
            query[key] = newValue;

            // update local data
            const local_data = JSON.parse(
                localStorage.getItem('i18n_gui_file_data')
            );
            local_data[lang] = this.state.data[lang];
            localStorage.setItem(
                'i18n_gui_file_data',
                JSON.stringify(local_data)
            );
        }

        if (!this.state.is_download_btn_shown) {
            this.setState({
                is_download_btn_shown: true
            });
        }
    }

    handleLanguageSelect(e, type) {
        if (type === 'default') {
            this.setState({
                selected_languages: [
                    e.value,
                    ...this.state.selected_languages.slice(1)
                ]
            });
        } else {
            const values = e.map(x => x.value);
            const default_language = this.state.selected_languages[0];
            this.setState({
                selected_languages: [default_language, ...values]
            });
        }
    }

    start_translating() {
        if (this.state.selected_languages.length >= 2) {
            // creating a version of the file for each language
            const data = this.state.data;
            const duplicated_data = {};
            this.state.selected_languages.forEach(lang => {
                duplicated_data[lang] = JSON.parse(JSON.stringify(data));
            });
            // save the data and selected languages to localStorage
            localStorage.setItem(
                'i18n_gui_file_data',
                JSON.stringify(duplicated_data)
            );
            localStorage.setItem(
                'i18n_gui_selected_languages',
                JSON.stringify(this.state.selected_languages)
            );

            this.setState({
                data: duplicated_data,
                is_languages_selected: true
            });
        }
    }

    startOver() {
        // wipe everything
        localStorage.removeItem('i18n_gui_file_data');
        localStorage.removeItem('i18n_gui_selected_languages');
        this.setState({
            data: null,
            is_data_loaded: false,
            is_languages_selected: false,
            is_download_btn_shown: false,
            selected_languages: []
        });
    }

    render() {
        return (
            <div className="App">
                <Nav />

                {!this.state.is_data_loaded && (
                    <DropdownArea handleDrop={this.handleDrop} />
                )}

                {!this.state.is_languages_selected &&
                    this.state.is_data_loaded && (
                        <SelectLanguages
                            handleLanguageSelect={this.handleLanguageSelect.bind(
                                this
                            )}
                        />
                    )}

                {this.state.selected_languages.length >= 2 &&
                    !this.state.is_languages_selected && (
                        <button
                            className="btn primary"
                            onClick={this.start_translating.bind(this)}
                            style={{
                                marginTop: 30,
                                display: 'flex'
                            }}
                        >
                            <span>Start translating</span>
                            <img
                                src={require('./assets/icons/right-arrow.svg')}
                                alt="Next"
                                style={{
                                    marginLeft: 10,
                                    width: 20
                                }}
                            />
                        </button>
                    )}

                {this.state.data && this.state.is_languages_selected && (
                    <Editor
                        data={this.state.data}
                        is_download_btn_shown={this.state.is_download_btn_shown}
                        languages={[...this.state.selected_languages]}
                        updateItem={this.updateItem.bind(this)}
                        startOver={this.startOver.bind(this)}
                    />
                )}
            </div>
        );
    }
}

export default App;
