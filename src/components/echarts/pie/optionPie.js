import optionPublicFun from '../../../utils/optionPublic.js'
// import dataPieFun from './dataPie.js';

class optionPieFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace pieTooltip
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @param {饼图级别} type
   * @author yqf
   * created in 19-11-24
   */
  pieTooltip() {
    let toolTip = {
      trigger: 'item',
      textStyle: new optionPublicFun().textStyle("normal", 12),
      formatter: "{b} : {c} 人 ({d}%)"
    }
    return toolTip;
  }
  /**
   * @namespace pieLegend
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @param {leng定位} legendRight 
   */
  pieLegend() {
    let legend = {
      orient: 'vertical',
      right: "-5",
      top: '30%',
      textStyle: new optionPublicFun().textStyle("normal", 12)
    }
    return legend;
  }
  /**
   * @namespace pieSeries
   * @param {判断饼图类型} type 
   */
  pieSeries(data) {
    let result = [
      {
        type: 'pie',
        radius: '83%',
        center: ['43%', '50%'],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
    return result;
  }
  
  /**
   * @namespace fourPieSeriesData
   * @param {饼图名称} name 
   * @param {色系} color 
   * @param {内圈半径} radiusX 
   * @param {内圈半径} radiusY 
   */
  fourPieSeriesData(name, color, radiusX, radiusY){
    let seriesData = {
      name: name,
      type: "pie",
      clockWise: true,
      hoverAnimation: false,
      radius: [radiusX, radiusY],
      label: {
        normal: {
          position: "center"
        }
      },
      data: [
        {
          value: 1,
          label: {
            normal: {
              formatter: name,
              textStyle: {
                color: color,
                fontSize: 16
              }
            }
          },
          itemStyle: {
            normal: {
              color: color,
              borderColor: color,
              borderWidth: 2
            }
          },
          tooltip: {
            backgroundColor: "rgba(0,0,0,0)",
            textStyle: {
              color: "rgba(0,0,0,0)"
            }
          }
        }
      ]
    }
    return seriesData;
  }
  /**
   * @namespace fourPieSeries
   * @param {饼图名称} name 
   * @param {色系} color 
   * @param {内圈半径} radiusX 
   * @param {内圈半径} radiusY 
   */
  fourPieSeries(name, color, radiusX1, radiusY1){
    let series = [
      this.fourPieSeriesData(name, color, radiusX1, radiusX1),
      this.fourPieSeriesData(name, color, radiusY1, radiusY1)
    ]
    return series;
  }
}
export default optionPieFun;