export const getSpinnerBorder = function(prop) {
	if (!prop) return "5px";
	return prop * 0.15625 + "px";
};
