const date = 'Thu Feb 03 2023 00:00:00 GMT+0200';
const inputDate = new Date(date);
console.log(inputDate);
const outputDate = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate(), 0, 0, 0));
const outputString = outputDate.toISOString();
console.log(outputString); // '2023-02-01T00:00:00.000Z'
const pattern = /([A-Z][A-Za-z]+)\s*([+-])/;

const match = date.match(pattern);
if (match) {
  const sign = match[2];
  console.log("Sign:", sign);
} else {
  console.log("No match found.");
}


const parseDateForInspector = (date) => {
    timeZoneSignPattern = /([A-Z][A-Za-z]+)\s*([+-])/;
    const match = date.match(timeZoneSignPattern);
    const sign = match[2];
    const inputDate = new Date(date);
    console.log(inputDate);
    const outputDate = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate(), 0, 0, 0));
    const outputString = outputDate.toISOString();
    console.log(outputString); // '2023-02-01T00:00:00.000Z'
}

// transactionDates(value) {
//     const data: any = {};
//     const { start, end } = value;
//     if (start) {
//         const inputDate = new Date(start);
//         const outputDate = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate(), 0, 0, 0));
//         data.start = outputDate.toISOString();
//     }
//     if (end) {
//         const inputDate = new Date(end);
//         const outputDate = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate(), 0, 0, 0));
//         data.end = outputDate.toISOString();
//     }
//     if (!isEmpty(data)) {
//         return { name: 'date', type: 'Date', data };
//     }
//     return data;
// }




// transactionDates(value) {
//     const data: any = {};
//     const { start, end } = value;
//     if (start) {
//         data.start = new Date(start).toISOString();
//     }
//     if (end) {
//         data.end = new Date(end).toISOString();
//     }
//     if (!isEmpty(data)) {
//         return { name: 'date', type: 'Date', data };
//     }
//     return data;
// }



