import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructionform',
  templateUrl: './constructionform.component.html',
  styleUrls: ['./constructionform.component.scss']
})
export class ConstructionformComponent implements OnInit {

  primarySiteContacts = [
    'propertyOwner',
    'consultant',
    'underGroundContractor'
  ];
  //itemCount: number;
  primarySiteContact: string = this.primarySiteContacts[0];

  propertyOwner: string = 'Steven Rockarts';
  propertyOwnerPhone: string = '780-994-3451';
  propertyOwnerEmail: string = 'stevenrockarts@gmail.com';
  
  consultantName: string = 'Banksy Bugg';
  consultantPhone: string = '780-994-3456';
  consultantEmail: string = 'banksy@gmail.com';

  undergroundContractorName: string = 'Daisy Mae';
  undergroundContractorPhone: string = '780-999-3441';
  undergroundContractorEmail: string = 'daisy@gmail.com';

  businessName = "";
  address:string = "";
  lot:string ="";
  block:string = "";
  plan:string = "";

  objectStoreName = "constructionforms";
  versionNumber = 2;

  customers = [];

  constructor() { }

  ngOnInit() {

    // This is what our customer data looks like.
    const customerData = [
      { primarySiteContact: this.primarySiteContact[0], propertyOwner: this.propertyOwner, propertyOwnerPhone: this.propertyOwnerPhone, 
      propertyOwnerEmail: this.propertyOwnerEmail,  consultantName: this.consultantName, 
      consultantPhone: this.consultantPhone, undergroundContractorName: this.undergroundContractorName,
      undergroundContractorPhone: this.undergroundContractorPhone, undergroundContractorEmail: this.undergroundContractorEmail,
      businessName: this.businessName, address: this.address, lot: this.lot, block: this.block,
      plan: this.plan}
    ];
    //indexedDB = window.indexedDB;
    //var request = window.indexedDB.open("MyTestDatabase", 3);
    var request = indexedDB.open("construction", this.versionNumber);
    
    //var db;

    //This is the only only place where you can alter the structure of the database. 
    //In it, you can create and delete object stores and build and remove indices.
    request.onupgradeneeded = function (event) {
      console.log("OnUpgrade");
      var db = request.result;
  
      // Create another object store called "names" with the autoIncrement flag set as true.    
      var objStore = request.result.createObjectStore("constructionforms", { autoIncrement : true });
  
      // Because the "names" object store has the key generator, the key for the name value is generated automatically.
      // The added records would be like:
      // key : 1 => value : "Bill"
      // key : 2 => value : "Donna"
      customerData.forEach(function(constructionForm) {
          objStore.add(constructionForm);
      });
  };

    request.onerror = function(event) {
      alert("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function(event) {
      console.log("Finised");
      
      //db = request.result;
      var transaction = request.result.transaction(["constructionforms"], "readwrite");
      var objectStore = transaction.objectStore("constructionforms");
      customerData.forEach(function(customer) {
      var request = objectStore.add(customer);
        request.onsuccess = function(event) {
          console.log(customer.propertyOwner);
        // event.target.result === customer.ssn;
      };
    });
    };

    if (navigator.onLine) {
      console.log('online');
    } else {
      console.log('offline');
    }

    
  }


  
  addItem() {
    console.log(this.propertyOwner); 
  }

  add() {
    var request = indexedDB.open("construction", 1);
    var db;

    request.onerror = function(event) {
      alert("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function(event) {
      db = request.result;
    };
  }
/*
  getTodos = function () {
    //var deferred = $q.defer();

    
        var trans = db.transaction(["todo"], "readwrite");
        var store = trans.objectStore("todo");
        var todos = [];

        // Get everything in the store;
        var keyRange = IDBKeyRange.lowerBound(0);
        var cursorRequest = store.openCursor(keyRange);

        cursorRequest.onsuccess = function (e) {
            var result = e.target.result;
            if (result === null || result === undefined) {
                deferred.resolve(todos);
            } else {
                todos.push(result.value);
                if (result.value.id > lastIndex) {
                    lastIndex = result.value.id;
                }
                result.
                continue ();
            }
        };

        cursorRequest.onerror = function (e) {
            console.log(e.value);
            deferred.reject("Something went wrong!!!");
        };
    }

    return deferred.promise;
};*/

  getAll() {
    var request = indexedDB.open("construction", this.versionNumber);
    

    request.onsuccess = function(event) {
      console.log("Finised");
      
      //db = request.result;
      var transaction = request.result.transaction(["constructionforms"], "readwrite");
      var objectStore = transaction.objectStore("constructionforms");
    
      let records = objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        let customers = [];
          if (cursor) {
            customers.push(cursor.value);
            cursor.continue();
          }
          else {
            //alert("Got all customers: " + customers);
            return customers;
          }
        };
        alert("Got all customers: " + records);
      }
      
  }
}
