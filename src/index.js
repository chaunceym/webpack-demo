import './x.less'
import './z.styl'
import jpg from './assets/pink.jpg'
import x from './x.js'
console.log(x)

const div = document.querySelector('.cla')
div.innerHTML = `<img src='${jpg}'>`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy') // 异步加载会生成一个promise对象
    promise.then((module)=>{
        module.default()
    },()=>{
        console.log('模块加载错误')
    })
}


div.appendChild(button)
