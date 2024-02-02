/* used one function for both option */
export const dataOption = (dataArray) => {
  return dataArray.map((data, i) => {
    return (
      <option key={i} value={data}>
        {data}
      </option>
    );
  });
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = [2024, 2025];
