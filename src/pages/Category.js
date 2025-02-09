import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();
  return <h1>Category: {categoryName}</h1>;
};
export default Category;
