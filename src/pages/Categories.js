import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = () => {
        fetch(`http://localhost:8080/category`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                setCategories(data);
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div>
                <h2>Categories</h2>
                {categories &&
                    <ul>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                }
            </div >

            <Link to="/">Home</Link>
        </>

    );
}

export default Categories;