export const fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});

