const date = 'Mon Mar 27 2023 00:00:00 GMT+0200';
const parsed = new Date(date);
const mypart = parsed.toLocaleString("lt").split(' ')[0] + "T00:00:00.000Z";
console.log(mypart);

const convertToUtc = (dateStr) => {
    const dateObj = new Date(dateStr);
    const utcDate = dateObj.toLocaleString('lt').split(' ')[0] + 'T00:00:00.000Z';
    return utcDate;
}

convertToUtc('Mon Mar 27 2023 00:00:00 GMT-0200')

const date1 = 'Mon Mar 27 2023 00:00:00 GMT+0200';
const parsed1 = new Date(date);
let output = `${parsed1.getFullYear()}-${parsed1.getUTCMonth()}-${parsed1.getUTCDate()+1}T00:00:00.000Z`
console.log(output)