# DBS311
 Horse Riding Center

#Tasks:

#1. Data Scheme Design:
collection horses:
	string name,
	string colour,
	number height, // changed this to be a number, in inches to the withers (where the saddle goes)
	number speed, // just a number from 1-10, with 1 being slow and 10 being fast. Arbitrary
	Date dateborn,
	number standard_priceperhour

collection customers:
	string fname,
	string lname,
	string email, // use as primary key?
	string phonenum,
	json address:
		...
	Date DoB // see Date() object on mongo docs
					 // probably not many rows will have this

collection rentals:
	string horsename,
	string contactEmail,
	string contactPhonenum,
	Date date_rented,
	Date date_expected,
	Date date_returned,
	number price_charged,
	string payment_method

 - Sample data insertion

 #2. Query Data:
 - Find x by x.x -> multiplication
  - Find horse on rental
 - Find x by y.x -> cross checking

 #3. Data aggregation: /*These are one-degree aggregated data reports with business significance*/
 - Find average
 - Find total
 - Find rank

#4. Data update (CRUD) /*These are update functions that can be  updated by operators*/
- Insert new / delete for all collections
- Update standard price per hour
- Update contact info
- Update horse info
- Create rental
- Update rental (extend return date)
- Update rental (horse returned)
