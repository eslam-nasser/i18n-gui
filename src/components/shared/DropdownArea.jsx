// REF: https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
import React, { Component } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
    border: 2px dashed #ddd;
    border-radius: 5px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    /* cursor: pointer; */
    transition: 0.15s;
    position: relative;

    /* &:hover {
        background-color: rgba(255, 255, 255, 0.01);
    } */
    img {
        width: 60px;
    }
    h3 {
        text-align: center;
    }

    .drop-here-layer {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        font-size: 45px;
    }
`;

export class DropdownArea extends Component {
    dropRef = React.createRef();
    state = {
        dragging: false,
        errorMsg: ''
    };

    componentDidMount() {
        this.dragCounter = 0;
        const div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn);
        div.addEventListener('dragleave', this.handleDragOut);
        div.addEventListener('dragover', this.handleDrag);
        div.addEventListener('drop', this.handleDrop);
    }

    componentWillUnmount() {
        const div = this.dropRef.current;
        div.removeEventListener('dragenter', this.handleDragIn);
        div.removeEventListener('dragleave', this.handleDragOut);
        div.removeEventListener('dragover', this.handleDrag);
        div.removeEventListener('drop', this.handleDrop);
    }

    handleDrag = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    handleDragIn = e => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({ dragging: true });
        }
    };
    handleDragOut = e => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter > 0) return;
        this.setState({ dragging: false });
    };

    handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ dragging: false });
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            if (file.type === 'application/json') {
                this.props.handleDrop(file);
            } else {
                // invalid file
            }
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    };

    render() {
        return (
            <Dropdown ref={this.dropRef}>
                {this.state.dragging && (
                    <div className="drop-here-layer">
                        <div>drop here :)</div>
                    </div>
                )}
                <img
                    src={require('../../assets/icons/upload.svg')}
                    alt="add icon"
                />
                <h3>Drag and drop your i18n json file</h3>
            </Dropdown>
        );
    }
}

export default DropdownArea;
