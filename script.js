
var btn = document.querySelector('#btn');


var list = document.querySelector('#list')

btn.addEventListener('click', function (e) {
    var roll = (document.querySelector('#roll').value)
    var name1 = document.querySelector('#name').value
    var marks = (document.querySelector('#marks').value)
    // e.preventDefault();
    // console.log("ready")
    if (roll == "" || name1 == "" || marks == "") {
        alert("please fill it ");
        return;
    } else {
        // console.log(roll, name, marks)
        var li = document.createElement('li');
        li.innerHTML = 'Roll no. <span>' + roll + '</span> ,  <span>' + name1 + '</span> has score  <span> ' + marks + ' </span>  marks'
        list.appendChild(li);
        // console.log(li);

    }
});


