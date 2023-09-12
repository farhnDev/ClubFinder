// function DataSource(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword) {
//   const filteredClubs = clubs.filter((club) => {
//     return club.name.toUpperCase().includes(keyword.toUpperCase());
//   });

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(`${keyword}is not found`);
//   }
// };

// dibawah ini adalah no promise
// class DataSource {
//   constructor(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
//   }
//
//   searchClub(keyword) {
//     const filteredClubs = clubs.filter(club =>
//       club.name.toUpperCase().includes(keyword.toUpperCase())
//     );
//
//     if (filteredClubs.length) {
//       this.onSuccess(filteredClubs);
//     } else {
//       this.onFailed(`${keyword} is not found`);
//     }
//   }
// }
import clubs from './clubs.js';
class Datasource {
    static searchClub(keyword) {
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            // nah dalam menggunakan promise, lalu dengan promise, kita itu menggunakan resolve,tidak menggunakan succse dan failed
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }
}
export default Datasource;
//setelah ini usai, kita ubah juga pada bagian main.js pada button