//Returns only the last five chars from the id
const transformTxnAuditView = (transaction: string) :string => {
    let transformedTransaction = [];
    const arrOfSymbols = transaction.split('');
    transformedTransaction = arrOfSymbols.splice(0, 19);
    return arrOfSymbols.join('');
}
// console.log(transformTxnAuditView("6436a2c323000077741741f5"))