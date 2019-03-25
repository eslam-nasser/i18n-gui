import React, { Component } from 'react';
import styled from 'styled-components';
import GeneratedLinks from '../shared/GeneratedLinks';
import EditItem from '../shared/EditItem';

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

    componentWillMount() {
        this.generateHtml(this.props.data);
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
                <GeneratedLinks html={this.html} />
                <EditItem />
            </EditorWrapper>
        );
    }
}

export default Editor;
