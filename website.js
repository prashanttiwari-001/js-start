const puppeteer=require("puppeteer");
let login="https://collegedunia.com/btech/bangalore-colleges";//launch browser
const excel4node = require("excel4node");
const workbook = require("workbook");


 


let page;

const browseropenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null
})
console.log(browseropenPromise);

browseropenPromise.then(function(browserObj){
    console.log("Browser Opened");
    let tabopenpromise=browserObj.newPage();
    return tabopenpromise;
})

.then(function(newTab){
    page=newTab;  //default page where we will work
    let websiteopenpromise=page.goto(login);
    return websiteopenpromise;

})






//click the 1st college -> RVCE 
.then(function(){
    let rvcepromise=page.waitandclick(".jsx-765939686 text-white font-weight-bold text-md m-0");
    return rvcepromise;
    letworkbookonepromise = aspose.cells.Workbook("ExcelRVCE.XLSX");
    let cell1 = workbook.getWorksheets().get(0).getCells().get("A1","B1","C1","D1","A2","B2","C2","D2","A3","B3","C3","D3","A4","B4","C4","D4","A5","B5","C5","D5","A6","B6","C6","D6");
    cell1.setValue("updated cell value.");
    Workbook.save("ExcelRVCE.xls", aspose.cells.FileFormatType.EXCEL_97_TO_2003);
}).catch(function(err){
    console.log(err);
})

//click the 2nd college -> RIT 
.then(function(){
    let ritpromise=page.waitandclick(".jsx-765939686 text-white font-weight-bold text-md m-0");
    return ritpromise;
}).catch(function(err){
    console.log(err);
})

//click the 3rd college -> IIIT-B 
.then(function(){
    let iiitbpromise=page.waitandclick(".jsx-765939686 text-white font-weight-bold text-md m-0");
    return iiitbpromise;
}).catch(function(err){
    console.log(err);
})

//click the 4th college -> BMSCE
.then(function(){
    let bmscepromise=page.waitandclick(".jsx-765939686 text-white font-weight-bold text-md m-0");
    return bmscepromise;
}).catch(function(err){
    console.log(err);
})

//click the 5th college -> ATRIA
.then(function(){
    let atriapromise=page.waitandclick(".jsx-765939686 text-white font-weight-bold text-md m-0");
    return atriapromise;
}).catch(function(err){
    console.log(err);
})

//click the 6th college -> NHCE
.then(function(){
    let nhccepromise=page.waitandclick(".jsx-765939686 text-white font-weight-bold text-md m-0");
    return nhcepromise;
}).catch(function(err){
    console.log(err);
})



function waitandclick(selector , cPage){
    return new Promise(function(resolve, reject){
        //wait for selectorPromise
        let waitForModelPromise=cPage.waitForSelector(selector)
        waitForModelPromise.then(function(){
            let clickmodel=cPage.click(selector)
            return clickmodel
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
    })
}


   function questionSolver(page,college){
    return new Promise(function(resolve,reject){
        let collegeWillBeClicked=college.click()
        collegeWillBeClicked.then
        
        
        
        

        
        
        .then(function(){
            resolve ()
        }).catch(function(err){
            reject();
        })

        
    })
   }
