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
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    },{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]
   
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
   
    return <ReactTable
      data={data}
      columns={columns}
      getTrProps={(state, rowInfo, column, instance) => {
        return {
          onClick: (e, t) => { this.onRowClick(e, t, rowInfo) }
        }
      }}
    />
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
