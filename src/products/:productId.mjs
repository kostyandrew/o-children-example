import { params } from 'o-children/request';

export function GET() {
	const productId = params().get('productId');
	// Logic to retrieve product details...
	return { productId, name: 'Example Product' };
}
