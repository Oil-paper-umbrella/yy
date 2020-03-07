
class optionTrendFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace trendxAxis
   * @param {日期} date 
   * @author he
   * created in 20-3-7
   */
  trendxAxis(date) {
    let xAxis = {
      type: "category",
      boundaryGap: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#fff",
          width: 1
        }
      },
      data: date
    }
    return xAxis
  }
  /**
   * @namespace trendGrid
   */
  trendGrid() {
    let grid = {
      top: '5%',
      left: '7%',
      bottom: '8%',
      right: '1%'
    }
    return grid;
  }
  /**
   * @namespace trendyAxis
   */
  trendyAxis() {
    let yAxis = {
      type: "value",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#fff",
          width: 1
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#1B283E",
          width: 1
        }
      }
    }
    return yAxis;
  }
  /**
   * @namespace trendSeriesData
   * @param {进出方式} name 
   * @param {线条颜色} itemColor 
   * @param {数据} data 
   */
  trendSeriesData(name, itemColor, data) {
    let seriesData = {
      name: name,
      type: "line",
      smooth: true,
      symbol: "none",
      sampling: "average",
      itemStyle: {
        color: itemColor
      },
      areaStyle: {
        color: "#2C4369"
      },
      data: data
    }
    return seriesData;
  }
  /**
   * @namespace trendSeries
   * @param {进出方式} name 
   * @param {线条颜色} itemColor 
   * @param {数据} data 
   */
  trendSeries(outData, enterData) {
    let series = [
      this.trendSeriesData("出校园", "#009890",  outData),
      this.trendSeriesData("进校园", "#FF6461", enterData),
    ]
    return series;
  }
}
export default optionTrendFun;