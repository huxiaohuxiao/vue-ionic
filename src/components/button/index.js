  /**
   *  button 组件
   * @author xierenyuan@qq.com  
   */

  const Button = require('./src/button.vue');

  /* istanbul ignore next */
  Button.install = function(Vue) {
      Vue.component(Button.name, Button);
  };
  module.exports = Button;