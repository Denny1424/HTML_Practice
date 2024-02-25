function sum(a,b){
    return a+b;
}
console.log(sum(2,5));

function People(surname="",name="",allname="",nickname="",address="",email="",sort=""){
    this.surname = surname;
    this.name = name;
    this.allname = allname;
    this.nickname = nickname;
    this.address = address;
    this.email = email;
    this.sort = sort;
}

function disabled_true(){
    document.getElementById("find_button").disabled="disabled"
    document.getElementById("revise").disabled="disabled"
    document.getElementById("remove").disabled="disabled"
    document.getElementById("back").disabled="disabled"
    document.getElementById("save").disabled="disabled"
    document.getElementById("new_button").disabled="disabled"
    document.getElementById("all_checkbox").disabled="disabled"
    document.getElementById("email_sort").disabled="disabled"
    document.getElementById("menu").disabled="disabled"
    document.getElementById("file_delete").disabled="disabled"
    document.getElementById("download").disabled="disabled"
}
disabled_true()

function disabled_false(){
    document.getElementById("find_button").disabled=false
    document.getElementById("revise").disabled=false
    document.getElementById("remove").disabled=false
    document.getElementById("back").disabled=false
    document.getElementById("save").disabled=false
    document.getElementById("new_button").disabled=false
    document.getElementById("all_checkbox").disabled=false
    document.getElementById("email_sort").disabled=false
    document.getElementById("menu").disabled=false
    document.getElementById("file_delete").disabled=false
    document.getElementById("download").disabled=false
}


var people_list = []
var people_revise = []
var people_sort = []
var sort_use = []

async function loadfile(file) {
    table_clear()
    var text = await file.text()
    var text_replace = text.replace(/\r\n|\n/g,",");
    var text_split = text_replace.split(",");
    var r = Math.floor(text_split.length/7);
    var table=document.getElementById("table");
    var i = 0;
    people_list = []
    while (i < r) {
        var row = table.insertRow(-1); 
        row.insertCell(0).innerHTML = "<td><input class='ck_box' type='checkbox'></td>";
        row.insertCell(1).innerHTML = text_split[0+7*i];
        row.insertCell(2).innerHTML = text_split[1+7*i];
        row.insertCell(3).innerHTML = text_split[2+7*i];
        row.insertCell(4).innerHTML = text_split[3+7*i];
        row.insertCell(5).innerHTML = text_split[4+7*i];
        row.insertCell(6).innerHTML = text_split[5+7*i];
        row.insertCell(7).innerHTML = text_split[6+7*i];

        

        people_list.push(new People(
            text_split[0+7*i],
            text_split[1+7*i],
            text_split[2+7*i],
            text_split[3+7*i],
            text_split[4+7*i],
            text_split[5+7*i],
            text_split[6+7*i]
        ))
        people_revise = Array.from(people_list)
        people_sort = Array.from(people_list)
        sort_use = Array.from(people_list)
        i++
    }
    disabled_false()
}



function table_clear(){
    var tbody = document.getElementById("table").lastElementChild
    while(1 < tbody.children.length){
        tbody.lastElementChild.remove()
    }
}

function file_clear(){
    
    var clear = document.getElementById("file");
    if ("" != document.getElementById("file").value){
        clear.outerHTML = clear.outerHTML;
    }
    table_clear()
    disabled_true()
}




function table_create(a,b,c,d,e,f,g){
    let table=document.getElementById("table");
    let row = table.insertRow(-1); 
    row.insertCell(0).innerHTML = "<td><input class='ck_box' type='checkbox'></td>";
    row.insertCell(1).innerHTML = a
    row.insertCell(2).innerHTML = b
    row.insertCell(3).innerHTML = c
    row.insertCell(4).innerHTML = d
    row.insertCell(5).innerHTML = e
    row.insertCell(6).innerHTML = f
    row.insertCell(7).innerHTML = g
    
}

var find_sort = 1
var find_sort_list = []

