let Murad = {
    name: 'Murad',
    surname: 'Heydarov',
    skills: ['js', 'c#']
}

for (const key in Murad) {
    if (Murad.hasOwnProperty(key)) {
        const element = Murad[key];

    }
}


function Person(name, surname, age) {
    this.Name = name;
    this.Surname = surname;
    this.Age = age;

    this.FullName = function () {
        return this.Name + ' ' + this.Surname
    }

    this.fullName = this.Name + ' ' + this.Surname;
}

let Hesen = new Person('Hesen', 'Eliyev', 23);
let Ferid = new Person('Ferid', 'Eliyev', 32);

// console.log(Hesen['Name']);

function CustomMap() {
    this.keys = [];
    this.values = {};

    this.Add = function (key, value) {
        if (this.keys.indexOf(key) == -1) {
            this.keys.push(key);
        }
        this.values[key] = value;
    }

    this.AddElement = function (key, element) {
        if (this.keys.indexOf(key) == -1) {
            this.keys.push(key);

            this.values[key] = [];
        }
        this.values[key].push(element);
    }

    this.Remove = function (key) {
        let index = this.keys.indexOf(key)
        this.keys.splice(index, 1);
    }
}

// let map = new CustomMap();
// map.Add('list1', ['a','b','c']);
// map.Add('list2', ['z','p','x']);
// map.Add('list1', ['z','p','d','l']);
// console.log(map);

// map.Remove('list1');
// console.log(map);

// let list1 = document.querySelectorAll('.list1');
// let list2 = document.querySelectorAll('.list2');


// console.log(map);






let select = document.querySelector('select');
let input = document.querySelector('input');
let list1 = document.querySelector('.list1');
let saveBtn = document.querySelector('.save');
let getBtn = document.querySelector('.get');
let getSelectedDataBtn = document.querySelector('.getSelectedData');

let selectedList = select.value;
let obj = {}

input.addEventListener('keyup', function () {
    document.querySelector('.' + selectedList).innerText += ' ' + input.value;

    if (obj[selectedList] == undefined) {
        obj[selectedList] = [];
    }

    obj[selectedList].push(input.value);

    input.value = "";
})

select.addEventListener('change', function () {
    selectedList = select.value;
})

saveBtn.addEventListener('click', function () {
    let result = JSON.stringify(obj);

    localStorage.setItem('data', result)
})

getBtn.addEventListener('click', function () {
    let result = localStorage.getItem('data')

    obj = JSON.parse(result);

    backUpAllDate(obj)
})

getSelectedDataBtn.addEventListener('click', function () {
    let arr =  obj[selectedList]     
})

function backUpAllDate(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];

            element.forEach(e => {
                document.querySelector('.' + key).innerText += ' ' + e;
            });
        }
    }
}




let Huseyin = {
    name: "Husu",
    surname: "Shusu",
    age: 25
}

console.log(Huseyin['name']);
console.log(Huseyin.name);



for (const key in Huseyin) {

    const element = Huseyin[key];
    console.log(key+' '+element);

}