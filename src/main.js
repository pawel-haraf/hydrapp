const add = document.querySelector('.add--js')
const remove = document.querySelector('.remove--js')
const text = document.querySelector('.countdown--js')

console.log(add)
console.log(remove)
console.log(text)
add.addEventListener('click', () => {
	let value = Number(text.textContent) + 1
	text.innerHTML = value
})
remove.addEventListener('click', () => {
	let value = Number(text.textContent)
	if (value > 0) {
		value = value - 1
		text.innerHTML = value
	} else {
		text.innerHTML = 0
	}
})
