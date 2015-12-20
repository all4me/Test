app.factory('dataService', function () {
    return {
        data: {

            currentShop: null,
            shops: [
                {
                    id:1,
                    name: 'Shop 1',
                    adress: 'Минск рафиева 43',
                    mode: 'from 8.00 till 19.00',
                    serialNumber: 1,
                    products: [
                        {
                            name: 'IPhone 6',
                            desc: 'Not bad'
                        },
                        {
                            name: 'IPhone 5s',
                            desc: 'Not so bad'
                        }
                    ]
                },
                {
                    id:2,
                    name: 'Shop 2',
                    adress: 'Молодечно ясинского 37',
                    mode: 'from 9.00 till 20.00',
                    serialNumber: 2,
                    products: [
                        {
                            name: 'Samsung Galaxy A5',
                            desc: 'Beautiful phone'
                        }
                    ]
                },

                {
                    id: 3,
                    name: 'Shop 3',
                    adress: 'Молодечно крыничная 23',
                    mode: 'from 8.00 till 19.00',
                    serialNumber: 3,
                    products: [
                        {
                            name: 'IPhone 6',
                            desc: 'Not bad'
                        },
                        {
                            name: 'IPhone 5s',
                            desc: 'Not so bad'
                        }
                    ]
                },

                {
                    id:4,
                    name: 'Shop 4',
                    adress: 'Молодечно ясинского 32',
                    mode: 'from 8.00 till 19.00',
                    serialNumber: 4,
                    products: [
                        {
                            name: 'IPhone 6',
                            desc: 'Not bad'
                        },
                        {
                            name: 'IPhone 5s',
                            desc: 'Not so bad'
                        }
                    ]
                },

                {
                    id:5,
                    name: 'Shop 5',
                    adress: 'Минск независимости 121',
                    mode: 'from 8.00 till 19.00',
                    serialNumber: 5,
                    products: [
                        {
                            name: 'IPhone 6',
                            desc: 'Not bad'
                        },
                        {
                            name: 'IPhone 5s',
                            desc: 'Not so bad'
                        }
                    ]
                },

                {
                    id:6,
                    name: 'Shop 6',
                    adress: 'Минск независимости 143',
                    mode: 'from 8.00 till 19.00',
                    serialNumber: 6,
                    products: [
                        {
                            name: 'IPhone 6',
                            desc: 'Not bad'
                        },
                        {
                            name: 'IPhone 5s',
                            desc: 'Not so bad'
                        }
                    ]
                },

                {
                    id:7,
                    name: 'Shop 7',
                    adress: 'Молодечно великий гостинец 73',
                    mode: 'from 8.00 till 19.00',
                    serialNumber: 7,
                    products: [
                        {
                            name: 'IPhone 6',
                            desc: 'Not bad'
                        },
                        {
                            name: 'IPhone 5s',
                            desc: 'Not so bad'
                        }
                    ]
                },

                {
                    id:8,
                    name: 'Shop 8',
                    adress: 'Минск рафиева 43',
                    mode: 'from 8.00 till 19.00',
                    serialNumber: 8,
                    products: [
                        {
                            name: 'IPhone 6',
                            desc: 'Not bad'
                        },
                        {
                            name: 'IPhone 5s',
                            desc: 'Not so bad'
                        }
                    ]
                }


            ]
        }
    }
});