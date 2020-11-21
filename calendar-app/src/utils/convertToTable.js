const convertToTable = (list, offSet) => {
  const rows = [];
  let cells = [];

  list.forEach((day, i) => {
    if (i % offSet !== 0) {
      cells.push(day); 
    } else {
      rows.push(cells); 
      cells = []; 
      cells.push(day);
    }
    if (i === list.length - 1) {
      rows.push(cells);
    }
  });

  return rows.map((row,i) => {
    return <tr key={i}>{row}</tr>;
  });
} 

export default convertToTable;