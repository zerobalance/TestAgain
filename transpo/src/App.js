import React from 'react';
import SelectOption from './component/SelectOption'
import CarList from './component/CarList'

class App extends React.Component{
  state={
    options: [
      { value:"All", label:"All"},
      { value:"Cars", label:"Cars"},
      { value:"Trucks", label:"Trucks"},
      { value:"Convertibles", label:"Convertibles"},
    ],
    TransportaionList:[
      {
        TransportaionType: "Cars",
        Models:[
          { 
            Year:"2013",
            Model:"A",
            Price:"$32,000",
          },
          { 
            Year:"2011",
            Model:"B",
            Price:"$4400",
          },
          { 
            Year:"2016",
            Model:"B",
            Price:"$15,500",
          },
        ]
      },
      {
        TransportaionType: "Trucks",
        Models:[
          { 
            Year:"2014",
            Model:"D",
            Price:"$18,000",
          },
          { 
            Year:"2013",
            Model:"E",
            Price:"$5200",
          },
        ]
      },
      {
        TransportaionType: "Convertibles",
        Models:[
          { 
            Year:"2009",
            Model:"F",
            Price:"$2,000",
          },
          { 
            Year:"2010",
            Model:"G",
            Price:"$6000",
          },
          { 
            Year:"2012",
            Model:"H",
            Price:"$12,500",
          },
          { 
            Year:"2017",
            Model:"M",
            Price:"$50,000",
          },
        ]
      }
    ]
  };

  constructor(props){
    super();

  }

  handleChange = (e) => {
    let {value} = e.target;
    console.log('value:' + value);
  }

  render() {
    return (
      <div>
        <h2>Welcome to React Transportaion</h2>
        <p>The best place to buy vehicles online</p>
        <h2>Choose Option</h2>
        <div>
          New Only 
          <input type="checkbox" id="coding" name="interest" value="coding" checked />
        </div><p/>
        <div>
          Select type 
          <SelectOption onChange={this.handleChange} options={this.state.options} />
        </div><p/>

        <CarList TransportaionList={this.state.TransportaionList} />
      </div>
    )
  }
}


export default App;
