/**
 * 
 * @author xierenyuan@qq.com
 * @export 
 * 
 */

import './sass/ui.scss';
import 'ionicons/dist/css/ionicons.css';
import './themes/ionic.build.default.scss';

import util from './utils/util';
import App from './components/app';
import Button from './components/button';
import Icon from './components/icon';
import {
    Header,
    Footer,
    ToolBar,
    Title,
    Buttons
} from './components/header';
import Content from './components/content';
const VERSION = '0.0.1';
const DEFAULT_CONFIG = {
    theme: 'ios',
    version: VERSION,
    iconMode: ''
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(App.name, App);
    Vue.component(Header.name, Header);
    Vue.component(Footer.name, Footer);
    Vue.component(ToolBar.name, ToolBar);
    Vue.component(Title.name, Title);
    Vue.component(Buttons.name, Buttons);
    Vue.component(Content.name, Content);
    Vue.prototype.$ionic = util.extend(DEFAULT_CONFIG, opts);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    version: VERSION,
    install,
    Button,
    Header,
    Footer,
    ToolBar,
    Title,
    Buttons,
    Content
};