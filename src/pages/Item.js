import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Item = () => {

    const params = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem();
    }, [])

    const getItem = () => {
        fetch(`http://localhost:8080/items/${params.id}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                setItem(data);
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Product page</h1>

            {item &&
                <>
                    <h2>{item.name}</h2>
                    <div>QTY : {item.qty}</div>
                </>
            }



            <Link to="/">Home</Link>
        </div>
    );
}

export default Item;