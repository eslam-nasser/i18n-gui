import React, { Component } from 'react';
import styled from 'styled-components';
import './assets/css/style.css';

const Dropdown = styled.div`
    border: 2px dashed #ddd;
    color: #fff;
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Dropdown>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, maiores consequuntur. Voluptatem, distinctio. Iusto
                    repudiandae facilis quae ipsam ab odio voluptatibus ex quia
                    ducimus obcaecati cupiditate expedita iste, non vel!
                </Dropdown>
            </div>
        );
    }
}

export default App;
