import "./Tag.css";
export default function Tag({ text, bgColor, fgColor }) {
	return (
		<span
			className="Tag"
			style={bgColor && fgColor && { backgroundColor: bgColor, color: fgColor }}
		>
			{text}
		</span>
	);
}
