import axios from "axios";

const keys = ["student_id", "student_name", "student_avg_marks"];

const getData = (page, pageSize, field, sort, searchInput, isAdv, advSearchData) => {
   if (isAdv == true) {
      return new Promise((resolve, reject) => {
         axios({
            method: "post",
            headers: {},
            url: "http://localhost:8000/handle/display",
            data: {
               page: page,
               pageSize: pageSize,
               isAdv: isAdv,
               documentID: advSearchData.documentID,
               invoiceID: advSearchData.invoiceID,
               customerNumber: advSearchData.customerNumber,
               businessYear: advSearchData.businessYear
            }
         }).then(response => {
            resolve(response.data)
            return response.data;
         }).catch(err => {
            reject(err)
            console.log(err);
         })
      })
   }
   return new Promise((resolve, reject) => {
      axios({
         method: "post",
         url: "http://localhost:8000/handle/display",
         headers: {},
         data: {
            isAdv: isAdv,
            page: page,
            pageSize: pageSize,
            field: field,
            sort: sort,
            searchInput: searchInput
         },
      }).then(response => {
         // console.log(response.data);
         resolve(response.data)
         return response.data;
      }).catch(err => {
         reject(err)
         console.log(err);
      })
   })
}
export { getData, keys }
