import optionPublicFun from '../../../utils/optionPublic.js'
// import dataPieFun from './dataPie.js';

class optionPieFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace firstPieTooltip
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @param {饼图级别} type
   * @author yqf
   * created in 19-11-24
   */
  firstPieTooltip(weight, size) {
    let toolTip = {
      trigger: 'item',
      textStyle: new optionPublicFun().textStyle(weight, size),
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    }
    return toolTip;
  }
  /**
   * @namespace firstPieLegend
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @param {leng定位} legendRight 
   */
  firstPieLegend(weight, size, legendRight) {
    let legend = {
      orient: 'vertical',
      right: legendRight,
      top: '30%',
      textStyle: new optionPublicFun().textStyle(weight, size)
    }
    return legend;
  }
  /**
   * @namespace pieLabel
   * @param {字体大小} size 
   */
  pieLabel(size) {
    let label= {
      fontSize: size
    }
    return label;
  }
  /**
   * @namespace firstPieSeries
   * @param {判断饼图类型} type 
   */
  firstPieSeries(data) {
    let result = [
      {
        type: 'pie',
        radius: '75%',
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
}
export default optionPieFun;