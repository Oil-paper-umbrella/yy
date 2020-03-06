import optionPublicFun from '../../../utils/optionPublic.js'
class optionMapFun {
  /**
   * @namespace mapTooltip
   * @author he
   * create in 2020-1-11
   */
  mapTooltip() {
    let tooltip = {
      trigger: 'item',
      formatter: function (e) {
        return .5 == e.value ? e.name + "：有疑似病例" : e.name + "<br />" + "学生总人数：" + e.value + "<br />" + "确诊病例：" + e.data.val1 + "<br />" + "疑似病例：" + e.data.val2;
      },
      textStyle: new optionPublicFun().textStyle("normal"),
    }
    return tooltip;
  }
}
export default optionMapFun;