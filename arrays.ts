const ages: number[] = [1, 2, 3, 4, 5];

// Looping Constructs
for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

let i: number = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

ages.forEach(age => {
    console.log(age);
});