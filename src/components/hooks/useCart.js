import { useEffect, useState } from "react"

const useCart = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return [courses, setCourses];
}

export default useCart;