function main() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                 resolve('hello wor');
                    }, 2000);
                      });
  }
main()
                .then(data => {
        console.log(data); 
              })
    .catch(error => {
        console.error(error);
    });