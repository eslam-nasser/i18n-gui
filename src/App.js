import React, { Component } from 'react';
import styled from 'styled-components';
import './assets/css/style.css';
import { Nav } from './components/shared';

const Dropdown = styled.div`
    border: 2px dashed #ddd;
    border-radius: 5px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    cursor: pointer;
    transition: 0.15s;
    position: relative;

    &:hover {
        background-color: rgba(255, 255, 255, 0.01);
    }
    img {
        width: 60px;
    }
    h3 {
        text-align: center;
    }
`;

class App extends Component {
    dropRef = React.createRef();
    state = {
        dragging: false
    };

    componentDidMount() {
        this.dragCounter = 0;
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn);
        div.addEventListener('dragleave', this.handleDragOut);
        div.addEventListener('dragover', this.handleDrag);
        div.addEventListener('drop', this.handleDrop);
    }

    componentWillUnmount() {
        let div = this.dropRef.current;
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
        this.setState({ drag: false });
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            // this.props.handleDrop(e.dataTransfer.files);
            console.log('files', e.dataTransfer.files);
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    };

    render() {
        return (
            <div className="App">
                <Nav />
                <Dropdown ref={this.dropRef}>
                    {this.state.dragging && (
                        <div
                            style={{
                                border: 'dashed grey 4px',
                                backgroundColor: 'rgba(255,255,255,.8)',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 9999
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: 0,
                                    left: 0,
                                    textAlign: 'center',
                                    color: 'grey',
                                    fontSize: 36
                                }}
                            >
                                <div>drop here :)</div>
                            </div>
                        </div>
                    )}
                    <img
                        src={require('./assets/icons/upload.svg')}
                        alt="add icon"
                    />
                    <h3>Drag and drop your i18n json file</h3>
                </Dropdown>
            </div>
        );
    }
}

export default App;
