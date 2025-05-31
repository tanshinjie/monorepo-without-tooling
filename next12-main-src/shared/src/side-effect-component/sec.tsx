import React, { useEffect, useRef } from "react";
import * as d3 from "d3"; // Importing the entire d3 library for side effects

const data = [12, 5, 6, 6, 9, 10];

export const SideEffectComponent: React.FC = () => {
	const ref = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!ref.current) return;
		const svg = d3.select(ref.current);
		svg.selectAll("*").remove(); // Clear previous

		svg.attr("width", 300).attr("height", 150);

		svg
			.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", (_, i) => i * 40)
			.attr("y", (d) => 150 - d * 10)
			.attr("width", 35)
			.attr("height", (d) => d * 10)
			.attr("fill", "teal")
			.transition()
			.duration(800)
			.attr("fill", "orange");
	}, []);

	return <svg ref={ref} />;
};
