console.log(data);
console.log(data[0])
// WRITE YOUR CODE BELOW!

data.forEach((dog) => {
    const dogList = document.querySelector('.dogs-list')
    const li = document.createElement('li');
    li.setAttribute('class','dogs-list');
    li.setAttribute('class','dogs-list__button')
    li.innerText = dog.name;
    dogList.append(li);

// creating the main dog section
const main = document.querySelector('.main');
const section = document.createElement('section');
section.setAttribute('class','main__dog-section');
 main.append(section);

// creating the title
const dogTitle = document.createElement('h2')
dogTitle.innerText = dog.name
section.append(dogTitle)

// code for the image 
const img = document.createElement('img')
img.setAttribute('src',dog.image);
section.append(img)



//biolabel
const h3 = document.createElement('h3');
h3.innerText = 'Bio'
section.append(h3);
 
//creating the bio
const bio = document.createElement('p')
bio.innerText = dog.bio
section.append(bio)


//good dog text
const goodDogText = document.createElement('p')
const goodDogLabel = document.createElement('em')
goodDogLabel.innerText ='is Naughty?';
goodDogText.append(goodDogLabel);
section.append(goodDogText);
})

