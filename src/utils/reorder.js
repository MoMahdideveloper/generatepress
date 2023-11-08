/**
 * Reorder array items.
 *
 * @param {Array}  list      The array to reorder.
 * @param {number} fromIndex The current index.
 * @param {number} toIndex   The index to swap position.
 *
 * @return { Array } The reordered array.
 */
export default function reorder( list, fromIndex, toIndex ) {
	const result = Array.from( list );

	const [ removed ] = result.splice( fromIndex, 1 );

	result.splice( toIndex, 0, removed );

	return result;
}
