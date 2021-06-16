function area1(a1) {
	a1.m2.value = a1.v2.value*0.6988
	a1.mz.value = a1.v2.value*0.0001
	a1.hc.value = a1.v2.value*0.0000698
}

function area2(a2) {
	a2.v2.value = a2.m2.value*1.4308
	a2.mz.value = a2.m2.value*0.0001431
	a2.hc.value = a2.m2.value*0.0001
}

function area3(a3) {
	a3.v2.value = a3.mz.value*10000
	a3.m2.value = a3.mz.value*6988
	a3.hc.value = a3.mz.value*0.6988
}

function area4(a4) {
	a4.v2.value = a4.hc.value*14310.25
	a4.m2.value = a4.hc.value*10000
	a4.mz.value = a4.hc.value*1.43102
}