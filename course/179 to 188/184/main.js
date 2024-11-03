
/*
  Promise
  - All
  - All Settled
  - Race
*/

/* All */
    // ALL RESOLVED
        // const myFirstPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The First Promise")
        //     }, 5000);
        // });

        // const mySecondPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         rej("Iam The Second Promise")
        //     }, 1000);
        // });

        // const myThirdPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The Third Promise")
        //     }, 2000);
        // });

        // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        //     (resolvedValues) => console.log(resolvedValues),
        //     (rejectedValues) => console.log(rejectedValues)
        // );
    // Rejected Case because only one has beed rejected
        // const myFirstPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The First Promise")
        //     }, 5000);
        // });

        // const mySecondPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The Second Promise")
        //     }, 1000);
        // });

        // const myThirdPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The Third Promise")
        //     }, 2000);
        // });

        // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        //     (resolvedValues) => console.log(resolvedValues),
        //     (rejectedValues) => console.log(rejectedValues)
        // );

        
/* allSettled */
    // ALL RESOLVED [return all the promises]
        // const myFirstPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The First Promise")
        //     }, 5000);
        // });

        // const mySecondPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         rej("Iam The Second Promise")
        //     }, 1000);
        // });

        // const myThirdPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The Third Promise")
        //     }, 2000);
        // });

        // Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        //     (resolvedValues) => console.log(resolvedValues),
        //     (rejectedValues) => console.log(rejectedValues)
        // );
    // Return All the Promises 
        // const myFirstPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The First Promise")
        //     }, 5000);
        // });

        // const mySecondPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         rej("Iam The Second Promise")
        //     }, 1000);
        // });

        // const myThirdPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The Third Promise")
        //     }, 2000);
        // });

        // Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        //     (resolvedValues) => console.log(resolvedValues),
        //     (rejectedValues) => console.log(rejectedValues)
        // );


/* race */
    // the first promise come whether resolved or rejected
        // const myFirstPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The First Promise")
        //     }, 5000);
        // });

        // const mySecondPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         rej("Iam The Second Promise")
        //     }, 1000);
        // });

        // const myThirdPromise = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res("Iam The Third Promise")
        //     }, 2000);
        // });

        // Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
        //     (resolvedValues) => console.log(resolvedValues),
        //     (rejectedValues) => console.log(rejectedValues)
        // );

    // the first promise come whether resolved or rejected
        const myFirstPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res("Iam The First Promise")
            }, 5000);
        });

        const mySecondPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res("Iam The Second Promise")
            }, 1000);
        });

        const myThirdPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res("Iam The Third Promise")
            }, 2000);
        });

        Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
            (resolvedValues) => console.log(resolvedValues),
            (rejectedValues) => console.log(rejectedValues)
        );