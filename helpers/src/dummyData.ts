export const obj1 = {
    "_id": "6437c36291826b000f751f33",
    "action": "Inspect::Edit",
    "transactionId": "63af2a151f0000c9c0d5aafb",
    "updatedBy": "teodor.simonovski@sourcico.com",
    "updatedAt": "2023-04-13T08:54:58.247Z",
    "accountId": 2217,
    "from": {
      "country": "FI",
      "expense_type_id": [
        "01079"
      ],
      "date": "2022-10-27T00:00:00+00:00",
      "artifacts/extractedFields/TransactionAmount/value/originalValue": 280,
      "vat_paid_amount": 34.39,
      "artifacts/extractedFields/greenpagesVendorAddress/value/formalName": "Ravintola Paakari Oy",
      "reclaim_id": null,
      "company_id": 5352,
      "artifacts/extractedFields/TransactionAmount/value/originalCurrency": "EUR",
      "currency": "EUR"
    },
    "to": {
      "country": "FI",
      "expense_type_id": [
        "01079"
      ],
      "date": "2022-10-27T00:00:00+00:00",
      "artifacts/extractedFields/TransactionAmount/value/originalValue": 280,
      "vat_paid_amount": 34.39,
      "artifacts/extractedFields/greenpagesVendorAddress/value/formalName": "Ravintola Paakari Oy",
      "reclaim_id": null,
      "company_id": 5352,
      "artifacts/extractedFields/TransactionAmount/value/originalCurrency": "EUR",
      "currency": "EUR",
      "inspect/flag": "blue"
    }
  }

export const obj2 = {
    "_id": "6437c36291826b000f751f33",
    "action": "Inspect::Edit",
    "transactionId": "63af2a151f0000c9c0d5aafb",
    "updatedBy": "teodor.simonovski@sourcico.com",
    "updatedAt": "2023-04-13T08:54:58.247Z",
    "accountId": 2217,
    "from": {
      "country": "FI",
      "expense_type_id": [
        "01079"
      ],
      "date": "2022-10-27T00:00:00+00:00",
      "artifacts/extractedFields/TransactionAmount/value/originalValue": 280,
      "vat_paid_amount": 34.39,
      "artifacts/extractedFields/greenpagesVendorAddress/value/formalName": "Ravintola Paakari Oy",
      "reclaim_id": null,
      "company_id": 5352,
      "artifacts/extractedFields/TransactionAmount/value/originalCurrency": "EUR",
      "currency": "EUR"
    },
    "to": {
      "country": "FI",
      "expense_type_id": [
        "01079"
      ],
      "date": "2022-10-27T00:00:00+00:00",
      "artifacts/extractedFields/TransactionAmount/value/originalValue": 280,
      "vat_paid_amount": 34.39,
      "artifacts/extractedFields/greenpagesVendorAddress/value/formalName": "Ravintola Paakari Oy",
      "reclaim_id": null,
      "company_id": 5352,
      "artifacts/extractedFields/TransactionAmount/value/originalCurrency": "EUR",
      "currency": "EUR",
      "inspect/flag": "blue"
    }
  }

  export const t1 = {
    name: "Bob",
    age: 36,
    gender: true,
    arr: [1,2,3,4,5,{a:4, b:4}],
    complex: {inside: {num1 :32, num2: 21}, isComplex: true},
    adress: {street: "Ilindenska", number: 45},
    updatedAt: Date.now()
}
export const t2 = {
    name: "Bob",
    age: 36,
    complex: {
        inside: {
            num1 :32, num2: 22
        }, isComplex: true},
    adress: {street: "Ilindenska", number: '45'},
    arr: [1,2,3,4,5,{a:4, b:5}],
    gender: true,
    updatedAt: Date.now()
}