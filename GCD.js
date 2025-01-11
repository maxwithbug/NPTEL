/** Algorithm **/

//first there will be 2 factor set in m and n 

/*
fist we will cycle through every number  till the m number 
if the m number is divisible by the i number then push it to fm[]

same with fn[]
*/

// the match 2 factor sets and pick the common ones 
//from the common ones witch is the geretest number that is GCD 


function gcd(m, n) {
    let fm = [];
    for (let i = 1; i <= m; i++) {
        if (m % i === 0) {
            fm.push(i);
        }
    }
    let fn = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            fn.push(i);
        }
    }
    let cf = [];
    fm.forEach(element1 => {
        if (fn.includes(element1)) {
            cf.push(element1);
        }
    });
    return Math.max(...cf);
}

console.log(gcd(14, 63));