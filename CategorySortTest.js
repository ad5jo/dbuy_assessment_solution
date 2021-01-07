// David Durkee
// Input: Array of JSON
// Output: Array of JSON
// Process: Sort such that (1.) Roots are before Parents & Children and (2) Parents are before Children, in the output
// You can assume:
// - The input will always be solvable (there will be no missing parents)
// - The input will always be valid JSON in the format of the example below, with no additional data
// - There may be more than one root category (a category with no parents)
// Date: 6 Jan 2021

const inputJsonArray = [
    {
        "name": "Accessories",
        "id": 1,
        "parent_id": 20,
    },
    {
        "name": "Watches",
        "id": 57,
        "parent_id": 1
    },
    {
        "name": "Men",
        "id": 20,
        "parent_id": null,
    },
]

module.exports = function sortCategoriesForInsert(inputJsonArray) {
    // Make the id's assending order
    let assending_order = inputJsonArray.sort((a, b) => {
        if (a["id"] > b["id"])
            return 1
        if (a["id"] < b["id"])
            return -1
    })
    // Make the Roots first in the order. Leave everything else as-is
    // This works because we are given that no parents are missing
    let properJsonOutput = assending_order.sort((a, b) => {
        if (a["parent_id"] === null)
            return -1
    })

    return properJsonOutput
}

// let result = sortCategoriesForInsert(inputJsonArray);
// console.log(result);
// console.table(result);
