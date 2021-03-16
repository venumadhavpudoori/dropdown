import React , { Component } from 'react';
import './Dropdown.css'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "",
          selectInputs:" "
        };
    
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleModuleDropdownChange = this.handleModuleDropdownChange.bind(this);

      }
    
      handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

      handleModuleDropdownChange(e) {
        this.setState({ selectInputs: e.target.value });
      }

    render() {
      const inputFields = [];

      for (let i = 1; i <= this.state.selectInputs; i++) {
        inputFields.push(
          <input name={`input-${i}`} onChange={this.onChange}  className="m-4" />
        )
      }
    return (
    <div>
        <div id="dr">
          <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="Choose Device">Choose Device</option>
              <option value="sensor">Sensor</option>
              <option value="motor">Motor</option>
              <option value="relay">Relay</option>
            </select>
          </div>

          <div className="container">
           {
              this.state.selectValue === 'sensor'
              ? 
              <div className="sensor"> 
              <button type="button" className="btn btn-outline-success btn-lg mr-4">Sensor ID</button>
              <button type="button" className="btn btn-outline-success btn-lg">Sensor Name</button>
              </div>
              :
              this.state.selectValue === 'motor'
              ?
              <div>
              <button type="button" className="btn btn-outline-success btn-lg mr-4">Motor ID</button>
              <button type="button" className="btn btn-outline-success btn-lg">Motor Name</button>
              </div>
              :
              this.state.selectValue === 'relay'
              ?
              <div>
              <button type="button" className="btn btn-outline-success btn-lg mr-4">Relay ID</button>
              <button type="button" className="btn btn-outline-success btn-lg">Relay Name</button>
              <div>
              <select id="moduleDropdown" onChange={this.handleModuleDropdownChange}>
              <option value="modules">Modules</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
            </select>
              </div>
              <div style={{marginTop:"30px"}}>
                {
                   inputFields
                }
              </div>
              </div>   
              :
              <p> default </p>
           }
          </div>
        </div>
    </div>
    );
}
}

export default Dropdown;
