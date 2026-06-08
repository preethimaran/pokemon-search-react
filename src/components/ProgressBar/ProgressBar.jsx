export default function ProgressBar({ num = 0, max = 100 }) {
	const progress = max > 0 ? Math.min(Math.max((num / max) * 100, 0), 100) : 0;

	return (
		<div className="w-full bg-gray-200 rounded-full h-2.5">
			<div
				className="bg-violet-600 h-2.5 rounded-full transition-all duration-300"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
