import { useEffect, useState } from "react";

const useMenuDataCategoryWise = (category) => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        if (!category || category === "all") {
          setMenuData(data);
        } else {
          const filteredData = data.filter(
            (item) => item.category === category,
          );
          setMenuData(filteredData);
        }
      });
  }, [category]);
  return menuData;
};

export default useMenuDataCategoryWise;
