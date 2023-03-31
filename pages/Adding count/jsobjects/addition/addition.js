export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		var i=Number(appsmith.URL.queryParams.id);
		var re=i+10;
		return re;
	}
}