const table = document.querySelector('.table--js')
console.log(table)

for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i)
	let value = localStorage.getItem(localStorage.key(i))
	let el = document.createElement('tr')
	el.innerHTML = `<td>${i + 1}</td><td>${key}</td><td>${value}</td>`
	table.appendChild(el)
}
