import { selectProps } from "../options/types/types";

export function Select(props: selectProps) {
	return (
		<select
			defaultValue={"default"}
			onChange={(e) => props.selectOptions(e.currentTarget.value)}
		>
			<option key="default" value="default" disabled>
				Select
			</option>
			{props.options.map((option) => {
				return (
					<option key={option} value={option}>
						{option}
					</option>
				);
			})}
		</select>
	);
}
