const add = document.querySelector('.add--js')
const remove = document.querySelector('.remove--js')
const text = document.querySelector('.countdown--js')
const key = new Date().toISOString().slice(0, 10)
const day = JSON.parse(localStorage.getItem(key))

if (key === key && day !== null) {
	let value = JSON.parse(localStorage.getItem(key))
	text.innerHTML = value
} else {
	localStorage.setItem(key, 0)
	text.innerHTML = 0
}

add.addEventListener('click', () => {
	let value = Number(text.textContent) + 1
	text.innerHTML = value
	localStorage.setItem(key, value)
})

remove.addEventListener('click', () => {
	let value = Number(text.textContent)
	if (value > 0) {
		value = value - 1
		text.innerHTML = value
		localStorage.setItem(key, value)
	} else {
		text.innerHTML = 0
		localStorage.setItem(key, value)
	}
})
