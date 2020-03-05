class dataPieFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace fourModuleData 获取四大模块名称以及得分
   * @author yqf、he
   * created in 19-11-26
   */
  fourModuleData() {
    let modulesData = [];
    let moduleValue = this.data.ModuleValue;
    if (moduleValue.length <= 0)
      throw new Error("Module length is less than or equal to 0");
    for (let i = 0; i < moduleValue.length; i++) {
      let moduleName = moduleValue[i].moduleName;
      let moduleScore = moduleValue[i].value;
      modulesData.push({
        name: moduleName,
        value: moduleScore
      })
    }
    return modulesData;
  }
  /**
   * @namespace indexAllScore 获取四大模块满分值
   */
  indexAllScore(type) {
    let allScore = [];
    let moduleData;
    let status = {
      "first": () => {
        return this.data.ModuleValue
      },
      "second": () => {
        return this.data.IndexValue
      }
    }
    if (status[type]) {
      moduleData = status[type]();
    }
    if (moduleData.length <= 0)
      throw new Error("Module length is less than or equal to 0");
    for (let i = 0; i < moduleData.length; i++) {
      allScore.push(moduleData[i].allscore)
    }
    return allScore;
  }
  /**
   * @namespace subIndexScoreOfModule 获取模块下所有指标以及得分
   * @param {二级饼图json数据} data 
   */
  subIndexScoreOfModule(data) {
    let indexScore = [];
    let subIndexData = data.IndexValue; // 所有指标
    if (subIndexData.length <= 0)
      throw new Error("indicator length is less than or equal to 0");
    for (let i = 0; i < subIndexData.length; i++) {
      let subIndexName = subIndexData[i].indexName;
      let subIndexScore = subIndexData[i].datas;
      indexScore.push({
        name: subIndexName,
        value: subIndexScore
      })
    }
    return indexScore;
  }
}

export default dataPieFun;