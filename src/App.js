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
        dataLoaded: false
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
            data = recursivelyAddIds(data);
            localStorage.setItem('latest_i18n_gui_file', JSON.stringify(data));
            this.setState({ dataLoaded: true, data });
        });
    };

    render() {
        return (
            <div className="App">
                <Nav />

                {!this.state.dataLoaded && (
                    <DropdownArea handleDrop={this.handleDrop} />
                )}

                {this.state.data && <Editor data={this.state.data} />}
            </div>
        );
    }
}

export default App;
