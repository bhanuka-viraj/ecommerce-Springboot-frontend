import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Category=()=>{
    const params = useParams();
    const[category,setCategory]=useState(null);
    const[items,setItems]=useState(null);

    useEffect(()=>{
        getCategory();
        getItemsByCategory();
    },[])

    const getCategory=()=>{
        fetch(`http://localhost:8080/category/${params.id}`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setCategory(data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const getItemsByCategory=()=>{
        fetch(`http://localhost:8080/items/category/${params.id}/items`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setItems(data);
        }).catch((error)=>{
            console.log(error);
        })
    }


    return (
        <>
        {category &&
            <div>
                <h2>Products of {category.name} category</h2>

                
                    {items &&
                        <ul>
                            {items.map((item)=>(
                                <li key={item.id}>
                                    <Link to={`/items/${item.id}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        }
                
            </div>

            

            }
        </>
    );
}

export default Category;