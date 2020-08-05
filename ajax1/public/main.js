//封装ajax
const ajax = (url, fn, type = 'html') => {
    const request = new XMLHttpRequest()
    request.open('get', url)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            if (type === 'xml') {
                fn(request.responseXML)
            } else {
                fn(request.response)
            }
        }
    }
    request.send()
}

//获取css
getCSS.onclick = () => {
        ajax('/2.css', (res) => {
            const style = document.createElement('style')
            style.innerHTML = res
            document.head.appendChild(style)
        })
    }
    //获取js
getJS.onclick = () => {
    ajax('/2.js', (res) => {
        const script = document.createElement('script')
        script.innerHTML = res
        document.body.appendChild(script)
    })
}

//获取html
getHTML.onclick = () => {
    ajax('/3.html', (res) => {
        const div = document.createElement('div')
        div.innerHTML = res
        document.body.appendChild(div)
    })
}

//获取xml
getXML.onclick = () => {
    ajax('/4.xml', (res) => {
        console.log(res)
        const dom = res
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
    }, 'xml')
}

//获取json
getJSON.onclick = () => {
    ajax('/5.json', (res) => {
        const jsonObj = JSON.parse(res)
        console.log(jsonObj)
    })
}