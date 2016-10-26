# Marqeta Howto



## 1 - Setup access to the Marqueta Portal
Create an account on Marqeta.com to get access to the shared API sandbox. Note that this is a shared environment, don't put personal data there you don't want people to see. https://www.marqeta.com/users/sign_up


## 2 - Obtain API Keys
After you verify your email address and login, you can now either obtain API keys for hitting this environment externally by hovering over your initials in the upper right and selecting "MY API KEYS" or you can use the built in API Explorer, which has a basic UI for interacting with the Marqeta API. API Explorer: https://www.marqeta.com/api-explorer. Note: documentation is available under "API DOCS">"REFERENCE DOCS" on the menu.




## Second - Start Creating Cards

## 3 - Create a User
Every card must have its own user. You can choose to pass user meta data, but you don't need to. You can simply pass an empty JSON object. Save the token you get back.

POST /users '{ }'


Let's just use curl for this so we don't have to code anything.

```bash

curl -i -X POST -H 'Content-type: application/json' \
  --user user2511477178831:f275a342-6db6-4d23-8a78-c2416538a400 \
  -d '{ }' \
  https://shared-sandbox-api.marqeta.com/v3/users

```
which should return something like this json repsonse

```json
{
  "token" : "188794de-da8e-4e42-8325-bc668da7426b",
  "active" : true,
  "corporate_card_holder" : false,
  "uses_parent_account" : false,
  "created_time" : "2016-10-23T02:43:33Z",
  "last_modified_time" : "2016-10-23T02:43:33Z",
  "deposit_account" : {
    "token" : "c48f5820-77f4-4976-a353-b3e0711e8616",
    "account_number" : "12342120007072810",
    "routing_number" : "293748000",
    "allow_immediate_credit" : false
  }
}
```




## 4 - Create a card.
You'll need to pass in the the user token from step 3.

POST /cards?show_cvv_number=true&show_pan=true
'{"user_token": "***FILL THIS IN***",
  "card_product_token: "54464a38-8a0a-49fb-9a93-7877247c4703"}'


```bash

curl -i -X POST -H 'Content-type: application/json' \
  --user user2511477178831:f275a342-6db6-4d23-8a78-c2416538a400 \
  -d '{"user_token":"188794de-da8e-4e42-8325-bc668da7426b", "card_product_token": "54464a38-8a0a-49fb-9a93-7877247c4703"}' \
  https://shared-sandbox-api.marqeta.com/v3/cards?show_cvv_number=true&show_pan=true

```
which should return something like this json repsonse

```json

{ "token" : "9c51427f-befd-44ac-8ed0-44ac9deb15f9",
  "pan" : "111111______6416",
  "expiration" : "1020",
  "barcode" : "76381182715192067583",
  "state" : "ACTIVE",
  "created_time" : "2016-10-23T03:06:07Z",
  "last_modified_time" : "2016-10-23T03:06:07Z",
  "user_token" : "188794de-da8e-4e42-8325-bc668da7426b",
  "card_product_token" : "54464a38-8a0a-49fb-9a93-7877247c4703",
  "last_four" : "6416",
  "expiration_time" : "2020-10-31T23:59:59.000Z",
  "cvv_number" : "105",
  "pin_is_set" : false,
  "state_reason" : "New card activated",
  "fulfillment_status" : "ISSUED"
}

```




## 5 - Fund the account.
You'll need to pass in the user token (cardholder) from step 3.

POST /gpaorders
```json
'{
  "user_token": "***FILL THIS IN***",
  "amount": "1000",
  "currency_code": "840",
  "funding_source_token": "aa643dc1-dafd-41e1-803c-a92ab31037ba"
}'
```


Now we need to write the jquery to do this!
See marqueta_tester.html








# Auth Information
- Application Token: user2511477178831
- Master Access Token: f275a342-6db6-4d23-8a78-c2416538a400
- My shared environment base URL: https://shared-sandbox-api.marqeta.com/v3/
