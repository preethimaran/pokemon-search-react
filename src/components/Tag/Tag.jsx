import "./Tag.css";
import { EyeOff } from "lucide-react";

export default function Tag({ text, bgColor, fgColor, hidden = false }) {
	return (
		<div
			// className="Tag bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-size-[250%_250%,100%_100%] bg-position-[-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-position-[200%_0,0_0] hover:duration-1500"
			// style={bgColor && fgColor && { backgroundColor: bgColor, color: fgColor }}
			className="Tag relative overflow-hidden rounded-md px-3 py-1 flex flex-row
            bg-[length:250%_250%,100%_100%]
            bg-[position:-100%_0,0_0]
            bg-no-repeat
            transition-[background-position]
            duration-300
            hover:bg-[position:200%_0,0_0]
            hover:duration-[1500ms]"
			style={{
				backgroundImage:
					"linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%, transparent 100%)",
				...(bgColor && fgColor && { backgroundColor: bgColor, color: fgColor }),
			}}
		>
			{hidden && (
				<p style={{ marginRight: "5px" }}>
					<EyeOff />
				</p>
			)}
			<p>{text}</p>
		</div>
	);
}
