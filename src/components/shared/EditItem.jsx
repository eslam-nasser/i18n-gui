import React, { Component } from 'react';
import styled from 'styled-components';

const EditItemWrapper = styled.div``;

export class EditItem extends Component {
    render() {
        console.log(this.props.item);
        return (
            <EditItemWrapper>
                {this.props.languages.map((lang, i) => {
                    return (
                        <div key={i}>
                            <h4>{lang}</h4>
                            {this.props.item && (
                                <textarea
                                    value={
                                        this.props.item.item[
                                            this.props.item.name
                                        ]
                                    }
                                />
                            )}
                        </div>
                    );
                })}
            </EditItemWrapper>
        );
    }
}

export default EditItem;
