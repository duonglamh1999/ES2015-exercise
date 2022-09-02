 const choice = ( items)=> {
    let ranNum = Math.floor(Math.random() * items.length())
    return items[ranNum]
 }
 const remove = ( items,item)=> {
    let index= items.indexOf(item)
    items.splice(index,1)
 }
 export{choice,remove}