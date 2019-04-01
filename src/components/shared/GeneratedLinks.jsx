import React, { Component } from 'react';
import styled from 'styled-components';

const GeneratedLinksWrapper = styled.ul`
    color: #fff;
    user-select: none;
    li {
        padding: 5px 10px;
    }
    > .has-subtree {
        list-style-type: none;
        padding-top: 0;
    }
    .has-subtree {
        position: relative;
        span {
            display: block;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        &:before {
            content: '+';
            width: 10px;
            height: 10px;
            border-radius: 1px;
            text-align: center;
            line-height: 10px;
            background-color: #fff;
            display: inline-block;
            margin-right: 10px;
            color: #333;
        }
        > ul {
            display: none;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        &.open {
            &:before {
                content: '-';
            }
            > ul {
                display: block;
            }
        }
    }
`;

export class GeneratedLinks extends Component {
    handleTreeClick = e => {
        if (e.target.classList.contains('has-subtree')) {
            e.target.classList.toggle('open');
        }
        if (e.target.localName === 'span') {
            if (e.target.parentNode && e.target.parentNode.parentNode) {
                const parentUL = e.target.parentNode.parentNode;
                const id = parentUL.getAttribute('data-item-id');
                const key_name = e.target.innerText;
                this.props.passItemToEdit(id, key_name);
            }
        }
    };
    render() {
        return (
            <GeneratedLinksWrapper
                dangerouslySetInnerHTML={{ __html: this.props.html }}
                onClick={this.handleTreeClick}
            />
        );
    }
}

export default GeneratedLinks;
