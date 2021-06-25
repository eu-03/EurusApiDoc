const fs = require('fs');

const asciidoctor = require('asciidoctor')() // <1>
const content = `
= The Intrepid Chronicles
Kismet Lee; B. Steppenwolf; Pax Draeke
:toc: left

== Certain Peril

Daylight trickles across the cobblestones...

=== A Recipe for Potion

We have to harvest the leaves by the light of the teal moons...

==== Searching for Ginseng

Crawling through the twisted understory...

== Dawn on the Plateau

Hanging from...

[TIP]TIP

== Sample Section

[square]
* Item 1
* Item 2

[source,ruby]
----
puts "Hellow World!"
----

== User
=== Account
==== POST ​/user​/registerByEmail
Register a new user by email. System creates an user wallet and a corresponding private, public key

Request Example
----
{
    "timestamp": 0,
    "deviceId": "string",
    "email": "user@example.com",
    "loginAddress": "string",
    "signature": "string",
    "publicKey": "string"
}
----

POST
​/user​/verification
verify user

POST
​/user​/setupPaymentWallet
after user successfully verified, generate a owner wallet address call this endpoint

POST
​/user​/resendVerificationEmail
self explanatory

POST
​/user​/importWallet
Import an existing MetaMask or similar wallet into Eurus

POST
​/user​/loginByPassword
User uses password to request login token

POST
​/user​/loginBySignature
For MetaMask user to login system by sign a request by user owned private key

POST
​/user​/refreshToken
Extend Login token expiry time if the token is not expired

POST
​/user​/signTransaction
Sign transaction that invoke UserWallet smart contract

GET
​/user​/clientVersion
Get the latest client version

GET
​/user​/serverConfig
Get the system server config

GET
​/user​/details

GET
​/user​/storage
Get the storage data in DB

POST
​/user​/storage
Set/Update the storage data in DB

POST
​/user​/friend
Add friend

GET
​/user​/friend
Get friend list

PUT
​/user​/friend​/{walletAddress}
Update friend nick name

DELETE
​/user​/friend​/{walletAddress}
Delete a friend

POST
​/user​/changeLoginPassword
Change login password

POST
​/user​/changePaymentPassword
Change payment password

POST
​/user​/registerDevice
Register a device for an user

POST
​/user​/recentTransaction
lastest user transaction records for last n days

GET
​/user​/withdrawAdminFee​/{currencySymbol}

POST
​/user​/forgetLoginPassword
forget login address

POST
​/user​/verifyForgetLoginPassword
verify forget login password token

POST
​/user​/resetLoginPassword
reset login password

POST
​/user​/forgetPaymentPassword
forget payment address

POST
​/user​/verifyForgetPaymentPassword
verify forget login password token

POST
​/user​/resetPaymentPassword
reset login password
=== Tansactions
=== Payment

== Admin
=== Account
----
/admin​/login
----
----
​/admin​/merchant
----
----
​/admin​/merchant
----
----
​/admin​/merchant​/{merchantId}
----
----
​/admin​/subAdmin
----
----
​/admin​/subAdmin
----
----
​/admin​/subAdmin​/{adminId}
----
----
​/admin​/subAdmin​/role​/{adminId}
----
----
​/admin​/subAdmin​/password​/{adminId}
----
----
​/admin​/subAdmin​/status​/{adminId}
----
----
​/admin​/permission
----
----
​/admin​/role
----
----
​/admin​/role​/{roleId}
----
----
​/admin​/pendingWithdraw
----
----
​/admin​/pendingWithdraw​/{
----
----
​/admin​/pendingWithdrawHistory
----
----
​/admin​/pendingConfirmAPISetting
----
----
​/admin​/pendingConfirmAPISetting​/{pendingId}
----
----
​/admin​/server​/list
----
----
​/admin​/fee​/withdrawalFee
----
=== Payment
=== Others

== Merchant
=== Account
=== Transaction
=== Payment
=== Others
`
const html = asciidoctor.convert(content) // <2>
console.log(html) // <3>

fs.writeFile('output.html', html, function (err) {
    if (err) return console.log(err);
});


const express = require('express')
const app = express()

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000)