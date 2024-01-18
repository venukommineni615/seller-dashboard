const FoodItems=(props)=>{
    const foodItmes=props.products.filter((key)=>{
        return JSON.parse(localStorage.getItem(key)).category==="food"
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
            <h2>Food Items</h2>
            <ul>
            {foodItmes.map((key)=>{
                    return (<li id={key} key={key}>{JSON.parse(localStorage.getItem(key)).name}-{JSON.parse(localStorage.getItem(key)).price}-{JSON.parse(localStorage.getItem(key)).category} <button onClick={deleteProduct}>Remove</button></li>)
                })}
            </ul>
        </>
    )
}
export default FoodItems