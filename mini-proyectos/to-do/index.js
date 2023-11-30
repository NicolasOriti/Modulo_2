const form = document.querySelector('form')
const root = document.querySelector('#root')

const handleOnSubmit = (event) => {
  event.preventDefault();
  console.log(event.target[1])
  const input = event.target[0]
  root.innerHTML += `
    <div class="card">
      ${input.value}
    </div>
  `;
  event.target.reset();
}

form.addEventListener('submit', handleOnSubmit);