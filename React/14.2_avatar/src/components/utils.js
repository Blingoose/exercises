import axios from "axios";
export const fetchData = async (url, func, what1, what2, what3) => {
  const data = await axios.get(url);
  func(
    data?.[what1]?.[what2]?.[what3] ||
      data?.[what1]?.[what2] ||
      data?.[what1] ||
      data
  );
};
