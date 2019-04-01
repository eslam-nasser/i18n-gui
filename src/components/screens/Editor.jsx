import React, { Component } from 'react';
import styled from 'styled-components';
import GeneratedLinks from '../shared/GeneratedLinks';
import EditItem from '../shared/EditItem';
import findNestedObjectByID from '../../utils/findNestedObjectByID';
import exportToJSON from '../../utils/exportToJson';
// import updateNestedObjectByID from '../../utils/updateNestedObjectByID';

const EditorWrapper = styled.div`
    display: flex;
    > ul {
        flex: 1;
    }
    > div {
        flex: 2;
    }
`;

export class Editor extends Component {
    html = '';

    state = {
        editItem: null
    };

    componentWillMount() {
        // console.log(this.props);
        for (let key in this.props.data) {
            this.generateHtml(this.props.data[key]);
            break;
        }
    }

    passItemToEdit(id, key_name) {
        const item = {
            values: {}
        };

        this.props.languages.forEach(lang => {
            console.log(lang, this.props.data, this.props.data[lang]);
            const query = findNestedObjectByID(this.props.data[lang], 'id', id);
            console.log(query);
            item.values[lang] = query[key_name];
        });

        item['id'] = id;
        item['name'] = key_name;

        console.log(item);

        this.setState({
            editItem: item
        });
    }

    generateHtml(data) {
        for (let key in data) {
            if (typeof data[key] === 'object') {
                this.html += `
                <li class="has-subtree">${key}
                    <ul data-item-id="${data[key]['id']}">`;

                this.generateHtml(data[key]);

                this.html += `
                    </ul>
                </li>`;
            } else if (typeof data[key] === 'string') {
                this.html += `
                    <li class="single-item">
                        <span>${key}</span>
                    </li>
                `;
            }
        }
    }

    exportData = () => {
        const data = JSON.parse(localStorage.getItem('latest_i18n_gui_file'));
        for (let key in data) {
            exportToJSON(data[key], `${key}.json`);
        }
    };

    render() {
        return (
            <EditorWrapper>
                <button onClick={this.exportData}>Export</button>
                <GeneratedLinks
                    passItemToEdit={this.passItemToEdit.bind(this)}
                    html={this.html}
                />
                <EditItem
                    item={this.state.editItem}
                    languages={this.props.languages}
                    updateItem={this.props.updateItem}
                />
            </EditorWrapper>
        );
    }
}

export default Editor;
