/* Example 1 */
const line1 = 'Hello World ';
console.log(`content of line 1 is: ${line1}`);

/* Example 2 */
let content = `line 1
line 2
line 3`;
console.log(content);

/* Example 3 */
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);
