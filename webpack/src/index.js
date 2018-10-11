import _ from 'lodash'
import './style.css'
import Icon from'./icon.jpg'
import print from'./print'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack12'], ' ');
    element.classList.add('hello')
    
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);


    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = print;
    element.appendChild(btn);

    return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}