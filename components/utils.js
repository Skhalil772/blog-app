export function formatDate(dateStr) {
	const date = new Date(dateStr);
	const options = { weekday: "long", month: "long", day: "numeric" };
	const formattedDate = date.toLocaleDateString("en-US", options);
	const suffix = getOrdinalSuffix(date.getDate());
	const year = date.getFullYear();
	return `${formattedDate}${suffix} ${year}`;
}

function getOrdinalSuffix(date) {
	if (date > 3 && date < 21) return "th";
	switch (date % 10) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
}

// Example usage:
//   const formattedDate = formatDate('30-03-2023');
//   console.log(formattedDate);
// "Thursday, March 30th 2023"
