import React, { Component } from 'react';
import styled from 'styled-components';
import GeneratedLinks from '../shared/GeneratedLinks';
import EditItem from '../shared/EditItem';
import findNestedObjectByID from '../../utils/findNestedObjectByID';
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
        this.generateHtml(this.props.data.default_language);
    }

    passItemToEdit(id, key_name) {
        const query = findNestedObjectByID(
            this.props.data.default_language,
            'id',
            id
        );
        this.setState({
            editItem: {
                id,
                name: key_name,
                item: query
            }
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

    render() {
        return (
            <EditorWrapper>
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
