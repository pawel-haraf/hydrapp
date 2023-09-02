for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i)
	let value = localStorage.getItem(localStorage.key(i))
	console.log(`W dniu ${key} wypiłeś ${value} szklanek`)
}
