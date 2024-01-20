import Button from './UI/Button'
import styles from './Form.module.css'
import { useState } from "react"
const Form=(props)=>{
    const [productID,setProductID]=useState('')
    const [productPrice,setProductPrice]=useState('')
    const [productName,setProductName]=useState('')
    const [category,setCategory]=useState('electronics')
    const addProduct=(event)=>{
        event.preventDefault()
        const product={
            name:productName,
            price:productPrice,
            category:category
        }
        
        props.setProducts((prev)=>{
            return [...prev,productID]
        })
        localStorage.setItem(productID,JSON.stringify(product))
    }
    const productIdHandler=(event)=>{
        setProductID(event.target.value)
    }
    const productNameHandler=(event)=>{
        setProductName(event.target.value)
        
    }
    const productPriceHandler=(event)=>{
        setProductPrice(event.target.value)
    }
    const productCategoryHandler=(event)=>{
        
        setCategory(event.target.value)
    }
    return(
        <>
            <form onSubmit={addProduct} className={`${styles.form}`}> 
                <div className={`${styles.input_div}`}>
                    <label htmlFor="product-id">Product ID</label>
                    <input className={styles.input} id="product-id" name="productID" type="number" onChange={productIdHandler} value={productID}></input>
                </div>
                
                <div className={`${styles.input_div}`}>
                    <label htmlFor="product">Product name</label>
                    <input className={styles.input} id="product" name="product" type="text" onChange={productNameHandler}
                    value={productName}></input>
                </div>
                
                <div className={`${styles.input_div}`}>
                    <label htmlFor="product-price">Selling price</label>
                    <input className={styles.input} id="product-price" name="productPrice" type='number' onChange={productPriceHandler} value={productPrice}></input>
                </div>

                <div className={`${styles.input_div}`}>
                    <label>Choose a category</label>
                    <select className={styles.input} name='product-category'value={category} onChange={productCategoryHandler}>
                        <option value="electronics">Electronics</option>
                        <option value="skincare">Skincare </option>
                        <option value='food'>Food</option>
                    </select>
                </div>
                <Button type="submit"s className={styles.button}>Add Product</Button>
                
            </form>
        </>
    )
}
export default Form