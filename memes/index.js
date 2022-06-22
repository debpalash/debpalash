var after = ''

function fetchMemes() {
    let parentdiv = document.createElement('div')
    parentdiv.id = 'memes'
    fetch('https://www.reddit.com/r/memes.json')
        .then(response => response.json())
        .then(body => {
            for (let index = 0; index < body.data.children.length; index++) {
                if (body.data.children[index].data.post_hint === 'image') {
                    let div = document.createElement('div')
                    div.className = "meme"
                    let h4 = document.createElement('h4')
                    let image = document.createElement('img')
                    let url = image.src
                    image.src = body.data.children[index].data.url_overridden_by_dest
                    // dl
                    console.log(image.src)
                    let dld = document.createElement('a')
                    dld.id = "dlbtn"
                    dld.setAttribute("download","download")

                    // end dl
                    h4.textContent = body.data.children[index].data.title
                    div.appendChild(h4)
                    div.appendChild(image)
                    div.appendChild(dld)
                    parentdiv.appendChild(div)
                }
            }
            document.body.appendChild(parentdiv)

        }

        );
}