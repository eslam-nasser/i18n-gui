import React, { Component } from 'react';
// import styled from 'styled-components';
import './assets/css/style.css';
import { Nav, DropdownArea } from './components/shared';
import Editor from './components/screens/Editor';
import recursivelyAddIds from './utils/recursivelyAddIds';
import readSingleFile from './utils/readSingleFile';
import findNestedObjectByID from './utils/findNestedObjectByID';
import SelectLanguages from './components/shared/SelectLanguages';

class App extends Component {
    state = {
        data: null,
        dataLoaded: true,
        languages_selected: false,
        // default_language: 'en',
        selected_languages: []
    };

    componentWillMount() {
        // const localData = localStorage.getItem('latest_i18n_gui_file');
        // if (localData) {
        //     this.setState({
        //         data: JSON.parse(localData),
        //         dataLoaded: true
        //     });
        // }
    }

    handleDrop = file => {
        readSingleFile(file, data => {
            // adding ids
            data = recursivelyAddIds(data);
            // creating a version of the file for each language
            // const duplicated_data = {
            //     default_language: data
            // };
            const duplicated_data = {};
            this.state.selected_languages.forEach(lang => {
                duplicated_data[lang] = JSON.parse(JSON.stringify(data));
            });
            // save the data to localStorage and state
            localStorage.setItem(
                'latest_i18n_gui_file',
                JSON.stringify(duplicated_data)
            );
            this.setState({ dataLoaded: true, data: duplicated_data });
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
                localStorage.getItem('latest_i18n_gui_file')
            );
            local_data[lang] = this.state.data[lang];
            localStorage.setItem(
                'latest_i18n_gui_file',
                JSON.stringify(local_data)
            );
        }
    }

    handleLanguageSelect(e, type) {
        if (type === 'default') {
            // const values = this.state.selected_languages.length
            //     ? this.state.selected_languages.shift()
            //     : [];
            // console.log(values);
            // this.setState({
            //     selected_languages: [e.value, ...values]
            // });
        } else {
            const values = e.map(x => x.value);
            const default_language = this.state.selected_languages[0];
            this.setState({
                selected_languages: [default_language, ...values]
            });
        }
        setTimeout(() => {
            console.log(this.state.selected_languages);
        }, 100);
    }

    render() {
        return (
            <div className="App">
                <Nav />

                {!this.state.dataLoaded && (
                    <DropdownArea handleDrop={this.handleDrop} />
                )}

                {!this.state.languages_selected && this.state.dataLoaded && (
                    <SelectLanguages
                        handleLanguageSelect={this.handleLanguageSelect.bind(
                            this
                        )}
                    />
                )}

                {this.state.data && (
                    <Editor
                        data={this.state.data}
                        languages={[
                            ...this.state.selected_languages
                            // ,
                            // this.state.default_language
                        ]}
                        updateItem={this.updateItem.bind(this)}
                    />
                )}
            </div>
        );
    }
}

export default App;
