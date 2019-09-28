import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-table/react-table.css'
import ReactTable from 'react-table'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  onRowClick(e, t, rowInfo) {
    console.log(rowInfo);
    this.props.history.push('/Detail',"ddddddd");
  }

  render() {
    const data = [{
      name: 'Router_1',
      location:"Bangalore",
      type:"VM",
      c_value: "34",
      status: "Active"
    },{
      name: 'Router_2',
      location:"Mumbai",
      type:"VM",
      c_value: "42",
      status: "Active"
    },{
      name: 'Router_3',
      location:"Delhi",
      type:"VM",
      c_value: "14",
      status: "Active"
    },{
      name: 'Router_4',
      location:"Chennai",
      type:"VM",
      c_value: "25",
      status: "Active"
    }]
   
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Location',
      accessor: 'location',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'Type',
      accessor: 'type',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'Current Value',
      accessor: 'C_value',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'Status',
      accessor: 'status',
      Cell: props => <span className='number'>{props.value}</span>
    }]
   
    return <div>
        <div className="header"> IOT LIST </div>
        <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        getTrProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, t) => { this.onRowClick(e, t, rowInfo) }
          }
        }}
      />
    </div>
  }
}

{/* <div className="App">
      <header className="App-header">
        <p>
          siva
        </p>
        
      </header>
    </div> */}

export default App;
