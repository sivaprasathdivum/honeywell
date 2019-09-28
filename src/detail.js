import React from 'react'
import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Detail extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            current_id: this.props.location.state.original.deviceId,
            data1:[],
            data2:[]
        }
        console.log(this.props.location.state);
    }

    componentDidMount() {
      this.statData();
      this.interval = setInterval(() => {
        this.statData();
      }, 10000);
    }

    statData(){
      fetch('http://192.168.43.39:8080/devices/stats/all')
        .then(response => response.json())
        .then(data =>{
          let tempData = []
          data.forEach(function(i){
            if(i.deviceParams)
              tempData.push(parseInt(i.deviceParams[0].paramValue))
          }) 
          console.log(tempData)
          this.setState({ data1: tempData })}
        );

        fetch('http://192.168.43.39:8080/devices/stats/hourly?deviceId=' + this.state.current_id)
        .then(response => response.json())
        .then(data =>{
          let tempData = []
          data.forEach(function(i){
            if(i.deviceParams)
              tempData.push(parseInt(i.deviceParams[0].paramValue))
          }) 
          console.log(tempData)
          this.setState({ data2: tempData })}
        );
    }

    render() {
        const options_1 = {
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Live Data (Last 10 min)'
            },
            xAxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
            },
            series: [
              {
                data: this.state.data1
              }
            ]
          };

          const options_2 = {
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Last Hour'
            },
            series: [
              {
                data: this.state.data2
              }
            ]
          };
        return <div>
          <div className="header"> Detail Page </div>
          <br/>
            <div>
              <HighchartsReact highcharts={Highcharts} options={options_1} />
            </div>
            <br/>
            <div>
              <HighchartsReact highcharts={Highcharts} options={options_2} />
            </div>
          </div>
    }
}
export default Detail