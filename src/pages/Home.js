import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    
    const [items, setItems]=useState(null);
    const [categories,setCategories]=useState(null);

    useEffect(()=>{
        getItems();  /* trigerring when the */
    },[]);

    const getItems=()=>{
        fetch("http://localhost:8080/items")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setItems(data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const getCategories=()=>{
        fetch("http://localhost:8080/category")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setCategories(data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div>
            <h1>Home page</h1>
            <div>
            <Link to="/items">Products</Link>
            </div>
            <button onClick={getItems}>Load Products</button>
            <button onClick={getCategories}>Load Categories</button>

            {items && 
                <ul>
                    {items.map((item)=>(
                        <li key={item.id}>
                            <Link to={`/items/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            }

            {categories &&
                <ul>
                    {categories.map((category)=>(
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            }

        </div>
    );
}

export default Home;