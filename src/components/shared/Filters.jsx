import React, { Component } from 'react';

export class FiltersBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="filters">
          <div className="input-wrapper search-input">
            <input type="text" placeholder="Filter by name" />
          </div>
          {/* <div class="input-wrapper">
            <select>
              <option selected>Filter by language</option>
            </select>
          </div>  */}
        </div>
        <div className="actions">
          <button className="btn primary">Add new project</button>
        </div>
      </div>
    );
  }
}

export default FiltersBar;
