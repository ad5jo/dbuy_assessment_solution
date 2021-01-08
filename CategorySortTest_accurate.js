// David Durkee
// Input: Array of JSON
// Output: Array of JSON
// Process: Sort such that (1.) Roots are before Parents & Children and (2) Parents are before Children, in the output
// You can assume:
// - The input will always be solvable (there will be no missing parents)
// - The input will always be valid JSON in the format of the example below, with no additional data
// - There may be more than one root category (a category with no parents)
// Date: 8 Jan 2021

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
    {
        "name": "Dog",
        "id": 68,
        "parent_id": 1,
    },
    {
        "name": "larger_parent_number_test_escape",
        "id": 56,
        "parent_id": 68,
    },
]

// module.exports =
function sortCategoriesForInsert(inputJsonArray) {
    const roots = inputJsonArray.filter((root) => {
        return root["parent_id"] === null;
    })
    const nonroots = inputJsonArray.filter((nonroot) => {
        return nonroot["parent_id"] !== null;
    })
    const parent = roots.concat(nonroots);
    let plist = [];
    let clist = [];
    let nrlen = nonroots.length
    let inputlen = inputJsonArray.length

    for (let i = 0; i < nrlen; i++) {
        for (let ii = 0; ii < inputlen; ii++) {
            if (nonroots[i]["id"] === inputJsonArray[ii]["parent_id"]) {
                let res = plist.some((item,) => {
                    return item["id"]
                })
                let value1 = plist.find((s) => {
                    return s === nonroots[i]
                })

                if (value1 === undefined){
                    console.log("----------Adding to the parent list----------")
                    console.log(nonroots[i])
                    plist.push(nonroots[i])
                }
                else {
                    console.log("----------DON'T add to the parent list----------")
                }
            } else {
                let value1 = plist.find((s) => {
                    return s === nonroots[i]
                })
                let value2 = clist.find((s) => {
                    return s === nonroots[i]
                })

                if (value1 === undefined && value2 === undefined){
                    console.log("----------Adding to the child list----------")
                    console.log(nonroots[i])
                    clist.push(nonroots[i])
                }
                else {
                    console.log("----------DON'T add to the child list----------")
                }
            }
        }
    }

    let properJsonOutput = [];
    properJsonOutput = properJsonOutput.concat(roots);
    console.table(properJsonOutput)
    properJsonOutput = properJsonOutput.concat(plist)
    console.table(properJsonOutput)
    properJsonOutput = properJsonOutput.concat(clist)
    console.table(properJsonOutput)
    properJsonOutput = [... new Set(properJsonOutput)]
    return properJsonOutput
}

let result = sortCategoriesForInsert(inputJsonArray);
console.log(result);
console.table(result);