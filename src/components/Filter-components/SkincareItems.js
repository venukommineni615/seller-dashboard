const SkincareItems=(props)=>{
    const skincareItems=props.products.filter((key)=>{
        return JSON.parse(localStorage.getItem(key)).category==="skincare"
    })
    const deleteProduct=(event)=>{
        let key=event.target.parentElement.id
        localStorage.removeItem(key)
        props.setProducts((prev)=>{
            return prev.filter((item=>{return item!==key}))
        })
    }
    return(
        <>
            <h2>Skincare Items</h2>
            <ul>
            {skincareItems.map((key)=>{
                    return (<li id={key} key={key}>{JSON.parse(localStorage.getItem(key)).name}-{JSON.parse(localStorage.getItem(key)).price}-{JSON.parse(localStorage.getItem(key)).category} <button onClick={deleteProduct}>Remove</button></li>)
                })}
            </ul>
        </>
    )
}
export default SkincareItems