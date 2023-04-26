const RejectReasons = [
    {value: 1, viewValue: 'Document is not an invoice'},
    {value: 5, viewValue: 'Other'},
    {value: 6, viewValue: 'Invoice Too Old'},
    {value: 8, viewValue: 'No Company Name On Invoice'},
    {value: 9, viewValue: 'Invoice Not Original'},
    {value: 11, viewValue: 'Missing Proof Of Payment'},
    {value: 15, viewValue: 'Wrong company name/Address'},
    {value: 18, viewValue: 'Missing mandatory details'},
    {value: 21, viewValue: 'Duplicate'},
    {value: 22, viewValue: 'Missing VAT indication'},
    {value: 23, viewValue: 'VAT improperly charged'},
    {value: 30, viewValue: 'Credit Card Slip'},
    {value: 31, viewValue: 'Personal expense'},
    {value: 32, viewValue: 'Unapproved by client'}
]

const getViewValueFromValue = (data: {value: number, viewValue: string}[], valueNumber: number) => {
    const filteredObj = data.filter((x) => x.value === valueNumber);
    return filteredObj.length !== 0 ? filteredObj[0].viewValue : "" ;
}

console.log(getViewValueFromValue(RejectReasons, 122));
