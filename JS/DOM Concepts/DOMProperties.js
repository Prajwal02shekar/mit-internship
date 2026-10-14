//? DOM Properties

//? 1. createElement()
//? 2. append()
//? 3. appendChild()
//? 4. innerText
//? 5. innerHTML()


let h1=document.createElement('h1')
console.log(h1)

document.body.appendChild(h1)
h1.innerText="HTML"


let p=document.createElement('p')
console.log(p)
p.innerText="hgfxdgffihoupidyjkghjpohcgf"


document.body.appendChild(p)


let section=document.createElement('section')
document.body.appendChild(section)


let h2=document.createElement('h2')
h2.innerText="Prajwal C"
let p1=document.createElement('p')
p1.innerText="kgfdghouufudhjkl;uiyuy"
let img=document.createElement('img')
img.src="https://avatars.githubusercontent.com/u/160094074?v=4"


console.log(h2,p1,img)

section.append(h2,p1,img)


let aside=document.createElement('aside')
document.body.appendChild(aside)

aside.innerHTML=`
 <table border="2">
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
         <tr>
            <td>10</td>
            <td>11</td>
            <td>12</td>
        </tr>
    </table>
`