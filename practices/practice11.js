
class Customer{
    constructor(name,age,membershipType,membershipCost){
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost
    }
    getDetails(){
        return `${this.name} is {age} years old and has a ${this.membershipType} membership with ${this.membershipCost}`;
    }

    upgradeMembership(customer){
this.membershipType = 'Premim';
this.membershipCost *= 1.2;
    }
}


class VIPCustomer extends Customer{
    constructor( name,age,membershipType,membershipCost){
        super( name,age,membershipType,membershipCost)
    }
    applyDiscount(){
        this.membershipCost *= .9
    }

}




class BusinessCustomer extends Customer{
    constructor(name,age,membershipType,membershipCost,duration){
        super(name,age,membershipType,membershipCost)
        this.duraction = duration
    }
    extendContract(){
        this.membershipCost *= .85;
        this.duration++
    }
}



const customer1 = new Customer('John Doe', 35,'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith',35,'Gold',100);
const businessCustomer = new BusinessCustomer('David Johnson',40,'Platinum',200,2);


customer1.upgradeMembership();
vipCustomer.applyDiscount();
businessCustomer.extendContract();

for(customer of [customer1, vipCustomer, businessCustomer]){
    console.log(customer.getDetails())
}





function Customer(name, age, membershipType, membershipCost) {
    this.name = name;
    this.age = age;
    this.membershipType = membershipType;
    this.membershipCost = membershipCost;
  }
  
  Customer.prototype.getDetails = function () {
    return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`;
  };
  
  Customer.prototype.upgradeMembership = function () {
    this.membershipType = 'Premium';
    this.membershipCost *= 1.2;
  };
  
  function VIPCustomer(name, age, membershipType, membershipCost) {
    Customer.call(this, name, age, membershipType, membershipCost);
  }
  
  VIPCustomer.prototype = Object.create(Customer.prototype);
  VIPCustomer.prototype.constructor = VIPCustomer;
  
  VIPCustomer.prototype.applyDiscount = function () {
    this.membershipCost *= 0.9;
  };
  
  function BusinessCustomer(name, age, membershipType, membershipCost, duration) {
    Customer.call(this, name, age, membershipType, membershipCost);
    this.duration = duration;
  }
  
  BusinessCustomer.prototype = Object.create(Customer.prototype);
  BusinessCustomer.prototype.constructor = BusinessCustomer;
  
  BusinessCustomer.prototype.extendContract = function () {
    this.membershipCost *= 0.85;
    this.duration++;
  };
  
  const customer1 = new Customer('John Doe', 30, 'Basic', 50);
  const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
  const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);
  
  customer1.upgradeMembership();
  vipCustomer.applyDiscount();
  businessCustomer.extendContract();
  
  for (const customer of [customer1, vipCustomer, businessCustomer]) {
    console.log(customer.getDetails());
  };