import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-table/react-table.css'
import ReactTable from 'react-table'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
    this.homeData();
    this.interval = setInterval(() => {
      this.homeData();
    }, 10000);
  }

  homeData(){
    fetch('http://192.168.43.39:8080/devices/all')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  onRowClick(e, t, rowInfo) {
    console.log(rowInfo);
    this.props.history.push('/detail',rowInfo);
  }

  render() {
    // const data = [{
    //   name: 'Router_1',
    //   location:"Bangalore",
    //   type:"VM",
    //   c_value: "34",
    //   status: "Active"
    // },{
    //   name: 'Router_2',
    //   location:"Mumbai",
    //   type:"VM",
    //   c_value: "42",
    //   status: "Active"
    // },{
    //   name: 'Router_3',
    //   location:"Delhi",
    //   type:"VM",
    //   c_value: "14",
    //   status: "Active"
    // },{
    //   name: 'Router_4',
    //   location:"Chennai",
    //   type:"VM",
    //   c_value: "25",
    //   status: "Active"
    // }]

    let data = this.state.data;
   
    const columns = [
      {
        Header: 'Device id',
        accessor: 'deviceId',
        Cell: props => <span className='number'>{props.value}</span>
      },{
      Header: 'Name',
      accessor: 'name' 
    }, {
      Header: 'Location',
      accessor: 'location',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'Type',
      accessor: 'type',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'Status',
      accessor: 'status',
      Cell: props => <span className='number'>{props.value}</span>
    }]
   
    return <div>
        <div className="header"> Device List </div>
        <br/>
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

export default App;
