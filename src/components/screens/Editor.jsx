import React, { Component } from 'react';
import styled from 'styled-components';
import GeneratedLinks from '../shared/GeneratedLinks';
import EditItem from '../shared/EditItem';
import findNestedObjectByID from '../../utils/findNestedObjectByID';
import exportToJSON from '../../utils/exportToJson';

const EditorWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    textarea {
        padding: 10px;
        border-radius: 5px;
        background: #26222f;
        border: none;
        color: #c2c2c2;
        transition: 0.15s;
        outline: none;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        width: 100%;
        height: 100px;
        resize: none;
        &:focus,
        &:hover {
            background: #26222f;
        }
    }
    .actions {
        flex-basis: 100%;
        display: flex;
        justify-content: space-between;
        button {
            flex-basis: 48%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            img {
                width: 25px;
                margin-left: 20px;
            }
            span {
                position: absolute;
                bottom: 6px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 10px;
                opacity: 0.8;
            }
        }
    }
    > ul {
        flex: 1;
        padding: 0;
        > li {
            padding: 10px !important;
            padding-left: 5px;
            color: #c2c2c2;
            width: 80%;
        }
        li {
            transition: 0.15s;
            &:hover {
                cursor: pointer;
                background-color: rgb(255, 255, 255, 0.05);
            }
        }
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
            const query = findNestedObjectByID(this.props.data[lang], 'id', id);
            item.values[lang] = query[key_name];
        });

        item['id'] = id;
        item['name'] = key_name;

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
        const data = JSON.parse(localStorage.getItem('i18n_gui_file_data'));
        for (let key in data) {
            exportToJSON(data[key], `${key}.json`);
        }
    };

    render() {
        return (
            <EditorWrapper>
                <div className="actions">
                    <button className="btn primary" onClick={this.exportData}>
                        Export your translations as JSON files
                        <img
                            src={require('../../assets/icons/download.svg')}
                            alt="Download"
                        />
                        <span>{this.props.languages.length + ' file(s)'}</span>
                    </button>
                    <button
                        className="btn primary"
                        onClick={this.props.startOver}
                    >
                        Import new i18n file
                        <img
                            src={require('../../assets/icons/upload.svg')}
                            alt="Download"
                        />
                    </button>
                </div>

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
