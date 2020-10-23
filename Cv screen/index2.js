console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },
    {
        name: "prathamesh grover",
        age: 44,
        city: "london",
        language: "Go",
        framework: "google ",
        image: "https://randomuser.me/api/portraits/men/63.jpg",
    },
    
    {
        name: "amitabh bachhan",
        age: 45,
        city: "dholakpur",
        language: "PHP",
        framework: "laravel ",
        image: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    
    {
        name: "aditya rahane",
        age: 78,
        city: "nagpur",
        language: "Python",
        framework: "django ",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    
    {
        name: "virat kohli",
        age: 33,
        city: "nepal",
        language: "python",
        framework: "git ",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    
    {
        name: "mahendra dhoni",
        age: 67,
        city: "panjab",
        language: "Python ",
        framework: "flask ",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    
    {
        name: "sachin tendulkar",
        age: 33,
        city: "bhopal",
        language: "Javascript",
        framework: "Angular js ",
        image: "https://randomuser.me/api/portraits/men/69.jpg",
    },
    
    {
        name: "michel decker",
        age: 24,
        city: "solapur",
        language: "Javascriptt",
        framework: "node.js",
        image: "https://randomuser.me/api/portraits/women/71.jpg",
    },
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
