// command a to select all.
// right click(double click), on file name so we ca then commnad a to select so we can copy paste.
// able to get a link from github to redo the path for the push!!!
// git stash -- will get the last commit from git.
// git push -u then link for path since -u is uppush path.

//toggle class notes
//$('#idname').toggle('nameofclass'); this will add/ remove class




console.log('client');
let employeelist = []
let moneycounter = 0
class employee {
    constructor(firstname, lastname, idtag, annualsalaery) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.idtag = idtag;
        this.annualsalaery = annualsalaery;
    }
}
console.log(employeelist);
// step one here ie doc ready
$(document).ready(function () {
    updatemoneycounter()
    $('#submitbutton').on('click', summitbut);
    $('#tablebody').on('click', '.deletebutton', deletefunction);
})// end on ready stuff

function deletefunction() {//delete from row
    console.log($(this).closest('tr').find('.annualSalaryCell').text());
    updatemoneycounter(-$(this).closest('tr').find('.annualSalaryCell').text());
    $(this).closest('tr').remove()
}//end delete

//start monetly calc
function updatemoneycounter(annualsalaery = 0) {
    // alternative way is to loop though array and add the annual salerys then divide by 12.

    moneycounter = moneycounter + annualsalaery / 12// this converts to number right?
    //tofix(2) fixes the number to display two decimals.
    $('#moneycounter').text('Total Monthly:' + moneycounter);//should be a number not string
    if (moneycounter > 20000) {
        $('#moneycounter').css({ "background-color": "red" })
    }
    else {
        $('#moneycounter').css({ "background-color": "white" });
    }

}//end monetly calc

function summitbut() {
    //getting values
    let firstname = $('#firstname').val();
    let lastname = $('#lastname').val();
    let idtag = $('#idtag').val();
    let title = $('#title').val();
    let annualsalaery = $('#annualsalaery').val();
    employeelist.push(new employee(firstname, lastname, idtag, annualsalaery));//making class
    //end getting values
    console.log(employeelist);
    //update table
    //alternative methode to do this
    // 
    $('#tablebody').append(`
    <tr>
    <td class="firstname">${firstname}</td>
    <td>${lastname}</td>
    <td>${idtag}</td>
    <td>${title}</td>
    <td class="annualSalaryCell">${annualsalaery}</td>
    <td><button class = "deletebutton">Delete</button></td>
    
    </tr>
        
        `
    )
    // edn update table
    updatemoneycounter(annualsalaery);

    // console.log(firstname);
    // console.log(lastname);
    // console.log(idtag);
    // console.log(title);
    // console.log(annualsalaery);
    $('#firstname').val('');
    $('#lastname').val('');
    $('#idtag').val('');
    $('#title').val('');
    $('#annualsalaery').val(0);
    // NOTE: could add input class and then clear the inputs using the class.
}