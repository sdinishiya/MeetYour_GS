const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');

// const { response } = require('express');
// const path = require('path');
// const { name } = require('ejs');
const bodyParser =  require('body-parser')
// const ejs = require ('ejs');
// const socketio = require('socket.io')
// const { response } = require('express');
// const app = express();
// const path = require('path');
// const { name } = require('ejs');
// const bodyParser =  require('body-parser')
// app.use(express.json());
// app.use(cors());
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors());

//var req = require("./node_modules/req/node_modules/request");
const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "",
	database: "meetyourgs",
});

db.connect((err)=>{
    if(err) 
    {
        console.log(err);
    }
    else
    {
        console.log('Database Connected...');
    }
});


app.post('/sign-up', (req, res)=> {

	const fullname = req.body.fullname
	const address = req.body.address
	const nic = req.body.nic
	const telephone = req.body.telephone
	const email = req.body.email
	const password = req.body.password
 
	bcrypt.hash(password,saltRounds, (err,hash) => {

		if(err){
			console.log(err);
		}
	db.query
	("INSERT INTO signup (fullname, address, nic, telephone, email, password) VALUES (?,?,?,?,?,?)", 
	[fullname, address, nic, telephone, email, hash], 
	(err, result)=> {
		console.log(err);
	})	
	})
	
});
app.post('/login', (req, res) => {

	const email = req.body.email
	const password = req.body.password

	db.query
	("SELECT * signup WHERE email = ?;", 
	email, 
	(err, result)=> {

		if(err){
			res.send({err: err})
		}
			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (error, response)=>{
					if(response){
						res.send(result)
					}else{
						res.send({message:"Wrong username/password combination!"})
					}
				})
			}else{
				res.send({message:"User doesn't exist"});
			}
		}
	);
});
// constsmaterial
app.post('/create',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO constsmaterial (addeddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/materials',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newconstmaterial n JOIN constsmaterial c ON n.materialid = c.materialid order by addeddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.get('/materialname', (req, res) => {
    db.query('SELECT materialid,materialname FROM newconstmaterial ', (err, result) => {
        res.send(result);
        console.log(result);

    })
})

// app.get('/supplymaterialname', (req, res) => {
//     db.query('SELECT materialid,materialname FROM constsmaterial ', (err, result) => {
//         res.send(result);
//         console.log(result);

//     })
// })


app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    const sqlDelete="DELETE FROM constsmaterial WHERE id=?";

    db.query(sqlDelete,id,(err,result)=>{
      if(err) console.log(err);
    });
  });
  app.put("/update/:id",(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    const sqlUpdate="UPDATE constsmaterial SET name=? WHERE id=?";
  
    db.query(sqlUpdate,[name,id],(err,result)=>{
      if(err) console.log(err);
    })
  });
  app.put('/updateMaterial/:id', (req,res) => {
    console.log(id);
    //const id = req.body.id;
    const name = req.body.name;
    const sqlUpdate = "UPDATE SET constsmaterial name=? WHERE id=?";
  
    db.query(sqlUpdate,[name,id],(err,result)=>{
      if(err) console.log(err);
    })
  });

