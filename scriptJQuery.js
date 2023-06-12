var lists = $('#list');
$('#btn').click(function (e) {
    // console.log('hey')
    var id = $('#roll');
    var nam = $('#name');
    var marks = $('#marks');

    var idval = id.val();
    var namval = nam.val();
    var mval = marks.val();
    console.log(idval, namval, mval);

    e.preventDefault();

    if (idval == "" || nam == "" || mval == "") {
        alert('please fill the :');
        return;
    } else {
        let list = '  <div class="list"><span> ' + idval + '</span> <span> ' + namval + '  </span> have got <span> ' + mval + '</span></div> '
        lists.append(list);
    }
})