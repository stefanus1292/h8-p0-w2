function konversiMenit(menit) {
let minute = math.floor(menit/60)
let second = menit %60

if (String(second).length ===1){
    second = "0+second"
}
let hasil = minute + ":" + second
return String(hasil)
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00