const addButton = document.querySelector('.add--js')
const subtractButton = document.querySelector('.subtract--js')
const counterValue = document.querySelector('.counter--js')

let glasses = 0

const setCouterValue = value => {
	counterValue.innerHTML = value
}
setCouterValue(glasses)

addButton.addEventListener('click', () => {
	glasses = glasses + 1
	setCouterValue(glasses)
})

subtractButton.addEventListener('click', () => {
	if (glasses >= 1) {
		glasses = glasses - 1
		setCouterValue(glasses)
	}
})
