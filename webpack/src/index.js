import _ from 'lodash'
import './style.css'
import Icon from'./icon.jpg'
import print from'./print'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpa11ck'], ' ');
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

document.body.appendChild(component());