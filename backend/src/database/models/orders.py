# TODO Create 'Orders' model

'''
The Orders Model columns are:
    > *Primary Key*: OrderID <INTEGER>
    > *Foreign Key*: PaymentID <INTEGER>
    > *Foreign Key*: ShipperID <INTEGER> (optional - if using 'Shippers' Model)
    > *Foreign Key*: CustomerID <INTEGER>
    - OrderDate <DATETIME> (Think about GMT time for international ordering)
    - RequiredDate <DATETIME> (Date the items are required by customer)
    - Freight <FLOAT> (freight charges if shipped altogether)
    - SalesTax <FLOAT> (Sales Tax on entire order)
    - Timestamp <STRING> [Limit 50]
    - TransactStatus <STRING> (e.g. 'succeed', 'declined', 'refunded', etc)
    - Fulfilled <BOOLEAN>
    - Deleted <BOOLEAN>
    - Paid <FLOAT>
    - PaymentDate <DATETIME>
'''
