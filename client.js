console.log('client');
let employeelist = []
let moneycounter = 0
class employee {
    constructor(firstname, lastname, idtag,  annualsalaery) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.idtag = idtag;
      this.annualsalaery = annualsalaery;
    }
  }

$(document).ready( function(){
    updatemoneycounter()
    $('#submitbutton').on('click', summitbut);
    $('#tablebody').on('click', '.deletebutton', deletefunction)
})

function deletefunction(){
    $(this).closest('tr').remove()
}

function updatemoneycounter(annualsalaery = 0){
    moneycounter = moneycounter + annualsalaery/12
    $('#moneycounter').text('Total Monthly:' + moneycounter);
    if (moneycounter > 20000){
        $('#moneycounter').css({"background-color":"red"} )
    }

}

function summitbut(){
    let firstname = $('#firstname').val();
    let lastname = $('#lastname').val();
    let idtag = $('#idtag').val();
    let title = $('#title').val();
    let annualsalaery = $('#annualsalaery').val();
    employeelist.push(new employee(firstname, lastname, idtag, annualsalaery));
    console.log(employeelist);
    //update table
    $('#tablebody').append(`
    <tr>
                    <td>${firstname}</td>
                    <td>${lastname}</td>
                    <td>${idtag}</td>
                    <td>${title}</td>
                    <td>${annualsalaery}</td>
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

}