import React from 'react'
import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Detail extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            current_id: this.props.location.state,
            data:[],
            axes:[]
        }

        this.state.data =[
              {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
              },
              {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
              }
            ]
        
          this.state.axes = [
              { primary: true, type: 'linear', position: 'bottom' },
              { type: 'linear', position: 'left' }
            ]
        
    }

    render() {
        const options_1 = {
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Live Data (Last 10 min)'
            },
            series: [
              {
                data: [1, 2, 1, 4, 3, 6]
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
                data: [1, 2, 1, 4, 3, 6]
              }
            ]
          };
        return <div>
          <div className="header"> Detail Page </div>
          <HighchartsReact highcharts={Highcharts} options={options_1} />
          <HighchartsReact highcharts={Highcharts} options={options_2} />
          </div>
    }
}
export default Detail