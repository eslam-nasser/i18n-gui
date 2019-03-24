import React, { Component } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  border: 2px dashed #ddd;
`;
// const DropdownStyle = {
//   border: '2px dashed #ddd',
// };

export class DropdownArea extends Component {
  render() {
    return (
      <Dropdown>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maiores consequuntur.
        Voluptatem, distinctio. Iusto repudiandae facilis quae ipsam ab odio voluptatibus ex quia
        ducimus obcaecati cupiditate expedita iste, non vel!
      </Dropdown>
    );
  }
}

export default DropdownArea;
