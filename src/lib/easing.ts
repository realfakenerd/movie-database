/**
 * The function `createBezierLUT` generates a lookup table of points along a cubic Bezier curve defined
 * by four control points.
 * @param {[number, number][]} points - The `points` parameter is an array of four coordinate pairs,
 * representing the control points of a cubic Bezier curve. Each coordinate pair is an array of two
 * numbers, representing the x and y coordinates respectively.
 * @param [pointCount=100] - The `pointCount` parameter specifies the number of points to be generated
 * on the Bezier curve. It determines the granularity or smoothness of the curve. The default value is
 * 100, which means that the curve will be divided into 100 segments, and a point will be calculated
 * for each segment
 * @returns The function `createBezierLUT` returns an array of points. Each point is represented as an
 * array `[x, y]`.
 */
const createBezierLUT = (points: [number, number][], pointCount = 100) => {
	const lut = [];
	let t = 0;
	for (t; t < 1; t += 1 / pointCount) {
		const a = (1 - t) * (1 - t) * (1 - t);
		const b = (1 - t) * (1 - t) * t;
		const c = (1 - t) * t * t;
		const d = t * t * t;
		const x = a * points[0][0] + 3 * b * points[1][0] + 3 * c * points[2][0] + d * points[3][0];
		const y = a * points[0][1] + 3 * b * points[1][1] + 3 * c * points[2][1] + d * points[3][1];
		lut.push([x, y]);
	}
	return lut;
};
/**
 * The function `createEase` takes in an array of bezier curve options and returns a function that
 * calculates the y-coordinate of a point on the bezier curve given a time value.
 * @param {[number, number][][]} lutOptions - lutOptions is an array of arrays of control points for
 * creating Bezier curves. Each inner array represents a single Bezier curve and contains pairs of
 * numbers representing the x and y coordinates of the control points.
 * @returns The function `createEase` returns a function that takes a number `t` as an argument and
 * returns a number `closestY`.
 */
const createEase = (lutOptions: [number, number][][]) => {
	let _lut: ReturnType<typeof createBezierLUT> = lutOptions
		.map((args) => createBezierLUT(args))
		.flat();

	return (t: number, lut = _lut) => {
		const closestPoint = lut.find((p) => p[0] >= t);
		const closestY = closestPoint ? closestPoint[1] : 1;
		return closestY;
	};
};

/**
 * The code `export const easeEmphasized = createEase([...]);` is creating a cubic Bezier curve
function called `easeEmphasized`. */
export const easeEmphasized = createEase([
	[
		[0, 0],
		[0.05, 0],
		[0.133, 0.06],
		[0.166, 0.4]
	],
	[
		[0.166, 0.4],
		[0.208, 0.82],
		[0.25, 1],
		[1, 1]
	]
]); /* css versions:
with limited overshoot:
https://cdn.discordapp.com/attachments/1058124584286683237/1064238491904524308/w9blD3eMKQBwAAAABJRU5ErkJggg.png
cubic-bezier(0.254, 0.029, 0, 1.2) is preferred, it is the most accurate to the acceleration
cubic-bezier(0.356, 0.701, 0, 1.004) is the most accurate to the deceleration
cubic-bezier(0.291, 0.281, 0, 1.2) has no weighting
unlimited overshoot:
https://cdn.discordapp.com/attachments/1058124584286683237/1064238129306927124/H47ZvYKwT8COjeuQXsI8AE4554luCbtMqAAqAJubZ9I2452QBcREREJgab5REREREKgZEpEREQkBEqmREREREKgZEpEREQkBEqmREREREKgZEpEREQkBEqmREREREKgZEpEREQkBP8PcBLo5kfHxSYAAAAASUVORK5CYII.png
cubic-bezier(0.271, -0.011, 0, 1.449) is the most accurate to the acceleration (but has a large overshoot)
the deceleration is the same as before
cubic-bezier(0.278, 0.195, 0, 1.251) has no weighting
the m3 docs randomly mention 0.2, 0, 0, 1 but that seems off
*/
export const easeEmphasizedDecel = createEase([
	[
		[0, 0],
		[0.05, 0.7],
		[0.1, 1],
		[1, 1]
	]
]);
export const easeEmphasizedAccel = createEase([
	[
		[0, 0],
		[0.3, 0],
		[0.8, 0.15],
		[1, 1]
	]
]);
export const easeStandard = createEase([
	[
		[0, 0],
		[0.2, 0],
		[0, 1],
		[1, 1]
	]
]);
export const easeStandardDecel = createEase([
	[
		[0, 0],
		[0, 0],
		[0, 1],
		[1, 1]
	]
]);
export const easeStandardAccel = createEase([
	[
		[0, 0],
		[0.3, 0],
		[1, 1],
		[1, 1]
	]
]);
