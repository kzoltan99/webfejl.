console.log("Hello World");

var scores = [
    {
        name : 'Alice',
        score : 32
    },
    {
        name : 'Bob',
        score : 39
    },
    {
        name : 'Charlie',
        score : 98
    },
    {
        name : 'Denis',
        score : 78
    },
    {
        name : 'Eve',
        score : 56
    },
    {
        name : 'Frank',
        score : 14
    },
    {
        name : 'Gabe',
        score : 49
    },
    {
        name : 'Hugo',
        score : 39
    },
    {
        name : 'Ivan',
        score : 100
    },
    {
        name : 'John',
        score : 43
    },
    {
        name : 'Kevin',
        score : 65
    },
    {
        name : 'Lousie',
        score : 54
    },
    {
        name : 'Maria',
        score : 63
    },
    {
        name : 'Nate',
        score : 65
    },
    {
        name : 'Oliver',
        score : 12
    },
    {
        name : 'Pedro',
        score : 87
    },
    {
        name : 'Rebeca',
        score : 83
    },
    {
        name : 'Sarah',
        score : 29
    },
    {
        name : 'Tamara',
        score : 73
    },
    {
        name : 'Wade',
        score : 5
    },
]

markStudent = (score) => {
    return score >= 50 ? "PASSED" : "FAILED";
}

document.onreadystatechange = () =>{
    console.log('Ready');
    document.getElementById('content').innerHTML=
     `Avg score: ${
        students.reduce((acc, cur)=>{
            return acc + cur.score;
        },0)/students.length
    }`;

    document.getElementById('exam result').innerHTML=
    "<table>" +
        "<thead><tr><td>Name</td><td>Result</td></tr></thead>" +
        `${students.map(
            (student) =>{
                return `<tr><td>${student.name}</td><td>${markStudent(student.score)}</td></tr>`
            })
        }` +
        "<tbody></tbody>"
    "</table>";
        
}