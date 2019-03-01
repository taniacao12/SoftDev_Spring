import pymongo

SERVER_ADDR = "68.183.141.178"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

#Finding all restaurants in a specified borough: Manhattan
def specify_borough( borough ):
    bor = collection.find({"borough" : borough})
    return list(bor)

#Finding all the restaurants in a specified zip code:
def specify_zip( zipcode ):
    zipCode = collection.find({"address.zipcode": zipcode})
    return list( zipCode )

#Finding all restaurants in a specified zip code and grade:
def specify_zipgrade( zipcode, grade ):
    zipGrade = collection.find({"$and" :[{"address.zipcode": zipcode} , {"grades.0.grade": grade }]})
    return list( zipGrade )

#Finding all restaurants in a specified zip code and score:
def specify_zipscore( zipcode, score ):
    zipScore = collection.find({"$and": [{"address.zipcode":zipcode},{"grade.0.score": {"$lt": score} }]})
    return list(zipScore)

#Finding all Dunkin Donuts in a specified zipcode:
def specify_DunkinDonuts( zipcode ):
    Dunkin_Donuts = collection.find({"$and" : [{"name":"Dunkin Donuts"},{"address.zipcode": zipcode}]})
    return list(Dunkin_Donuts)
    
print(specify_borough("Brooklyn"))
print(specify_zip("10282"))
print(specify_zipgrade("10282","A"))
print(specify_zipscore("10282",10))
print(specify_DunkinDonuts("11223"))
