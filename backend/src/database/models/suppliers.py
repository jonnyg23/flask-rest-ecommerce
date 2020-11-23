# Suppliers Model

'''
The Suppliers Model columns are:
    > *Primary Key*: SupplierID <INTEGER>
    - CompanyName <STRING> [Limit 50]
    - ContactFName <STRING> [Limit 50]
    - ContactLName <STRING> [Limit 50]
    - ContactTitle <STRING> [Limit 30]
    - Address1 <STRING> [Limit 60]
    - Address2 <STRING> [Limit 50]
    - City <STRING> [Limit 30]
    - State <STRING> [Limit 25]
    - PostalCode <STRING> [Limit 15]
    - Country <STRING> [Limit 50]
    - Phone <STRING> [Limit 25]
    - Fax <STRING> [Limit 25]
    - Email <STRING> [Limit 75]
    - WebsiteURL <STRING> [Limit 100]
    - PaymentMethods <STRING> [Limit 100]
        NOTE: Describe how to pay the Supplier.
            Check, Credit Card, Purchase Order, etc
    - DiscountType <STRING> [Limit 100] (Describe type of discounts available)
    - TypeGoods <STRING> [Limit 255] (Describe type of goods available)
    - DiscountAvailabe <BOOLEAN>
    - CustomerSupplierID <STRING> [Limit 50] (Customer ID with Supplier)
    - SizeURL <STRING> [Limit 100]
        NOTE: URL to Supplier Web Page with sizing info on their products
    - ColorURL <STRING> [Limit 100]
        NOTE: URL to Supplier Web Page with color info on their products
    - Logo <STRING> [Limit 75] (Link to image file)
    - Ranking <INTEGER>
        NOTE: This is used to show one Supplier higher on a list regardless
              of alphabet sorting
    - Notes <STRING> [Limit 255] (Notes on the Supplier)
'''