function find(){
    
    let find_select = document.getElementById("find_select").value
    let want_find = document.getElementById("find_text").value
    find_sort_list = []
    switch(find_select){
        case "姓":
            find_sort_list.push("姓",want_find)
            table_clear()
            people_sort = []
            people_revise.forEach(People =>{
                if (People.surname.indexOf(want_find) != -1){
                    people_sort.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
        case "名":
            find_sort_list.push("名",want_find)
            table_clear()
            people_sort = []
            people_revise.forEach(People =>{
                if (People.name.indexOf(want_find) != -1){
                    people_sort.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
        case "全名":
            find_sort_list.push("全名",want_find)
            table_clear()
            people_sort = []
            people_revise.forEach(People =>{
                if (People.allname.indexOf(want_find) != -1){
                    people_sort.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
        case "暱稱":
            find_sort_list.push("暱稱",want_find)
            table_clear()
            people_sort = []
            people_revise.forEach(People =>{
                if (People.nickname.indexOf(want_find) != -1){
                    people_sort.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
        case "住址":
            find_sort_list.push("住址",want_find)
            table_clear()
            people_sort = []
            people_revise.forEach(People =>{
                if (People.address.indexOf(want_find) != -1){
                    people_sort.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
        case "E-mail":
            find_sort_list.push("E-mail",want_find)
            table_clear()
            people_sort = []
            people_revise.forEach(People =>{
                if (People.email.indexOf(want_find) != -1){
                    people_sort.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
    }
    console.log(menu())
}



function remove(){
    
    let ckb = document.getElementsByClassName("ck_box")
    let i = ckb.length-1
    while(-1 < i){
        if (ckb.item(i).checked == true){
            people_revise.splice(people_revise.indexOf(people_sort[i]),1)
            document.getElementById("table").deleteRow(i+1)
        }
        i=i-1
    }
    people_sort = Array.from(people_revise)
    sort_use = Array.from(people_revise)
    document.getElementById("all_checkbox").checked = false
}


function all_checkbox(){
    
    let ckb = document.getElementsByClassName("ck_box") 
    let all_ckb = document.getElementById("all_checkbox")
    let i = 0;
    if (all_ckb.checked == true){
        while(i < ckb.length){
            ckb.item(i).checked = true
            i++
        }
    }
    else{
        while(i < ckb.length){
            ckb.item(i).checked = false
            i++
        }
    }
}

function back(){
    
    table_clear()
    people_revise = Array.from(people_list)
    people_sort = Array.from(people_list)
    people_list.forEach(People =>{
        table_create(
            People.surname,
            People.name,
            People.allname,
            People.nickname,
            People.address,
            People.email,
            People.sort)
    })
    document.getElementById("all_checkbox").checked = false
}

function def_emailsort_1( a, b ){
    let a_small = a.email.toLowerCase()
    let b_small = b.email.toLowerCase()
    if ( a_small < b_small){
    return -1;
    }
    if ( a_small > b_small){
    return 1;
    }
    if ( a_small == b_small){
        if(a < b){
            return -1
        }
        if(a > b){
            return 1
        }
        return 0
    }
}

function def_emailsort_2( a, b ){
    let a_small = a.email.toLowerCase()
    let b_small = b.email.toLowerCase()
    if ( a_small < b_small){
    return 1;
    }
    if ( a_small > b_small){
    return -1;
    }
    if ( a_small == b_small){
        if(a < b){
            return 1
        }
        if(a > b){
            return -1
        }
        return 0
    }
}


function email_sort(){
    
    if (document.getElementById("email_sort").value == "1"){
        people_sort.sort(def_emailsort_1)
        document.getElementById("email_sort").value = "2"
    }
    else{
        people_sort.sort(def_emailsort_2)
        document.getElementById("email_sort").value = "1"
    }
    
    table_clear()
    people_sort.forEach(People =>{
        table_create(
            People.surname,
            People.name,
            People.allname,
            People.nickname,
            People.address,
            People.email,
            People.sort)
    })
    document.getElementById("menu").value = "分類"
}


function def_menusort( a, b ){
    let A = a.sort
    let B = b.sort
    let A_num = 0,B_num = 0
    switch(A){
        case "家人": A_num = 1;break
        case "朋友": A_num = 2;break
        case "同事": A_num = 3;break
    }
    switch(B){
        case "家人": B_num = 1;break;
        case "朋友": B_num = 2;break;
        case "同事": B_num = 3;break;
    }

    if ( A_num < B_num){
    return -1;
    }
    if ( A_num > B_num){
    return 1;
    }
    return 0;
}


function menu(){
    
    let menu = document.getElementById("menu").value
    let sort_case = []
    sort_use = []

    switch(menu){
        case "分類":
            sort_case.push("分類")
            table_clear()
            people_sort.sort(def_menusort)
            people_sort.forEach(People =>{
                    sort_use.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            })
            break;
        case "顯示全部":
            sort_case.push("顯示全部")
            table_clear()
            people_sort.sort(def_menusort)
            people_sort.forEach(People =>{
                    sort_use.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            })
            break;
        case "家人":
            sort_case.push("家人")
            table_clear()
            people_sort.forEach(People =>{
                if (People.sort.indexOf("家人") != -1){
                    sort_use.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
        case "朋友":
            sort_case.push("朋友")
            table_clear()
            people_sort.forEach(People =>{
                if (People.sort.indexOf("朋友") != -1){
                    sort_use.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
        case "同事":
            sort_case.push("同事")
            table_clear()
            people_sort.forEach(People =>{
                if (People.sort.indexOf("同事") != -1){
                    sort_use.push(People)
                    table_create(
                        People.surname,
                        People.name,
                        People.allname,
                        People.nickname,
                        People.address,
                        People.email,
                        People.sort)
            }})
            break;
    }
    if (find_sort_list[0] != undefined){
        document.getElementById("find_select").value = find_sort_list[0]
        document.getElementById("find_text").value = find_sort_list[1]
        document.getElementById("find_button").click
        menu = sort_case[0];
    }
}

function revise(){
    let row = document.getElementById("table").lastElementChild.rows
    let revise = document.getElementById("revise")
    let iH = []
    let iH_list = []
    if (revise.value == 1){
        for(i=1;i<row.length;i++){
            for(j=1;j<row[0].cells.length;j++){
                iH.push(row[i].cells[j].innerHTML)
                row[i].cells[j].innerHTML = "<input type = 'text' value="+iH[(i-1)*7+(j-1)]+">"
            }
        }
        revise.value = 2
        revise.innerHTML = "完成修改"
        disabled_true()
        revise.disabled = false
    }
    else{
        let k = 0
        for(i=1;i<row.length;i++){
            k = 0
            people_revise.forEach(People=>{
                if (People == sort_use[i-1]){
                    iH_list.push(k)
                }
                k++
            })}
        for(i=0;i < iH_list.length;i++){
            console.log(iH_list)
            console.log(i)
            people_revise.splice(iH_list[i],1,new People(
                row[i+1].cells[1].lastElementChild.value,
                row[i+1].cells[2].lastElementChild.value,
                row[i+1].cells[3].lastElementChild.value,
                row[i+1].cells[4].lastElementChild.value,
                row[i+1].cells[5].lastElementChild.value,
                row[i+1].cells[6].lastElementChild.value,
                row[i+1].cells[7].lastElementChild.value
            ))
        }
        disabled_false()
        revise.value = 1
        revise.innerHTML = "修改模式"
        console.log(find())
    }
}


function new_button(){
    people_revise.push(new People(   
        document.getElementById("surname").value,
        document.getElementById("name").value,
        document.getElementById("allname").value,
        document.getElementById("nickname").value,
        document.getElementById("address").value,
        document.getElementById("newemail").value,
        document.getElementById("newmenu").value
        )
    )
    document.getElementById("surname").value = ""
    document.getElementById("name").value = ""
    document.getElementById("allname").value = ""
    document.getElementById("nickname").value = ""
    document.getElementById("address").value = ""
    document.getElementById("newemail").value = ""
    document.getElementById("newmenu").value = ""
    find()
}

function save(){
    people_list = Array.from(people_revise)
}

function download(){
    let name = document.getElementById("filename").value
    let download_text = ""
    for(i=0; i < people_list.length;i++)
        download_text = download_text+
            people_list[i].surname + "," +
            people_list[i].name + "," +
            people_list[i].allname + "," +
            people_list[i].nickname + "," +
            people_list[i].address + "," +
            people_list[i].email + "," +
            people_list[i].sort + "\r\n"
    
    download_setting(name,download_text.slice(0,-2))
    name = ""
}

function download_setting(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}