app.post('/createnew',(req,res)=>{
    console.log(req.body)
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;

    db.query("INSERT INTO newconstmaterial (materialid,materialname) VALUES (?,?)",
    [materialid,materialname],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/newmaterial',(req,res)=>{
    db.query("SELECT * FROM newconstmaterial",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});


app.post('/constsupply',(req,res)=>{
    console.log(req.body)
    const supplieddate = req.body.supplieddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO supplyconstmaterial (supplieddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [supplieddate,materialid,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/constsupply',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newconstmaterial n JOIN supplyconstmaterial c ON n.materialid = c.materialid order by supplieddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});



// agrimaterial
app.post('/agri',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO agrimaterial (addeddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,description,quantity],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/agrimaterials',(req,res)=>{
    db.query("SELECT a.*,n.materialname FROM newagrimaterial n JOIN agrimaterial a ON n.materialid = a.materialid order by addeddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
      
    });
});

app.get('/agrimaterial', (req, res) => {
    db.query('SELECT materialid,materialname FROM newagrimaterial ', (err, result) => {
        res.send(result);
        console.log(result);

    })
})

app.post('/createnewagri',(req,res)=>{
    console.log(req.body)
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;

    db.query("INSERT INTO newagrimaterial (materialid,materialname) VALUES (?,?)",
    [materialid,materialname],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/newagrimaterial',(req,res)=>{
    db.query("SELECT * FROM newagrimaterial order by materialid ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.post('/agrisupply',(req,res)=>{
    console.log(req.body)
    const supplieddate = req.body.supplieddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO supplyagrimaterial (supplieddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [supplieddate,materialid,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/agrisupply',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newagrimaterial n JOIN supplyagrimaterial c ON n.materialid = c.materialid order by supplieddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});



// othermaterial
app.post('/other',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO othermaterial (addeddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,description,quantity],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/othermaterials',(req,res)=>{
    db.query("SELECT o.*, n.materialname FROM newothermaterial n JOIN othermaterial o ON n.materialid = o.materialid ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.get('/othermaterial', (req, res) => {
    db.query('SELECT materialid,materialname FROM newothermaterial ', (err, result) => {
        res.send(result);
        console.log(result);

    })
})

app.post('/createnewother',(req,res)=>{
    console.log(req.body)
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;

    db.query("INSERT INTO newothermaterial (materialid,materialname) VALUES (?,?)",
    [materialid,materialname],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/newothermaterial',(req,res)=>{
    db.query("SELECT * FROM newothermaterial",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.post('/othersupply',(req,res)=>{
    console.log(req.body)
    const supplieddate = req.body.supplieddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO supplyagrimaterial (supplieddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [supplieddate,materialid,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/othersupply',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newothermaterial n JOIN supplyotheraterial c ON n.materialid = c.materialid order by supplieddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});



//Donation
app.post('/donationcreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const donorID = req.body.donorID;
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const description = req.body.description;
    const amount = req.body.amount;

    db.query("INSERT INTO donation (date,donorName,address,phone,email,description,amount) VALUES (?,?,?,?,?,?,?)",
    [date,donorName,address,phone,email,description,amount],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/donationview',(req,res)=>{
    db.query("SELECT * FROM donation order by donorID ASC" ,(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});


// income
app.post('/financecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const transectionID = req.body.transectionID;
    const receiptno = req.body.receiptno;
    const description = req.body.description;
    const income = req.body.income;
   
    db.query("INSERT INTO finance (date,receiptno,description,income) VALUES (?,?,?,?)",
    [date,receiptno,description,income],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/transaction',(req,res)=>{
    db.query("SELECT * FROM finance order by transectionID ASC" ,(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
// expense
app.post('/expensecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const receiptno = req.body.receiptno;
    const description = req.body.description;
    const expense = req.body.expense;
   
    db.query("INSERT INTO finance (date,receiptno,description,expense) VALUES (?,?,?,?)",
    [date,receiptno,description,expense],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
// fund
app.post('/fundcreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const transectionID = req.body.transectionID;
    const fundID = req.body.fundID;
    const description = req.body.description;
    const debit = req.body.debit;
   
    db.query("INSERT INTO fund (date,fundID,description,debit) VALUES (?,?,?,?)",
    [date,fundID,description,debit],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/funds',(req,res)=>{
    db.query("SELECT * FROM fund order by date ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
// Fund Allocation
app.post('/fundallocatecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const fundID = req.body.fundID;
    const description = req.body.description;
    const credit = req.body.credit;
   
    db.query("INSERT INTO fund (date,fundID,description,credit) VALUES (?,?,?,?)",
    [date,fundID,description,credit],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});


//APPOINTMENTS
//schedule
app.post('/schedule',(req,res)=>{
    console.log(req.body)
    const gsname = req.body.gsname;
    const date = req.body.date;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const description = req.body.description;

    db.query("INSERT INTO appointment (gsname,date,startTime,endTime,description) VALUES (?,?,?,?,?)",
    [gsname,date,startTime,endTime,description],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    })  
});
//gsview
app.get('/viewSchedule',(req,res)=>{
    db.query("SELECT appID,gsname,date,startTime,endTime,description,status FROM appointment ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
//userview
app.get('/book',(req,res)=>{
    db.query("SELECT appID,gsname,date,startTime,endTime,description FROM appointment WHERE book_status = 0",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
//RequestView
app.get('/requestView',(req,res)=>{
    db.query("SELECT * FROM appointment WHERE status='pending' AND book_status = 1 ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  }     
    });
});

//appview
app.get('/appview',(req,res)=>{
    db.query("SELECT * FROM appointment",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  }     
    });
});

app.get('/appdetails',(req,res)=>{
    db.query("SELECT nic,name,home_no,address,phone,email,des FROM appointment",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  }     
    });
});

app.put('/add-app-booking', (req,res) => {
    const appID = req.body.appID;
    const nic = req.body.nic;
    const name = req.body.name;
    const home_no = req.body.home_no;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email; 
    const des = req.body.des;
    const book_status = req.body.book_status;
    console.log("db reach")
    console.log(req.body)

    db.query("UPDATE appointment SET nic=?,name=?,home_no=?,address=?, phone=?,email=?, des=?,book_status=1 WHERE appID = ?; ", 
    [nic,name,home_no,address,phone,email,des,book_status, appID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

//accept
app.put('/accept-book', (req,res) => {
    const appID = req.body.appID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE appointment SET status='Confirmed' WHERE appID = ?; ", 
    [appID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

//decline
app.put('/decline-book', (req,res) => {
    const appID = req.body.appID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE appointment SET status='Declined' WHERE appID = ?; ", 
    [appID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

//confirmed appointment
  app.get('/confirmbook',(req,res)=>{
    db.query("SELECT * FROM appointment WHERE status='Confirmed' AND book_status = 1",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

//cancel
app.put('/cancel-book', (req,res) => {
    const appID = req.body.appID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE appointment SET status='Cancelled' WHERE appID = ?; ", 
    [appID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });


//donations
app.post('/donor',(req,res)=>{
    console.log(req.body)
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
	const date = req.body.date;
    const amount = req.body.amount;

    db.query("INSERT INTO donation (donorName,address,phone,email,date,amount) VALUES (?,?,?,?,?,?)",
    [donorName,address,phone,email,date,amount],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
//normal view
app.get('/donationview',(req,res)=>{
    db.query("SELECT donorID,donorName,address,phone,email,date,amount FROM donation",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
//edit view and put
app.get("/donationdetails",(req,res)=>{
    donorID=req.params.donorID;
    db.query("SELECT donorName,address,phone,email,date,amount FROM donation WHERE donorID=?",[req.query.donorID],(err,result)=>{
        console.log(req.query.donorID);
        res.send(result);
    });
        
});
app.put('/edit-donations', (req,res) => {
    const donorID = req.body.donorID;
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const amount = req.body.amount;
    console.log("nuwan")
    console.log(req.body)

    db.query("UPDATE donation SET donorName=?,address=?, phone=?,email=?,amount=? WHERE donorID = ?; ", 
    [donorName,address,phone,email,amount, donorID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });


//notice
app.post('/addnotice',(req,res)=>{
    console.log(req.body)
    const noticeID = req.body.noticeID;
    const topic = req.body.topic;
    const description = req.body.description; 
    const uploadDate = req.body.uploadDate;
    const expDate = req.body.expDate; 
    const status = req.body.status;  

    db.query("INSERT INTO notice (topic,description,uploadDate,expDate) VALUES (?,?,?,?)",
    [topic,description,uploadDate,expDate],(err,result)=>{
		if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/noticeview',(req,res)=>{
    db.query("SELECT  * FROM notice WHERE status = 'Active' ORDER BY uploadDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
app.get('/allnoticeview',(req,res)=>{
    db.query("SELECT * FROM notice WHERE status = 'Inactive' ORDER BY uploadDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
//remove
app.put('/remove-notice', (req,res) => {
    const noticeID = req.body.noticeID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE notice SET status='Inactive' WHERE noticeID = ?; ", 
    [noticeID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });
  //Activate
app.put('/active-notice', (req,res) => {
    const noticeID = req.body.noticeID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE notice SET status='Active' WHERE noticeID = ?; ", 
    [noticeID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

  //General Message
app.post('/addsms',(req,res)=>{
    console.log(req.body)
    const smsID = req.body.smsID;
    const topic = req.body.topic;
    const description = req.body.description; 
    const uploadDate = req.body.uploadDate;
    const expDate = req.body.expDate; 
    const status = req.body.status;  

    db.query("INSERT INTO sms (topic,description,uploadDate,expDate) VALUES (?,?,?,?)",
    [topic,description,uploadDate,expDate],(err,result)=>{
		if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/smsview',(req,res)=>{
    db.query("SELECT  * FROM sms WHERE status = 'Sent' ORDER BY uploadDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
app.get('/allsmsview',(req,res)=>{
    db.query("SELECT * FROM sms ORDER BY uploadDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

//send
app.put('/send-sms', (req,res) => {
    const smsID = req.body.smsID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE sms SET status='Sent' WHERE noticeID = ?; ", 
    [noticeID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });



app.listen(3001, () => {
	console.log("running on port 3001");
});