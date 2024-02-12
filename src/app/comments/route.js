import { comments } from "./data";

export async function GET() {
    const url = 'https://course-api.com/react-store-products'
    
    return Response.json(comments)
}