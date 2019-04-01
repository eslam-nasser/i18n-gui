import React, { Component } from 'react';
import styled from 'styled-components';

const EditItemWrapper = styled.div`
    .start-hint {
        min-height: 200px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        opacity: 0.8;
        padding-left: 20px;

        img {
            width: 50px;
        }
    }
`;

export class EditItem extends Component {
    state = {};

    render() {
        const inputs = [];

        if (this.props.item && this.props.item.values) {
            for (let key in this.props.item.values) {
                inputs.push({
                    language: key,
                    value: this.props.item.values[key]
                });
            }
        }
        return (
            <EditItemWrapper>
                {this.props.item ? (
                    inputs.map((input, i) => {
                        return (
                            <div key={i}>
                                <h4>{input.language}</h4>
                                <textarea
                                    // ref={userInput => (this.input = userInput)}
                                    // value={input.value}
                                    defaultValue={input.value}
                                    key={Math.random() * 1000}
                                    data-lang={input.language}
                                    data-group-id={this.props.item.id}
                                    data-key={this.props.item.name}
                                    onChange={this.props.updateItem}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div className="start-hint">
                        <img
                            src={require('../../assets/icons/arrow.svg')}
                            alt="Start here"
                        />
                        <h3>Select an item to translate it</h3>
                    </div>
                )}
            </EditItemWrapper>
        );
    }
}

export default EditItem;
