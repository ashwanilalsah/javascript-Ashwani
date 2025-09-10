const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e)
{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  const guide = document.querySelector('#weight-guide');

  if(height ==='' || height < 0 || isNaN(height)){
    results.innerHTML = `please give  a valid height ${height}`;
    guide.innerHTML = ''
    return;
  }

  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
    guide.innerHTML = '';
    return;
  }

 

    const bmi = (weight/((height*height)/10000)).toFixed(2);

    results.innerHTML =  `<span>${bmi}</span>`

  if(bmi < 18.6){
  guide.innerHTML = `Under Weight`;
  }

  else if(bmi > 18.6 && bmi < 24.9){
    guide.innerHTML = `Normal Range`;
  }

  else{
    guide.innerHTML = `Overweight`;
  }
})