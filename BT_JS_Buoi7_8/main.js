/**
 * Nhập mảng
 */
function getEle(id) {
  return document.getElementById(id);
}
var listNumb = [];
getEle("btnNhapMang").addEventListener("click", function () {
  var numb = getEle("numb").value * 1;
  listNumb.push(numb);
  console.log(listNumb);
});

/**
 * Bài 1: Tổng số dương
 * - Đầu vào: Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Sử dụng vòng lặp để duyệt qua từng phần tử của mảng
 *      + Kiểm tra phần tử của là số âm hay số dương
 *      + Nếu là số dương thì cộng tổng các số dương lại
 * - Đầu ra: Tổng các số dương có trong mảng
 */
function tongSoDuong(listNumb) {
  var tong = 0;
  for (var i = 0; i < listNumb.length; i++) {
    if (listNumb[i] > 0) {
      tong += listNumb[i];
    }
  }
  return tong;
}

getEle("btnTongSoDuong").addEventListener("click", function () {
  var tong = tongSoDuong(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    tong +
    "</div>";
  getEle("footerTongSoDuong").innerHTML = content;
});

/**
 * Bài 2: Đếm số dương trong mảng
 * - Đầu vào: Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Sử dụng vòng lặp để duyệt qua từng phần tử của mảng
 *      + Kiểm tra phần tử của là số âm hay số dương
 *      + Đếm số dương trong mảng
 * - Đầu ra: Số lượng các số dương có trong mảng
 */
function demSoDuong(listNumb) {
  var count = 0;
  for (var i = 0; i < listNumb.length; i++) {
    if (listNumb[i] > 0) {
      count++;
    }
  }
  return count;
}
getEle("btnDemSoDuong").addEventListener("click", function () {
  var count = demSoDuong(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    count +
    "</div>";
  getEle("footerDemSoDuong").innerHTML = content;
});

/**
 * Bài 3: Tìm số nhỏ nhất trong mảng
 * - Đầu vào: Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Sử dụng vòng lặp để duyệt qua từng phần tử của mảng
 *      + Khởi tạo biến min và gán min = listNumb[0]
 *      + Đem min đi so sánh với các phần tử còn lại trong mảng
 *      + Nếu các phần tử còn lại có giá trị bé hơn min thì min = giá trị bé đó
 * - Đầu ra: Số nhỏ nhất trong mảng
 */
function timSoNhoNhat(listNumb) {
  var min = listNumb[0];
  for (var i = 0; i < listNumb.length; i++) {
    if (listNumb[i] < min) {
      min = listNumb[i];
    }
  }
  return min;
}
getEle("btnSoNhoNhat").addEventListener("click", function () {
  var min = timSoNhoNhat(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    min +
    "</div>";
  getEle("footerSoNhoNhat").innerHTML = content;
});

/**
 * Bài 4: Tìm số dương nhỏ nhất trong mảng
 * - Đầu vào: Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Sử dụng vòng lặp để duyệt qua từng phần tử của mảng
 *      + Khởi tạo biến min và gán min = số dương đầu tiên trong mảng
 *      + Đem min đi so sánh với các phần tử số dương còn lại trong mảng
 *      + Nếu các phần tử còn lại có giá trị bé hơn min thì min = giá trị bé đó
 * - Đầu ra: Số dương nhỏ nhất trong mảng
 */
function timSoDuongNhoNhat(listNumb) {
  var min;
  for (var i = 0; i < listNumb.length; i++) {
    if (listNumb[i] > 0) {
      min = listNumb[i];
      break;
    }
  }

  for (var i = 0; i < listNumb.length; i++) {
    if (listNumb[i] > 0 && listNumb[i] < min) {
      min = listNumb[i];
    }
  }
  return min;
}

getEle("btnSoDuongNhoNhat").addEventListener("click", function () {
  var min = timSoDuongNhoNhat(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    min +
    "</div>";
  getEle("footerSoDuongNhoNhat").innerHTML = content;
});

/**
 * Bài 5: Tìm số chẵn cuối cùng của mảng
 * - Đầu vào: Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Sử dụng vòng lặp để duyệt qua từng phần tử của mảng
 *      + Tạo mảng chỉ chứa các phần tử có giá trị chẵn của mảng
 *      + Kiểm tra mảng chẵn có chứa phần tử nào không
 *          * Nếu có thì sẽ lấy phần tử cuối cùng của mảng
 *          * Nếu không thì in ra -1
 * - Đầu ra: Số chẵn cuối cùng của mảng
 */

function timSoChanCuoiCung(listNumb) {
  var listNumbChan = [];
  var soChanCuoiCung;
  for (var i = 0; i < listNumb.length; i++) {
    if (listNumb[i] % 2 === 0) {
      listNumbChan.push(listNumb[i]);
    }
  }

  if (listNumbChan.length > 0) {
    soChanCuoiCung = listNumbChan[listNumbChan.length - 1];
  } else {
    soChanCuoiCung = -1;
  }

  return soChanCuoiCung;
}

getEle("btnChanCuoiCung").addEventListener("click", function () {
  var soChanCuoiCung = timSoChanCuoiCung(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    soChanCuoiCung +
    "</div>";
  getEle("footerSoChanCuoiCung").innerHTML = content;
});

/**
 * Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
 * - Đầu vào:
 *      + Mảng chứa các số do người dùng nhập
 *      + 2 vị trí muốn đổi chỗ
 * - Xử lí:
 *      + Tạo ra biến tam và gán tam = giá trị của phần tử ở vị trí đầu tiên muốn đổi chỗ
 *      + Gán giá trị của phần tử ở vị trí đầu tiên = giá trị của phần tử ở vị trí thứ 2
 *      + Gán giá trị của phần tử ở vị trí thứ 2 = giá trị của biến tam
 * - Đầu ra: Mảng mới với giá trị ở 2 vị trị muốn đổi chỗ đã bị thay đổi
 */

function hoanVi(listNumb, vt_1, vt_2) {
  var tam = listNumb[vt_1];
  listNumb[vt_1] = listNumb[vt_2];
  listNumb[vt_2] = tam;

  return listNumb;
}

getEle("btnDoiCho").addEventListener("click", function () {
  var vt_1 = getEle("viTri-1").value * 1;
  var vt_2 = getEle("viTri-2").value * 1;
  var listNumbNew = hoanVi(listNumb, vt_1, vt_2);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    listNumbNew.join(" ") +
    "</div>";
  getEle("footerDoiCho").innerHTML = content;
});

/**
 * Bài 7: Sắp xếp mảng theo thứ tự tăng dần.
 * - Đầu vào:
 *      + Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Sử dụng vòng lòng lồng
 *          + Vòng lặp đầu tiên để duyệt qua các phần tử của mảng
 *          + Vòng lặp thứ 2 dùng để duyệt các phần tử kế tiếp để đổi chỗ vị trí giá trị ở phía sau nhỏ hơn giá trị của phần tử ở vòng lặp đầu
 * - Đầu ra: Mảng mới với các giá trị tăng dần
 */

function sapXepTangDan(listNumb) {
  for (var i = 0; i < listNumb.length - 1; i++) {
    for (var j = i + 1; j < listNumb.length; j++) {
      if (listNumb[j] < listNumb[i]) {
        var tam = listNumb[i];
        listNumb[i] = listNumb[j];
        listNumb[j] = tam;
      }
    }
  }
  return listNumb;
}

getEle("btnSapXepTangDan").addEventListener("click", function () {
  var listNumbNew = sapXepTangDan(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    listNumbNew.join(" ") +
    "</div>";
  getEle("footerSapXepTangDan").innerHTML = content;
});

/**
 * Bài 8: Tìm số nguyên tố đầu tiên của mảng
 * - Đầu vào: Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Sử dụng vòng lặp để duyệt qua từng phần tử của mảng
 *      + Tạo mảng chỉ chứa các giá trị nguyên tố
 *      + Lấy số nguyên tố đầu tiên trong mảng số nguyên tố
 * - Đầu ra: Số nguyên tố đầu tiên của mảng
 */
function timSoNguyenToDauTien(listNumb) {
  var listNumbNguyenTo = [];
  var soNguyenToDauTien;
  for (var i = 0; i < listNumb.length; i++) {
    var count = 0;
    for (var j = 1; j <= listNumb[i]; j++) {
      if (listNumb[i] % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      listNumbNguyenTo.push(listNumb[i]);
    }
  }

  if (listNumbNguyenTo.length > 0) {
    soNguyenToDauTien = listNumbNguyenTo[0];
  } else {
    soNguyenToDauTien = -1;
  }

  return soNguyenToDauTien;
}

getEle("btnSoNguyenToDauTien").addEventListener("click", function () {
  var soNguyenToDauTien = timSoNguyenToDauTien(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    soNguyenToDauTien +
    "</div>";
  getEle("footerSoNguyenTo").innerHTML = content;
});

/**
 * Bài 9:  Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
 * - Đầu vào:
 *      + Mảng chứa các số nguyên do người dùng nhập
 *      + Mảng chứa các số thực do người dùng nhập thêm
 * - Xử lí:
 *      + Khởi tạo biến count = 0;
 *      + Kiểm tra các phần tử trong mảng có là số nguyên không
 *          + Nếu là số nguyên thì count sẽ tăng 1 đơn vị
 * - Đầu ra: số lượng số nguyên có trong mảng
 */
getEle("btnNhapMangSoThuc").addEventListener("click", function () {
  var numb = getEle("numbThuc").value * 1;
  var content = "";
  if (Number.isInteger(numb) == false) {
    listNumb.push(numb);
  } else {
    content +=
      "<div style='background-color: #d1ecf1; color: red'> Số bạn nhập không phải là số thực rồi </div>";
    getEle("footerSoThuc").innerHTML = content;
  }
  console.log(listNumb);
});

function demSoNguyen(listNumb) {
  var count = 0;
  for (var i = 0; i < listNumb.length; i++) {
    if (Number.isInteger(listNumb[i]) == true) {
      count++;
    }
  }
  return count;
}

getEle("btnDemSoNguyen").addEventListener("click", function () {
  var soLuongSoNguyen = demSoNguyen(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    soLuongSoNguyen +
    "</div>";
  getEle("footerDemSoNguyen").innerHTML = content;
});

/**
 * Bài 10:  So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
 * - Đầu vào:
 *      + Mảng chứa các số do người dùng nhập
 * - Xử lí:
 *      + Khởi tạo biến countSoDuong = 0;
 *      + Khởi tạo biến countSoAm = 0;
 *      + Sử dụng vòng lặp for duyệt qua mảng
 *          + Nếu là số dương thì countSoDuong tăng thêm 1
 *          + Nếu là số âm thì countSoAm tăng thêm 1
 * - Đầu ra: Số lượng số dương hoặc số âm lớn hơn
 */
function soSanhSoDuongSoAm(listNumb) {
  var countSoDuong = 0;
  var countSoAm = 0;
  var content = "";
  for (var i = 0; i < listNumb.length; i++) {
    if (listNumb[i] > 0) {
      countSoDuong++;
    } else if (listNumb[i] < 0) {
      countSoAm++;
    }
  }

  if (countSoDuong > countSoAm) {
    content += "Số lượng số dương lớn hơn";
  } else if (countSoAm > countSoDuong) {
    content += "Số lượng số âm lớn hơn";
  } else {
    content += "Số lượng số dương và số lượng số âm là bằng nhau";
  }
  return content;
}

getEle("btnSoSanhSoDuongSoAm").addEventListener("click", function () {
  var soDuongSoAm = soSanhSoDuongSoAm(listNumb);
  var content =
    "<div style='background-color: #d1ecf1; color: red; text-align: center'>" +
    soDuongSoAm +
    "</div>";
  getEle("footerSoSanhSDSA").innerHTML = content;
});
