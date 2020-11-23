# TODO Create 'Products' model

'''
The Product Model columns are:
    > *Primary key*: ProductID <INTEGER>
    > *Foreign key*: SupplierID <INTEGER> (optional, if using 'Supplier' Model)
    > *Foreign Key*: CategoryID <INTEGER>
    - SKU Stock Keeping Unit <STRING> [Limit 50] (optional)
    - SupplierProductID <INTEGER> [Limit 50] (optional)
    - ProductName <STRING> [Limit 60]
    - ProductDescription <STRING> [Limit 255]
    - QuantityPerUnit <INTEGER>
    - UnitPrice <FLOAT> (Retail or Wholesale price)
    - MSRP <FLOAT>
    - AvailableSizes <STRING> [Limit 50]
    - AvailabeColors <STRING> [Limit 100]
    > *Foreign Key*: SizeID <INTEGER> (used to link to Size table)
    > *Foreign Key*: ColorID <INTEGER> (used to link to Color table)
    - Discount <FLOAT> 
    - UnitWeight <FLOAT>
    - UnitsInStock <SMALLINTEGER> (between 0-65535 units)
    - UnitsOnOrder <SMALLINTEGER> (between 0-65535 units)
    - ReorderLevel <SMALLINTEGER> (between 0-65535 units)
        NOTE: When to reorder product?
        Use UnitsInStock - UnitsOnOrder = Y
            If Y > ReorderLevel then "Item in Stock"
            If Y <= ReorderLevel then "Item Out of Stock"
    - ProductAvailable <BOOLEAN>
    - DiscountAvailable <BOOLEAN>
    - Picture <STRING> [Limit 50] (link to an image file)
    > *Foreign Key*: ReviewID <INTEGER> (This Model may include Ratings)
    - Note <STRING> [Limit 255] (e.g. Availability between October - December)
'''
