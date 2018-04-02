export function epochToLocal(time){
	var d = new Date(time*1000);
	return d.toString();
}