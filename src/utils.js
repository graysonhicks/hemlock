export const getButtonPadding = function(prop) {
	switch (prop) {
		case "small":
			return "4px 8px";
			break;
		case "medium":
			return "6px 12px";
			break;
		case "large":
			return "10px 20px";
			break;
		default:
			return "6px 12px";
	}
};

export const getButtonFontSize = function(prop) {
	switch (prop) {
		case "small":
			return ".85rem";
			break;
		case "medium":
			return "1.25rem";
			break;
		case "large":
			return "1.5rem";
			break;
		default:
			return "1.25rem";
	}
};
