import React, { Component } from 'react';
// import styled from 'styled-components';
import './assets/css/style.css';
import { Nav, DropdownArea } from './components/shared';
import Editor from './components/screens/Editor';
import recursivelyAddIds from './utils/recursivelyAddIds';
import readSingleFile from './utils/readSingleFile';

class App extends Component {
    state = {
        data: null,
        dataLoaded: false,
        default_language: 'en',
        selected_languages: ['ar', 'fr']
    };

    componentWillMount() {
        const localData = localStorage.getItem('latest_i18n_gui_file');
        if (localData) {
            this.setState({
                data: JSON.parse(localData),
                dataLoaded: true
            });
        }
    }

    handleDrop = file => {
        readSingleFile(file, data => {
            // adding ids
            data = recursivelyAddIds(data);
            // creating a version of the file for each language
            const duplicated_data = {
                default_language: data
            };
            this.state.selected_languages.forEach(lang => {
                duplicated_data[lang] = JSON.parse(JSON.stringify(data));
            });
            // save the data to localStorage and state
            localStorage.setItem(
                'latest_i18n_gui_file',
                JSON.stringify(duplicated_data)
            );
            this.setState({ dataLoaded: true, duplicated_data });
        });
    };

    render() {
        return (
            <div className="App">
                <Nav />

                {!this.state.dataLoaded && (
                    <DropdownArea handleDrop={this.handleDrop} />
                )}

                {this.state.data && (
                    <Editor
                        data={this.state.data}
                        languages={[
                            ...this.state.selected_languages,
                            this.state.default_language
                        ]}
                    />
                )}
            </div>
        );
    }
}

export default App;
