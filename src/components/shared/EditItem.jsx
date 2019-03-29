import React, { Component } from 'react';
import styled from 'styled-components';

const EditItemWrapper = styled.div``;

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
                    <h3>Please select an item</h3>
                )}
            </EditItemWrapper>
        );
    }
}

export default EditItem;
