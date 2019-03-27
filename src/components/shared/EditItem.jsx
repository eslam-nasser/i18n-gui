import React, { Component } from 'react';
import styled from 'styled-components';

const EditItemWrapper = styled.div``;

export class EditItem extends Component {
    state = {};

    render() {
        return (
            <EditItemWrapper>
                {this.props.item ? (
                    this.props.languages.map((lang, i) => {
                        return (
                            <div key={i}>
                                <h4>{lang}</h4>
                                <textarea
                                    // value={
                                    //     this.props.item.item[
                                    //         this.props.item.name
                                    //     ]
                                    // }
                                    defaultValue={
                                        this.props.item.item[
                                            this.props.item.name
                                        ]
                                    }
                                    data-lang={lang}
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
