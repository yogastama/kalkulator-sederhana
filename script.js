var tombol = document.querySelector('.container-tombol');
var layar = document.querySelector('#layar');
var riwayat = document.querySelector('.riwayat');
var resetLayar = false;
var bolehHitung = false;
var tmpVal = '';
var operator = '';

tombol.addEventListener('click', function (e) {
    var tombolKlik = e.target;
    var nilaiKlik = tombolKlik.innerText;
    if (nilaiKlik == 'C') {
        // jika tombol C di klik
        layar.value = '';
        riwayat.innerText = '';
        riwayat.style.display = 'none';
    } else if (nilaiKlik == '<') {
        // jika klik <, maka hapus angka terakhir yang ada pada value
        layar.value = layar.value.slice(0, -1);
        riwayat.innerText = riwayat.innerText.slice(0, -1);
        if (riwayat.innerText.length == '') {
            riwayat.style.display = 'none';
        }
    } else if (nilaiKlik == '=') {
        if (bolehHitung == true) {
            layar.value = eval(tmpVal + operator + layar.value);
            bolehHitung = false;
            riwayat.innerText = layar.value;
        }
    } else if (tombolKlik.classList.contains('operator')) {
        // jika klik operator
        if (bolehHitung == true) {
            layar.value = eval(tmpVal + operator + layar.value);
            bolehHitung = false;
            riwayat.innerText = layar.value;
        }
        // simpan nilai yang ada di layar di variabel tmpVal
        tmpVal = layar.value;
        // masukkan operatornya ke dalam variabel operator
        operator = nilaiKlik;
        // jadikan reset layar true, reset nilainya untuk mengganti angka
        resetLayar = true;
        riwayat.innerText = riwayat.innerText + operator;
    } else {
        // jika angka yang di klik

        // cek apakah resetLayar bernilai true / user sebelumnya mengklik tombol operator
        if (resetLayar == true) {
            // masukkan ke layar nilai baru
            layar.value = nilaiKlik;
            resetLayar = false;
            bolehHitung = true;
            riwayat.innerText = riwayat.innerText + layar.value;
        } else {
            // jika tidak mengklik tombol operator sebelumnya masukkan nilai ke layar seperti biasa
            layar.value = layar.value + nilaiKlik;
            riwayat.style.display = 'block';
            riwayat.innerText = layar.value;
        }
    }
});