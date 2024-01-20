import { json } from 'o-children/response';
import {meta} from "o-children/request";

export function GET() {
    // You can now use the metadata, for example:
    const timestamp = meta().timestamp;
    // Logic to create a summary of the checkout...
    return json({ itemCount: 3, totalCost: 150.0, timestamp });
}
